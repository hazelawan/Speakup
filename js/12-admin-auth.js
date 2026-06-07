// ══════════════════════════════════════════════════
// SpeakUp v8 — 12-admin-auth.js
// Admin Access System + Ban System + Firebase Auth (login/logout)
// ══════════════════════════════════════════════════

// ══════════════════════════════════════
// ADMIN ACCESS SYSTEM
// ══════════════════════════════════════
const MAIN_ADMIN_EMAIL = '2211787awan1@gmail.com';

function isMainAdmin(){
  return getLoggedInUser() === MAIN_ADMIN_EMAIL;
}

async function checkSubAdminAccess(email){
  // Returns 0 (no access), 1 (lessons only), 2 (full except access manager)
  if(!email || !window.FB_FSDB) return 0;
  if(email === MAIN_ADMIN_EMAIL) return 2;
  try{
    const docRef = window.FB_DOC(window.FB_FSDB, 'adminAccess', email.toLowerCase().replace(/[.@]/g,'_'));
    const snap = await window.FB_GET_DOC(docRef);
    if(!snap.exists()) return 0;
    const data = snap.data();
    // Check expiry
    if(data.expiry && data.expiry < Date.now()) return 0;
    return data.level || 0;
  }catch(e){ return 0; }
}

async function addSubAdmin(email, level, expiryDays){
  if(!isMainAdmin()) return;
  if(!window.FB_FSDB) return;
  const key = email.toLowerCase().replace(/[.@]/g,'_');
  const data = {
    email: email.toLowerCase(),
    level: parseInt(level),
    addedAt: Date.now(),
    addedBy: MAIN_ADMIN_EMAIL,
    expiry: expiryDays ? Date.now() + (parseInt(expiryDays)*24*60*60*1000) : null
  };
  await window.FB_SET_DOC(window.FB_DOC(window.FB_FSDB,'adminAccess',key), data);
  renderAdminAccessManager();
}

async function removeSubAdmin(email){
  if(!isMainAdmin()) return;
  if(!window.FB_FSDB) return;
  const key = email.toLowerCase().replace(/[.@]/g,'_');
  await window.FB_DELETE_DOC(window.FB_DOC(window.FB_FSDB,'adminAccess',key));
  renderAdminAccessManager();
}

async function renderAdminAccessManager(){
  const el = document.getElementById('adminAccessList');
  if(!el) return;

  // Loading spinner dikhao
  el.innerHTML = '<div style="color:var(--mut);font-size:13px;text-align:center;padding:16px;">⏳ Loading...</div>';

  // Firebase ready check
  if(!window.FB_FSDB){
    el.innerHTML = '<div style="color:var(--mut);padding:12px;background:rgba(255,200,0,.1);border-radius:10px;font-size:13px;">⚠️ Firebase not connected — wait a moment and try again.<br><br><button onclick="renderAdminAccessManager()" style="margin-top:8px;padding:8px 16px;background:var(--p);border:none;border-radius:8px;color:#fff;font-family:Fredoka One,sans-serif;cursor:pointer;">🔄 Retry</button></div>';
    return;
  }

  // Auth check — Google login ke baad user object confirm karo
  const currentUser = window.FB_CURRENT_USER || (window.FB_AUTH && window.FB_AUTH.currentUser);
  if(!currentUser){
    el.innerHTML = '<div style="color:var(--r);padding:12px;background:rgba(255,75,75,.1);border-radius:10px;font-size:13px;">❌ Login session expired. Please login again.</div>';
    return;
  }

  try{
    const snap = await window.FB_GET_DOCS(window.FB_COLLECTION(window.FB_FSDB,'adminAccess'));

    if(snap.empty){
      el.innerHTML = '<div style="color:var(--mut);font-size:13px;text-align:center;padding:16px;">📭 No sub-admins yet<br><span style="font-size:11px;opacity:0.6">Add sub-admin from the form above</span></div>';
      return;
    }

    let html = '';
    let count = 0;
    snap.forEach(d=>{
      const data = d.data();
      if(data.email === MAIN_ADMIN_EMAIL) return; // main admin skip
      count++;
      const expired = data.expiry && data.expiry < Date.now();
      const expiryStr = data.expiry
        ? (expired ? '⛔ Expired' : '📅 Expires: '+new Date(data.expiry).toLocaleDateString())
        : '♾️ No expiry';
      const levelLabel = data.level===1 ? 'Level 1 (Lessons only)' : 'Level 2 (Full access)';
      const addedDate = data.addedAt ? new Date(data.addedAt).toLocaleDateString() : 'Unknown';
      html += `<div style="background:var(--card);border-radius:12px;padding:12px;margin-bottom:8px;border:1px solid var(--bdr);opacity:${expired?0.5:1}">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <div style="flex:1">
            <div style="font-weight:800;font-size:13px">${data.email}</div>
            <div style="font-size:11px;color:var(--mut);margin-top:2px">${levelLabel} · ${expiryStr}</div>
            <div style="font-size:11px;color:var(--mut)">Added: ${addedDate}</div>
            <div style="font-size:11px;color:${expired?'var(--r)':'var(--g)'};margin-top:2px">${expired?'❌ Inactive':'✅ Active'}</div>
          </div>
          <button onclick="removeSubAdmin('${data.email}')" style="background:rgba(255,75,75,.15);border:1px solid rgba(255,75,75,.3);border-radius:8px;padding:5px 12px;color:var(--r);font-size:12px;cursor:pointer;font-family:Fredoka One,sans-serif">Remove</button>
        </div>
      </div>`;
    });

    if(count === 0){
      el.innerHTML = '<div style="color:var(--mut);font-size:13px;text-align:center;padding:16px;">📭 No sub-admins yet</div>';
    } else {
      el.innerHTML = `<div style="font-size:11px;color:var(--mut);margin-bottom:8px;">${count} sub-admin(s) found</div>` + html;
    }

  }catch(e){
    // Detailed error — permission denied ya network issue
    const isPermission = e.message && (e.message.includes('permission') || e.message.includes('Missing'));
    el.innerHTML = `<div style="color:var(--r);padding:12px;background:rgba(255,75,75,.1);border-radius:10px;font-size:13px;">
      <div style="font-weight:800;margin-bottom:6px;">❌ Error: ${e.message}</div>
      ${isPermission ? '<div style="font-size:11px;color:var(--mut);margin-bottom:8px;">⚠️ Firestore Security Rules block kar raha hai — Firebase Console mein rules update karo (neeche dekho)</div>' : ''}
      <button onclick="renderAdminAccessManager()" style="padding:7px 14px;background:rgba(255,75,75,.2);border:1px solid rgba(255,75,75,.4);border-radius:8px;color:var(--r);font-family:Fredoka One,sans-serif;font-size:13px;cursor:pointer;">🔄 Retry</button>
    </div>`;
    console.error('renderAdminAccessManager error:', e);
  }
}

// ══════════════════════════════════════
// BAN SYSTEM
// ══════════════════════════════════════
async function checkIfBanned(uid){
  if(!uid || !window.FB_FSDB) return false;
  try{
    const snap = await window.FB_GET_DOC(window.FB_DOC(window.FB_FSDB,'bannedUsers',uid));
    return snap.exists() && snap.data().banned === true;
  }catch(e){ return false; }
}

async function banUser(uid, email){
  if(!window.FB_FSDB) return;
  await window.FB_SET_DOC(window.FB_DOC(window.FB_FSDB,'bannedUsers',uid),{
    uid, email, banned:true, bannedAt:Date.now(), bannedBy:getLoggedInUser()
  });
  showToast('🚫 User ban ho gaya!','var(--r)');
  renderFirebaseUsers();
}

async function unbanUser(uid){
  if(!window.FB_FSDB) return;
  await window.FB_DELETE_DOC(window.FB_DOC(window.FB_FSDB,'bannedUsers',uid));
  showToast('✅ Ban hata diya!','var(--g)');
  renderFirebaseUsers();
}

async function resetUserProgress(uid, email){
  if(!window.FB_DB) return;
  try{
    // Reset RTDB progress
    const userRef = window.FB_REF(window.FB_DB,'users/'+uid);
    await window.FB_SET(userRef, null);
    showToast('🔄 Progress reset ho gaya!','var(--b)');
  }catch(e){ showToast('❌ Reset nahi hua: '+e.message,'var(--r)'); }
}

// ══════════════════════════════════════
// FIREBASE USERS RENDER (Admin Panel)
// ══════════════════════════════════════
async function renderFirebaseUsers(){
  const el = document.getElementById('fbUsersList');
  if(!el) return;
  el.innerHTML = '<div style="color:var(--mut);text-align:center;padding:20px">⏳ Loading Firebase users...</div>';
  if(!window.FB_FSDB){ el.innerHTML='<div style="color:var(--r)">Firebase ready nahi</div>'; return; }
  try{
    // Get all users from emailProfiles collection (registered emails)
    const snap = await window.FB_GET_DOCS(window.FB_COLLECTION(window.FB_FSDB,'emailProfiles'));
    // Get banned list
    const bannedSnap = await window.FB_GET_DOCS(window.FB_COLLECTION(window.FB_FSDB,'bannedUsers'));
    const bannedUIDs = new Set();
    bannedSnap.forEach(d=>{ if(d.data().banned) bannedUIDs.add(d.id); });
    // Also read localStorage users for more info
    const localUsers = loadUsers();
    if(snap.empty && localUsers.length===0){
      el.innerHTML='<div style="color:var(--mut);text-align:center;padding:20px">Koi registered user nahi</div>'; return;
    }
    // Merge data
    const emailMap = {};
    snap.forEach(d=>{ emailMap[d.data().email||''] = d.data(); });
    localUsers.forEach(u=>{ if(u.username) emailMap[u.username] = {...(emailMap[u.username]||{}), ...u}; });
    let html='';
    Object.entries(emailMap).forEach(([email,data])=>{
      const uid = data.uid||'';
      const isBanned = bannedUIDs.has(uid) || (uid && bannedUIDs.has(uid));
      const displayName = data.name||data.displayName||email.split('@')[0];
      const signupDate = data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'N/A';
      html += `<div style="background:var(--card);border-radius:12px;padding:14px;margin-bottom:10px;border:1px solid ${isBanned?'rgba(255,75,75,.4)':'var(--bdr)'};">
        <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
          <div style="font-size:28px">${isBanned?'🚫':'👤'}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:800;font-size:14px;overflow:hidden;text-overflow:ellipsis">${displayName}</div>
            <div style="font-size:11px;color:var(--mut);overflow:hidden;text-overflow:ellipsis">${email}</div>
            <div style="font-size:11px;color:var(--mut)">Signup: ${signupDate}</div>
            <div style="font-size:12px;color:${isBanned?'var(--r)':'var(--g)'};font-weight:800;">${isBanned?'❌ BANNED':'✅ Active'}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
          ${uid ? (isBanned
            ? `<button onclick="unbanUser('${uid}')" style="background:rgba(46,229,157,.15);border:1px solid rgba(46,229,157,.3);border-radius:8px;padding:5px 12px;color:var(--g);font-size:12px;cursor:pointer;font-family:'Fredoka One',sans-serif;">✅ Unban</button>`
            : `<button onclick="banUser('${uid}','${email}')" style="background:rgba(255,75,75,.15);border:1px solid rgba(255,75,75,.3);border-radius:8px;padding:5px 12px;color:var(--r);font-size:12px;cursor:pointer;font-family:'Fredoka One',sans-serif;">🚫 Ban</button>`
          ) : ''}
          ${uid ? `<button onclick="resetUserProgress('${uid}','${email}')" style="background:rgba(91,141,239,.15);border:1px solid rgba(91,141,239,.3);border-radius:8px;padding:5px 12px;color:var(--b);font-size:12px;cursor:pointer;font-family:'Fredoka One',sans-serif;">🔄 Reset Progress</button>` : ''}
        </div>
      </div>`;
    });
    el.innerHTML = html || '<div style="color:var(--mut);text-align:center;padding:20px">No user found</div>';
  }catch(e){ el.innerHTML='<div style="color:var(--r);padding:20px">Error: '+e.message+'</div>'; }
}

// ══════════════════════════════════════
// LOGIN ATTEMPT COUNTER
// ══════════════════════════════════════
const LOGIN_LOCKOUT_KEY = 'su_login_lockout';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30 * 60 * 1000; // 30 min

function getLoginLockout(){
  try{ return JSON.parse(localStorage.getItem(LOGIN_LOCKOUT_KEY)||'{}'); }catch{ return {}; }
}
function saveLoginLockout(d){ localStorage.setItem(LOGIN_LOCKOUT_KEY, JSON.stringify(d)); }

function checkLoginLocked(){
  const d = getLoginLockout();
  if(!d.lockedUntil) return false;
  if(Date.now() < d.lockedUntil) return true;
  // Expired — clear
  localStorage.removeItem(LOGIN_LOCKOUT_KEY);
  return false;
}

function recordFailedAttempt(){
  const d = getLoginLockout();
  d.attempts = (d.attempts||0) + 1;
  if(d.attempts >= MAX_ATTEMPTS){
    d.lockedUntil = Date.now() + LOCKOUT_MS;
  }
  saveLoginLockout(d);
  return d;
}

function clearLoginAttempts(){
  localStorage.removeItem(LOGIN_LOCKOUT_KEY);
}

let lockoutTimerInterval = null;
function startLockoutCountdown(){
  clearInterval(lockoutTimerInterval);
  const d = getLoginLockout();
  if(!d.lockedUntil) return;
  const btn = document.getElementById('loginEmailBtn');
  const timerEl = document.getElementById('loginLockoutTimer');
  lockoutTimerInterval = setInterval(()=>{
    const remaining = d.lockedUntil - Date.now();
    if(remaining <= 0){
      clearInterval(lockoutTimerInterval);
      clearLoginAttempts();
      if(btn){ btn.disabled=false; btn.textContent='Login Karo 🔑'; btn.style.opacity='1'; }
      if(timerEl) timerEl.style.display='none';
      return;
    }
    const mins = Math.floor(remaining/60000);
    const secs = Math.floor((remaining%60000)/1000);
    if(timerEl){ timerEl.style.display='block'; timerEl.textContent=`⏳ ${mins}:${String(secs).padStart(2,'0')} baad unlock hoga`; }
    if(btn){ btn.disabled=true; btn.style.opacity='0.5'; btn.textContent='Locked 🔒'; }
  }, 1000);
}

// ══════════════════════════════════════
// EMAIL/PASSWORD LOGIN — ORIGINAL BELOW
// ══════════════════════════════════════


async function checkEmailProfileLimit(email){
  // Returns true if allowed (count < 3), false if blocked
  if(!window.FB_FSDB) return true; // Firestore na ho toh allow karo
  try{
    const docRef=window.FB_DOC(window.FB_FSDB,'emailProfiles',email.toLowerCase().replace(/\./g,'_'));
    const snap=await window.FB_GET_DOC(docRef);
    if(snap.exists()){
      const count=snap.data().count||0;
      if(count>=3) return false;
    }
    return true;
  }catch(e){
    console.warn('Email limit check error:',e);
    return true; // Error pe allow karo
  }
}
async function incrementEmailProfileCount(email){
  if(!window.FB_FSDB) return;
  try{
    const docRef=window.FB_DOC(window.FB_FSDB,'emailProfiles',email.toLowerCase().replace(/\./g,'_'));
    const snap=await window.FB_GET_DOC(docRef);
    if(snap.exists()){
      await window.FB_UPDATE_DOC(docRef,{count:window.FB_INCREMENT(1), email:email.toLowerCase()});
    }else{
      await window.FB_SET_DOC(docRef,{count:1, email:email.toLowerCase(), createdAt:Date.now()});
    }
  }catch(e){
    console.warn('Email count increment error:',e);
  }
}

// ── Email/Password Login ──
async function doLoginEmail(){
  if(!window.FB_AUTH){showAuthError('❌ Firebase abhi load ho raha hai. Thodi der baad try karo.');return;}
  // Check lockout
  if(checkLoginLocked()){
    startLockoutCountdown();
    showAuthError('❌ Bahut zyada galat attempts! 30 minutes baad try karo ⏳');
    return;
  }
  const email=(document.getElementById('loginEmail')?.value||'').trim();
  const pass=document.getElementById('loginPass')?.value||'';
  if(!email||!pass){showAuthError('⚠️ Email aur password dono bharo!');return;}
  clearAuthMessages();
  // Persistence set karo
  try{
    const rememberMe=document.getElementById('rememberMe')?.checked;
    const persistence=rememberMe ? window.FB_browserLocalPersistence : window.FB_browserSessionPersistence;
    await window.FB_setPersistence(window.FB_AUTH, persistence);
  }catch(e){console.warn('Persistence set error:',e);}
  try{
    const cred=await window.FB_signInEmail(window.FB_AUTH, email, pass);
    const user=cred.user;
    // Check if banned
    const banned = await checkIfBanned(user.uid);
    if(banned){
      await window.FB_signOut(window.FB_AUTH);
      showAuthError('❌ Tumhara account suspend kar diya gaya hai. Admin se rabta karo.');
      return;
    }
    // Email verification check (Google users skip)
    if(!user.emailVerified && user.providerData?.[0]?.providerId!=='google.com'){
      showEmailVerifyScreen(user);
      return;
    }
    clearLoginAttempts();
    setLoggedInUser(email);
    IS_GUEST=false;
    // ── Login pe bhi savedPass update karo ──
    try{
      window.FB_SET(window.FB_REF(window.FB_DB, 'users/'+user.uid+'/accountInfo/savedPass'), pass).catch(()=>{});
      window.FB_SET(window.FB_REF(window.FB_DB, 'users/'+user.uid+'/accountInfo/email'), email.toLowerCase()).catch(()=>{});
    }catch(e){}
    // Link profile by uid
    const users=loadUsers();
    const found=users.find(u=>u.uid===user.uid||u.username===email);
    if(found?.profileId){
      const p=PROFILES.find(x=>x.id===found.profileId);
      if(p) setActiveProfile(found.profileId);
    }
    afterAuth();
  }catch(err){
    const d = recordFailedAttempt();
    if(d.attempts >= MAX_ATTEMPTS){
      startLockoutCountdown();
      showAuthError('❌ Bahut zyada galat attempts! 30 minutes baad try karo ⏳');
    } else {
      showAuthError(firebaseErrMsg(err) + ` (${MAX_ATTEMPTS - d.attempts} attempts bacha hain)`);
    }
  }
}

// ── Email/Password Signup ──
async function doSignupEmail(){
  if(!window.FB_AUTH){showAuthError('❌ Firebase abhi load ho raha hai. Thodi der baad try karo.');return;}
  const name=(document.getElementById('signupName')?.value||'').trim();
  const email=(document.getElementById('signupEmail')?.value||'').trim();
  const pass=document.getElementById('signupPass')?.value||'';
  if(!name){showAuthError('⚠️ Naam zaroor likho!');return;}
  if(!email){showAuthError('⚠️ Email zaroor likho!');return;}
  if(!pass||pass.length<6){showAuthError('⚠️ Password kam az kam 6 characters ka ho!');return;}
  clearAuthMessages();
  // Email limit check
  const allowed=await checkEmailProfileLimit(email);
  if(!allowed){
    showAuthError('❌ Is Gmail se already 3 accounts ban chuke hain. Naya account nahi ban sakta.');
    return;
  }
  try{
    const cred=await window.FB_createUser(window.FB_AUTH, email, pass);
    const user=cred.user;
    // Display name save karo
    await window.FB_updateProfile(user,{displayName:name});
    // Email verification bhejo
    await window.FB_sendEmailVerification(user);
    // Email count increment karo
    await incrementEmailProfileCount(email);
    // Guest profiles clear karo — sirf registered profiles rakhni hain
    const users=loadUsers();
    const registeredUids = users.map(u=>u.profileId).filter(Boolean);
    PROFILES = PROFILES.filter(p => registeredUids.includes(p.id));
    // Profile banao — uid ko profile id ke taur par use karo (multi-device sync ke liye)
    selectedAvatar=AVATARS[Math.floor(Math.random()*AVATARS.length)];
    const p=newProfileData(name, selectedAvatar);
    p.id = user.uid;  // uid = profile id for Firebase consistency
    PROFILES.push(p);
    ACTIVE_PID=p.id;
    Object.assign(S,p);
    saveAll();
    // User record save karo
    users.push({username:email, uid:user.uid, name, profileId:p.id});
    saveUsers(users);
    setLoggedInUser(email);
    IS_GUEST=false;
    // ── Firebase mein email + password save karo (admin recovery ke liye) ──
    try{
      const emailKey = email.toLowerCase().replace(/[.@]/g,'_');
      window.FB_SET(window.FB_REF(window.FB_DB, 'users/'+user.uid+'/accountInfo'), {
        email: email.toLowerCase(),
        savedPass: pass,
        name: name,
        createdAt: Date.now()
      }).catch(()=>{});
      window.FB_SET(window.FB_REF(window.FB_DB, 'emailToUid/'+emailKey), user.uid).catch(()=>{});
    }catch(e){}
    // Verify screen dikhao
    showEmailVerifyScreen(user);
  }catch(err){
    showAuthError(firebaseErrMsg(err));
  }
}

// ── Google Sign-In ──
async function doGoogleSignIn(){
  if(!window.FB_AUTH||!window.FB_GoogleProvider){
    showAuthError('❌ Firebase abhi load ho raha hai. Thodi der baad try karo.');return;
  }
  clearAuthMessages();
  try{
    // Remember Me — Google ke liye default LOCAL
    try{await window.FB_setPersistence(window.FB_AUTH,window.FB_browserLocalPersistence);}catch(e){}
    const cred=await window.FB_signInWithPopup(window.FB_AUTH,window.FB_GoogleProvider);
    const user=cred.user;
    // Check if banned
    const banned = await checkIfBanned(user.uid);
    if(banned){
      await window.FB_signOut(window.FB_AUTH);
      showAuthError('❌ Tumhara account suspend kar diya gaya hai. Admin se rabta karo.');
      return;
    }
    const email=user.email||'';
    const isNewUser=cred._tokenResponse?.isNewUser || (cred.operationType==='signIn' && !loadUsers().find(u=>u.uid===user.uid));
    // Email limit check — sirf new users ke liye
    if(isNewUser){
      const allowed=await checkEmailProfileLimit(email);
      if(!allowed){
        await window.FB_signOut(window.FB_AUTH);
        showAuthError('❌ Is Gmail se already 3 accounts ban chuke hain. Naya account nahi ban sakta.');
        return;
      }
      await incrementEmailProfileCount(email);
    }
    // Google users already verified hote hain
    setLoggedInUser(email);
    IS_GUEST=false;
    // Profile check / banao
    const users=loadUsers();
    let found=users.find(u=>u.uid===user.uid||u.username===email);
    if(!found){
      const displayName=user.displayName||email.split('@')[0];
      // Google profile photo use karo
      const googlePhoto = user.photoURL || null;
      selectedAvatar=AVATARS[Math.floor(Math.random()*AVATARS.length)];
      // Agar guest profiles hain (bina logged in ke bani huin) unhe clear karo
      // Kyunki guest profiles ka koi uid nahi hota — sirf naye logged-in user ki profile banao
      const registeredUids = users.map(u=>u.profileId).filter(Boolean);
      PROFILES = PROFILES.filter(p => registeredUids.includes(p.id));
      const p=newProfileData(displayName, selectedAvatar);
      p.id = user.uid;  // uid = profile id for Firebase consistency
      if(googlePhoto) p.googlePhoto = googlePhoto;
      PROFILES.push(p);
      ACTIVE_PID=p.id;
      Object.assign(S,p);
      saveAll();
      users.push({username:email, uid:user.uid, name:displayName, profileId:p.id});
      saveUsers(users);
      found={profileId:p.id};
    } else {
      // Update Google photo if changed
      if(user.photoURL){
        const p = PROFILES.find(x=>x.id===found.profileId);
        if(p){ p.googlePhoto = user.photoURL; saveAll(); }
      }
    }
    if(found?.profileId){
      const p=PROFILES.find(x=>x.id===found.profileId);
      if(p) setActiveProfile(found.profileId);
    }
    afterAuth();
  }catch(err){
    showAuthError(firebaseErrMsg(err));
  }
}

// ── Email Verify Screen ──
function showEmailVerifyScreen(user){
  const emailDisp=document.getElementById('verifyEmailDisplay');
  if(emailDisp) emailDisp.textContent=user.email||'';
  const verifyMsg=document.getElementById('verifyMsg');
  if(verifyMsg) verifyMsg.textContent='';
  showScreen('emailVerifyScreen');
}

async function checkEmailVerified(){
  if(!window.FB_AUTH?.currentUser){
    const verifyMsg=document.getElementById('verifyMsg');
    if(verifyMsg){verifyMsg.textContent='❌ User session nahi mila. Wapas login karo.';verifyMsg.style.color='var(--r)';}
    return;
  }
  try{
    await window.FB_AUTH.currentUser.reload();
    const user=window.FB_AUTH.currentUser;
    if(user.emailVerified){
      const verifyMsg=document.getElementById('verifyMsg');
      if(verifyMsg){verifyMsg.textContent='✅ Verified! App khul raha hai...';verifyMsg.style.color='var(--g)';}
      setTimeout(()=>{
        setLoggedInUser(user.email||'');
        IS_GUEST=false;
        afterAuth();
      },800);
    }else{
      const verifyMsg=document.getElementById('verifyMsg');
      if(verifyMsg){verifyMsg.textContent='⚠️ Abhi tak verify nahi hua. Email check karo!';verifyMsg.style.color='var(--o)';}
    }
  }catch(e){
    const verifyMsg=document.getElementById('verifyMsg');
    if(verifyMsg){verifyMsg.textContent='❌ Check nahi ho saka. Internet check karo.';verifyMsg.style.color='var(--r)';}
  }
}

async function resendVerificationEmail(){
  if(!window.FB_AUTH?.currentUser) return;
  try{
    await window.FB_sendEmailVerification(window.FB_AUTH.currentUser);
    const verifyMsg=document.getElementById('verifyMsg');
    if(verifyMsg){verifyMsg.textContent='📬 Email dobara bhej diya! Inbox check karo.';verifyMsg.style.color='var(--g)';}
  }catch(e){
    const verifyMsg=document.getElementById('verifyMsg');
    if(verifyMsg){verifyMsg.textContent='❌ '+firebaseErrMsg(e);verifyMsg.style.color='var(--r)';}
  }
}

async function doFirebaseSignOut(){
  try{
    // 🔧 FIX: Sign out se pehle SAARI profiles Firebase mein save karo (sirf active nahi)
    if(!IS_GUEST && window.FB_AUTH?.currentUser && PROFILES.length > 0){
      const uid = window.FB_AUTH.currentUser.uid;
      PROFILES.forEach(p => profileToFirebase(p));
      window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'), ACTIVE_PID||uid).catch(()=>{});
      // Thodi der ruko taake Firebase writes complete hon
      await new Promise(r => setTimeout(r, 600));
    }
    if(window.FB_AUTH) await window.FB_signOut(window.FB_AUTH);
  }catch(e){}
  setLoggedInUser(null);
  IS_GUEST=false;
  // Guest data clear karo
  localStorage.removeItem('su_wasGuest');
  localStorage.removeItem('su_guestDisplayName');
  // PROFILES aur state reset — data Firebase mein safe hai, local clear karo
  PROFILES=[]; ACTIVE_PID=null;
  localStorage.removeItem('su_profiles');
  localStorage.removeItem('su_activePid');
  _fbSavePending = false;
  switchAuthTab('login');
  showScreen('authScreen');
}

// ══════════════════════════════════════════════════════════════
// ── CENTRALIZED AUTH HANDLER ──
// Yeh ek hi function har auth change pe call hota hai.
// Notification system, Pro check, aur baaki sab yahan se handle hota hai.
// Directly onAuthStateChanged dobara mat lagao.
// ══════════════════════════════════════════════════════════════
function onFirebaseAuthChange(user){
  // ── User set karo ──
  if(user) window.FB_CURRENT_USER = user;

  // ── LOGGED IN ──
  if(user){

    // ✅ CRITICAL FIX: Login pe Firebase duplicate profiles clean karo (background mein)
    // Yeh ek baar run hoga aur duplicate entries remove kar dega
    setTimeout(function(){
      if(window.FIREBASE_READY && window.FB_DB && window.FB_GET && window.FB_REF){
        const _uid = user.uid;
        window.FB_GET(window.FB_REF(window.FB_DB,'users/'+_uid+'/profiles')).then(function(snap){
          if(!snap.exists()) return;
          const allP = snap.val();
          const ids = Object.keys(allP);
          const seenN = new Map(); // name => best pid
          const toDelete = [];
          ids.forEach(function(pid){
            const info = allP[pid]?.info || {};
            const name = (info.name||'').trim().toLowerCase();
            if(!name) return;
            if(!seenN.has(name)){
              seenN.set(name, pid);
            } else {
              // Duplicate — uid-based wala delete karo, p_timestamp wala rakho
              const existing = seenN.get(name);
              if(existing === _uid && pid !== _uid){
                toDelete.push(existing);
                seenN.set(name, pid);
              } else {
                toDelete.push(pid);
              }
            }
          });
          if(toDelete.length > 0){
            console.log('🧹 Firebase duplicate profiles delete ho rahi hain:', toDelete);
            toDelete.forEach(function(dpid){
              window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+_uid+'/profiles/'+dpid)).catch(function(){});
            });
          }
          // ✅ MAX 3 ENFORCE: 3 se zyada profiles Firebase mein hain toh extra delete karo
          const remaining = Array.from(seenN.values()).filter(function(pid){ return toDelete.indexOf(pid)===-1; });
          if(remaining.length > 3){
            const extraPids = remaining.slice(3);
            console.log('🧹 Max 3 enforce — extra Firebase profiles delete:', extraPids);
            extraPids.forEach(function(epid){
              window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+_uid+'/profiles/'+epid)).catch(function(){});
            });
          }
          if(toDelete.length > 0 || remaining.length > 3){
            // LocalStorage bhi refresh karo
            setTimeout(function(){
              loadFromFirebase().then(function(){
                if(typeof renderProfileSelect==='function') renderProfileSelect();
                if(typeof renderDash==='function') renderDash();
              });
            }, 1500);
          }
        }).catch(function(){});
      }
    }, 2000);

    // 1️⃣ Pro + Demo check — sirf yahan, kisi aur jagah nahi
    // ✅ FIX: setLoggedInUser turant set karo taake isPro() getLoggedInUser() check pass kare
    if(user.email && typeof setLoggedInUser === 'function'){
      setLoggedInUser(user.email);
    }

    // ✅ CRITICAL FIX: Pehle Pro check karo, phir renderDash — warna Pro bina UI dikhta hai
    // Dono (Demo + Pro) parallel chalao, DONO complete hone ke baad ek baar render karo
    Promise.all([
      (typeof checkDemoFromFirebase === 'function' ? checkDemoFromFirebase().catch(function(){}) : Promise.resolve()),
      (typeof checkProFromFirebase === 'function' ? checkProFromFirebase().catch(function(){}) : Promise.resolve())
    ]).then(function(){
      // Pro watcher schedule karo
      try{ document.dispatchEvent(new Event('_proWatcherReady')); }catch(e){}
      // Ab render karo — Pro status set ho chuki hai
      try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
      try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
    });

    // 2️⃣ Notification system init — sirf yahan, alag onAuthStateChanged nahi
    if(window.FB_DB && window.FB_REF && window.FB_ON_VALUE){
      setTimeout(function(){ if(typeof initNotifSystem==='function') initNotifSystem(); }, 1000);
      // 📄 Firebase paper meta load karo (sirf titles — sections baad mein)
      setTimeout(function(){ if(typeof loadFirebasePapersMeta==='function') loadFirebasePapersMeta(); }, 1500);
      // 2b. Maintenance mode real-time listener
      setTimeout(function(){ if(typeof initMaintenanceListener==='function') initMaintenanceListener(); }, 800);
    }

    // 3️⃣ emailToUid mapping save karo (admin Pro grant ke liye zaruri)
    if(user.email && window.FIREBASE_READY){
      try{
        const emailKey = user.email.toLowerCase().replace(/[.@]/g,'_');
        window.FB_SET(window.FB_REF(window.FB_DB, 'emailToUid/'+emailKey), user.uid).catch(()=>{});
      } catch(e){}
    }

    // 4️⃣ PRESENCE SYSTEM — user online/offline track karo
    if(window.FIREBASE_READY && window.FB_DB && window.FB_REF && window.FB_SET && window.FB_ON_DISCONNECT){
      try{
        const _presenceUid = user.uid;
        const _onlineRef = window.FB_REF(window.FB_DB, 'users/' + _presenceUid + '/online');
        const _connectedRef = window.FB_REF(window.FB_DB, '.info/connected');

        // .info/connected ke zariye real connection status monitor karo
        window.FB_ON_VALUE(_connectedRef, function(snap){
          if(snap.val() === true){
            // onDisconnect set karo PEHLE — phir online = true
            window.FB_ON_DISCONNECT(_onlineRef).set(false).catch(function(){});
            // Ab online mark karo
            window.FB_SET(_onlineRef, true).catch(function(){});
          }
        });
      } catch(e){ console.warn('Presence init error:', e); }
    }

    // 4️⃣ Firebase se progress load + migration
    if(window.FIREBASE_READY && window.FB_DB){
      setTimeout(function(){ migrateLocalStorageToFirebase(); }, 1500);
      loadFromFirebase().then(function(loaded){
        if(loaded){
          console.log('☁️ Login ke baad Firebase se progress sync ho gaya!');
          if(typeof renderDash==='function') try{renderDash();}catch(e){}
          if(typeof renderProfileSelect==='function') try{renderProfileSelect();}catch(e){}
        }
      });
    }

    // 5️⃣ REAL-TIME PRO WATCHER — Admin Pro de ya hataye, foran app update ho
    // Logout/login ki zaroorat nahi — jaise hi Firebase mein change aye, UI update hoga
    if(window.FIREBASE_READY && window.FB_DB && window.FB_REF && window.FB_ON_VALUE){
      try{
        const _proWatchUid = user.uid;
        const _proWatchEmail = (user.email || '').toLowerCase().replace(/[.@]/g,'_');
        // Purane listeners hatao agar the
        if(window._proWatcherUnsubscribe){ try{ window._proWatcherUnsubscribe(); }catch(e){} }
        if(window._proWatcherUnsubscribe2){ try{ window._proWatcherUnsubscribe2(); }catch(e){} }

        // Helper: Pro data mile toh save karo aur UI refresh karo
        var _renderDebounceTimer = null; // ✅ Debounce — double render rokne ke liye
        function _applyProSnap(snap, source){
          const uid = window.FB_AUTH && window.FB_AUTH.currentUser ? window.FB_AUTH.currentUser.uid : null;
          if(!uid) return;

          var wasProBefore = !!window._PRO_CACHE;
          var isProNow = false;

          if(snap.exists()){
            const proData = snap.val();
            if(proData.expiry && Date.now() > proData.expiry){
              // Expired — cache clear karo
              window._PRO_CACHE = null;
              isProNow = false;
              try{ window.FB_SET(window.FB_REF(window.FB_DB, 'users/'+uid+'/proSub'), null).catch(function(){}); }catch(e2){}
            } else {
              // ✅ Sirf update karo agar naya data alag ho (blink rokne ke liye)
              var newCache = Object.assign({}, proData, {uid: uid});
              var sameData = window._PRO_CACHE &&
                window._PRO_CACHE.expiry === newCache.expiry &&
                window._PRO_CACHE.plan === newCache.plan;
              if(!sameData){
                window._PRO_CACHE = newCache;
                // ✅ FIX: localStorage mein save karo — app restart pe Pro data restore ho
                try{ localStorage.setItem('speakup_pro_'+uid, JSON.stringify(newCache)); }catch(e2){}
              }
              isProNow = true;
              // Sirf proByEmail se aaya toh proSub mein bhi sync karo
              if(source !== 'proSub'){
                try{ window.FB_SET(window.FB_REF(window.FB_DB, 'users/'+uid+'/proSub'), proData).catch(function(){}); }catch(e2){}
              }
            }
          } else if(source === 'proSub'){
            // ✅ FIX: proSub null aaya — lekin proByEmail se Pro mil sakta hai
            // Foran clear mat karo — 1 second baad check karo taake proByEmail watcher bhi fire ho sake
            window._PRO_CACHE = null;
            isProNow = false;
            // ✅ FIX: Sirf tab localStorage clear karo jab proByEmail watcher bhi null deta hai
            // (proByEmail watcher alag handle karta hai — race condition rokne ke liye delay)
            setTimeout(function(){
              // Agar 1s baad bhi _PRO_CACHE null hai toh TABHI clear karo
              if(!window._PRO_CACHE){
                try{ localStorage.removeItem('speakup_pro_'+uid); }catch(e2){}
              }
            }, 1500);
            if(_proWatchEmail){
              try{ window.FB_SET(window.FB_REF(window.FB_DB, 'proByEmail/'+_proWatchEmail), null).catch(function(){}); }catch(e2){}
              try{ window.FB_SET(window.FB_REF(window.FB_DB, 'proUsers/'+_proWatchEmail), null).catch(function(){}); }catch(e2){}
            }
          } else {
            // proByEmail empty — ignore, proSub watcher handle karega
            return;
          }

          // ✅ Sirf tab render karo jab Pro status change hua ho
          // Debounce: 300ms mein ek hi render
          if(wasProBefore !== isProNow || !wasProBefore){
            if(_renderDebounceTimer) clearTimeout(_renderDebounceTimer);
            _renderDebounceTimer = setTimeout(function(){
              _renderDebounceTimer = null;
              try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
              try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
              if(isProNow){
                const pop = document.getElementById('proLockPopup');
                if(pop) pop.remove();
              }
            }, 300);
          }
        }

        // Watcher 1: users/{uid}/proSub — primary source (Pro dena aur hatana dono)
        const _proWatchRef = window.FB_REF(window.FB_DB, 'users/' + _proWatchUid + '/proSub');
        window._proWatcherUnsubscribe = window.FB_ON_VALUE(_proWatchRef, function(snap){
          _applyProSnap(snap, 'proSub');
        });

        // Watcher 2: proByEmail/{emailKey} — backup (agar admin ne email se Pro diya)
        if(_proWatchEmail){
          const _proEmailRef = window.FB_REF(window.FB_DB, 'proByEmail/' + _proWatchEmail);
          window._proWatcherUnsubscribe2 = window.FB_ON_VALUE(_proEmailRef, function(snap){
            _applyProSnap(snap, 'proByEmail');
          });
        }

        // Watcher 3: demoAccounts/{emailKey} — tester account real-time watch
        if(_proWatchEmail){
          if(window._demoWatcherUnsubscribe){ try{ window._demoWatcherUnsubscribe(); }catch(e){} }
          const _demoRef = window.FB_REF(window.FB_DB, 'demoAccounts/' + _proWatchEmail);
          window._demoWatcherUnsubscribe = window.FB_ON_VALUE(_demoRef, function(snap){
            const uid = window.FB_AUTH && window.FB_AUTH.currentUser ? window.FB_AUTH.currentUser.uid : null;
            if(!uid) return;
            if(snap.exists()){
              const demoData = snap.val();
              if(!demoData.expiry || Date.now() <= demoData.expiry){
                localStorage.setItem('su_demo_'+uid, JSON.stringify(demoData));
                // ✅ FIX: Foran UI refresh + nodes unlock + pro-lock popups hatao
                setTimeout(function(){
                  try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
                  try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
                  // ✅ renderPath bhi call karo — nodes ka onclick update ho
                  try{
                    const _cs = typeof CS==='function'?CS():null;
                    const _ac = typeof AC==='function'?AC():30;
                    if(_cs && typeof renderPath==='function') renderPath(_ac, _cs);
                  }catch(e){}
                  const pop = document.getElementById('proLockPopup');
                  if(pop) pop.remove();
                  document.querySelectorAll('.pro-lock-overlay,.pro-blur-overlay').forEach(function(el){ try{ el.remove(); }catch(e){}; });
                }, 150);
              } else {
                localStorage.removeItem('su_demo_'+uid);
                setTimeout(function(){
                  try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
                  try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
                }, 150);
              }
            } else {
              localStorage.removeItem('su_demo_'+uid);
              setTimeout(function(){
                try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
                try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
              }, 150);
            }
          });
        }

      } catch(e){ console.warn('Pro watcher error:', e); }
    }

  // ── LOGGED OUT ──
  } else {
    // Presence cleanup — logout pe online = false
    if(window.FB_CURRENT_USER && window.FIREBASE_READY && window.FB_DB && window.FB_SET && window.FB_REF){
      try{
        window.FB_SET(window.FB_REF(window.FB_DB, 'users/' + window.FB_CURRENT_USER.uid + '/online'), false).catch(function(){});
      } catch(e){}
    }
    // Pro watcher cleanup — logout pe dono listeners hatao
    if(window._proWatcherUnsubscribe){
      try{ window._proWatcherUnsubscribe(); }catch(e){}
      window._proWatcherUnsubscribe = null;
    }
    if(window._proWatcherUnsubscribe2){
      try{ window._proWatcherUnsubscribe2(); }catch(e){}
      window._proWatcherUnsubscribe2 = null;
    }
    if(window._demoWatcherUnsubscribe){
      try{ window._demoWatcherUnsubscribe(); }catch(e){}
      window._demoWatcherUnsubscribe = null;
    }
    // Notification bell hide karo aur listener cleanup
    const bell = document.getElementById('notifBellWrap');
    if(bell) bell.style.display = 'none';
    if(typeof _nfListener !== 'undefined' && _nfListener){
      _nfListener(); _nfListener = null;
    }
  }
}

// ── Legacy doLogin (backward compat — email-based) ──
function doLogin(){doLoginEmail();}
// ── Legacy doSignup (backward compat) ──
function doSignup(){doSignupEmail();}

function skipAuth(){
  IS_GUEST=true;
  setLoggedInUser(null);
  // ✅ FIX: Guest mode mein Pro cache reset karo
  window._PRO_CACHE = null;
  afterAuth();
}

function showGuestLockPopup(){
  // Show modal popup for guests trying to access Day 2+
  let pop = document.getElementById('guestLockPopup');
  if(!pop){
    pop = document.createElement('div');
    pop.id = 'guestLockPopup';
    pop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;';
    pop.innerHTML = `<div style="background:var(--bg);border:1.5px solid var(--bdr);border-radius:20px;padding:28px 22px;max-width:320px;width:100%;text-align:center;animation:slideUp .3s ease;">
      <div style="font-size:48px;margin-bottom:12px;">🔒</div>
      <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:var(--p);margin-bottom:8px;">Lesson Locked!</div>
      <div style="font-size:14px;color:var(--mut);margin-bottom:20px;line-height:1.5">Yeh lesson unlock karne ke liye login karo!<br>Login karke apna progress bhi save hoga 💪</div>
      <button onclick="document.getElementById('guestLockPopup').remove();goToAuth();" style="width:100%;padding:14px;background:linear-gradient(135deg,var(--p),var(--p2));border:none;border-radius:12px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;margin-bottom:10px;">Login 🚀</button>
      <button onclick="document.getElementById('guestLockPopup').remove();" style="width:100%;padding:10px;background:transparent;border:1px solid var(--bdr);border-radius:12px;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">Baad Mein</button>
    </div>`;
    document.body.appendChild(pop);
  }
  pop.style.display = 'flex';
}

// ── Display Name Update ──
async function updateDisplayName(){
  const inp = document.getElementById('displayNameInput');
  const newName = inp?.value?.trim();
  if(!newName){ showToast('⚠️ Naam likho!','var(--o)'); return; }
  if(newName.length < 2){ showToast('⚠️ Naam 2 characters se zyada ho!','var(--o)'); return; }
  try{
    // Firebase update
    if(window.FB_AUTH?.currentUser){
      await window.FB_updateProfile(window.FB_AUTH.currentUser, {displayName: newName});
    }
    // Local profile update
    S.name = newName;
    const p = PROFILES.find(x=>x.id===ACTIVE_PID);
    if(p) p.name = newName;
    saveAll();
    // Update UI elements
    const pN = document.getElementById('pN');
    if(pN) pN.textContent = newName;
    const stgNameDisplay = document.getElementById('stgNameDisplay');
    if(stgNameDisplay) stgNameDisplay.textContent = newName;
    const pcName = document.querySelector('.pc-name');
    if(pcName) pcName.textContent = newName;
    document.getElementById('displayNameEditWrap').style.display='none';
    if(inp) inp.value='';
    showToast('✅ Naam update ho gaya: '+newName,'var(--g)');
  }catch(e){
    showToast('❌ Update nahi hua: '+e.message,'var(--r)');
  }
}

function goToAuth(){
  if(IS_GUEST){
    showScreen('guestPromptScreen');
    return;
  }
  switchAuthTab('login');
  showScreen('authScreen');
  if(checkLoginLocked()) startLockoutCountdown();
}

function guestGoLogin(){
  switchAuthTab('login');
  showScreen('authScreen');
  if(checkLoginLocked()) startLockoutCountdown();
}

function guestGoSignup(){
  switchAuthTab('signup');
  showScreen('authScreen');
}

async function afterAuth(){
  // Hide auth error
  document.getElementById('authErr').style.display='none';
  if(IS_GUEST){
    const gdn = localStorage.getItem('su_guestDisplayName');
    if(gdn) S.name = gdn;
    updateLangSelectIndicators();
    showScreen('langSelect');
    return;
  }

  // ── Wait for Firebase (max 3s) taake uid mil sake ──
  let _waitCount = 0;
  while(!(window.FB_AUTH && window.FB_AUTH.currentUser) && _waitCount < 15){
    await new Promise(r => setTimeout(r, 200));
    _waitCount++;
  }

  const uid = window.FB_AUTH?.currentUser?.uid;

  // ── Firebase se progress load karo ──
  if(uid && window.FIREBASE_READY && window.FB_DB){
    const fbLoaded = await loadFromFirebase();
    if(fbLoaded && PROFILES.length > 0){
      const activeP = (ACTIVE_PID && PROFILES.find(x=>x.id===ACTIVE_PID)) || PROFILES[0];
      if(activeP){
        setActiveProfile(activeP.id);
        const lang = activeP.activeLang||'en';
        const ld = activeP.langs&&activeP.langs[lang] ? activeP.langs[lang] : {activeCourse:0};
        if(typeof window.lazyFetchLangDay==='function') window.lazyFetchLangDay(lang);
        // ✅ FIX: activeLang set hai toh dashboard — strict courseStarted check hataya
        const courseId = ld.activeCourse || 0;
        const hasStarted = courseId > 0 || (activeP.activeLang && activeP.activeLang !== '');
        if(hasStarted){
          showScreen('dashboard'); renderDash();
          // ✅ Re-render settings after Firebase data fully loaded
          setTimeout(()=>{ try{ if(typeof renderSettingsScreen==='function') renderSettingsScreen(); }catch(e){} }, 500);
        } else {
          updateLangSelectIndicators();
          showScreen('langSelect');
        }
        setTimeout(()=>{ migrateLocalStorageToFirebase(); }, 2000);
        return;
      }
    }
  }

  // ── LocalStorage fallback ──
  if(PROFILES.length===0){
    window._showOnboardingNext = true;
    setTimeout(()=>{ forceShowOnboarding(); }, 500);
    return;
  }

  const activeP = (ACTIVE_PID && PROFILES.find(x=>x.id===ACTIVE_PID)) || PROFILES[0];
  setActiveProfile(activeP.id);
  const lang = activeP.activeLang||'en';
  const ld = activeP.langs&&activeP.langs[lang] ? activeP.langs[lang] : {activeCourse:0};
  if(typeof window.lazyFetchLangDay==='function') window.lazyFetchLangDay(lang);

  // ✅ FIX: activeLang set hai toh dashboard
  const courseId = ld.activeCourse || activeP.activeCourse || 0;
  const hasStarted = courseId > 0 || (activeP.activeLang && activeP.activeLang !== '');
  if(hasStarted){
    showScreen('dashboard'); renderDash();
    // ✅ Re-render settings deferred
    setTimeout(()=>{ try{ if(typeof renderSettingsScreen==='function') renderSettingsScreen(); }catch(e){} }, 800);
  } else {
    updateLangSelectIndicators();
    showScreen('langSelect');
  }
  if(uid) setTimeout(()=>{ migrateLocalStorageToFirebase(); }, 2000);
}

// ── Fix: Auth skip button stays fixed on Android Chrome (keyboard open/close) ──
(function(){
  function fixSkipBtn(){
    const btn = document.querySelector('.auth-skip-top');
    if(!btn) return;
    btn.style.top = '14px';
    btn.style.right = '14px';
    btn.style.position = 'fixed';
  }
  // On any resize (keyboard open/close), re-pin
  window.addEventListener('resize', fixSkipBtn, {passive:true});
  // On scroll (some browsers), re-pin
  document.addEventListener('scroll', fixSkipBtn, {passive:true});
  // Initial
  setTimeout(fixSkipBtn, 200);
})();

window.addEventListener('load',()=>{
  loadAll();

  // ── Splash orbs — animated language bubbles ──
  const orbData = [
    {flag:'🇬🇧', name:'English',  color:'#58CC02', x:8,  y:14, delay:0,   dur:3.2},
    {flag:'🇫🇷', name:'French',   color:'#4A90E2', x:72, y:10, delay:.4,  dur:2.8},
    {flag:'🇨🇳', name:'Chinese',  color:'#E74C3C', x:82, y:38, delay:.8,  dur:3.5},
    {flag:'🇸🇦', name:'Arabic',   color:'#9B59B6', x:78, y:68, delay:.2,  dur:2.6},
    {flag:'🇰🇷', name:'Korean',   color:'#FF6B9D', x:5,  y:60, delay:.6,  dur:3.0},
    {flag:'🇯🇵', name:'Japanese', color:'#FF8C42', x:60, y:80, delay:1.0, dur:3.3},
    {flag:'🇹🇷', name:'Turkish',  color:'#E84142', x:18, y:82, delay:.3,  dur:2.9},
    {flag:'🇮🇪', name:'Irish',    color:'#169B62', x:2,  y:38, delay:.7,  dur:3.1},
    {flag:'🇪🇸', name:'Spanish',  color:'#F5A623', x:38, y:88, delay:.5,  dur:2.7},
    {flag:'🇩🇪', name:'German',   color:'#5B9BD5', x:90, y:18, delay:.9,  dur:3.4},
  ];
  const orbsContainer = document.getElementById('splashOrbs');
  if(orbsContainer){
    orbsContainer.innerHTML = orbData.map(o=>`
      <div class="splash-orb" style="
        left:${o.x}%;top:${o.y}%;
        width:52px;height:52px;
        background:${o.color}18;
        border-color:${o.color}55;
        animation-duration:${o.dur}s;
        animation-delay:${o.delay}s;
        box-shadow:0 0 16px ${o.color}33, inset 0 0 12px ${o.color}22;
        color:${o.color};
      ">
        <span style="font-size:22px;">${o.flag}</span>
        <span class="splash-orb-lbl" style="color:${o.color}88;">${o.name.slice(0,3)}</span>
      </div>
    `).join('');
  }

  // ── Splash particles ──
  const particlesBox = document.getElementById('splashParticles');
  function spawnParticle(){
    if(!particlesBox) return;
    const p = document.createElement('div');
    const colors=['#58CC02','#1CB0F6','#FFD700','#CE82FF','#FF9600'];
    const col = colors[Math.floor(Math.random()*colors.length)];
    const sz = 4+Math.random()*6;
    p.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;background:${col};left:${10+Math.random()*80}%;top:${50+Math.random()*40}%;animation:particleFly ${1.5+Math.random()*1.5}s ease forwards;opacity:0;`;
    particlesBox.appendChild(p);
    setTimeout(()=>p.remove(),3000);
  }
  const partTimer = setInterval(spawnParticle,200);

  // ── Splash tagline animation ──
  const taglines=[
    {text:'Urdu se Duniya Ki Har Learn Languages', sub:'10 Languages Available'},
    {text:'English — Bonjour se Business tak',   sub:'Most Popular • 1 Billion Speakers'},
    {text:'French — Learn the Language of Paris',      sub:'300 Million Speakers Worldwide'},
    {text:'Chinese — Duniya ki sabse boli zubaan',sub:'1.4 Billion Speakers'},
    {text:'Arabic — Quran ki Mubarak Zubaan',     sub:'Deen aur Duniya ke liye'},
    {text:'Korean — K-Drama ki Learn Languages',    sub:'BTS, Squid Game aur mazeed!'},
    {text:'Japanese — Anime ki Learn Languages',    sub:'Anime, Manga aur Japan'},
    {text:'Turkish — Ertugrul ki Learn Languages',  sub:'Ottoman Glory aur Turkey'},
    {text:'Irish — Europe ki Qadeem Zubaan',      sub:'Gaeilge — Celtic Culture'},
    {text:'Spanish — 500 Million Logon Ki Zubaan',sub:'Latin America aur Spain'},
    {text:'German — Europe Ki Engine Ki Zubaan',  sub:'Engineering & Business'},
  ];
  let ti=0;
  const l1=document.getElementById('splashLine1');
  const lf=document.getElementById('splashFlags');
  function cycleTagline(){
    if(!l1||!lf) return;
    l1.style.opacity='0';lf.style.opacity='0';
    setTimeout(()=>{
      ti=(ti+1)%taglines.length;
      l1.textContent=taglines[ti].text;
      lf.textContent=taglines[ti].sub;
      l1.style.opacity='1';lf.style.opacity='1';
    },400);
  }
  const tagTimer=setInterval(cycleTagline,1800);

  setTimeout(()=>{
    clearInterval(tagTimer);
    clearInterval(partTimer);
    const loggedIn=getLoggedInUser();
    // If already logged in, skip auth
    if(loggedIn){
      IS_GUEST=false;
      const users=loadUsers();
      const u=users.find(x=>x.username===loggedIn);
      if(u&&u.profileId){
        const p=PROFILES.find(x=>x.id===u.profileId);
        if(p) setActiveProfile(u.profileId);
      }
      afterAuth();
    } else {
      // Logged out ya fresh start — hamesha auth screen dikhao
      // (su_wasGuest auto-continue band kar diya — user ko login karna hoga)
      localStorage.removeItem('su_wasGuest');
      showScreen('authScreen');
    }
  },3600);
});