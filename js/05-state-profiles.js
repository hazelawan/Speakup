// ══════════════════════════════════════════════════
// SpeakUp v8 — 05-state-profiles.js
// Multi-Profile State System — PROFILES, S, saveAll, loadAll
// ══════════════════════════════════════════════════

// ============================================================
// MULTI-PROFILE STATE SYSTEM
// ============================================================
const AVATARS = ['😊','🧑','👦','👧','👨','👩','🧒','👴','👵','🦊','🐯','🦁','🐼','🐨','🦄'];

// ── Custom Confirm Dialog ──
let _cfmCallback = null;
function showConfirm(icon, title, msg, okLabel, okColor, okShadow, cb){
  _cfmCallback = cb;
  document.getElementById('cfmIcon').textContent = icon;
  document.getElementById('cfmTitle').textContent = title;
  document.getElementById('cfmMsg').textContent = msg;
  const btn = document.getElementById('cfmOkBtn');
  btn.textContent = okLabel;
  btn.style.background = okColor;
  btn.style.color = '#fff';
  btn.style.boxShadow = '0 5px 0 '+okShadow;
  const d = document.getElementById('customConfirm');
  d.style.display = 'flex';
}
function confirmOk(){
  document.getElementById('customConfirm').style.display='none';
  if(_cfmCallback) _cfmCallback();
  _cfmCallback = null;
}
function confirmCancel(){
  document.getElementById('customConfirm').style.display='none';
  _cfmCallback = null;
}

// All profiles stored in localStorage
// Structure: { profiles: [...], activeProfileId: 'id' }
let PROFILES = [];
let ACTIVE_PID = null;
let toastTimer;

// Language codes supported
const LANG_CODES = ['en','fr','zh','ar','ko','ja','tr','ie','es','de','ru','chess'];
const LANG_INFO = {
  en: {name:'English', flag:'🇬🇧', color:'#58CC02', colorDark:'#46A300'},
  fr: {name:'French',  flag:'🇫🇷', color:'#4A90E2', colorDark:'#2A6BC2'},
  zh: {name:'Chinese', flag:'🇨🇳', color:'#E74C3C', colorDark:'#C0392B'},
  ar: {name:'Arabic',  flag:'🇸🇦', color:'#9B59B6', colorDark:'#7D3C98'},
  ko: {name:'Korean',  flag:'🇰🇷', color:'#FF6B9D', colorDark:'#CC4477'},
  ja: {name:'Japanese',flag:'🇯🇵', color:'#FF8C42', colorDark:'#CC6622'},
  tr: {name:'Turkish',  flag:'🇹🇷', color:'#E84142', colorDark:'#B52020'},
  ie: {name:'Irish',    flag:'🇮🇪', color:'#169B62', colorDark:'#0D6B43'},
  es: {name:'Spanish',  flag:'🇪🇸', color:'#F5A623', colorDark:'#C07800'},
  de: {name:'German',   flag:'🇩🇪', color:'#5B9BD5', colorDark:'#2E6FA8'},
  ru: {name:'Russian',  flag:'🇷🇺', color:'#E53935', colorDark:'#B71C1C'},
  chess: {name:'Chess ♟️', flag:'♟️', color:'#2ECC71', colorDark:'#1A9E55'},
};

function emptyLangCourses(){
  return {
    7:{day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false},
    30:{day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false},
    60:{day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false},
    90:{day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false}
  };
}

// Current active profile's state (S = shortcut)
let S = {
  name:'',
  avatar:'😊',
  activeLang:'en',    // NEW: active language
  activeCourse:0,
  // NEW: per-language courses — each language has 30/60/90 data separately
  langs:{
    en:{activeCourse:0, courses:emptyLangCourses()},
    fr:{activeCourse:0, courses:emptyLangCourses()},
    zh:{activeCourse:0, courses:emptyLangCourses()},
    ar:{activeCourse:0, courses:emptyLangCourses()},
    ko:{activeCourse:0, courses:emptyLangCourses()},
    ja:{activeCourse:0, courses:emptyLangCourses()},
    es:{activeCourse:0, courses:emptyLangCourses()},
    de:{activeCourse:0, courses:emptyLangCourses()},
    ru:{activeCourse:0, courses:emptyLangCourses()},
  }
};

function newProfileData(name, avatar){
  return {
    id: 'p_'+Date.now()+'_'+Math.random().toString(36).slice(2,6),
    name, avatar,
    activeLang:'en',
    activeCourse:0,
    langs:{
      en:{activeCourse:0, courses:emptyLangCourses()},
      fr:{activeCourse:0, courses:emptyLangCourses()},
      zh:{activeCourse:0, courses:emptyLangCourses()},
      ar:{activeCourse:0, courses:emptyLangCourses()},
      ko:{activeCourse:0, courses:emptyLangCourses()},
      ja:{activeCourse:0, courses:emptyLangCourses()},
      ru:{activeCourse:0, courses:emptyLangCourses()},
    }
  };
}

// ═══════════════════════════════════════════════════════════════
// ██  FIREBASE SYNC LAYER  ██
// Save: Firebase (primary) + localStorage (cache)
// Load: Firebase se fetch, localStorage fallback (offline)
// Guest users: sirf localStorage
// ═══════════════════════════════════════════════════════════════

// Profile structure normalize karo — har profile mein sab langs/courses ho
function normalizeProfile(p){
  if(!p.langs) p.langs = {};
  LANG_CODES.forEach(lang=>{
    if(!p.langs[lang]) p.langs[lang]={activeCourse:0,courses:emptyLangCourses()};
    [7,30,60,90].forEach(c=>{
      if(!p.langs[lang].courses[c]) p.langs[lang].courses[c]={day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false};
    });
  });
  // Migrate old activeCourse / courses (pre-lang) to English
  if(p.courses && !p.langs.en.courses[30].started){
    p.langs.en = {activeCourse:p.activeCourse||0, courses:p.courses};
    delete p.courses;
  }
  if(!p.activeLang) p.activeLang='en';
  // ✅ SYNC FIX: agar top-level activeCourse > 0 but langs[activeLang].activeCourse = 0, sync karo
  var _al = p.activeLang||'en';
  if(p.activeCourse > 0 && p.langs[_al] && !p.langs[_al].activeCourse){
    p.langs[_al].activeCourse = p.activeCourse;
  }
  if(!p.avatar) p.avatar='😊';
  return p;
}

// Firebase path helper — profile ko Firestore-friendly flat structure mein convert
// 🔧 FIX: Ab har profile apne profile.id ke under save hoti hai (multi-profile support)
// Path: users/{uid}/profiles/{profileId}/...
function profileToFirebase(profile){
  const uid = window.FB_AUTH?.currentUser?.uid;
  if(!uid || !window.FIREBASE_READY || !window.FB_DB) return;
  const pid = profile.id || uid; // profile ka apna unique id
  try{
    // /users/[uid]/profiles/[pid]/info — basic info
    const profileRef = window.FB_REF(window.FB_DB, 'users/'+uid+'/profiles/'+pid+'/info');
    window.FB_SET(profileRef, {
      name: profile.name||'',
      avatar: profile.avatar||'😊',
      activeLang: profile.activeLang||'en',
      activeCourse: profile.activeCourse||0,
      id: pid,
      googlePhoto: profile.googlePhoto||'',
      // Streak + XP at top level for admin panel quick access
      streak: (()=>{ try{ const l=profile.langs&&profile.langs[profile.activeLang||'en']; const ac=l&&l.activeCourse; return (ac&&l.courses&&l.courses[ac]&&l.courses[ac].streak)||0; }catch(e){return 0;} })(),
      xp:     (()=>{ try{ let t=0; if(profile.langs) Object.values(profile.langs).forEach(ld=>{ if(ld.courses) Object.values(ld.courses).forEach(c=>{ t+=(c.xp||0); }); }); return t; }catch(e){return 0;} })(),
    }).catch(e=>console.warn('FB profile save error:',e));

    // /users/[uid]/profiles/[pid]/langs/[lang]/courses/[courseNum]/...
    if(profile.langs){
      Object.entries(profile.langs).forEach(([lang, langData])=>{
        if(!langData || !langData.courses) return;
        Object.entries(langData.courses).forEach(([courseNum, courseData])=>{
          if(!courseData) return;
          const courseRef = window.FB_REF(window.FB_DB,
            'users/'+uid+'/profiles/'+pid+'/langs/'+lang+'/courses/'+courseNum);
          window.FB_SET(courseRef, {
            day: courseData.day||1,
            streak: courseData.streak||0,
            xp: courseData.xp||0,
            done: courseData.done||[],
            wordsLearned: courseData.wordsLearned||0,
            started: courseData.started||false
          }).catch(e=>console.warn('FB course save error:',e));
        });
        // activeCourse per lang
        const langRef = window.FB_REF(window.FB_DB, 'users/'+uid+'/profiles/'+pid+'/langs/'+lang+'/activeCourse');
        window.FB_SET(langRef, langData.activeCourse||0).catch(e=>{});
      });
    }

    // 🔧 Active profile id bhi top-level pe store karo (quick lookup ke liye)
    window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'), pid).catch(()=>{});

    // 🔧 Purana /profile path bhi update karo (backward compat for admin panel)
    const legacyRef = window.FB_REF(window.FB_DB, 'users/'+uid+'/profile');
    window.FB_SET(legacyRef, {
      name: profile.name||'',
      avatar: profile.avatar||'😊',
      activeLang: profile.activeLang||'en',
      activeCourse: profile.activeCourse||0,
      activeProfileId: pid,
    }).catch(()=>{});

  }catch(e){ console.warn('profileToFirebase error:',e); }
}

// 🔧 NEW: Saari profiles ek saath Firebase mein save karo
function saveAllProfilesToFirebase(){
  const uid = window.FB_AUTH?.currentUser?.uid;
  if(!uid || IS_GUEST || !window.FIREBASE_READY || !window.FB_DB) return;
  PROFILES.forEach(p => profileToFirebase(p));
}

// Firebase se user data fetch karke profile banao
// 🔧 FIX: New path users/{uid}/profiles/{pid}/... se load karo (multi-profile support)
// Legacy path users/{uid}/profile/... bhi fallback ke taur par check hota hai
async function profileFromFirebase(uid, pid){
  if(!uid || !window.FIREBASE_READY || !window.FB_DB) return null;
  const profileId = pid || uid; // default: uid ko profileId mano
  try{
    // ── New path try karo pehle ──
    const newSnap = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/profiles/'+profileId));
    if(newSnap.exists()){
      const fbData = newSnap.val();
      const info = fbData.info || {};
      const profile = newProfileData(
        info.name || window.FB_AUTH?.currentUser?.displayName || 'Player',
        info.avatar || '😊'
      );
      profile.id = profileId;
      profile.activeLang = info.activeLang || 'en';
      profile.activeCourse = info.activeCourse || 0;
      if(info.googlePhoto) profile.googlePhoto = info.googlePhoto;
      if(fbData.langs){
        Object.entries(fbData.langs).forEach(([lang, langData])=>{
          if(!profile.langs[lang]) profile.langs[lang] = {activeCourse:0, courses:emptyLangCourses()};
          if(langData.activeCourse !== undefined) profile.langs[lang].activeCourse = langData.activeCourse;
          // ✅ FIX: If top-level activeCourse is 0 but lang has it set, sync it
          if(!profile.activeCourse && langData.activeCourse && lang === profile.activeLang){
            profile.activeCourse = langData.activeCourse;
          }
          if(langData.courses){
            Object.entries(langData.courses).forEach(([courseNum, courseData])=>{
              profile.langs[lang].courses[courseNum] = {
                day: courseData.day||1,
                streak: courseData.streak||0,
                xp: courseData.xp||0,
                done: courseData.done||[],
                wordsLearned: courseData.wordsLearned||0,
                started: courseData.started||false
              };
            });
          }
        });
      }
      return normalizeProfile(profile);
    }

    // ── Legacy path fallback (purane users ke liye) ──
    const legacySnap = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid));
    if(!legacySnap.exists()) return null;
    const fbData = legacySnap.val();
    const profile = newProfileData(
      fbData.profile?.name || window.FB_AUTH?.currentUser?.displayName || 'Player',
      fbData.profile?.avatar || '😊'
    );
    profile.id = uid;
    profile.activeLang = fbData.profile?.activeLang || 'en';
    profile.activeCourse = fbData.profile?.activeCourse || 0;
    if(fbData.profile?.googlePhoto) profile.googlePhoto = fbData.profile.googlePhoto;
    if(fbData.langs){
      Object.entries(fbData.langs).forEach(([lang, langData])=>{
        if(!profile.langs[lang]) profile.langs[lang] = {activeCourse:0, courses:emptyLangCourses()};
        if(langData.activeCourse !== undefined) profile.langs[lang].activeCourse = langData.activeCourse;
        if(langData.courses){
          Object.entries(langData.courses).forEach(([courseNum, courseData])=>{
            profile.langs[lang].courses[courseNum] = {
              day: courseData.day||1,
              streak: courseData.streak||0,
              xp: courseData.xp||0,
              done: courseData.done||[],
              wordsLearned: courseData.wordsLearned||0,
              started: courseData.started||false
            };
          });
        }
      });
    }
    // ✅ Legacy data ko new path pe migrate karo (ek baar)
    const migrated = normalizeProfile(profile);
    profileToFirebase(migrated); // new path pe save
    console.log('✅ Legacy profile new path pe migrate ho gayi:', profileId);
    return migrated;
  }catch(e){
    console.warn('profileFromFirebase error:',e);
    return null;
  }
}

// Purana localStorage data Firebase mein migrate karo (existing users ke liye)
async function migrateLocalStorageToFirebase(){
  const uid = window.FB_AUTH?.currentUser?.uid;
  if(!uid || !window.FIREBASE_READY || !window.FB_DB) return;

  // Pehle check karo Firebase mein pehle se data hai ya nahi
  try{
    const snap = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/profile'));
    if(snap.exists()){
      console.log('✅ Firebase data pehle se hai — migration skip');
      return; // Firebase mein data hai, migrate karne ki zarurat nahi
    }
  }catch(e){ console.warn('Migration check error:',e); return; }

  // localStorage mein purana data dhundho
  const raw = localStorage.getItem('su_profiles');
  if(!raw) return;

  try{
    const localProfiles = JSON.parse(raw);
    // Users record se match karo — is uid ka profile kaunsa hai
    const users = loadUsers();
    const userRecord = users.find(u=>u.uid===uid);
    if(!userRecord?.profileId) return;

    const localProfile = localProfiles.find(p=>p.id===userRecord.profileId);
    if(!localProfile) return;

    console.log('🔄 Purana localStorage data Firebase mein migrate kar raha hai...');
    normalizeProfile(localProfile);
    profileToFirebase(localProfile);
    // Firebase profile id ko uid se match karo
    const fbProfileRef = window.FB_REF(window.FB_DB, 'users/'+uid+'/profile/localProfileId');
    window.FB_SET(fbProfileRef, localProfile.id).catch(()=>{});
    console.log('✅ Migration complete! LocalStorage data Firebase mein save ho gaya.');
    showToast('☁️ Tera purana progress cloud mein save ho gaya!','var(--g)');
  }catch(e){ console.warn('Migration error:',e); }
}

// Pending offline saves ke liye queue
let _fbSavePending = false;

function saveAll(){
  // ── Step 1: LocalStorage mein cache (instant, offline bhi kaam karta hai) ──
  localStorage.setItem('su_profiles', JSON.stringify(PROFILES));
  localStorage.setItem('su_activePid', ACTIVE_PID||'');

  // ── Step 2: Guest users ke liye sirf localStorage ──
  if(IS_GUEST || !window.FB_AUTH?.currentUser) return;

  const uid = window.FB_AUTH.currentUser.uid;

  // ── Step 3: 🔧 FIX — SAARI profiles Firebase mein save karo (sirf active nahi) ──
  if(window.FIREBASE_READY && window.FB_DB){
    // Online: Active profile foran save + baaki bhi save
    PROFILES.forEach(p => profileToFirebase(p));
    // Active profile id bhi store karo
    window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'), ACTIVE_PID||uid).catch(()=>{});
    _fbSavePending = false;
  } else {
    // Offline: pending flag lagao — online aane par sync hoga
    _fbSavePending = true;
    console.log('📴 Offline — save queued, online hone par sync hoga');
  }
}

// Online hone par pending saves Firebase mein push karo
window.addEventListener('online', ()=>{
  if(_fbSavePending){
    console.log('🌐 Online ho gaye — pending data Firebase mein sync kar raha hai...');
    saveAll(); // retry
  }
});

// Firebase se user data load karo aur PROFILES update karo
// 🔧 FIX: Ab SAARI profiles load hoti hain (sirf active nahi)
async function loadFromFirebase(){
  const uid = window.FB_AUTH?.currentUser?.uid;
  if(!uid || IS_GUEST) return false;

  try{
    // ── Pehle new multi-profile path check karo ──
    const allProfilesSnap = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/profiles'));

    if(allProfilesSnap.exists()){
      const allProfilesData = allProfilesSnap.val();
      const profileIds = Object.keys(allProfilesData);

      if(profileIds.length > 0){
        // Saari profiles load karo
        const loadedProfiles = [];
        for(const pid of profileIds){
          const p = await profileFromFirebase(uid, pid);
          if(p) loadedProfiles.push(p);
        }

        if(loadedProfiles.length > 0){
          // ✅ CRITICAL FIX: Duplicate profiles remove karo (same naam wali)
          // Yeh tab hota hai jab uid-based aur p_timestamp-based dono Firebase mein stored hain
          const seen = new Map(); // name.toLowerCase() => best profile
          const duplicatePids = []; // Firebase se delete karne wale IDs
          for(const p of loadedProfiles){
            const key = (p.name||'').trim().toLowerCase();
            if(!key) continue;
            if(!seen.has(key)){
              seen.set(key, p);
            } else {
              // Duplicate mila — newer/better wala rakho (p_timestamp_ wala prefer karo)
              const existing = seen.get(key);
              // uid-based ID purana format hai — usse replace karo newer se
              if(existing.id === uid && p.id !== uid){
                duplicatePids.push(existing.id);
                seen.set(key, p);
              } else {
                duplicatePids.push(p.id);
              }
            }
          }
          // Unnamed profiles bhi check karo
          for(const p of loadedProfiles){
            const key = (p.name||'').trim().toLowerCase();
            if(!key && !seen.has('__unnamed__'+p.id)){
              seen.set('__unnamed__'+p.id, p);
            }
          }

          PROFILES = Array.from(seen.values());

          // ✅ MAX 3 PROFILES ENFORCE: 3 se zyada hain toh extra delete karo
          if(PROFILES.length > 3){
            const extra = PROFILES.splice(3); // 3 ke baad wali sab hata do
            extra.forEach(function(ep){
              duplicatePids.push(ep.id);
            });
            console.log('🧹 Max 3 profiles enforce — extra remove:', extra.map(e=>e.name));
          }

          // Firebase se duplicate profiles quietly delete karo (background)
          if(duplicatePids.length > 0){
            console.log('🧹 Duplicate profiles Firebase se clean kar raha hai:', duplicatePids);
            duplicatePids.forEach(dupId => {
              try{
                window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/profiles/'+dupId)).catch(()=>{});
              }catch(e){}
            });
          }

          // Active profile decide karo
          const activeIdSnap = await window.FB_GET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'));
          const savedActiveId = activeIdSnap.exists() ? activeIdSnap.val() : null;
          const activeP = (savedActiveId && PROFILES.find(p=>p.id===savedActiveId))
                          || PROFILES.find(p=>p.id!==uid) // prefer newer format
                          || PROFILES[0];
          ACTIVE_PID = activeP.id;
          Object.assign(S, activeP);

          localStorage.setItem('su_profiles', JSON.stringify(PROFILES));
          localStorage.setItem('su_activePid', ACTIVE_PID);
          console.log('☁️ Firebase se '+PROFILES.length+' profile(s) load ho gayin!');

          // preClass data load karo (active profile ke liye)
          try{
            var pcSnap = await window.FB_GET(window.FB_REF(window.FB_DB,'users/'+uid+'/preClass'));
            if(pcSnap.exists()){
              var pcData = pcSnap.val();
              var _pid2 = ACTIVE_PID || 'default';
              Object.keys(pcData).forEach(function(l){ if(pcData[l]==='done') localStorage.setItem('su_preclass_'+_pid2+'_'+l,'done'); });
            }
          }catch(e){}

          return true; // ✅ saari profiles load ho gayin
        }
      }
    }

    // ── Legacy fallback: purana single-profile path ──
    // ✅ FIX: Sirf tab use karo jab PROFILES bilkul empty hain
    // Pehle PROFILES mein kuch tha toh Firebase ne correctly load kiya — legacy overwrite mat karo
    if(PROFILES.length > 0){
      // Multi-profile already loaded from localStorage — Firebase path nahi mila
      // Iska matlab user ne manually profiles banaye hain — unhe preserve karo
      console.log('☁️ Legacy fallback skipped — localStorage profiles preserved:', PROFILES.length);
      return false;
    }
    const fbProfile = await profileFromFirebase(uid, uid);
    if(!fbProfile) return false;
    fbProfile.id = uid;
    const existingIdx = PROFILES.findIndex(p=>p.id===uid || p.id===ACTIVE_PID);
    if(existingIdx >= 0){ PROFILES[existingIdx] = fbProfile; }
    else { if(!PROFILES.find(p=>p.id===uid)) PROFILES.push(fbProfile); }
    ACTIVE_PID = uid;
    Object.assign(S, fbProfile);
    localStorage.setItem('su_profiles', JSON.stringify(PROFILES));
    localStorage.setItem('su_activePid', uid);
    console.log('☁️ Firebase se legacy profile load ho gayi (1 profile)');
    return true;

  }catch(e){
    console.warn('loadFromFirebase error:',e);
    return false;
  }
}

function loadAll(){
  const uid = window.FB_AUTH?.currentUser?.uid;

  // ── Step 1: LocalStorage se instant load (cache / offline fallback) ──
  const raw = localStorage.getItem('su_profiles');
  if(raw){
    PROFILES = JSON.parse(raw);
    PROFILES.forEach(p=>normalizeProfile(p));
    ACTIVE_PID = localStorage.getItem('su_activePid')||null;

    // ✅ CRITICAL FIX: localStorage mein bhi duplicate same-naam profiles remove karo
    const seenNames = new Map();
    const cleanProfiles = [];
    for(const p of PROFILES){
      const key = (p.name||'').trim().toLowerCase();
      if(!key){ cleanProfiles.push(p); continue; }
      if(!seenNames.has(key)){
        seenNames.set(key, p);
        cleanProfiles.push(p);
      } else {
        // Duplicate: pehle wala rakho, is ko chodo
        console.log('🧹 localStorage duplicate profile removed:', p.name, p.id);
        // Agar removed wali active thi toh pehle wali ko active banao
        if(ACTIVE_PID === p.id) ACTIVE_PID = seenNames.get(key).id;
      }
    }
    // ✅ MAX 3 ENFORCE in localStorage
    if(cleanProfiles.length > 3) cleanProfiles.splice(3);
    if(cleanProfiles.length !== PROFILES.length){
      PROFILES = cleanProfiles;
      localStorage.setItem('su_profiles', JSON.stringify(PROFILES));
      localStorage.setItem('su_activePid', ACTIVE_PID||'');
    }

    // Agar active profile ka ID nahi mila toh pehli wali select karo
    if(ACTIVE_PID && !PROFILES.find(p=>p.id===ACTIVE_PID)){
      ACTIVE_PID = PROFILES[0]?.id || null;
    }

    // Sirf tab jab ek hi profile ho aur uska koi ID na ho (old format)
    if(uid && PROFILES.length === 1 && !PROFILES[0].id){
      PROFILES[0].id = uid;
      ACTIVE_PID = uid;
    }
  } else {
    // Migrate old single-profile data (su5 key)
    const old = localStorage.getItem('su5');
    if(old){
      const op = JSON.parse(old);
      const migrated = newProfileData(op.name||'Player 1','😊');
      migrated.activeLang='en';
      if(op.courses) migrated.langs.en = {activeCourse:op.activeCourse||0, courses:op.courses};
      PROFILES = [migrated];
      ACTIVE_PID = migrated.id;
      saveAll();
    }
  }

  // ── Step 2: Firebase se fresh data load (background, non-blocking) ──
  // Guest users ke liye skip
  if(!IS_GUEST && uid && window.FIREBASE_READY){
    loadFromFirebase().then(loaded=>{
      if(loaded){
        // UI refresh karo agar dashboard open hai
        if(typeof renderDash==='function') try{renderDash();}catch(e){}
        if(typeof renderProfileSelect==='function') try{renderProfileSelect();}catch(e){}
      }
    });
  }
}

function setActiveProfile(pid){
  ACTIVE_PID = pid;
  const p = PROFILES.find(x=>x.id===pid);
  if(p) Object.assign(S, p);
  saveAll();
}

function save(){
  // ✅ FIX: Ensure langs[activeLang].activeCourse syncs with S.activeCourse
  try{
    const _lang = S.activeLang||'en';
    if(S.langs && S.activeCourse > 0){
      if(!S.langs[_lang]) S.langs[_lang] = {activeCourse:0, courses:emptyLangCourses()};
      if(!S.langs[_lang].activeCourse) S.langs[_lang].activeCourse = S.activeCourse;
    }
  }catch(e){}
  // Save current S back into the active profile
  const idx = PROFILES.findIndex(x=>x.id===ACTIVE_PID);
  if(idx>=0){
    PROFILES[idx] = Object.assign({}, PROFILES[idx], {
      name:S.name, avatar:S.avatar||'😊',
      activeLang:S.activeLang,
      activeCourse:S.activeCourse,
      langs:S.langs
    });
  }
  saveAll();
}

// Shortcut to active lang data
function CL(){return S.langs[S.activeLang]||S.langs['en'];}
// Shortcut to active course data (within active lang)
function CS(){const l=CL();return (l.courses[l.activeCourse])||l.courses[30]||l.courses[60]||l.courses[90];}
// Shortcut to activeCourse number
function AC(){return CL().activeCourse || S.activeCourse || 30;}

// ── PROFILE SELECT SCREEN ──
let selectedAvatar = '😊';

function renderProfileSelect(){
  const grid = document.getElementById('profileGrid');
  const addBtn = document.getElementById('addProfileBtn');
  if(!grid) return;

  grid.innerHTML = PROFILES.map(p=>{
    const lang = p.activeLang||'en';
    const ld = p.langs&&p.langs[lang] ? p.langs[lang] : {activeCourse:0,courses:{}};
    const ac = ld.activeCourse||0;
    const cs = ac ? (ld.courses[ac]||{streak:0,done:[],xp:0}) : {streak:0,done:[],xp:0};
    const doneCount = ac ? cs.done.length : 0;
    const isActive = p.id === ACTIVE_PID;
    const li = LANG_INFO[lang]||LANG_INFO['en'];
    const canDelete = PROFILES.length > 1;
    return `<div class="profile-card ${isActive?'selected':''}" onclick="selectProfile('${p.id}')">
      ${cs.streak>0?`<div class="pc-streak">🔥${cs.streak}</div>`:''}
      ${canDelete?`<button class="pc-del-btn" onclick="deleteProfile('${p.id}',event)" title="Profile delete karo">✕</button>`:''}
      <div class="pc-avatar" style="background:linear-gradient(135deg,var(--card2),var(--card));font-size:28px;">${p.avatar||'😊'}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-info">${li.flag} ${li.name}</div>
      <div class="pc-info">${ac?doneCount+'/'+ac+' din':'Abhi shuru nahi'}</div>
    </div>`;
  }).join('');

  // Max 3 profiles
  if(addBtn) addBtn.style.display = PROFILES.length>=3?'none':'flex';
}

function selectProfile(pid){
  setActiveProfile(pid);
  const p = PROFILES.find(x=>x.id===pid);
  if(!p) return;
  document.querySelectorAll('.profile-card').forEach(c=>c.classList.remove('selected'));
  event.currentTarget?.classList.add('selected');
  setTimeout(()=>{
    const lang = p.activeLang||'en';
    const ld = p.langs&&p.langs[lang] ? p.langs[lang] : {activeCourse:0};
    if(ld.activeCourse){
      showScreen('dashboard');
      renderDash();
    } else {
      updateLangSelectIndicators();
      showScreen('langSelect');
    }
  }, 200);
}

function goProfileSelect(){
  if(IS_GUEST || !getLoggedInUser()){ showScreen('guestProfileScreen'); return; }
  renderProfileSelect();
  showScreen('profileSelect');
}

// ── LANGUAGE SELECTION ──
function updateLangSelectIndicators(){
  // ── Pehle disabled langs hide karo ──
  // Safe check — AD aur AD.langs dono exist hon
  if(typeof AD !== 'undefined' && AD && AD.langs){
    Object.keys(LANG_INFO).forEach(code => {
      const enabled = AD.langs[code]?.enabled !== false;
      document.querySelectorAll('.lang-card').forEach(card => {
        const oc = card.getAttribute('onclick') || '';
        if(oc.includes(`'${code}'`) || oc.includes(`"${code}"`)){
          card.style.display = enabled ? '' : 'none';
        }
      });
    });
  }

  const lang = S.activeLang||'en';
  LANG_CODES.forEach(lc=>{
    const el=document.getElementById('langSel_'+lc);
    if(el) el.textContent = (lc===lang) ? '✅ Active — '+LANG_INFO[lc].name : '';
  });
  // Stagger animate lang cards
  setTimeout(()=>{
    document.querySelectorAll('.lang-card').forEach((card,i)=>{
      card.style.opacity='0';
      card.style.transform='translateX(-30px) scale(.95)';
      card.style.transition='';
      setTimeout(()=>{
        card.style.transition='opacity .38s ease,transform .42s cubic-bezier(.34,1.56,.64,1)';
        card.style.opacity='1';
        card.style.transform='translateX(0) scale(1)';
        setTimeout(()=>{card.style.transition='';},480);
      },i*65+60);
    });
  },100);
}

function pickLanguage(lang){
  // ── COMING SOON LANGUAGES — lessons abhi ready nahi ──
  const COMING_SOON_LANGS = []; // sab languages ab active hain
  if(COMING_SOON_LANGS.includes(lang)){
    const li = LANG_INFO[lang]||{flag:'🌐',name:lang};
    showToast(`${li.flag} ${li.name} — Jald Aayega! 🔜\nLesson tayar ho rahe hain, wait karo!`, '#FF9A3C');
    // Visual bounce on card
    const card = document.querySelector('.lang-card.lang-'+lang);
    if(card){
      card.style.transition='transform .15s';
      card.style.transform='scale(0.96)';
      setTimeout(()=>{ card.style.transform='scale(1)'; setTimeout(()=>card.style.transition='',200); },150);
    }
    return;
  }

  // Ensure AD is loaded
  // Check if lang is disabled
  if(typeof AD !== 'undefined' && AD && AD.langs && AD.langs[lang] && AD.langs[lang].enabled === false){
    showToast('⚠️ Yeh language abhi available nahi', '#FFD166');
    return;
  }
  S.activeLang = lang;
  if(!S.langs) S.langs={};
  // All known langs initialize karo (LANG_CODES + any custom langs)
  const allLangs = [...LANG_CODES];
  if(typeof AD !== 'undefined' && AD.langs){
    Object.keys(AD.langs).forEach(lc=>{ if(!allLangs.includes(lc)) allLangs.push(lc); });
  }
  allLangs.forEach(lc=>{ if(!S.langs[lc]) S.langs[lc]={activeCourse:0,courses:emptyLangCourses()}; });
  S.activeCourse = S.langs[lang].activeCourse||0;
  save();
  const li = LANG_INFO[lang]||{flag:'🌐',name:lang};
  showToast(li.flag+" "+li.name+" select ho gayi!","var(--g)");
  // Agar is language ka course pehle se choose hua hai — seedha dashboard
  if(S.langs[lang].activeCourse){
    setTimeout(()=>{ showScreen("dashboard"); renderDash(); }, 400);
  } else {
    // Pehli baar — course select karo
    setTimeout(()=> goToCourseSelect(), 400);
  }
}

function goToCourseSelect(){
  const lang = S.activeLang||'en';
  const li = LANG_INFO[lang]||LANG_INFO['en'];
  const ct = document.getElementById('courseSelectTitle');
  if(ct) ct.textContent = li.flag+' '+li.name+' — Course Chuno';
  const cs2 = document.getElementById('courseSelectSub');
  if(cs2) cs2.textContent = S.name+', apni speed ke hisaab se '+li.name+' course select karo';
  // For chess: show only 7-day card; hide 30/60/90
  const isChess = lang==='chess';
  // For prog langs: show only 60-level prog card
  const isProgLang = typeof PROG_LANGS !== 'undefined' && PROG_LANGS.some(p => p.code === lang);
  const c7 = document.getElementById('courseCard7');
  const c30 = document.getElementById('courseCard30');
  const c60 = document.getElementById('courseCard60');
  const c90 = document.getElementById('courseCard90');
  const cp60 = document.getElementById('courseCardProg60');
  if(c7) c7.style.display = isChess ? '' : 'none';
  if(c30) c30.style.display = (!isChess && !isProgLang) ? '' : 'none';
  if(c60) c60.style.display = (!isChess && !isProgLang) ? '' : 'none';
  if(c90) c90.style.display = (!isChess && !isProgLang) ? '' : 'none';
  if(cp60) cp60.style.display = isProgLang ? '' : 'none';
  // Update title for prog lang
  if(isProgLang){
    const pl = PROG_LANGS.find(p => p.code === lang);
    if(pl){
      if(ct) ct.textContent = pl.icon+' '+pl.name+' — Course Chuno';
      if(cs2) cs2.textContent = S.name+', '+pl.name+' seekhna shuru karo — 60 Levels complete course!';
      // Update prog card color to match language
      const cp = document.getElementById('courseCardProg60');
      if(cp){
        cp.style.borderColor = pl.color+'66';
        cp.style.background = 'linear-gradient(135deg,'+pl.color+'10,'+pl.color+'05)';
        const badge = cp.querySelector('.cbadge');
        if(badge) badge.style.background = 'linear-gradient(135deg,'+pl.color+','+pl.color+'aa)';
        const ce = cp.querySelector('.ce');
        if(ce){ ce.style.background = pl.color+'33'; ce.style.borderColor = pl.color+'55'; ce.textContent = pl.icon; }
        const cd = cp.querySelector('.cd');
        if(cd){ cd.style.color = pl.color; cd.textContent = '60 Levels — '+pl.name; }
        const cdesc = cp.querySelector('.cdesc');
        if(cdesc){ const b = cdesc.querySelector('b'); if(b) b.style.color = pl.color; }
        const cx = cp.querySelector('.cx');
        if(cx) cx.style.color = pl.color+'99';
      }
    }
  }
  showScreen('courseSelect');
  // Stagger animate course cards — sirf visible cards animate karo
  setTimeout(()=>{
    const visibleCards = Array.from(document.querySelectorAll('.cc')).filter(card => card.style.display !== 'none');
    visibleCards.forEach((card,i)=>{
      card.style.opacity='0';
      card.style.transform='translateY(32px) scale(.93)';
      card.style.transition='';
      setTimeout(()=>{
        card.style.transition='opacity .4s ease,transform .45s cubic-bezier(.34,1.56,.64,1)';
        card.style.opacity='1';
        card.style.transform='translateY(0) scale(1)';
        setTimeout(()=>{card.style.transition='';},500);
      },i*110+100);
    });
  },180);
}

// ── ADD PROFILE MODAL ──
function showAddProfile(){
  if(IS_GUEST || !getLoggedInUser()){ showScreen('guestProfileScreen'); return; }
  selectedAvatar = AVATARS[Math.floor(Math.random()*AVATARS.length)];
  // Render avatar grid
  const ag = document.getElementById('avatarGrid');
  if(ag) ag.innerHTML = AVATARS.map(a=>`
    <div class="avatar-opt ${a===selectedAvatar?'av-sel':''}" onclick="pickAvatar('${a}',this)">${a}</div>
  `).join('');
  document.getElementById('newProfileName').value='';
  document.getElementById('newProfileName').style.borderColor='';
  const errEl = document.getElementById('profileNameError');
  if(errEl) errEl.textContent='';
  const btn = document.getElementById('createProfileBtn');
  if(btn) btn.disabled=false;
  document.getElementById('addProfileModal').style.display='flex';
  setTimeout(()=>document.getElementById('newProfileName').focus(),300);
}

function hideAddProfile(){
  document.getElementById('addProfileModal').style.display='none';
}

function pickAvatar(av, el){
  selectedAvatar = av;
  document.querySelectorAll('.avatar-opt').forEach(x=>x.classList.remove('av-sel'));
  el.classList.add('av-sel');
}

function validateProfileName(){
  const input = document.getElementById('newProfileName');
  const errEl = document.getElementById('profileNameError');
  const btn = document.getElementById('createProfileBtn');
  if(!input) return;
  const name = input.value.trim();
  if(!name){
    input.style.borderColor='';
    if(errEl) errEl.textContent='';
    if(btn) btn.disabled=false;
    return;
  }
  const duplicate = PROFILES.find(p => p.name && p.name.trim().toLowerCase() === name.toLowerCase());
  if(duplicate){
    input.style.borderColor='var(--r)';
    if(errEl) errEl.textContent='⚠️ Yeh naam already use ho raha hai! Doosra naam chunno.';
    if(btn){ btn.disabled=true; btn.style.opacity='0.5'; }
  } else {
    input.style.borderColor='var(--g)';
    if(errEl) errEl.textContent='';
    if(btn){ btn.disabled=false; btn.style.opacity='1'; }
  }
}

function createProfile(){
  const name = document.getElementById('newProfileName').value.trim();
  if(!name){ document.getElementById('newProfileName').style.borderColor='var(--r)'; return; }
  // Max 3 profiles check
  if(PROFILES.length>=3){ showToast('⚠️ Max 3 profiles allowed! Pehle ek delete karo.','var(--r)'); hideAddProfile(); return; }
  // Duplicate name check (double safety)
  const duplicate = PROFILES.find(p => p.name && p.name.trim().toLowerCase() === name.toLowerCase());
  if(duplicate){ showToast('⚠️ Yeh naam already use ho raha hai! Doosra naam chunno.','var(--r)'); return; }
  const p = newProfileData(name, selectedAvatar);
  PROFILES.push(p);
  ACTIVE_PID = p.id;
  Object.assign(S, p);
  saveAll();
  hideAddProfile();
  showToast('✅ '+name+' ka profile ban gaya!','var(--g)');
  setTimeout(()=>{
    renderProfileSelect();
    updateLangSelectIndicators();
    showScreen('langSelect');
  }, 500);
}

function deleteProfile(pid, e){
  e.stopPropagation();
  if(PROFILES.length<=1){ showToast('⚠️ Kam az kam ek profile chahiye!','var(--r)'); return; }
  const p = PROFILES.find(x=>x.id===pid);
  if(!p) return;
  showConfirm(
    p.avatar||'😊',
    p.name+' ka Profile Delete?',
    'Yeh profile aur iska sara progress hamesha ke liye khatam ho jaayega. Wapas nahi aayega!',
    '🗑️ Haan, Delete Karo',
    'var(--r)', '#991111',
    ()=>{
      PROFILES = PROFILES.filter(x=>x.id!==pid);
      if(ACTIVE_PID===pid){
        ACTIVE_PID = PROFILES[0].id;
        Object.assign(S, PROFILES[0]);
      }
      saveAll();
      // 🔧 FIX: Firebase se bhi profile delete karo
      const uid = window.FB_AUTH?.currentUser?.uid;
      if(uid && window.FIREBASE_READY && window.FB_DB && !IS_GUEST){
        window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/profiles/'+pid)).catch(()=>{});
        window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'), ACTIVE_PID||uid).catch(()=>{});
        console.log('🗑️ Firebase se profile delete ho gayi:', pid);
      }
      renderProfileSelect();
      showToast('🗑️ Profile delete ho gaya','var(--r)');
    }
  );
}