// ══════════════════════════════════════════════════
// SpeakUp v8 — 08-pro-system.js
// Pro System — isPro(), checkProFromFirebase, expiry watcher
// ══════════════════════════════════════════════════

return null;
  })();

  // If lesson not ready yet — show coming soon
  if(!dayData){
    const isEn=(lang==='en');
    return [
      {t:'sh',ic:'🚀',cl:'#FF9600',
       ti: isEn ? `Day ${dayNum} — Jald Aayega! 🔜` : 'Coming Soon!',
       su: isEn ? `Yeh lesson abhi tayar ho raha hai. Jald upload hoga! Pehle waale lessons repeat karo. 💪` : `Lesson ${lessonNum} jald aayega!`},
      {t:'done'}
    ];
  }

  const D = dayData;
  let s = [];

  // ── Helper: slice array into portion ──
  // portion 0 = first half/third, 1 = second half/third, 2 = last third
  function slicePortion(arr, totalPortions){
    if(!arr || !Array.isArray(arr)) return []; // undefined ya non-array safe handling
    if(totalPortions===1) return arr; // full
    const size = Math.ceil(arr.length / totalPortions);
    const start = portion * size;
    const end   = Math.min(start + size, arr.length);
    return arr.slice(start, end);
  }

  const totalPortions = (course===30||course===7) ? 1 : (course===60) ? 2 : 3;

  // Story ke lines bhi handle karo — story.lines ya story.paragraphs dono
  const storyLines = D.story ? (D.story.lines || D.story.paragraphs || []) : [];
  // Story ko ek consistent format mein lao
  if(D.story && D.story.paragraphs && !D.story.lines){
    D.story.lines = D.story.paragraphs;
  }

  const vocab    = slicePortion(D.vocab,     totalPortions);
  const sents    = slicePortion(D.sentences, totalPortions);
  const grams    = slicePortion(D.grammar,   totalPortions);
  const quizFull = slicePortion(D.quizzes,   totalPortions);

  // ── Portion label for header ──
  const portionLabel = totalPortions===1 ? '' :
    totalPortions===2 ? (portion===0?' — Part 1/2':' — Part 2/2') :
    [' — Part 1/3',' — Part 2/3',' — Part 3/3'][portion];

  const timeLabel = (course===7||course===30)?'2 hours':(course===60)?'1 ghanta':'30 minutes';

  // Split quiz into mini (first 2) + final (rest)
  const miniQs = quizFull.slice(0,2);
  const finalQs = quizFull.slice(2);

  // ── Lesson header ──
  s.push({t:'sh',ic:D.emoji,cl:D.color,
    ti:`Day ${dayNum}: ${D.themeEn}${portionLabel}`,
    su:`${D.theme} — ${timeLabel} ki class`,
    isFirst:true});

  // ── VOCAB SECTION ──
  if(vocab.length>0){
    s.push({t:'sh',ic:'📖',cl:'#58CC02',ti:'Vocabulary',su:`${vocab.length} naye alfaaz seekho`});
    vocab.forEach((v,i)=>s.push({t:'vc',d:v,n:i+1}));
    if(miniQs.length>0) s.push({t:'mq',ql:miniQs,lb:'Vocab Check'});
  }

  // ── SENTENCES SECTION ──
  if(sents.length>0){
    s.push({t:'sh',ic:'🗣️',cl:'#CE82FF',ti:'Conversations',su:`${sents.length} zaroori sentences`});
    sents.forEach(x=>s.push({t:'sn',d:x}));
    const sentQs = quizFull.slice(4,6).filter(Boolean);
    if(sentQs.length>0) s.push({t:'mq',ql:sentQs,lb:'Sentence Quiz'});
  }

  // ── GRAMMAR SECTION ──
  if(grams.length>0){
    s.push({t:'sh',ic:'✏️',cl:'#FF9600',ti:'Grammar',su:`${grams.length} grammar rule${grams.length>1?'s':''}`});
    grams.forEach(g=>s.push({t:'gr',d:g}));
    const gramQs = quizFull.slice(2,4).filter(Boolean);
    if(gramQs.length>0) s.push({t:'mq',ql:gramQs,lb:'Grammar Quiz'});
  }

  // ── STORY SECTION (sirf pehle portion mein ya full) ──
  if(D.story && (totalPortions===1 || portion===0)){
    s.push({t:'sh',ic:'📚',cl:'#CE82FF',ti:'Story Time',su:'English mein story — samjho'});
    // paragraphs ya lines — dono handle karo
    const storyParas = D.story.paragraphs || D.story.lines || [];
    if(totalPortions>1 && storyParas.length){
      const storySlice = slicePortion(storyParas, totalPortions);
      const partialStory = Object.assign({}, D.story, {paragraphs: storySlice, lines: storySlice});
      s.push({t:'st', d:partialStory});
    } else {
      s.push({t:'st', d:D.story});
    }
    const storyQ = quizFull[quizFull.length-1];
    if(storyQ) s.push({t:'mq',ql:[storyQ],lb:'Story Quiz'});
  }

  // ── FINAL QUIZ ──
  if(finalQs.length>0){
    s.push({t:'sh',ic:'🎯',cl:'#FFD700',
      ti:'Final Quiz',su:`${finalQs.length} sawaal — kya seekha aaj?`});
    finalQs.forEach((q,i)=>s.push({t:'qz',d:q,n:i+1,tot:finalQs.length}));
  }

  s.push({t:'done'});
  return s;
}

let wrongQs=[];  // track wrong questions for retry
// ══════════════════════════════════════════
// PRO SYSTEM
// ══════════════════════════════════════════
const FREE_DAYS_LIMIT = 3; // Admin se change hoga baad mein
const WHATSAPP_NUM = '923410101415';

// ══════════════════════════════════════════════════════════════
// ── HEART MODE SYSTEM ──
// Pro users ke liye 2 modes:
//   'unlimited' → hearts kabhi khatam nahi (default for Pro)
//   '5hearts'   → 5 galti = lesson over, dashboard pe reset
// Free users → hamesha '5hearts' mode, koi choice nahi
// Mode localStorage mein save hota hai per-user
// ══════════════════════════════════════════════════════════════

function getHeartModeKey(){
  try{
    const uid = window.FB_AUTH?.currentUser?.uid;
    return uid ? ('su_heartMode_'+uid) : 'su_heartMode_guest';
  }catch(e){ return 'su_heartMode_guest'; }
}

function getHeartMode(){
  // Free user — hamesha 5hearts
  if(!isPro()) return '5hearts';
  // Pro user — localStorage se mode lo, default unlimited
  try{
    return localStorage.getItem(getHeartModeKey()) || 'unlimited';
  }catch(e){ return 'unlimited'; }
}

function setHeartMode(mode){
  // Sirf Pro user set kar sakta hai
  if(!isPro()) return;
  try{
    localStorage.setItem(getHeartModeKey(), mode);
    // Dashboard heart display update karo
    updateTopHeartsDisplay();
  }catch(e){}
}

function isUnlimitedHearts(){
  return getHeartMode() === 'unlimited';
}

// Dashboard top mein hearts display update karo
function updateTopHeartsDisplay(){
  const th = document.getElementById('topHearts');
  if(!th) return;
  if(!isPro()){
    // Free user — su_hearts_v1 se live hearts lo
    try{
      var hs = JSON.parse(localStorage.getItem('su_hearts_v1')||'null') || {hearts:5,lastLostAt:null};
      var regenMs = 3*60*1000;
      if(hs.lastLostAt){ var rg=Math.floor((Date.now()-hs.lastLostAt)/regenMs); if(rg>0) hs.hearts=Math.min(5,hs.hearts+rg); }
      th.textContent = Math.max(0,Math.min(5,hs.hearts));
    }catch(e){ th.textContent = 5; }
    th.style.fontSize = '13px';
  } else if(isUnlimitedHearts()){
    th.textContent = '∞';
    th.style.fontSize = '20px';
  } else {
    const cs = CS();
    const maxHearts = getAdminMaxHearts();
    const hearts = cs.hearts !== undefined ? Math.max(0, Math.min(cs.hearts, maxHearts)) : maxHearts;
    th.textContent = hearts;
    th.style.fontSize = '13px';
  }
}

// Hearts deduct karo — Pro unlimited mode mein kuch nahi hoga
function deductHeart(){
  if(isUnlimitedHearts()) return false; // false = heart nahi kata, lesson continue
  if(hl > 0) hl--;
  return hl === 0; // true = hearts khatam, lesson over
}

// Dashboard pe aane pe hearts reset karo (5hearts mode mein)
function resetHeartsOnDashboard(){
  if(isUnlimitedHearts()) return;
  const cs = CS();
  const maxH = getAdminMaxHearts();
  cs.hearts = maxH;
  save();
  updateTopHeartsDisplay();
}

// Heart icon click handler — sabke liye heart screen kholo
function onTopHeartClick(){
  showHeartScreen();
}

function showHeartModePopup(){
  const current = getHeartMode();
  const existing = document.getElementById('heartModePopup');
  if(existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'heartModePopup';
  popup.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    display:flex;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);
  `;
  popup.innerHTML = `
    <div style="
      background:var(--bg2,#1a1a2e);
      border:1.5px solid rgba(255,255,255,0.12);
      border-radius:20px;padding:28px 24px;
      max-width:320px;width:90%;
      box-shadow:0 20px 60px rgba(0,0,0,0.5);
      font-family:'Fredoka One',sans-serif;
    ">
      <div style="text-align:center;font-size:22px;margin-bottom:6px;">❤️ Heart Mode</div>
      <div style="text-align:center;font-size:13px;color:var(--mut,#888);margin-bottom:22px;">
        Pro feature — apna mode chunein
      </div>

      <div onclick="setHeartMode('unlimited');document.getElementById('heartModePopup').remove();renderDash();"
        style="
          cursor:pointer;border-radius:14px;padding:16px;margin-bottom:12px;
          border:2px solid ${current==='unlimited'?'#FFD700':'rgba(255,255,255,0.1)'};
          background:${current==='unlimited'?'rgba(255,215,0,0.08)':'rgba(255,255,255,0.03)'};
          transition:all .2s;
        ">
        <div style="font-size:18px;margin-bottom:4px;">♾️ Unlimited Hearts</div>
        <div style="font-size:12px;color:var(--mut,#888);font-family:sans-serif;font-weight:400;">
          Galti karo jitni marzi — lesson kabhi nahi rukta
        </div>
        ${current==='unlimited'?'<div style="font-size:11px;color:#FFD700;margin-top:6px;">✓ Abhi active</div>':''}
      </div>

      <div onclick="setHeartMode('5hearts');document.getElementById('heartModePopup').remove();renderDash();"
        style="
          cursor:pointer;border-radius:14px;padding:16px;margin-bottom:20px;
          border:2px solid ${current==='5hearts'?'#FF4B4B':'rgba(255,255,255,0.1)'};
          background:${current==='5hearts'?'rgba(255,75,75,0.08)':'rgba(255,255,255,0.03)'};
          transition:all .2s;
        ">
        <div style="font-size:18px;margin-bottom:4px;">❤️ 5 Hearts Mode</div>
        <div style="font-size:12px;color:var(--mut,#888);font-family:sans-serif;font-weight:400;">
          5 mistakes ends lesson — challenge mode
        </div>
        ${current==='5hearts'?'<div style="font-size:11px;color:#FF4B4B;margin-top:6px;">✓ Abhi active</div>':''}
      </div>

      <button onclick="document.getElementById('heartModePopup').remove();"
        style="
          width:100%;padding:12px;border-radius:12px;border:none;
          background:rgba(255,255,255,0.08);color:var(--txt,#fff);
          font-family:'Fredoka One',sans-serif;font-size:15px;cursor:pointer;
        ">Cancel</button>
    </div>
  `;
  document.body.appendChild(popup);
  // Bahar click pe close
  popup.addEventListener('click', function(e){
    if(e.target===popup) popup.remove();
  });
}

function isDemo(){
  try{
    const user = window.FB_AUTH?.currentUser;
    if(!user) return false;
    const uid = user.uid;
    // ✅ FIX 1: UID se check karo (primary)
    const demoData = JSON.parse(localStorage.getItem('su_demo_'+uid)||'null');
    if(demoData){
      if(demoData.expiry && Date.now() > demoData.expiry){
        localStorage.removeItem('su_demo_'+uid);
      } else {
        return true;
      }
    }
    // Debug: koi data nahi mila localStorage mein
    // showToast('isDemo: localStorage mein nahi mila uid='+uid.substring(0,8), '#888');
    // ✅ FIX 2: Email-key se bhi check karo (fallback — agar uid-based key miss hua)
    const emailKey = (user.email||'').toLowerCase().replace(/[.@]/g,'_');
    if(emailKey){
      const allKeys = Object.keys(localStorage);
      for(const k of allKeys){
        if(k.startsWith('su_demo_')){
          try{
            const d = JSON.parse(localStorage.getItem(k)||'null');
            if(d && d.email && d.email.toLowerCase().replace(/[.@]/g,'_')===emailKey){
              if(!d.expiry || Date.now() <= d.expiry){
                // UID ke saath bhi save karo future ke liye
                localStorage.setItem('su_demo_'+uid, JSON.stringify(d));
                return true;
              }
            }
          }catch(e2){}
        }
      }
    }
    return false;
  } catch(e){ return false; }
}

// ✅ In-memory Pro cache — localStorage + Firebase dono
window._PRO_CACHE = null; // { expiry, plan, ... } ya null
// ✅ FIX: Track last Firebase verification time
window._PRO_LAST_VERIFY = 0;

// ✅ CRITICAL FIX: App open hote hi localStorage se Pro cache restore karo
// Taake isPro() = true ho PEHLE bhi jab onAuthStateChanged fire na hua ho
// Yeh 5-6 ghante baad app open karne pe Pro show na hone ka masla hal karta hai
(function restoreProCacheOnStartup(){
  try{
    // saari localStorage keys mein speakup_pro_ dhundho
    for(var i = 0; i < localStorage.length; i++){
      var k = localStorage.key(i);
      if(k && k.indexOf('speakup_pro_') === 0){
        var cached = JSON.parse(localStorage.getItem(k) || 'null');
        if(cached){
          if(!cached.expiry || Date.now() <= cached.expiry){
            window._PRO_CACHE = cached; // ✅ Turant restore
            console.log('✅ Pro cache startup pe restore ho gaya');
          } else {
            localStorage.removeItem(k); // expire ho gaya
            console.log('⏰ Pro cache expire ho gayi thi — remove kar diya');
          }
        }
        break; // pehla valid key mil gaya
      }
    }
  } catch(e){}
})();

function isPro(){
  try{
    if(typeof IS_GUEST !== 'undefined' && IS_GUEST) return false;
    // ✅ FIX: Agar _PRO_CACHE pehle se hai (startup restore) toh getLoggedInUser check skip karo
    // Warna app open pe Pro show nahi hota jab tak onAuthStateChanged fire na ho
    if(!window._PRO_CACHE){
      if(typeof getLoggedInUser === 'function' && !getLoggedInUser()) return false;
    }
    const uid = window.FB_AUTH?.currentUser?.uid;
    // ✅ FIX: uid nahi hai but _PRO_CACHE restore hua hai toh Pro return karo
    // (page reload ke waqt Firebase late fire karta hai)
    if(!uid){
      if(window._PRO_CACHE && (!window._PRO_CACHE.expiry || Date.now() <= window._PRO_CACHE.expiry)){
        return true; // localStorage se restored Pro cache
      }
      return false;
    }
    if(isDemo()) return true;
    // 1. In-memory cache check
    if(window._PRO_CACHE){
      if(!window._PRO_CACHE.expiry) return true; // lifetime
      if(Date.now() <= window._PRO_CACHE.expiry){
        // ✅ FIX: Agar 6+ ghante ho gayi hain toh background mein fresh verify karo
        // UI block mat karo — Pro rehne do, lekin silently re-check karo
        const SIX_HOURS = 6 * 60 * 60 * 1000;
        if(Date.now() - window._PRO_LAST_VERIFY > SIX_HOURS && window.FIREBASE_READY){
          window._PRO_LAST_VERIFY = Date.now(); // prevent multiple calls
          setTimeout(function(){
            if(typeof checkProFromFirebase === 'function') checkProFromFirebase().catch(function(){});
          }, 2000);
        }
        return true;
      }
    }
    // 2. localStorage fallback — refresh ke baad bhi kaam kare
    try{
      const lsKey = 'speakup_pro_' + uid;
      const cached = JSON.parse(localStorage.getItem(lsKey) || 'null');
      if(cached){
        if(!cached.expiry) return true; // lifetime
        if(Date.now() <= cached.expiry){
          window._PRO_CACHE = cached; // memory mein restore karo
          // ✅ FIX: Background mein Firebase se verify karo (non-blocking)
          const SIX_HOURS = 6 * 60 * 60 * 1000;
          if(Date.now() - window._PRO_LAST_VERIFY > SIX_HOURS && window.FIREBASE_READY){
            window._PRO_LAST_VERIFY = Date.now();
            setTimeout(function(){
              if(typeof checkProFromFirebase === 'function') checkProFromFirebase().catch(function(){});
            }, 3000);
          }
          return true;
        } else {
          localStorage.removeItem(lsKey); // expire ho gaya
        }
      }
    } catch(e2){}
    return false;
  } catch(e){ return false; }
}

async function checkDemoFromFirebase(){
  try{
    const user = window.FB_AUTH?.currentUser;
    if(!user){ console.log('[Demo] No user logged in'); return; }
    // ✅ FIX: FB_DB ready nahi toh max 6 second wait karo
    if(!window.FB_DB || !window.FB_GET || !window.FB_REF){
      let waited = 0;
      while((!window.FB_DB || !window.FB_GET || !window.FB_REF) && waited < 6000){
        await new Promise(r => setTimeout(r, 200));
        waited += 200;
      }
    }
    if(!window.FB_DB || !window.FB_GET || !window.FB_REF){ showToast('❌ Firebase DB ready nahi', '#FF6B6B'); return; }
    const uid = user.uid;
    const email = (user.email || '').toLowerCase();
    const emailKey = email.replace(/[.@]/g,'_');
    // Debug removed
    let snap;
    try{
      snap = await window.FB_GET(window.FB_REF(window.FB_DB, 'demoAccounts/'+emailKey));
    } catch(fetchErr){
      // Silent fail - login page pe error toast nahi dikhana
      return;
    }
    // snap check continues below

    if(snap.exists()){
      const demoData = snap.val();

      // Expiry check
      if(demoData.expiry && Date.now() > demoData.expiry){
        localStorage.removeItem('su_demo_'+uid);
        return;
      }
      localStorage.setItem('su_demo_'+uid, JSON.stringify(demoData));
      // ✅ FIX: UI ko properly refresh karo — lock popup hatao, dash + prof re-render karo
      setTimeout(function(){
        try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
        try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
        // ✅ FIX: renderPath bhi call karo taake nodes unlock hon
        try{
          const _cs = typeof CS==='function'?CS():null;
          const _ac = typeof AC==='function'?AC():30;
          if(_cs && typeof renderPath==='function') renderPath(_ac, _cs);
        }catch(e){}
        const pop = document.getElementById('proLockPopup');
        if(pop) pop.remove();
        document.querySelectorAll('.pro-lock-overlay,.pro-blur-overlay').forEach(function(el){ try{ el.remove(); }catch(e){} });
      }, 150);
    } else {
      localStorage.removeItem('su_demo_'+uid);
    }
  } catch(e){ console.warn('checkDemoFromFirebase error:', e); }
}

async function checkProFromFirebase(){
  try{
    const user = window.FB_AUTH?.currentUser;
    if(!window.FIREBASE_READY){
      let waited = 0;
      while(!window.FIREBASE_READY && waited < 5000){
        await new Promise(r => setTimeout(r, 200));
        waited += 200;
      }
    }
    if(!user || !window.FIREBASE_READY) return;
    const uid = user.uid;
    const email = user.email || getLoggedInUser() || '';
    const emailKey = email.toLowerCase().replace(/[.@]/g,'_');

    // ✅ FIX: In-memory cache + localStorage — refresh/restart pe bhi Pro rahe
    function _save(data){
      if(!data.uid) data = Object.assign({}, data, {uid: uid});
      // Sirf update karo agar data change hua
      var sameData = window._PRO_CACHE &&
        window._PRO_CACHE.expiry === data.expiry &&
        window._PRO_CACHE.plan === data.plan;
      if(sameData) return; // koi change nahi — render mat karo
      window._PRO_CACHE = data;
      // localStorage mein bhi save karo — refresh ke baad bhi Pro rahe
      try{ localStorage.setItem('speakup_pro_'+uid, JSON.stringify(data)); }catch(e2){}
      try{ window.FB_SET(window.FB_REF(window.FB_DB,'emailToUid/'+emailKey), uid).catch(function(){}); }catch(e2){}
      setTimeout(function(){
        try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
        try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
        const pop=document.getElementById('proLockPopup');
        if(pop) pop.remove();
      }, 300);
    }

    function _clearPro(){
      if(window._PRO_CACHE === null) return; // pehle se null — render mat karo
      window._PRO_CACHE = null;
      // localStorage bhi clear karo
      try{ localStorage.removeItem('speakup_pro_'+uid); }catch(e2){}
      setTimeout(function(){
        try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
        try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
      }, 300);
    }

    // ✅ FIX: Har Firebase call alag try/catch mein — ek fail ho toh baaki check hote rahein
    // ✅ FIX: anyError track karo — error pe _clearPro mat karo (network issue se Pro gum na ho)
    let anyError = false;

    // 1. users/{uid}/proSub
    let s1 = null;
    try{ s1 = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/proSub')); }
    catch(e){ console.warn('checkPro s1 error:', e.message); anyError = true; }
    if(s1 && s1.exists()){
      const d1 = s1.val();
      if(d1.expiry && Date.now() > d1.expiry){
        try{ await window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/proSub'), null); }catch(e2){}
        try{ await window.FB_SET(window.FB_REF(window.FB_DB,'proByEmail/'+emailKey), null); }catch(e2){}
        _clearPro(); return;
      }
      _save(d1); return;
    }

    // 2. proByEmail/{key}
    let s2 = null;
    try{ s2 = await window.FB_GET(window.FB_REF(window.FB_DB, 'proByEmail/'+emailKey)); }
    catch(e){ console.warn('checkPro s2 error:', e.message); anyError = true; }
    if(s2 && s2.exists()){
      const d2 = s2.val();
      if(d2.expiry && Date.now() > d2.expiry){
        try{ await window.FB_SET(window.FB_REF(window.FB_DB,'proByEmail/'+emailKey), null); }catch(e2){}
        _clearPro(); return;
      }
      _save(d2);
      try{ await window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/proSub'),d2); }catch(e2){}
      return;
    }

    // 3. proUsers/{key}
    let s3 = null;
    try{ s3 = await window.FB_GET(window.FB_REF(window.FB_DB, 'proUsers/'+emailKey)); }
    catch(e){ console.warn('checkPro s3 error:', e.message); anyError = true; }
    if(s3 && s3.exists()){
      const d3 = s3.val();
      if(d3.expiry && Date.now() > d3.expiry){
        try{ await window.FB_SET(window.FB_REF(window.FB_DB,'proUsers/'+emailKey), null); }catch(e2){}
        _clearPro(); return;
      }
      _save(d3);
      try{ await window.FB_SET(window.FB_REF(window.FB_DB,'proByEmail/'+emailKey),d3); }catch(e2){}
      try{ await window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/proSub'),d3); }catch(e2){}
      return;
    }

    // 4. users/{uid}/pro (legacy)
    let s4 = null;
    try{ s4 = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/pro')); }
    catch(e){ console.warn('checkPro s4 error:', e.message); anyError = true; }
    if(s4 && s4.exists()){ _save(s4.val()); return; }

    // ✅ FIX: Agar koi Firebase error aaya toh localStorage mat chhedo
    // Network ya permission error se Pro wrongly clear hone se bachao
    if(anyError){
      console.warn('checkProFromFirebase: Firebase errors the, localStorage unchanged');
      return;
    }

    // Koi bhi pro record nahi mila — clear karo
    _clearPro();

  } catch(e){ console.warn('checkProFromFirebase outer error:', e); }
}

function showProPopup(dayNum){
  // Shake animation
  const nodes = document.querySelectorAll('.pnode');
  nodes.forEach(n=>{
    if(n.querySelector('.pnode-num') && n.querySelector('.pnode-num').textContent == String(dayNum)){
      n.style.transform='translateX(-6px)';
      setTimeout(()=>{ n.style.transform='translateX(6px)'; },80);
      setTimeout(()=>{ n.style.transform='translateX(0)'; n.style.transition='transform .2s'; },160);
    }
  });

  let pop = document.getElementById('proLockPopup');
  if(pop) pop.remove();
  pop = document.createElement('div');
  pop.id = 'proLockPopup';
  pop.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;display:flex;align-items:flex-end;justify-content:center;padding:0;';
  pop.innerHTML=`
  <div style="background:var(--bg);border-radius:24px 24px 0 0;padding:28px 22px 36px;max-width:420px;width:100%;text-align:center;animation:slideUp .35s ease;border-top:2px solid rgba(255,215,0,.3);">
    <div style="width:40px;height:4px;background:var(--bdr);border-radius:4px;margin:0 auto 20px;"></div>
    <div style="font-size:52px;margin-bottom:10px;">👑</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:24px;background:linear-gradient(135deg,#FFD700,#FF9500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;">Pro Feature!</div>
    <div style="font-size:14px;color:var(--mut);margin-bottom:20px;line-height:1.6;">Day ${dayNum} sirf <b style="color:var(--txt);">Pro Members</b> ke liye hai.<br>Get Pro today and unlock all days! 🚀</div>

    <div style="display:flex;gap:10px;margin-bottom:16px;">
      <div onclick="showPayPopup('2week')" style="flex:1;background:var(--card);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 8px;cursor:pointer;transition:.2s;" onmouseover="this.style.borderColor='#FFD700'" onmouseout="this.style.borderColor='var(--bdr)'">
        <div style="font-size:11px;color:var(--mut);margin-bottom:2px;">🔥 2 Weeks</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:var(--txt);">Rs. 300</div>
      </div>
      <div onclick="showPayPopup('month')" style="flex:1;background:linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,149,0,.1));border:2px solid #FFD700;border-radius:14px;padding:12px 8px;cursor:pointer;position:relative;">
        <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#FFD700,#FF9500);border-radius:20px;padding:2px 10px;font-size:10px;font-weight:800;color:#000;">⭐ POPULAR</div>
        <div style="font-size:11px;color:var(--mut);margin-bottom:2px;">1 Month</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:#FFD700;">Rs. 500</div>
      </div>
      <div onclick="showPayPopup('year')" style="flex:1;background:var(--card);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 8px;cursor:pointer;transition:.2s;" onmouseover="this.style.borderColor='#FFD700'" onmouseout="this.style.borderColor='var(--bdr)'">
        <div style="font-size:11px;color:var(--mut);margin-bottom:2px;">👑 1 Year</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:var(--txt);">Rs. 4000</div>
      </div>
    </div>

    <button onclick="document.getElementById('proLockPopup').remove();showProScreen(${dayNum});" style="width:100%;padding:13px;background:linear-gradient(135deg,#FFD700,#FF9500);border:none;border-radius:12px;color:#000;font-family:'Fredoka One',sans-serif;font-size:15px;cursor:pointer;margin-bottom:8px;box-shadow:0 4px 16px rgba(255,215,0,.4);font-weight:800;">👑 Pro Plans Dekho &amp; Upgrade</button>
    <button onclick="document.getElementById('proLockPopup').remove();" style="width:100%;padding:10px;background:transparent;border:1px solid var(--bdr);border-radius:12px;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">Baad Mein</button>
  </div>`;
  document.body.appendChild(pop);
  pop.addEventListener('click', e=>{ if(e.target===pop) pop.remove(); });
}

function showCancelSubPopup(){
  var uid = window.FB_AUTH && window.FB_AUTH.currentUser ? window.FB_AUTH.currentUser.uid : null;
  var d = uid ? (window._PRO_CACHE || null) : null; // ✅ in-memory cache
  var plan = (d && d.plan) ? d.plan : '';
  var expiry = (d && d.expiry) ? d.expiry : 0;
  var planDays = (plan==='2week'||plan==='15din') ? 15 : plan==='month' ? 30 : 365;
  var startTs = (d && d.startedAt) ? d.startedAt : (expiry - planDays*86400000);
  var daysUsed = Math.max(0, Math.floor((Date.now()-startTs)/86400000));
  var refundAmount=0, refundMsg='', eligible=false;
  if(plan==='2week'||plan==='15din'){
    if(daysUsed<7){eligible=true;refundAmount=150;refundMsg='15 Din plan - 7 din se pehle cancel - Rs.150 half refund milega';}
    else{refundMsg='7 din guzar gaye - refund eligible nahi';}
  } else if(plan==='month'){
    if(daysUsed<15){eligible=true;refundAmount=250;refundMsg='1 Month plan - 15 din se pehle cancel - Rs.250 half refund milega';}
    else{refundMsg='15 din guzar gaye - refund eligible nahi';}
  } else if(plan==='year'){
    if(Math.floor(daysUsed/30)<3){eligible=true;refundAmount=2000;refundMsg='1 Year plan - 3 mahine se pehle cancel - Rs.2000 half refund milega';}
    else{refundMsg='3 mahine guzar gaye - refund eligible nahi';}
  } else {
    refundMsg='Plan info nahi mili - admin se contact karo';
  }
  var userEmail = (window.FB_AUTH && window.FB_AUTH.currentUser) ? window.FB_AUTH.currentUser.email : 'N/A';
  var waText = 'Assalam o Alaikum! SpeakUp Pro subscription cancel karna chahta hoon. Email: '+userEmail+' Plan: '+plan+' Days Used: '+daysUsed+(eligible?' Refund: Rs.'+refundAmount:' Refund: Eligible Nahi');
  var waMsg = encodeURIComponent(waText);
  var pop = document.getElementById('cancelSubPopup');
  if(pop) pop.remove();
  pop = document.createElement('div');
  pop.id = 'cancelSubPopup';
  pop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:99999;display:flex;align-items:flex-end;justify-content:center;';
  var bgR = eligible ? 'rgba(46,229,157,.08)' : 'rgba(255,107,107,.08)';
  var brR = eligible ? 'rgba(46,229,157,.3)' : 'rgba(255,107,107,.3)';
  var html = '<div style="background:var(--bg);border-radius:24px 24px 0 0;padding:26px 20px 36px;max-width:420px;width:100%;text-align:center;">';
  html += '<div style="width:40px;height:4px;background:var(--bdr);border-radius:4px;margin:0 auto 18px;"></div>';
  html += '<div style="font-size:44px;margin-bottom:6px;">&#10060;</div>';
  html += '<div style="font-family:Fredoka One,sans-serif;font-size:22px;color:var(--txt);margin-bottom:4px;">Subscription Cancel</div>';
  html += '<div style="font-size:12px;color:var(--mut);margin-bottom:14px;">Account becomes Free immediately after cancel</div>';
  html += '<div style="background:'+bgR+';border:1.5px solid '+brR+';border-radius:14px;padding:14px;margin-bottom:14px;text-align:left;">';
  html += '<div style="font-size:10px;font-weight:800;text-transform:uppercase;color:var(--mut);margin-bottom:6px;">Refund Policy</div>';
  html += '<div style="font-size:13px;color:var(--txt);line-height:1.7;">'+refundMsg+'</div>';
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--mut);margin-bottom:12px;">Contact admin on WhatsApp to cancel</div>';
  html += '<button onclick="window.open(\'https://wa.me/923410101415?text='+waMsg+'\',\'_blank\')" style="width:100%;padding:13px;background:#25D366;border:none;border-radius:14px;color:#fff;font-family:Fredoka One,sans-serif;font-size:15px;cursor:pointer;font-weight:800;margin-bottom:8px;">💬 Cancel via WhatsApp</button>';
  html += '<button onclick="document.getElementById(\'cancelSubPopup\').remove();" style="width:100%;padding:11px;background:transparent;border:1px solid var(--bdr);border-radius:14px;color:var(--mut);font-family:Fredoka One,sans-serif;font-size:14px;cursor:pointer;">Go Back</button>';
  html += '</div>';
  pop.innerHTML = html;
  document.body.appendChild(pop);
  pop.addEventListener('click', function(e){ if(e.target===pop) pop.remove(); });
}

function showPaperProPopup(){
  var pop = document.getElementById('paperProPopup');
  if(pop) pop.remove();
  pop = document.createElement('div');
  pop.id = 'paperProPopup';
  pop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:99999;display:flex;align-items:flex-end;justify-content:center;';
  var html = '<div style="background:var(--bg);border-radius:24px 24px 0 0;padding:28px 22px 36px;max-width:420px;width:100%;text-align:center;">';
  html += '<div style="width:40px;height:4px;background:var(--bdr);border-radius:4px;margin:0 auto 20px;"></div>';
  html += '<div style="font-size:52px;margin-bottom:10px;">📄👑</div>';
  html += '<div style="font-family:Fredoka One,sans-serif;font-size:22px;background:linear-gradient(135deg,#FFD700,#FF9500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;">Past Papers - Pro Only!</div>';
  html += '<div style="font-size:13px;color:var(--mut);margin-bottom:18px;">Pro Account required to view Past Papers.</div>';
  html += '<div style="display:flex;gap:10px;margin-bottom:16px;">';
  html += '<div onclick="document.getElementById(\'paperProPopup\').remove();showPayPopup(\'2week\')" style="flex:1;background:var(--card);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 8px;cursor:pointer;"><div style="font-size:11px;color:var(--mut);">2 Weeks</div><div style="font-size:17px;font-weight:700;color:var(--txt);">Rs.300</div></div>';
  html += '<div onclick="document.getElementById(\'paperProPopup\').remove();showPayPopup(\'month\')" style="flex:1;background:linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,149,0,.1));border:2px solid #FFD700;border-radius:14px;padding:12px 8px;cursor:pointer;position:relative;"><div style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);background:#FFD700;border-radius:20px;padding:2px 8px;font-size:9px;font-weight:800;color:#000;">POPULAR</div><div style="font-size:11px;color:var(--mut);">1 Month</div><div style="font-size:17px;font-weight:700;color:#FFD700;">Rs.500</div></div>';
  html += '<div onclick="document.getElementById(\'paperProPopup\').remove();showPayPopup(\'year\')" style="flex:1;background:var(--card);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 8px;cursor:pointer;"><div style="font-size:11px;color:var(--mut);">1 Year</div><div style="font-size:17px;font-weight:700;color:var(--txt);">Rs.4000</div></div>';
  html += '</div>';
  html += '<button onclick="document.getElementById(\'paperProPopup\').remove();showProScreen(0);" style="width:100%;padding:13px;background:linear-gradient(135deg,#FFD700,#FF9500);border:none;border-radius:12px;color:#000;font-family:Fredoka One,sans-serif;font-size:15px;cursor:pointer;margin-bottom:8px;font-weight:800;">Pro Plans Dekho &amp; Upgrade</button>';
  html += '<button onclick="document.getElementById(\'paperProPopup\').remove();" style="width:100%;padding:10px;background:transparent;border:1px solid var(--bdr);border-radius:12px;color:var(--mut);font-family:Fredoka One,sans-serif;font-size:14px;cursor:pointer;">Baad Mein</button>';
  html += '</div>';
  pop.innerHTML = html;
  document.body.appendChild(pop);
  pop.addEventListener('click', function(e){ if(e.target===pop) pop.remove(); });
}

function showPayPopup(plan){
  const plans = {
    '2week': {label:'2 Weeks Plan', price:'Rs. 300', days:14},
    'month':  {label:'1 Month Plan', price:'Rs. 500', days:30},
    'year':   {label:'1 Year Plan',   price:'Rs. 4000', days:365},
  };
  const p = plans[plan];
  let pop = document.getElementById('payMethodPopup');
  if(pop) pop.remove();
  pop = document.createElement('div');
  pop.id = 'payMethodPopup';
  pop.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:100000;display:flex;align-items:flex-end;justify-content:center;';
  pop.innerHTML=`
  <div style="background:var(--bg);border-radius:24px 24px 0 0;padding:28px 22px 36px;max-width:420px;width:100%;animation:slideUp .3s ease;border-top:2px solid rgba(255,215,0,.3);">
    <div style="width:40px;height:4px;background:var(--bdr);border-radius:4px;margin:0 auto 18px;"></div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--txt);margin-bottom:4px;">Payment Ka Tarika</div>
    <div style="font-size:13px;color:var(--mut);margin-bottom:20px;">Send payment, then send screenshot on WhatsApp — Pro within 24 hours!</div>

    <!-- Plan badge -->
    <div style="background:linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,149,0,.1));border:1.5px solid #FFD700;border-radius:12px;padding:10px 14px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:13px;color:var(--txt);font-weight:700;">${p.label}</span>
      <span style="font-family:'Fredoka One',sans-serif;font-size:18px;color:#FFD700;">${p.price}</span>
    </div>

    <!-- Tabs -->
    <div style="display:flex;gap:8px;margin-bottom:16px;" id="payTabBtns">
      <button onclick="switchPayTab('jazzcash')" id="ptab-jazzcash" style="flex:1;padding:10px;border-radius:10px;border:2px solid #FF5C00;background:rgba(255,92,0,.12);color:#FF5C00;font-weight:800;font-size:13px;cursor:pointer;">📱 JazzCash</button>
      <button onclick="switchPayTab('nayapay')" id="ptab-nayapay" style="flex:1;padding:10px;border-radius:10px;border:1.5px solid var(--bdr);background:transparent;color:var(--mut);font-size:13px;cursor:pointer;">💜 Naya Pay</button>
    </div>

    <!-- JazzCash tab -->
    <div id="ptab-content-jazzcash" style="display:block;">
      <div style="background:var(--card);border:1px solid var(--bdr);border-radius:14px;padding:14px;margin-bottom:14px;">
        <div style="font-size:11px;color:var(--mut);margin-bottom:6px;">📱 JazzCash</div>
        <div style="font-size:13px;color:var(--txt);font-weight:700;margin-bottom:4px;">Adeel Younas</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--txt);">03410101415</div>
          <button onclick="navigator.clipboard.writeText('03410101415');showToast('✅ Copy ho gaya!','var(--g)');" style="padding:6px 12px;background:rgba(91,141,239,.15);border:1px solid rgba(91,141,239,.3);border-radius:8px;color:var(--b);font-size:12px;cursor:pointer;">📋 Copy</button>
        </div>
      </div>
    </div>

    <!-- Naya Pay tab -->
    <div id="ptab-content-nayapay" style="display:none;">
      <div style="background:var(--card);border:1px solid var(--bdr);border-radius:14px;padding:14px;margin-bottom:14px;">
        <div style="font-size:11px;color:var(--mut);margin-bottom:6px;">💜 Naya Pay</div>
        <div style="font-size:13px;color:var(--txt);font-weight:700;margin-bottom:4px;">Adeel Younas</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--txt);">03410101415</div>
          <button onclick="navigator.clipboard.writeText('03410101415');showToast('✅ Copy ho gaya!','var(--g)');" style="padding:6px 12px;background:rgba(91,141,239,.15);border:1px solid rgba(91,141,239,.3);border-radius:8px;color:var(--b);font-size:12px;cursor:pointer;">📋 Copy</button>
        </div>
      </div>
    </div>

    <!-- WhatsApp button -->
    <a href="https://wa.me/${WHATSAPP_NUM}?text=Assalam%20o%20Alaikum!%20Maine%20${encodeURIComponent(p.label)}%20(${encodeURIComponent(p.price)})%20ki%20payment%20ki%20hai.%20Mera%20email%3A%20${encodeURIComponent(getLoggedInUser()||'')}" target="_blank"
      style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:14px;background:linear-gradient(135deg,#25D366,#128C7E);border:none;border-radius:14px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;text-decoration:none;margin-bottom:10px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.886l6.194-1.623A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.516-5.16-1.416l-.369-.22-3.675.963.981-3.582-.241-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      WhatsApp Pe Screenshot Bhejo
    </a>
    <button onclick="document.getElementById('payMethodPopup').remove();" style="width:100%;padding:10px;background:transparent;border:1px solid var(--bdr);border-radius:12px;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">Cancel</button>
  </div>`;
  document.body.appendChild(pop);
  pop.addEventListener('click', e=>{ if(e.target===pop) pop.remove(); });
}

function switchPayTab(tab){
  ['jazzcash','nayapay'].forEach(t=>{
    const btn = document.getElementById('ptab-'+t);
    const content = document.getElementById('ptab-content-'+t);
    if(t===tab){
      btn.style.border='2px solid '+(t==='jazzcash'?'#FF5C00':'#7C3AED');
      btn.style.background=t==='jazzcash'?'rgba(255,92,0,.12)':'rgba(124,58,237,.12)';
      btn.style.color=t==='jazzcash'?'#FF5C00':'#7C3AED';
      btn.style.fontWeight='800';
      if(content) content.style.display='block';
    } else {
      btn.style.border='1.5px solid var(--bdr)';
      btn.style.background='transparent';
      btn.style.color='var(--mut)';
      btn.style.fontWeight='400';
      if(content) content.style.display='none';
    }
  });
}

async function showLockedToast(dayNum){
  const prevDay = dayNum - 1;
  // Day FREE_DAYS_LIMIT se zyada ho toh Pro popup
  if(dayNum > FREE_DAYS_LIMIT && !isPro()){
    // ✅ FIX: Sirf logged-in users ke liye live Firebase check karo
    const _u = window.FB_AUTH?.currentUser;
    if(_u && typeof checkDemoFromFirebase === 'function'){
      try{ await checkDemoFromFirebase(); }catch(e){}
    }
    if(!isPro()){
      showProPopup(dayNum);
      return;
    }
  }
  showToast('🔒 Day '+dayNum+' locked hai! Pehle Day '+prevDay+' complete karo.','#FF9A3C');
  // Small shake animation on the locked node
  const nodes = document.querySelectorAll('.pnode');
  nodes.forEach(n=>{
    if(n.querySelector('.pnode-num') && n.querySelector('.pnode-num').textContent == dayNum){
      n.style.animation='none';
      n.style.transform='translateX(-6px)';
      setTimeout(()=>{ n.style.transform='translateX(6px)'; },80);
      setTimeout(()=>{ n.style.transform='translateX(0)'; n.style.transition='transform .2s'; },160);
    }
  });
}

async function selectDay(d){
  // Guest mode — sirf Day 1 allowed
  if(IS_GUEST && d > 1){
    showGuestLockPopup();
    return;
  }
  // Pro check — Day FREE_DAYS_LIMIT se zyada sirf Pro users ke liye
  if(d > FREE_DAYS_LIMIT && !isPro()){
    // ✅ FIX: Sirf logged-in users ke liye live Firebase check karo
    const _u = window.FB_AUTH?.currentUser;

    if(_u && typeof checkDemoFromFirebase === 'function'){
      try{ await checkDemoFromFirebase(); }catch(e){ showToast('❌ Demo check error: '+e.message,'#FF6B6B'); }
    }
    // Dobara check karo Firebase check ke baad
    if(!isPro()){
      showProPopup(d);
      return;
    }
  }
  const cs=CS();
  // Sequential check — sirf demo accounts ke liye skip, pro ke liye bhi lagta hai
  if(!isDemo()){
    const maxDoneDay = cs.done.length > 0 ? Math.max(...cs.done) : 0;
    if(d > maxDoneDay + 1){
      showLockedToast(d);
      return;
    }
  }
  cs.day=d;
  save();
  goLesson();
}

// Get admin hearts setting (global for all profiles)
function getAdminMaxHearts(){
  try{
    // Use global AD if available (admin panel loaded), else read from localStorage
    if(typeof AD !== 'undefined' && AD && AD.settings && AD.settings.maxHearts){
      return AD.settings.maxHearts;
    }
    const raw = localStorage.getItem('speakup_admin');
    if(raw){
      const d = JSON.parse(raw);
      return (d.settings && d.settings.maxHearts) ? d.settings.maxHearts : 3;
    }
    return 3;
  }catch(e){ return 3; }
}

// ── Firebase se Admin Settings load karo (hearts, lessons etc.) ──
// OPTIMIZED: Pura adminData fetch nahi — sirf settings node
// Double read avoid: _adminSettingsLoaded guard check karo pehle
function loadAdminSettingsFromFirebase(){
  // Already loaded? Sirf UI refresh karo — koi Firebase read nahi
  if(window._adminSettingsLoaded){
    try{
      const cached = JSON.parse(localStorage.getItem('speakup_admin')||'{}');
      const maxHearts = cached.settings && cached.settings.maxHearts;
      const th = document.getElementById('topHearts');
      if(th && maxHearts) th.textContent = maxHearts;
      if(typeof renderDash === 'function') renderDash();
      console.log('✅ Admin settings already loaded — UI refresh only');
    }catch(e){}
    return;
  }
  // Firebase ready nahi — 2 second baad try karo
  if(!window.FIREBASE_READY || !window.FB_DB){
    setTimeout(loadAdminSettingsFromFirebase, 2000);
    return;
  }
  // Sirf settings node fetch karo — pura adminData nahi
  window.FB_GET(window.FB_REF(window.FB_DB, 'adminData/settings')).then((snapshot) => {
    const settings = snapshot.val();
    if(settings){
      try{
        const cached = JSON.parse(localStorage.getItem('speakup_admin')||'{}');
        cached.settings = settings;
        localStorage.setItem('speakup_admin', JSON.stringify(cached));
        if(typeof AD !== 'undefined' && AD) Object.assign(AD, { settings });
      }catch(e){}
      const th = document.getElementById('topHearts');
      if(th && settings.maxHearts) th.textContent = settings.maxHearts;
      try{
        if(settings.activeTheme && typeof window.applyAppTheme === 'function'){
          window.applyAppTheme(settings.activeTheme !== 'default' ? settings.activeTheme : null);
          localStorage.setItem('speakup_theme', settings.activeTheme);
        }
      }catch(e){}
      console.log('✅ Firebase se admin settings load hui! Hearts:', settings.maxHearts);
      if(typeof renderDash === 'function') renderDash();
    }
    window._adminSettingsLoaded = true;
  }).catch(err => console.warn('Firebase admin load error:', err));
}

// ── SUPPORT CONTACT INFO ──
window._supportPhone = '03410101415';
window._supportEmail = 'Adeelmakhial@gmail.com';

function updateSupportContactUI() {
  var ph = window._supportPhone || '03410101415';
  var em = window._supportEmail || 'Adeelmakhial@gmail.com';
  var phEl = document.getElementById('stgSupportPhoneDisp');
  var emEl = document.getElementById('stgSupportEmailDisp');
  if (phEl) phEl.textContent = ph;
  if (emEl) emEl.textContent = em;
}

function loadSupportContactFromFirebase() {
  if (!window.FIREBASE_READY || !window.FB_DB || !window.FB_REF || !window.FB_GET) {
    updateSupportContactUI(); return;
  }
  window.FB_GET(window.FB_REF(window.FB_DB, 'adminData/supportContact'))
    .then(function(snap) {
      var val = snap && snap.val ? snap.val() : null;
      if (val) {
        if (val.phone) window._supportPhone = val.phone;
        if (val.email) window._supportEmail = val.email;
        try { localStorage.setItem('su_support_phone', val.phone||''); } catch(e){}
        try { localStorage.setItem('su_support_email', val.email||''); } catch(e){}
      } else {
        var lsPhone = localStorage.getItem('su_support_phone');
        var lsEmail = localStorage.getItem('su_support_email');
        if (lsPhone) window._supportPhone = lsPhone;
        if (lsEmail) window._supportEmail = lsEmail;
      }
      updateSupportContactUI();
    }).catch(function(){ updateSupportContactUI(); });
}

function openSupportWhatsApp() {
  var ph = window._supportPhone || '03410101415';
  var intlNum = ph.startsWith('0') ? '92' + ph.slice(1) : ph.replace(/\D/g,'');
  var msg = encodeURIComponent('Assalam o Alaikum! SpeakUp app mein mujhe madad chahiye.');
  window.open('https://wa.me/' + intlNum + '?text=' + msg, '_blank');
}

function openSupportEmail() {
  var em = window._supportEmail || 'Adeelmakhial@gmail.com';
  var sub = encodeURIComponent('SpeakUp App — Support Request');
  var body = encodeURIComponent('Assalam o Alaikum,\n\nMujhe SpeakUp app mein ek masla hai:\n\n[Apna masla yahan likhein]\n\nShukriya!');
  window.open('mailto:' + em + '?subject=' + sub + '&body=' + body, '_blank');
}

// App start hone pe Firebase se settings load karo
window.addEventListener('load', () => {
  // 1.5s delay — Firebase module ka lazy system pehle kaam kare
  // Agar woh pehle load ho jaaye toh yeh sirf UI refresh karega
  setTimeout(loadAdminSettingsFromFirebase, 1500);
  // Support contact info load karo
  setTimeout(loadSupportContactFromFirebase, 2000);
});

// ✅ FIX: Har baar app visible ho (tab switch, phone unlock, background se wapas aao)
// tab Firebase se Pro status fresh check karo — logout/login ki zaroorat nahi
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    const user = window.FB_AUTH?.currentUser;
    if (user && typeof checkProFromFirebase === 'function') {
      checkProFromFirebase().then(function() {
        // Pro status update hone ke baad UI turant refresh karo
        try { if (typeof renderDash === 'function') renderDash(); } catch(e) {}
        try { if (typeof renderProf === 'function') renderProf(); } catch(e) {}
      }).catch(function() {});
    }
  }
});

// ✅ FIX: Window focus pe bhi check karo (desktop browser ke liye)
window.addEventListener('focus', function() {
  const user = window.FB_AUTH?.currentUser;
  if (user && typeof checkProFromFirebase === 'function') {
    checkProFromFirebase().then(function() {
      try { if (typeof renderDash === 'function') renderDash(); } catch(e) {}
      try { if (typeof renderProf === 'function') renderProf(); } catch(e) {}
    }).catch(function() {});
  }
});

// ✅ AUTO EXPIRY SYSTEM — Jab Pro expire ho tab auto UI update ho
// ══════════════════════════════════════════════════════════════
(function startProExpiryWatcher(){
  var _expiryTimer = null;

  function scheduleExpiryCheck(){
    // Pehla purana timer clear karo
    if(_expiryTimer){ clearTimeout(_expiryTimer); _expiryTimer = null; }

    const uid = window.FB_AUTH?.currentUser?.uid;
    if(!uid) return;

    // ✅ FIX: localStorage nahi — sirf in-memory cache
    var proData = window._PRO_CACHE || null;
    if(!proData || !proData.expiry) return; // No expiry = lifetime

    var msLeft = proData.expiry - Date.now();

    if(msLeft <= 0){
      // ✅ FIX: Turant expire mat karo — pehle Firebase se fresh check karo
      // Aise cases mein: admin ne naya plan activate kiya lekin localStorage mein purana expired data tha
      if(typeof checkProFromFirebase === 'function'){
        checkProFromFirebase().then(function(){
          // Fresh check ke baad dobara schedule karo
          setTimeout(scheduleExpiryCheck, 500);
        }).catch(function(){
          onProExpired(uid);
        });
      } else {
        onProExpired(uid);
      }
      return;
    }

    // Exactly expiry time pe fire karo
    _expiryTimer = setTimeout(function(){
      onProExpired(uid);
    }, msLeft);

    var daysLeft = Math.ceil(msLeft / 86400000);
    console.log('⏳ Pro expiry watcher set: '+daysLeft+' din baaki ('+new Date(proData.expiry).toLocaleString()+')');
  }

  function onProExpired(uid){
    // ✅ FIX: Pehle Firebase se ek baar fresh check karo
    // Admin ne naya plan activate kiya ho sakta hai
    if(typeof checkProFromFirebase === 'function'){
      checkProFromFirebase().then(function(){
        // Firebase check ke baad dekhte hain Pro active hai ya nahi
        var fresh = window._PRO_CACHE || null; // ✅ in-memory cache
        if(fresh && fresh.expiry && Date.now() <= fresh.expiry){
          console.log('✅ onProExpired: Firebase check se pata chala Pro active hai — expire nahi karte');
          setTimeout(scheduleExpiryCheck, 300);
          return;
        }
        // Sach mein expire ho gaya
        _doExpire(uid);
      }).catch(function(){ _doExpire(uid); });
    } else {
      _doExpire(uid);
    }
  }

  function _doExpire(uid){
    console.log('⌛ Pro expire ho gaya — UI update kar raha hoon...');
    // ✅ FIX: sirf in-memory cache clear karo
    window._PRO_CACHE = null;
    try{ if(typeof renderDash==='function') renderDash(); }catch(e){}
    try{ if(typeof renderProf==='function') renderProf(); }catch(e){}
    try{
      if(typeof showToast==='function'){
        showToast('⌛ Tumhara Pro plan expire ho gaya! Renew karo 👑','#FF9500');
      }
    }catch(e){}
    _expiryTimer = null;
  }

  // Har baar checkProFromFirebase ke baad watcher reset karo
  // Iske liye original _save function ke baad hook lagao
  var _origCheck = window.checkProFromFirebase;
  window.checkProFromFirebase = async function(){
    await _origCheck.apply(this, arguments);
    // Firebase check ke baad expiry watcher reset karo
    setTimeout(scheduleExpiryCheck, 300);
  };

  // App load pe bhi check karo
  window.addEventListener('load', function(){
    setTimeout(scheduleExpiryCheck, 3000); // Firebase load hone ke baad
  });

  // Auth change pe bhi reset karo
  var _origAuthChange = window.onFirebaseAuthChange;
  // scheduleExpiryCheck ko auth ke baad call karo
  document.addEventListener('_proWatcherReady', scheduleExpiryCheck);

})();
// ══════════════════════════════════════════════════════════════

// Admin lock/unlock system hataya gaya — sirf sequential system use hoga
function isAdminUnlocked(lang, dayNum){ return false; }

// Admin preview lock hataya gaya — hamesha false
function isAdminPreviewLocked(lang, dayNum){ return false; }

function goLesson(){
  // ✅ Goal timer directly yahan shuru karo (patch delay se bachao)
  if(typeof goalSessionStart === 'function') goalSessionStart();
  // Guest mode — sirf Day 1 allowed
  const cs=CS();
  if(IS_GUEST && cs.day > 1){ showGuestLockPopup(); return; }
  const lang = S.activeLang || 'en';
  const dayNum = cs.day || 1;
  const cacheKey = lang + '_' + dayNum;
  // ── Lazy: Lesson open hone se PEHLE ensure karo data available hai ──
  const startLesson = () => {
    const maxH = getAdminMaxHearts();
    hl = maxH; qcor=0; qtot=0; wrongQs=[]; LS=buildSteps(AC()); si=0;
    _ramScores=[]; _ramId=0;
    // Unlimited mode mein lHt mein ∞ dikhao
    showScreen('lesson');
    setTimeout(()=>renderStep(), 160);
  };
  // Agar cache mein nahi hai to pehle fetch karo phir start karo
  if(typeof window.lazyFetchAdminDay === 'function' && !window._adminDayCache[cacheKey]){
    window.lazyFetchAdminDay(lang, dayNum).then(startLesson).catch(startLesson);
  } else {
    startLesson();
  }
}

function renderStep(){
  const tot=LS.length;
  document.getElementById('lPf').style.width=Math.round((si/tot)*100)+'%';
  const maxH = getAdminMaxHearts();
  const lHtEl2 = document.getElementById('lHt');
  if(lHtEl2){
    if(isUnlimitedHearts()) lHtEl2.textContent = '♾️';
    else lHtEl2.textContent = '❤️'.repeat(Math.max(0,hl))+'🖤'.repeat(Math.max(0,maxH-hl));
  }
  const step=LS[si];
  const bd=document.getElementById('lBd');
  bd.scrollTop=0;
  // Animate out old content
  bd.style.transition='opacity .15s ease,transform .15s ease';
  bd.style.opacity='0';bd.style.transform='translateX(-12px)';
  setTimeout(()=>{
    if(step.t==='sh')rSH(step,bd);
    else if(step.t==='vc')rVC(step,bd);
    else if(step.t==='sn')rSN(step,bd);
    else if(step.t==='gr')rGR(step,bd);
    else if(step.t==='st')rST(step,bd);
    else if(step.t==='qz')rQZ(step,bd);
    else if(step.t==='mq')rMQ(step,bd);
    else if(step.t==='done')rDone(bd);
    bd.style.transform='translateX(14px)';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      bd.style.transition='opacity .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)';
      bd.style.opacity='1';bd.style.transform='translateX(0)';
      setTimeout(()=>{bd.style.transition='';},380);
    }));
  },150);
}
function nx(){si++;if(si<LS.length)renderStep();}

function rSH(s,b){
  const timeMap={7:'♟️ 45 minutes ki class',30:'⚡ 2 hours ki class',60:'🎯 1 hour ki class',90:'🐢 30 minutes ki class'};
  const timeBadge=s.isFirst?`<div style="background:rgba(255,150,0,.15);border:1px solid rgba(255,150,0,.3);border-radius:20px;padding:6px 14px;display:inline-block;font-size:12px;color:var(--o);font-weight:700;margin-bottom:16px;">${timeMap[AC()]||''}</div>`:'';
  b.innerHTML=`<div class="a" style="text-align:center;padding:20px 0 30px;">
    <div style="font-size:64px;margin-bottom:12px">${s.ic}</div>
    ${timeBadge}
    <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:${s.cl};margin-bottom:6px">${s.ti}</div>
    <div style="color:var(--mut);font-size:14px;margin-bottom:32px">${s.su}</div>
    <button class="bg" onclick="nx()">Start Now! →</button></div>`;
}

// Safe store for TTS text — avoids all quote/special char escaping issues in onclick
const _ttsStore = {};
let _ttsId = 0;
function _storeTTS(word, ex){ _ttsId++; _ttsStore[_ttsId]={word,ex}; return _ttsId; }
function ttsPlay(id){ const d=_ttsStore[id]; if(d) spkWordAndEx(d.word, d.ex||''); }
function ttsSlow(id){ const d=_ttsStore[id]; if(d) spkSlow(d.word); }
function ttsWord(id){ const d=_ttsStore[id]; if(d) spk(d.word); }

// Safe store for SN sentences
const _snStore = {};
let _snId = 0;
function _storeSN(en){ _snId++; _snStore[_snId]=en; return _snId; }
function snPlay(id){ const t=_snStore[id]; if(t) spk(t); }
function snSlow(id){ const t=_snStore[id]; if(t) spkSlow(t); }
function snMic(id, resultId, btnId){ const t=_snStore[id]; if(t) snMicRecord(t,resultId,btnId); }

function rVC(s,b){
  const v=s.d;
  if(!v || !v.w){ nx(); return; } // safety — empty vocab item skip karo
  _ramId++;
  const rid=_ramId;
  const tid=_storeTTS(v.w, v.ex||'');

  // VISUAL MEMORY CARD
  let visualHTML='';
  if(v.visual){
    const vc=v.visual;
    const bg=vc.color||'#2EE59D';
    visualHTML='<div class="vmcard" style="border-color:'+bg+';background:linear-gradient(135deg,'+bg+'18,'+bg+'08);">'
      +'<div class="vmcard-emoji">'+(vc.emoji||'✨')+'</div>'
      +'<div class="vmcard-body">'
      +'<div class="vmcard-scene">'+(vc.scene||'')+'</div>'
      +(vc.memoryTrick?'<div class="vmcard-trick" style="color:'+bg+'">🧠 '+vc.memoryTrick+'</div>':'')
      +'</div></div>';
  }

  // SITUATIONS
  let sitHTML='';
  if(v.situations&&v.situations.length){
    const sits=v.situations.map(st=>'<div class="vsit"><span class="vsit-em">'+st.emoji+'</span><div><div class="vsit-pl">'+st.place+'</div><div class="vsit-ex">'+st.example+'</div></div></div>').join('');
    sitHTML='<div class="vsits"><div class="vsits-title">📍 Kahaan Use Karein:</div>'+sits+'</div>';
  }

  // MISTAKE WARNING
  const mistakeHTML=v.mistake?'<div class="vmistake">⚠️ '+v.mistake+'</div>':'';

  b.innerHTML='<div class="vc a" id="vc'+si+'">'
    +'<div class="vct"><div class="vcn">'+s.n+'</div>'
    +'<div><div class="vcw">'+(v.w||'')+'</div><div class="vcu">'+(v.u||'')+'</div><div class="vcp">/'+(v.p||'')+'/</div></div></div>'
    +'<div class="vcb"><div class="vce">'+(v.ex||'')+'</div></div>'
    +(v.tip?'<div class="vcp2">💡 '+v.tip+'</div>':'')
    +visualHTML
    +sitHTML
    +mistakeHTML
    +'<div class="spk-bar">'
    +'<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')">🔊 Word + Example</button>'
    +'<button class="spk-btn spk-slow" onclick="ttsSlow('+tid+')">🐢 Dheere Suno</button>'
    +'</div>'
    +'<div id="ram_container_'+rid+'"></div>'
    +'</div>'
    +'<div class="a" style="padding:8px 0 20px;">'
    +'<button class="bg" onclick="markL('+si+')">✅ Got It! →</button>'
    +'<button class="bo" onclick="ttsPlay('+tid+')">🔊 Dobara Suno</button>'
    +'</div>';
  setTimeout(()=>{
    const container=document.getElementById('ram_container_'+rid);
    if(container) renderRAM(v.w, v.p||'', container);
  },80);
}
function markL(i){CS().wordsLearned++;document.getElementById('vc'+i)?.classList.add('lrn');nx();}

function rSN(s,b){
  const sn=s.d;
  const chips=sn.words.map(w=>'<div class="wc"><span class="wce">'+(w.e||w.en||'')+'</span><span class="wcu">'+(w.u||'')+'</span></div>').join('');
  const sid2=_storeSN(sn.en);
  const micId='sn_mic_'+si;
  const resultId='sn_res_'+si;
  const micSupported=('SpeechRecognition' in window||'webkitSpeechRecognition' in window);
  b.innerHTML='<div class="sc a">'
    +'<div class="se">'+(sn.en||'')+'</div><div class="su">'+(sn.ur||'')+'</div>'
    +'<div class="sbk"><div class="sbkt">📖 Word by Word:</div><div>'+chips+'</div></div>'
    +'<div style="color:var(--mut);font-size:13px;margin-bottom:10px;">💬 Reply: <span style="color:var(--txt)">"'+(sn.reply||'')+'"</span></div>'
    +'<div class="sar">'
    +'<button class="sab" onclick="snPlay('+sid2+')">🔊 Suno</button>'
    +'<button class="sab spk" onclick="snSlow('+sid2+')">🐢 Dheere</button>'
    +'</div>'
    +'<div class="sn-mic-wrap">'
    +(micSupported
      ? '<button class="sn-mic-btn" id="'+micId+'" data-snid="'+sid2+'" data-resid="'+resultId+'" data-btnid="'+micId+'" onclick="snMic(parseInt(this.dataset.snid),this.dataset.resid,this.dataset.btnid)">🎤 Try Speaking</button>'
        +'<span style="font-size:12px;color:var(--mut);flex:1;">Speak the full sentence into the mic</span>'
      : '<span style="font-size:12px;color:var(--mut);">🎤 Mic support available in Chrome</span>')
    +'</div>'
    +'<div id="'+resultId+'"></div>'
    +'</div>'
    +'<div style="padding:8px 0 20px;"><button class="bg" onclick="nx()">Next →</button></div>';
}

function rGR(s,b){
  const g=s.d;
  const rh=g.rules.map(r=>`<div class="rb"><div class="rf">${r.formula}</div>
    <div class="rex">${r.examples.map(e=>`<div class="re"><span class="ree">${e.en||''}</span><span class="reu">${e.ur||''}</span></div>`).join('')}</div>
  </div>`).join('');
  b.innerHTML=`<div class="gb a"><div class="gt">✏️ ${g.title}</div>${rh}<div class="rtip">${g.tip}</div></div>
  <div style="padding:8px 0 20px;"><button class="bg" onclick="nx()">Got It! →</button></div>`;
}

function rST(s,b){
  const st=s.d;
  // Gemini format: paragraphs field, old format: lines field — dono handle karo
  const paraArr = st.paragraphs || st.lines || [];
  const ph=paraArr.map(p=>{
    let line = p.line || p.en || '';
    const urdu = p.ur || '';
    const words = p.words || [];
    words.forEach(w=>{
      if(!w) return;
      const wStr = typeof w === 'string' ? w : (w.e || w.en || '');
      if(!wStr) return;
      const rx=new RegExp('('+wStr.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
      line=line.replace(rx,'<span>$1</span>');
    });
    return `<div class="stp"><div class="stl">${line}</div><div class="sttr">${urdu}</div></div>`;
  }).join('');
  const stTitle = st.title || 'Story';
  const stLevel = st.level || '';
  b.innerHTML=`<div class="stb a">
    <div class="sth"><div class="str"><div class="sti2">📖</div>
      <div><div class="stn">${stTitle}</div><div class="stlv">${stLevel}</div></div></div></div>
    <div class="stbd">${ph}
      <button class="stab" onclick="readStory()">🔊 Poori Story Suno</button>
    </div></div>
  <div style="padding:8px 0 20px;"><button class="bg" onclick="nx()">Story Done! →</button></div>`;
}
function readStory(){
  const st = STORY || {};
  const paras = st.paragraphs || st.lines || [];
  spk(paras.map(p=>p.line||p.en||'').join(' '));
}

function rMQ(s,b){
  let qi=0,cor=0;
  const ql=s.ql;
  const L=['A','B','C','D'];
  // Store current question at module scope so mqa callback can access it
  let _curQ=null;

  function showQ(){
    if(qi>=ql.length){
      b.innerHTML=`<div class="qc a" style="text-align:center;">
        <div style="font-size:52px;margin-bottom:12px">${cor===ql.length?'🎯':'👍'}</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:var(--g);margin-bottom:6px">${cor}/${ql.length} Sahi!</div>
        <div style="color:var(--mut);font-size:13px;margin-bottom:20px">${s.lb} mukammal!</div>
        <button class="bg" onclick="nx()">Next Section →</button></div>`;
      return;
    }
    _curQ=ql[qi];
    b.innerHTML=`<div class="qc a">
      <div class="qh"><span class="qnb">Q${qi+1}/${ql.length}</span><span style="color:var(--mut);font-size:12px">${s.lb}</span></div>
      <div class="qq">${_curQ.q}</div>
      <div class="qop">${_curQ.o.map((o,i)=>`<button class="qo" onclick="mqa(${i},${_curQ.a},this)"><span class="qol">${L[i]}</span>${o}</button>`).join('')}</div>
      <div id="qfb"></div></div>`;
  }

  window.mqa=(sel,ans,btn)=>{
    document.querySelectorAll('.qo').forEach(x=>x.classList.add('dis'));
    const opts=document.querySelectorAll('.qo');
    opts[ans].classList.add('correct');
    opts[ans].querySelector('.qol').style.background='var(--g)';
    if(sel===ans){
      cor++;
      document.getElementById('qfb').innerHTML='<div class="qfb ok">✅ Bilkul sahi! Shabaash! 🎉</div>';
    } else {
      // Track wrong for retry
      if(_curQ) wrongQs.push(_curQ);
      btn.classList.add('wrong');
      btn.querySelector('.qol').style.background='var(--r)';
      const hlEl = document.getElementById('lHt');
      if(isUnlimitedHearts()){
        if(hlEl) hlEl.textContent = '♾️';
      } else {
        if(hl>0) hl--;
        if(hlEl) hlEl.textContent='❤️'.repeat(Math.max(0,hl))+'🖤'.repeat(Math.max(0,getAdminMaxHearts()-hl));
        if(hl===0){
          setTimeout(()=>showHeartsFail(),1200);
          return;
        }
      }
    }
    document.getElementById('qfb').innerHTML+=`<button class="qnxt" onclick="mqNext()">Next →</button>`;
  };

  window.mqNext=()=>{qi++;showQ();};
  showQ();
}

function rQZ(s,b){
  qtot++;
  const q=s.d;const L=['A','B','C','D'];
  b.innerHTML=`<div class="qc a">
    <div class="qh"><span class="qnb">Q${s.n}/${s.tot}</span><span style="color:var(--mut);font-size:12px">Final Quiz 🎯</span></div>
    <div class="qq">${q.q}</div>
    <div class="qop">${q.o.map((o,i)=>`<button class="qo" onclick="fqa(${i},${q.a},this)"><span class="qol">${L[i]}</span>${o}</button>`).join('')}</div>
    <div id="qfb2"></div></div>`;
}
window.fqa=(sel,ans,btn)=>{
  document.querySelectorAll('.qo').forEach(x=>x.classList.add('dis'));
  const opts=document.querySelectorAll('.qo');
  opts[ans].classList.add('correct');opts[ans].querySelector('.qol').style.background='var(--g)';
  const curStep=LS[si];
  if(sel===ans){
    qcor++;CS().xp+=10;
    document.getElementById('qfb2').innerHTML='<div class="qfb ok">✅ Sahi! +10 XP 🎉</div>';
  } else {
    // Track wrong question for retry
    wrongQs.push(curStep.d);
    btn.classList.add('wrong');
    btn.querySelector('.qol').style.background='var(--r)';
    const fqaHtEl = document.getElementById('lHt');
    const correctText=opts[ans].textContent.trim().substring(1).trim();
    document.getElementById('qfb2').innerHTML=`<div class="qfb no">❌ Wrong! Sahi: "${correctText}"</div>`;
    // ── Mistake Firebase mein save karo ──
    try{ saveMistakeToFirebase(curStep.d, correctText); }catch(e){}
    if(isUnlimitedHearts()){
      if(fqaHtEl) fqaHtEl.textContent = '♾️';
    } else {
      if(hl>0) hl--;
      if(fqaHtEl) fqaHtEl.textContent='❤️'.repeat(Math.max(0,hl))+'🖤'.repeat(Math.max(0,getAdminMaxHearts()-hl));
      if(hl===0){
        setTimeout(()=>showHeartsFail(),1200);
        return;
      }
    }
  }
  document.getElementById('qfb2').innerHTML+=`<button class="qnxt" onclick="nx()">Next →</button>`;
};

function rDone(b){
  // If there are wrong questions — do retry round first!
  if(wrongQs.length>0){
    showRetryRound(b);
    return;
  }
  finishLesson(b);
}

function showRetryRound(b){
  const retryList=[...wrongQs];
  wrongQs=[];  // clear so we don't loop forever
  let ri=0;let retryCor=0;
  const L=['A','B','C','D'];

  b.innerHTML=`<div class="qc a" style="text-align:center;margin-bottom:16px;">
    <div style="font-size:48px;margin-bottom:8px">🔄</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:var(--o);margin-bottom:6px">Retry Round!</div>
    <div style="color:var(--mut);font-size:13px">${retryList.length} galat sawaal — dobara try karo!</div>
  </div>`;

  setTimeout(()=>{
    function showRetryQ(){
      if(ri>=retryList.length){
        // Retry done
        b.innerHTML=`<div class="qc a" style="text-align:center;">
          <div style="font-size:52px;margin-bottom:12px">${retryCor===retryList.length?'🎯':'💪'}</div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--g);margin-bottom:6px">Retry Complete! ${retryCor}/${retryList.length} Sahi</div>
          <div style="color:var(--mut);font-size:13px;margin-bottom:20px">Ab lesson complete ho gaya!</div>
          <button class="bg" onclick="finishLesson(document.getElementById('lBd'))">Aage Baro →</button>
        </div>`;
        return;
      }
      const rq=retryList[ri];
      b.innerHTML=`<div class="qc a">
        <div class="qh">
          <span class="qnb" style="background:var(--o)">🔄 ${ri+1}/${retryList.length}</span>
          <span style="color:var(--o);font-size:12px;font-weight:700">Retry Round</span>
        </div>
        <div class="qq">${rq.q}</div>
        <div class="qop">${rq.o.map((o,i)=>`<button class="qo" onclick="retryAns(${i},${rq.a},this)"><span class="qol">${L[i]}</span>${o}</button>`).join('')}</div>
        <div id="rqfb"></div>
      </div>`;
    }

    window.retryAns=(sel,ans,btn)=>{
      document.querySelectorAll('.qo').forEach(x=>x.classList.add('dis'));
      const opts=document.querySelectorAll('.qo');
      opts[ans].classList.add('correct');
      opts[ans].querySelector('.qol').style.background='var(--g)';
      if(sel===ans){
        retryCor++;
        document.getElementById('rqfb').innerHTML='<div class="qfb ok">✅ Is baar sahi! Shabaash! 🎉</div>';
      } else {
        btn.classList.add('wrong');
        btn.querySelector('.qol').style.background='var(--r)';
        const ct=opts[ans].textContent.trim().substring(1).trim();
        document.getElementById('rqfb').innerHTML=`<div class="qfb no">❌ Phir galat! Sahi: "${ct}" — yaad karo!</div>`;
      }
      document.getElementById('rqfb').innerHTML+=`<button class="qnxt" onclick="retryNext()">Next →</button>`;
    };
    window.retryNext=()=>{ri++;showRetryQ();};
    showRetryQ();
  },1500);
}

function finishLesson(b){
  const c=AC();const cs=CS();
  const lang = S.activeLang || 'en';
  const isProgLang = isPythonLang(lang);
  // XP — Python levels ka custom XP (level data se)
  let bx;
  if(isProgLang){
    const LEVELS = PYTHON_LEVELS;
    const lvl = LEVELS[(cs.done.length) - 1] || LEVELS[0]; // done ke baad current level
    bx = lvl ? lvl.xp : 100;
  } else {
    bx = c===7?200:c===30?80:c===60?120:180;
  }
  cs.xp+=bx;
  const totalLevels = isProgLang ? 60 : c;
  if(!cs.done.includes(cs.day)){cs.done.push(cs.day);cs.streak++;if(cs.day<totalLevels)cs.day++;}
  save();
  // ── Lazy: Day complete hone ke baad NEXT day ka data prefetch karo ──
  try{
    const nextDay = cs.day; // already incremented above
    if(typeof window.lazyFetchAdminDay === 'function' && !isProgLang && nextDay <= c){
      setTimeout(()=> window.lazyFetchAdminDay(lang, nextDay), 500);
    }
  }catch(e){}
  const acc=qtot>0?Math.round((qcor/qtot)*100):0;
  const totalL = isProgLang ? 60 : c;
  const all=cs.done.length>=totalL;
  const completedLevel = cs.done[cs.done.length-1];
  const doneLabel = isProgLang ? ('Level '+completedLevel+' complete! Agla level try karo 🚀') : ('Day '+completedLevel+' successfully complete! Kal wapas aao 🔥');
  const allLabel = isProgLang ? (S.name+' ne Python ke saare 60 Levels complete kar liye! Tu ab Python Developer hai! 🐍👑') : (S.name+' ne '+c+' Day course complete kar liya!');
  const spkHTML=buildSpeakingScoreHTML();
  b.innerHTML=`<div class="comp">
    <div class="ctr">${all?'🏆':'🎉'}</div>
    <div class="ctl">${all?(isProgLang?'Python Master!':'Course Mukammal!'):(isProgLang?'Level Complete!':'Din Complete!')}</div>
    <div class="csu">${all?allLabel:doneLabel}</div>
    <div class="xpp">+${bx} XP ⭐</div>
    <div class="sg3">
      <div class="sb3"><div class="sv3 sg2">${qcor}/${qtot}</div><div class="sl3">Quiz Score</div></div>
      <div class="sb3"><div class="sv3" style="color:var(--b)">${acc}%</div><div class="sl3">Accuracy</div></div>
      <div class="sb3"><div class="sv3 sf2">${cs.streak}</div><div class="sl3">Streak 🔥</div></div>
    </div>
    ${spkHTML}
    ${all?`<button class="bg" style="margin-bottom:12px" onclick="showCert()">🏆 Certificate Dekho!</button>`:''}
    <button class="${all?'bo':'bg'}" onclick="exitLesson()">🏠 Dashboard Pe Jao</button>
  </div>`;
  // Reset speaking scores for next lesson
  _ramScores=[];
}