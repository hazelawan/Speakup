// ══════════════════════════════════════════════════
// SpeakUp v8 — 01-firebase-config.js
// Firebase Configuration & Auth Setup
// ══════════════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, set, get, onValue, update, onDisconnect, remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider, updateProfile, sendEmailVerification,
    sendPasswordResetEmail, setPersistence, browserLocalPersistence, browserSessionPersistence,
    onAuthStateChanged, signOut
  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getFirestore, doc, getDoc, setDoc, updateDoc, increment, collection, getDocs, query, where, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  // ── Firebase Config (Malik's Project) ──
  const firebaseConfig = {
    apiKey: "AIzaSyDOvvwpwfsd8sMXpTmTNZkIBdYjy_mt3zU",
    authDomain: "speakup-8fa2a.firebaseapp.com",
    databaseURL: "https://speakup-8fa2a-default-rtdb.firebaseio.com",
    projectId: "speakup-8fa2a",
    storageBucket: "speakup-8fa2a.firebasestorage.app",
    messagingSenderId: "954349823665",
    appId: "1:954349823665:web:5d510a300cbe5ba7e86490",
    measurementId: "G-BVHKJH269S"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);
  const fsdb = getFirestore(app);

  // ── Make Firebase available globally ──
  window.FB_DB = db;
  window.FB_REF = ref;
  window.FB_SET = set;
  window.FB_GET = get;
  window.FB_ON_VALUE = onValue;
  window.FB_ON_DISCONNECT = onDisconnect;
  window.FB_UPDATE = update;
  window.FB_REMOVE = remove;
  window.FIREBASE_READY = true;

  // ── Auth & Firestore globals ──
  window.FB_AUTH = auth;
  window.FB_FSDB = fsdb;
  window.FB_GoogleProvider = new GoogleAuthProvider();
  window.FB_signInWithPopup = signInWithPopup;
  window.FB_createUser = createUserWithEmailAndPassword;
  window.FB_signInEmail = signInWithEmailAndPassword;
  window.FB_updateProfile = updateProfile;
  window.FB_sendEmailVerification = sendEmailVerification;
  window.FB_sendPasswordResetEmail = sendPasswordResetEmail;
  window.FB_setPersistence = setPersistence;
  window.FB_browserLocalPersistence = browserLocalPersistence;
  window.FB_browserSessionPersistence = browserSessionPersistence;
  window.FB_signOut = signOut;
  window.FB_DOC = doc;
  window.FB_GET_DOC = getDoc;
  window.FB_SET_DOC = setDoc;
  window.FB_UPDATE_DOC = updateDoc;
  window.FB_INCREMENT = increment;
  window.FB_COLLECTION = collection;
  window.FB_GET_DOCS = getDocs;
  window.FB_QUERY = query;
  window.FB_WHERE = where;
  window.FB_DELETE_DOC = deleteDoc;

  // ── Auth state change listener ──
  // ✅ CENTRALIZED: Saari auth logic onFirebaseAuthChange mein hai
  // Yahan sirf ek call — duplicate listeners/checks bilkul nahi
  // ✅ FIX: First-fire debounce — Firebase pehle null fire karta hai phir user
  // Is wajah se refresh pe app logged-out lag raha tha aur Pro Active nahi dikhta tha
  let _authFirstFire = true;
  onAuthStateChanged(auth, (user) => {
    window.FB_CURRENT_USER = user;
    if(_authFirstFire && !user){
      // Pehli baar null aaya — ruko, shayad user aane wala ho (Firebase token refresh)
      _authFirstFire = false;
      setTimeout(function(){
        // Agar 800ms mein user nahi aaya toh logged-out samjho
        if(!window.FB_AUTH.currentUser){
          if (typeof onFirebaseAuthChange === 'function') onFirebaseAuthChange(null);
        }
        // Agar user aa gaya toh woh khud handle ho gaya
      }, 800);
      return;
    }
    _authFirstFire = false;
    if (typeof onFirebaseAuthChange === 'function') onFirebaseAuthChange(user);
  });

  // ══════════════════════════════════════════════════════════════
  // ── LAZY LOADING SYSTEM — Sirf zaroorat ke waqt data fetch ──
  // ══════════════════════════════════════════════════════════════
  //
  // STRATEGY:
  // 1. App open → /adminData/settings + /adminData/langInfo fetch (sirf metadata)
  // 2. Current lang + current day ka lesson sirf tab fetch jab zaroorat ho
  // 3. Fetched days cache mein rakhte hain (dobara fetch nahi)
  // 4. Day complete → next day prefetch
  // 5. Language switch → new lang ka current day fetch
  //
  // Cache structure: window._adminDayCache = { 'en_1': {...}, 'fr_2': {...} }
  // ══════════════════════════════════════════════════════════════

  window._adminDayCache = {}; // In-memory cache for fetched days
  window._adminSettingsLoaded = false;

  // ── Helper: Ek specific day ka data inject karo ALL_DAYS mein ──
  function _injectDayData(lang, dayNum, dayData) {
    if (!dayData || !dayData.lessonContent) return;
    if (typeof ALL_DAYS !== 'undefined') {
      if (!ALL_DAYS[lang]) ALL_DAYS[lang] = [];
      ALL_DAYS[lang][parseInt(dayNum)] = dayData.lessonContent;
    }
    // AD mein bhi update karo
    if (typeof AD !== 'undefined' && AD) {
      if (!AD.langs) AD.langs = {};
      if (!AD.langs[lang]) AD.langs[lang] = { days: {} };
      if (!AD.langs[lang].days) AD.langs[lang].days = {};
      AD.langs[lang].days[dayNum] = dayData;
    }
    // localStorage cache update karo (sirf is lang/day ke liye)
    try {
      const cached = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
      if (!cached.langs) cached.langs = {};
      if (!cached.langs[lang]) cached.langs[lang] = { days: {} };
      if (!cached.langs[lang].days) cached.langs[lang].days = {};
      cached.langs[lang].days[dayNum] = dayData;
      localStorage.setItem('speakup_admin', JSON.stringify(cached));
    } catch(e) {}
  }

  // ── STEP 1: Pehle sirf admin settings + langInfo fetch karo ──
  // (Yeh chota data hai — lock/unlock status, max hearts, etc.)
  async function _loadAdminSettings() {
    if (window._adminSettingsLoaded) return;
    try {
      const settingsRef = ref(db, 'adminData/settings');
      const snap = await get(settingsRef);
      const settings = snap.val();
      if (settings) {
        // AD mein merge karo
        if (typeof AD !== 'undefined' && AD) Object.assign(AD, { settings });
        // localStorage mein save karo
        try {
          const cached = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
          cached.settings = settings;
          localStorage.setItem('speakup_admin', JSON.stringify(cached));
        } catch(e) {}

        // ✅ THEME FIX: Admin se aaya activeTheme app par apply karo
        try {
          const adTheme = settings.activeTheme;
          if (typeof window.applyAppTheme === 'function') {
            window.applyAppTheme(adTheme && adTheme !== 'default' ? adTheme : null);
          }
          if (adTheme) localStorage.setItem('speakup_theme', adTheme);
        } catch(e) {}

        console.log('✅ Admin settings load hua (lazy)');
      }

      // langInfo bhi fetch karo (custom languages ke liye)
      const langInfoRef = ref(db, 'adminData/langInfo');
      const liSnap = await get(langInfoRef);
      const langInfo = liSnap.val();
      if (langInfo && typeof LANG_INFO !== 'undefined') {
        Object.keys(langInfo).forEach(code => {
          if (!LANG_INFO[code]) {
            LANG_INFO[code] = langInfo[code];
            if (typeof LANG_CODES !== 'undefined' && !LANG_CODES.includes(code)) LANG_CODES.push(code);
            if (typeof _injectLangCardIntoSelect === 'function') _injectLangCardIntoSelect(code, langInfo[code]);
          }
        });
        if (typeof _refreshLessonLangDropdown === 'function') _refreshLessonLangDropdown();
        // localStorage mein save karo
        try {
          const cached = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
          cached.langInfo = langInfo;
          localStorage.setItem('speakup_admin', JSON.stringify(cached));
        } catch(e) {}
      }

      // Disabled langs status bhi fetch karo
      const disabledRef = ref(db, 'adminData/disabledLangs');
      const dsSnap = await get(disabledRef);
      const disabledLangs = dsSnap.val();
      if (disabledLangs !== null) {
        try {
          const cached = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
          cached.disabledLangs = disabledLangs;
          localStorage.setItem('speakup_admin', JSON.stringify(cached));
          if (typeof AD !== 'undefined' && AD) AD.disabledLangs = disabledLangs;
        } catch(e) {}
        if (typeof rebuildLangSelectScreen === 'function') rebuildLangSelectScreen();
      }

      // ── preClass data fetch karo — openPreClass() yahan se read karta hai ──
      try {
        const activeLangs = (typeof LANG_CODES !== 'undefined') ? LANG_CODES : ['en','fr','zh','ar','ko','ja','tr','ie','es','de','ru'];
        for(const lCode of activeLangs){
          const pcRef = ref(db, 'adminData/langs/' + lCode + '/preClass');
          const pcSnap = await get(pcRef);
          const pcData = pcSnap.val();
          if(pcData){
            if(typeof AD !== 'undefined' && AD){
              if(!AD.langs) AD.langs = {};
              if(!AD.langs[lCode]) AD.langs[lCode] = {};
              AD.langs[lCode].preClass = pcData;
            }
            // localStorage cache mein bhi save karo
            try{
              const cached = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
              if(!cached.langs) cached.langs = {};
              if(!cached.langs[lCode]) cached.langs[lCode] = {};
              cached.langs[lCode].preClass = pcData;
              localStorage.setItem('speakup_admin', JSON.stringify(cached));
            } catch(e2) {}
          }
        }
        console.log('✅ PreClass data loaded from Firebase');
      } catch(e) {
        console.warn('PreClass load error:', e.message);
      }

      window._adminSettingsLoaded = true;

      // ── Maintenance mode check ──
      try {
        const mMode = settings && settings.maintenanceMode;
        const mMsg  = settings && settings.maintenanceMessage;
        _applyMaintenanceMode(mMode, mMsg);
      } catch(e) {}

    } catch(e) {
      console.warn('Admin settings load error:', e.message);
    }
  }

  // ── STEP 2: Ek specific lang + day ka data lazily fetch karo ──
  window.lazyFetchAdminDay = async function(lang, dayNum, opts = {}) {
    const cacheKey = lang + '_' + dayNum;

    // Cache mein hai? Return immediately
    if (window._adminDayCache[cacheKey]) {
      console.log(`📦 Cache se: ${lang} Day ${dayNum}`);
      return window._adminDayCache[cacheKey];
    }

    try {
      console.log(`🔄 Firebase se lazy fetch: ${lang} Day ${dayNum}...`);
      const dayRef = ref(db, `adminData/langs/${lang}/days/${dayNum}`);
      const snap = await get(dayRef);
      const dayData = snap.val();

      if (dayData) {
        // Cache mein save karo
        window._adminDayCache[cacheKey] = dayData;
        // ALL_DAYS mein inject karo
        _injectDayData(lang, dayNum, dayData);
        console.log(`✅ Lazy load hua: ${lang} Day ${dayNum}`);
        return dayData;
      } else {
        // Firebase mein nahi hai — null cache karo (dobara try nahi)
        window._adminDayCache[cacheKey] = null;
        console.log(`ℹ️ ${lang} Day ${dayNum} Firebase mein nahi — built-in use hoga`);
        return null;
      }
    } catch(e) {
      console.warn(`Lazy fetch error (${lang} Day ${dayNum}):`, e.message);
      return null;
    }
  };

  // ── STEP 3: Current lang + day fetch karo ──
  window.lazyFetchCurrentDay = async function() {
    // Profile se current lang aur day nikalo
    let lang = 'en';
    let dayNum = 1;
    try {
      // localStorage se directly paro (S global loaded nahi hoga abhi)
      const profiles = JSON.parse(localStorage.getItem('su_profiles') || '[]');
      const activePid = localStorage.getItem('su_activePid') || '';
      const activeProfile = profiles.find(p => p.id === activePid) || profiles[0];
      if (activeProfile) {
        lang = activeProfile.activeLang || 'en';
        const langData = activeProfile.langs && activeProfile.langs[lang];
        if (langData) {
          const course = langData.activeCourse || 30;
          const courseData = langData.courses && langData.courses[course];
          dayNum = (courseData && courseData.day) || 1;
        }
      }
    } catch(e) {}

    // Settings pehle load karo (agar nahi hua)
    if (!window._adminSettingsLoaded) {
      await _loadAdminSettings();
    }

    // Current day fetch karo
    await window.lazyFetchAdminDay(lang, dayNum);

    // Next day prefetch karo (background mein)
    setTimeout(() => window.lazyFetchAdminDay(lang, dayNum + 1), 2000);

    // Dashboard refresh
    if (typeof renderDash === 'function') renderDash();
  };

  // ── STEP 4: Language switch pe naya lang ka current day fetch ──
  window.lazyFetchLangDay = async function(newLang) {
    if (!newLang) return;
    let dayNum = 1;
    try {
      // S global se current day nikalo (switch ke waqt S already update hoga)
      if (typeof S !== 'undefined' && S.langs && S.langs[newLang]) {
        const langData = S.langs[newLang];
        const course = langData.activeCourse || 30;
        const courseData = langData.courses && langData.courses[course];
        dayNum = (courseData && courseData.day) || 1;
      }
    } catch(e) {}
    await window.lazyFetchAdminDay(newLang, dayNum);
    // Next day bhi prefetch
    setTimeout(() => window.lazyFetchAdminDay(newLang, dayNum + 1), 1500);
  };

  // ── STEP 5: App start pe settings fetch karo, day baad mein ──
  // Settings immediately fetch (chota data)
  _loadAdminSettings();
  // Maintenance listener (guest users ke liye bhi)
  setTimeout(()=>{ if(typeof initMaintenanceListener==='function') initMaintenanceListener(); }, 2000);
  // Current day lazy fetch — thoda wait karo taake profile load ho jaye
  setTimeout(() => {
    if (typeof window.lazyFetchCurrentDay === 'function') window.lazyFetchCurrentDay();
  }, 1500);

  // ── Admin panel ke liye full data fetch (sirf admin ko) ──
  // Yeh function admin panel open karne pe call hoga
  window.adminFetchAllData = async function() {
    try {
      console.log('🔧 Admin: Pura adminData fetch ho raha hai...');
      const adminRef = ref(db, 'adminData');
      const snap = await get(adminRef);
      const data = snap.val();
      if (data) {
        localStorage.setItem('speakup_admin', JSON.stringify(data));
        if (typeof AD !== 'undefined' && AD) Object.assign(AD, data);
        // Saare days cache mein daal do
        if (data.langs) {
          Object.keys(data.langs).forEach(lang => {
            const langDays = data.langs[lang] && data.langs[lang].days;
            if (!langDays) return;
            if (!ALL_DAYS[lang]) ALL_DAYS[lang] = [];
            Object.keys(langDays).forEach(dayNum => {
              const d = langDays[dayNum];
              if (d && d.lessonContent) {
                ALL_DAYS[lang][parseInt(dayNum)] = d.lessonContent;
                window._adminDayCache[lang + '_' + dayNum] = d;
              }
            });
          });
        }
        if (typeof loadDaysList === 'function') loadDaysList();
        if (typeof renderDashboard === 'function') renderDashboard();
        if (typeof renderDash === 'function') renderDash();
        if (data.langs && typeof LANG_INFO !== 'undefined') {
          Object.keys(data.langs).forEach(code => {
            if (!LANG_INFO[code] && data.langInfo && data.langInfo[code]) {
              LANG_INFO[code] = data.langInfo[code];
              if (typeof LANG_CODES !== 'undefined' && !LANG_CODES.includes(code)) LANG_CODES.push(code);
              if (typeof _injectLangCardIntoSelect === 'function') _injectLangCardIntoSelect(code, data.langInfo[code]);
            }
          });
          if (typeof _refreshLessonLangDropdown === 'function') _refreshLessonLangDropdown();
        }
        console.log('✅ Admin: Pura data load hua!');
      }
    } catch(e) {
      console.error('Admin full fetch error:', e);
    }
  };

  // ── Also load user profiles from Firebase ──
  const usersRef = ref(db, 'users');
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      // Users are stored per-user, merge with local
      console.log('👥 Firebase users sync hua!');
    }
  });

  console.log('🔥 Firebase connected! Database:', firebaseConfig.databaseURL);
  // Update cloud bar when ready
  setTimeout(()=>{ if(typeof updateCloudBar==='function') updateCloudBar('connected'); }, 500);