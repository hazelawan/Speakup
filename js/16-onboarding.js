// ══════════════════════════════════════════════════
// SpeakUp v8 — 16-onboarding.js
// Onboarding System — first-time user flow
// ══════════════════════════════════════════════════

// ═══════════════════════════════════════════════════
// PHASE 4 — ONBOARDING SYSTEM
// ═══════════════════════════════════════════════════

const OB_DONE_KEY = 'speakup_ob_done_v1';
const OB_DATA_KEY = 'speakup_ob_data';

// Check karo — agar onboarding pehle ho chuki hai toh show mat karo
function shouldShowOnboarding(){
  // Sirf OB_DONE_KEY check karo
  // Trigger forceShowOnboarding() — woh flag check karta hai
  return !localStorage.getItem(OB_DONE_KEY);
}

// Onboarding state
let obState = {
  step: 0,
  goal: null,
  lang: null,
  time: null,
  course: null,
};

// Available Languages
const OB_LANGS = [
  {code:'en', flag:'🇬🇧', name:'English', speakers:'1.5 Billion', color:'#58CC02', goals:['work','study','casual','travel','family']},
  {code:'fr', flag:'🇫🇷', name:'French',  speakers:'300 Million', color:'#4A90E2', goals:['travel','culture','casual','work']},
  {code:'ar', flag:'🇸🇦', name:'Arabic',  speakers:'400 Million', color:'#9B59B6', goals:['culture','casual','family']},
  {code:'zh', flag:'🇨🇳', name:'Chinese', speakers:'1.4 Billion', color:'#E74C3C', goals:['work','travel','culture','casual']},
  {code:'ko', flag:'🇰🇷', name:'Korean',  speakers:'80 Million',  color:'#FF6B9D', goals:['culture','casual','travel']},
  {code:'ja', flag:'🇯🇵', name:'Japanese',speakers:'125 Million', color:'#FF8C42', goals:['culture','casual','work','travel']},
  {code:'tr', flag:'🇹🇷', name:'Turkish', speakers:'80 Million',  color:'#E84142', goals:['culture','travel','family']},
  {code:'es', flag:'🇪🇸', name:'Spanish', speakers:'500 Million', color:'#F5A623', goals:['work','travel','study','casual']},
  {code:'de', flag:'🇩🇪', name:'German',  speakers:'100 Million', color:'#5B9BD5', goals:['work','study','travel']},
  {code:'ie', flag:'🇮🇪', name:'Irish', speakers:'2 Million', color:'#169B62', goals:['culture','casual','travel','family']},
];

const OB_GOAL_LABELS = {
  casual:'Timepass / Hobby', travel:'For Travel', work:'Career / Job',
  study:'Study / Education', culture:'Culture / Deen', family:'Family / Rishtedaar'
};

// ── Show onboarding if needed ──
// ── Force show onboarding — flag based, PROFILES check nahi ──
function forceShowOnboarding(){
  if(!window._showOnboardingNext) return;
  window._showOnboardingNext = false;
  const ov = document.getElementById('ob-overlay');
  if(!ov){ 
    // DOM ready nahi — retry
    setTimeout(forceShowOnboarding, 300); 
    return; 
  }
  // Kisi bhi screen ko peeche dhakelo
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  ov.style.display = 'block';
  ov.style.zIndex = '99999';
  obState.step = 0;
  obShowStep(0);
}

function initOnboarding(){
  if(!shouldShowOnboarding()) return;
  const ov = document.getElementById('ob-overlay');
  if(!ov) return;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  ov.style.display = 'block';
  ov.style.zIndex = '99999';
  obState.step = 0;
  obShowStep(0);
}

// ── Show step ──
function obShowStep(n){
  // Hide all steps
  document.querySelectorAll('.ob-step').forEach(s=>s.style.display='none');
  const step = document.getElementById('ob-step-'+n);
  if(step){
    step.style.display = 'flex';
    step.style.flexDirection = 'column';
    step.style.animation = 'none';
    requestAnimationFrame(()=>{
      step.style.animation = 'obSlideIn .35s cubic-bezier(.34,1.56,.64,1) both';
    });
  }
  // Update progress dots
  document.querySelectorAll('.ob-dot').forEach((d,i)=>{
    d.classList.toggle('active', i===n);
  });
  // Back button
  const backBtn = document.getElementById('ob-back-btn');
  if(backBtn) backBtn.style.display = n > 0 ? 'block' : 'none';
  // Step-specific init
  if(n===2) obBuildLangGrid();
  obState.step = n;
}

// ── Next step ──
function obNext(){
  if(obState.step < 3) obShowStep(obState.step + 1);
}

// ── Back ──
function obBack(){
  if(obState.step > 0) obShowStep(obState.step - 1);
}

// ── Skip ──
function obSkip(){
  obFinish(false);
}

// ── Goal select ──
function obSelectGoal(card){
  document.querySelectorAll('.ob-goal-card').forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  obState.goal = card.dataset.goal;
  const btn = document.getElementById('ob-goal-btn');
  if(btn){
    btn.disabled = false;
    btn.style.background = 'linear-gradient(135deg,#2EE59D,#1BC47D)';
    btn.style.color = '#0A0918';
    btn.style.cursor = 'pointer';
    btn.textContent = 'Agla Qadam → (' + (OB_GOAL_LABELS[obState.goal]||'') + ')';
  }
  // Update lang hint in next step
  const hint = document.getElementById('ob-lang-hint');
  if(hint){
    const hints = {
      work:'Career ke liye best: English, German, ya Chinese!',
      travel:'For Travel: English, French, ya Spanish!',
      study:'Study ke liye: English ya German best hai!',
      culture:'Culture ke liye: Arabic, Korean, ya Japanese!',
      casual:'Hobby ke liye: Jo pasand ho woh seekho!',
      family:'Family ke liye: Jo zubaan rishtedaar bolte hain!',
    };
    hint.textContent = hints[obState.goal] || 'Apni pasandida zubaan chunno!';
  }
}

// ── Build language grid based on goal ──
function obBuildLangGrid(){
  const grid = document.getElementById('ob-langs');
  if(!grid) return;
  // Sort: goal-recommended first
  const sorted = [...OB_LANGS].sort((a,b)=>{
    const aRec = a.goals.includes(obState.goal) ? 0 : 1;
    const bRec = b.goals.includes(obState.goal) ? 0 : 1;
    return aRec - bRec;
  });
  grid.innerHTML = sorted.map(l=>`
    <div class="ob-lang-card" data-code="${l.code}" data-color="${l.color}" onclick="obSelectLang(this)"
      style="border-color:rgba(255,255,255,.1);">
      <div class="ob-lang-flag">${l.flag}</div>
      <div class="ob-lang-name">${l.name}</div>
      <div class="ob-lang-speakers">${l.speakers}</div>
      <div class="ob-lang-check">✓ Chunna gaya!</div>
      ${l.goals.includes(obState.goal) ? `<div style="position:absolute;top:6px;right:6px;background:${l.color}22;border:1px solid ${l.color}66;border-radius:8px;padding:2px 6px;font-size:9px;color:${l.color};font-weight:800;">Recommended</div>` : ''}
    </div>
  `).join('');
}

// ── Language select ──
function obSelectLang(card){
  document.querySelectorAll('.ob-lang-card').forEach(c=>{
    c.classList.remove('selected');
    c.style.borderColor = 'rgba(255,255,255,.1)';
    c.style.boxShadow = 'none';
    c.style.color = '';
  });
  const color = card.dataset.color || '#2EE59D';
  card.classList.add('selected');
  card.style.borderColor = color;
  card.style.boxShadow = `0 0 0 1px ${color}40, 0 4px 20px ${color}22`;
  obState.lang = card.dataset.code;
  const btn = document.getElementById('ob-lang-btn');
  if(btn){
    btn.disabled = false;
    btn.style.background = `linear-gradient(135deg,${color},${color}CC)`;
    btn.style.color = '#000';
    btn.style.cursor = 'pointer';
    const langInfo = OB_LANGS.find(l=>l.code===obState.lang);
    btn.textContent = (langInfo ? langInfo.flag+' '+langInfo.name : 'Yeh Zubaan') + ' Seekhni Hai! →';
  }
}

// ── Time select ──
function obSelectTime(card){
  document.querySelectorAll('.ob-time-card').forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  obState.time = parseInt(card.dataset.time);
  obState.course = parseInt(card.dataset.course);
  // 2 hours wale ke liye course 30 din
  if(obState.time === 120) obState.course = 30;

  const commitCard = document.getElementById('ob-commitment-card');
  const commitText = document.getElementById('ob-commitment-text');
  if(commitCard) commitCard.style.display = 'block';
  if(commitText){
    const lang = OB_LANGS.find(l=>l.code===obState.lang);
    const goalLabel = OB_GOAL_LABELS[obState.goal] || 'apna goal';
    const timeLabel = obState.time === 120 ? '2 hours' : obState.time === 60 ? '1 ghanta' : obState.time + ' minute';
    commitText.innerHTML = `
      Tumhara plan:<br>
      ${lang ? lang.flag+' <b style="color:#2EE59D">'+lang.name+'</b>' : ''} seekhna<br>
      Daily <b style="color:#FFD700">${timeLabel}</b> dedaar karke<br>
      <b style="color:#CE82FF">${obState.course} Din</b> complete the course in!<br>
      <span style="font-size:11px;opacity:.6;">Goal: ${goalLabel}</span>
    `;
  }

  const btn = document.getElementById('ob-time-btn');
  if(btn){
    btn.disabled = false;
    btn.style.background = 'linear-gradient(135deg,#2EE59D,#1BC47D)';
    btn.style.color = '#0A0918';
    btn.style.cursor = 'pointer';
    btn.textContent = 'Chalo Shuru Karte Hain! 🎉';
  }
}

// ── Go to paywall ──
function obGoToPaywall(){
  obShowStep(4);
  // Personalized message
  const lang = OB_LANGS.find(l=>l.code===obState.lang);
  const paywallMsg = document.getElementById('ob-paywall-personalized');
  if(paywallMsg && lang){
    paywallMsg.textContent = `${lang.flag} ${lang.name} seekhne ke liye best plan chunno!`;
  }
}

// ── Choose Free ──
function obChooseFree(){
  // Save onboarding data
  const obData = {
    goal: obState.goal,
    lang: obState.lang,
    time: obState.time,
    course: obState.course,
    plan: 'free',
    completedAt: Date.now()
  };
  localStorage.setItem(OB_DATA_KEY, JSON.stringify(obData));
  localStorage.setItem(OB_DONE_KEY, '1');
  // Save to Firebase for admin analytics
  saveObToFirebase(obData);
  // Apply selections to app
  obApplyToApp();
}

// ── Choose Pro ──
function obChoosePro(plan){
  const obData = {
    goal: obState.goal,
    lang: obState.lang,
    time: obState.time,
    course: obState.course,
    plan: plan,
    completedAt: Date.now()
  };
  localStorage.setItem(OB_DATA_KEY, JSON.stringify(obData));
  localStorage.setItem(OB_DONE_KEY, '1');
  // Close onboarding first, then open Pro upgrade
  obApplyToApp();
  // Short delay phir pro screen
  setTimeout(()=>{
    if(typeof showScreen === 'function') showScreen('proUpgrade');
    else if(typeof showPaywall === 'function') showPaywall();
  }, 600);
}

// ── Apply selections to app ──
function obApplyToApp(){
  // ✅ Mark onboarding done — profile create hogi toh dobara nahi aayega
  localStorage.setItem(OB_DONE_KEY, '1');

  // Close onboarding
  const ov = document.getElementById('ob-overlay');
  if(ov){
    ov.style.transition = 'opacity .4s ease';
    ov.style.opacity = '0';
    setTimeout(()=>{ ov.style.display='none'; ov.style.opacity=''; ov.style.transition=''; }, 420);
  }

  // ✅ Profile create karo agar nahi hai (new user)
  if(typeof PROFILES !== 'undefined' && PROFILES.length === 0){
    const name = (typeof S !== 'undefined' && S.name) ? S.name : 'Learner';
    const avatar = (typeof S !== 'undefined' && S.avatar) ? S.avatar : '😊';
    if(typeof newProfileData === 'function'){
      const p = newProfileData(name, avatar);
      PROFILES.push(p);
      if(typeof ACTIVE_PID !== 'undefined') ACTIVE_PID = p.id;
      Object.assign(S, p);
      if(typeof saveAll === 'function') saveAll();
    }
  }

  // Apply language selection
  if(obState.lang && typeof S !== 'undefined'){
    S.activeLang = obState.lang;
    // Setup course if time selected
    if(obState.course){
      if(!S.langs) S.langs = {};
      if(!S.langs[obState.lang]) S.langs[obState.lang] = {activeCourse:0, courses: typeof emptyLangCourses === 'function' ? emptyLangCourses() : {}};
      S.langs[obState.lang].activeCourse = obState.course;
      S.activeCourse = obState.course;
      if(S.langs[obState.lang].courses && S.langs[obState.lang].courses[obState.course]){
        S.langs[obState.lang].courses[obState.course].started = true;
      }
      if(typeof save === 'function') save();
    }
  }

  // Show dashboard
  if(obState.lang && obState.course){
    if(typeof showScreen === 'function') showScreen('dashboard');
    if(typeof renderDash === 'function') setTimeout(renderDash, 200);
    // Welcome toast
    const lang = OB_LANGS.find(l=>l.code===obState.lang);
    setTimeout(()=>{
      if(typeof showToast === 'function' && lang){
        showToast(`🎉 ${lang.flag} ${lang.name} seekhna shuru! ${obState.course} din mein master banoge!`, '#2EE59D');
      }
      // Grant onboarding XP bonus
      if(typeof S !== 'undefined' && typeof CS === 'function'){
        const cs = CS();
        cs.xp = (cs.xp||0) + 25;
        if(typeof save === 'function') save();
        setTimeout(()=>{
          if(typeof showToast === 'function') showToast('🎁 Onboarding bonus: +25 XP!','#FFD700');
        }, 2000);
      }
    }, 700);
  } else {
    // Fallback — go to lang select
    if(typeof updateLangSelectIndicators === 'function') updateLangSelectIndicators();
    if(typeof showScreen === 'function') showScreen('langSelect');
  }
}

// ── Mark onboarding done & finish ──
function obFinish(completed = true){
  localStorage.setItem(OB_DONE_KEY, '1');
  const obData = {
    goal: obState.goal || 'skipped',
    lang: obState.lang,
    plan: 'free',
    skipped: !completed,
    completedAt: Date.now()
  };
  localStorage.setItem(OB_DATA_KEY, JSON.stringify(obData));
  // Save to Firebase for admin analytics
  saveObToFirebase(obData);
  obApplyToApp();
}

// ── Save onboarding data to Firebase ──
function saveObToFirebase(data){
  try{
    if(window.FB_DB && window.FB_AUTH && window.FB_AUTH.currentUser){
      const uid = window.FB_AUTH.currentUser.uid;
      const ref = window.FB_REF(window.FB_DB, 'onboardingData/'+uid);
      window.FB_SET(ref, {...data, uid, savedAt: Date.now()}).catch(()=>{});
    } else {
      // Store locally and sync when Firebase is ready
      localStorage.setItem('speakup_ob_pending_sync', JSON.stringify(data));
    }
  } catch(e){}
}

// ── Sync pending onboarding data when Firebase comes online ──
(function(){
  setTimeout(()=>{
    const pending = localStorage.getItem('speakup_ob_pending_sync');
    if(pending && window.FB_DB && window.FB_AUTH && window.FB_AUTH.currentUser){
      try{
        const data = JSON.parse(pending);
        saveObToFirebase(data);
        localStorage.removeItem('speakup_ob_pending_sync');
      } catch(e){}
    }
  }, 4000);
})();

// ══════════════════════════════════════════════════════════
// 💻 PROGRAMMING LANGUAGES — Structure + Firebase Enable/Disable
// ══════════════════════════════════════════════════════════

// All programming language definitions — 60 levels each (30/60/90 day courses)
const PROG_LANGS = [
  {
    code: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    desc: 'Aasan aur powerful — AI, web, automation sab kuch Python se!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'Most Popular',
    difficulty: 'Beginner Friendly'
  },
  {
    code: 'java',
    name: 'Java',
    icon: '☕',
    color: '#E76F00',
    desc: 'Android apps aur enterprise software ki duniya — Java se shuru karo!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'Industry Leader',
    difficulty: 'Intermediate'
  },
  {
    code: 'javascript',
    name: 'JavaScript',
    icon: '💛',
    color: '#F7DF1E',
    desc: 'Web ki zubaan — browser se server tak, sab JS pe chalta hai!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'Web Dev',
    difficulty: 'Beginner'
  },
  {
    code: 'rust',
    name: 'Rust',
    icon: '🦀',
    color: '#CE412B',
    desc: 'Fastest language — system programming ka badshah, memory safe!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'Advanced',
    difficulty: 'Expert'
  },
  {
    code: 'kotlin',
    name: 'Kotlin',
    icon: '🔷',
    color: '#7F52FF',
    desc: 'Modern Android development — Google ki official language!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'Android',
    difficulty: 'Intermediate'
  },
  {
    code: 'swift',
    name: 'Swift',
    icon: '🍎',
    color: '#FA7343',
    desc: 'iPhone aur Mac apps banao — Apple ki official language!',
    levels: 60,
    courses: [30, 60, 90],
    badge: 'iOS Dev',
    difficulty: 'Intermediate'
  }
];

// Arts & Skills definitions
const ARTS_SKILLS = [
  {
    code: 'music',
    name: 'Music',
    icon: '🎵',
    color: '#CE82FF',
    desc: 'Sur, taal aur composition — music theory se production tak!',
    levels: 60,
    badge: 'Creative'
  },
  {
    code: 'art',
    name: 'Art & Design',
    icon: '🎨',
    color: '#FF6B9D',
    desc: 'Drawing, colors, digital art — apna creative side explore karo!',
    levels: 60,
    badge: 'Creative'
  },
  {
    code: 'math',
    name: 'Math',
    icon: '🧮',
    color: '#1CB0F6',
    desc: 'Calculus se algebra — math concepts clearly samjho!',
    levels: 60,
    badge: 'STEM'
  },
  {
    code: 'photography',
    name: 'Photography',
    icon: '📸',
    color: '#FF9A3C',
    desc: 'Camera, composition, editing — professional photos lo!',
    levels: 60,
    badge: 'Creative'
  }
];

// Render programming language cards — checks Firebase for enable status
function renderProgLangs() {
  const grid = document.getElementById('progLangGrid');
  if (!grid) return;

  const adminData = (() => {
    try { return JSON.parse(localStorage.getItem('speakup_admin') || '{}'); } catch(e) { return {}; }
  })();
  const progEnabled = (adminData && adminData.programmingLangs) ? adminData.programmingLangs : {};

  const enabledLangs = PROG_LANGS.filter(l => progEnabled[l.code] === true);
  const disabledLangs = PROG_LANGS.filter(l => progEnabled[l.code] !== true);

  let html = '';

  // ENABLED langs — full-width chess-style cards
  if (enabledLangs.length > 0) {
    html += `<div style="grid-column:1/-1;display:flex;flex-direction:column;gap:10px;margin-bottom:${disabledLangs.length>0?'4px':'0'};">`;
    enabledLangs.forEach(lang => {
      const colorAlpha = lang.color + '22';
      const colorBorder = lang.color + '55';
      const isActive = (typeof S !== 'undefined' && S.activeLang === lang.code);
      html += `<div class="lang-card lang-${lang.code}" onclick="pickProgLang('${lang.code}')"
        style="border:3px solid ${lang.color}55;background:linear-gradient(135deg,${lang.color}0f,${lang.color}05);
          border-radius:24px;overflow:hidden;cursor:pointer;transition:transform .2s;position:relative;">
        ${isActive ? `<div style="position:absolute;top:10px;right:12px;background:${lang.color};color:#fff;font-size:9px;font-weight:800;padding:3px 8px;border-radius:20px;">✅ ACTIVE</div>` : `<div class="lang-badge" style="background:linear-gradient(135deg,${lang.color},${lang.color}bb);">60 Levels 💻 NEW</div>`}
        <div class="lang-card-inner">
          <div class="lang-flag-box" style="background:${colorAlpha};border-color:${colorBorder};font-size:30px;">${lang.icon}</div>
          <div class="lang-info">
            <div class="lang-name" style="color:${lang.color};">${lang.name}</div>
            <div class="lang-desc">${lang.desc}</div>
            <div class="lang-speakers" style="color:${lang.color}99;">📚 60 Levels • ${lang.badge} • ${lang.difficulty}</div>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // DISABLED langs — 2-column grid (coming soon)
  disabledLangs.forEach(lang => {
    const colorAlpha = lang.color + '33';
    const colorBorder = lang.color + '55';
    html += `<div onclick="showToast('${lang.name} — Jald Aa Raha Hai! 🚀','${lang.color}')"
      style="display:flex;align-items:center;gap:10px;background:var(--card);
        border:1px solid ${colorAlpha};border-radius:14px;padding:11px 12px;
        cursor:pointer;transition:transform .15s;opacity:.7;"
      onmousedown="this.style.transform='scale(.96)'" onmouseup="this.style.transform=''"
      ontouchstart="this.style.transform='scale(.96)'" ontouchend="this.style.transform=''">
      <div style="width:38px;height:38px;border-radius:11px;background:${colorAlpha};border:2px solid ${colorBorder};
        display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;
        filter:grayscale(.5);">${lang.icon}</div>
      <div style="flex:1;">
        <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:var(--txt);">${lang.name}</div>
        <div style="font-size:10px;color:var(--mut);margin-top:1px;">Jald Aayega 🔜</div>
      </div>
      <div style="font-size:14px;opacity:.4;">🔒</div>
    </div>`;
  });

  grid.innerHTML = html;
}

// Render arts & skills cards
function renderArtsSkills() {
  const grid = document.getElementById('artsSkillsGrid');
  if (!grid) return;

  const adminData = (() => {
    try { return JSON.parse(localStorage.getItem('speakup_admin') || '{}'); } catch(e) { return {}; }
  })();
  const artsEnabled = (adminData && adminData.artsSkills) ? adminData.artsSkills : {};

  grid.innerHTML = ARTS_SKILLS.map(item => {
    const isEnabled = artsEnabled[item.code] === true;
    const colorAlpha = item.color + '33';
    const colorBorder = item.color + '55';

    if (isEnabled) {
      return `<div onclick="showToast('${item.name} course coming soon! Stay tuned 🚀','${item.color}')"
        style="display:flex;align-items:center;gap:10px;background:var(--card);
          border:2px solid ${item.color}66;border-radius:14px;padding:11px 12px;
          cursor:pointer;transition:transform .15s;box-shadow:0 2px 12px ${item.color}22;"
        onmousedown="this.style.transform='scale(.96)'" onmouseup="this.style.transform=''"
        ontouchstart="this.style.transform='scale(.96)'" ontouchend="this.style.transform=''">
        <div style="width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,${item.color},${item.color}88);
          display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.3);">${item.icon}</div>
        <div style="flex:1;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:var(--txt);">${item.name}</div>
          <div style="font-size:9px;color:${item.color};margin-top:1px;font-weight:800;">NEW</div>
        </div>
      </div>`;
    } else {
      return `<div onclick="showToast('${item.name} — Jald Aa Raha Hai! 🚀','${item.color}')"
        style="display:flex;align-items:center;gap:10px;background:var(--card);
          border:1px solid ${colorAlpha};border-radius:14px;padding:11px 12px;
          cursor:pointer;transition:transform .15s;opacity:.7;"
        onmousedown="this.style.transform='scale(.96)'" onmouseup="this.style.transform=''"
        ontouchstart="this.style.transform='scale(.96)'" ontouchend="this.style.transform=''">
        <div style="width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,${item.color},${item.color}88);
          display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;
          filter:grayscale(.5);box-shadow:0 2px 8px rgba(0,0,0,.3);">${item.icon}</div>
        <div style="flex:1;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:var(--txt);">${item.name}</div>
          <div style="font-size:10px;color:var(--mut);margin-top:1px;">Jald Aayega 🔜</div>
        </div>
        <div style="font-size:14px;opacity:.4;">🔒</div>
      </div>`;
    }
  }).join('');
}

// Pick programming language — language select flow use karo
function pickProgLang(code) {
  const lang = PROG_LANGS.find(l => l.code === code);
  if (!lang) return;
  // Check if already selected and course already active
  if(S.activeLang === code && S.langs && S.langs[code] && S.langs[code].activeCourse){
    showScreen('dashboard'); renderDash(); return;
  }
  // Set active language FIRST before anything else
  S.activeLang = code;
  if(!S.langs) S.langs = {};
  if(!S.langs[code]) S.langs[code] = {activeCourse:0, courses:{60:{day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false}}};
  save();
  showToast(lang.icon+' '+lang.name+' select ho gayi! 🚀', lang.color);
  if(S.langs[code].activeCourse){
    setTimeout(()=>{ showScreen('dashboard'); renderDash(); }, 400);
  } else {
    // goToCourseSelect mein S.activeLang already 'python' (ya jo bhi code) hai
    // isProgLang check wahan PROG_LANGS se verify karega — Python card show hoga
    setTimeout(()=> goToCourseSelect(), 400);
  }
}



// Re-render when langSelect screen is shown
const _origShowScreen = window.showScreen;
window.showScreen = function(name) {
  if (_origShowScreen) _origShowScreen(name);
  if (name === 'langSelect') {
    setTimeout(() => {
      renderProgLangs();
      renderArtsSkills();
    }, 100);
  }
};

// Also render on page load when langSelect is visible
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    renderProgLangs();
    renderArtsSkills();
  }, 800);
});

// Re-render when Firebase adminData updates
const _origRenderLangManager = window.renderLangManager;
window.renderLangManager = function() {
  if (typeof _origRenderLangManager === 'function') _origRenderLangManager();
  renderProgLangs();
  renderArtsSkills();
};

// ── END PROGRAMMING LANGUAGES ──


// New user (PROFILES.length===0) pe afterAuth() khud initOnboarding() call karta hai
// Yeh hook ab sirf resetOnboarding() test case ke liye hai
(function hookOnboarding(){
  // No override needed — afterAuth already handles it
  // resetOnboarding() call karne pe next reload pe dobara dikhega
})();

// ── Also reset onboarding (for testing in dev) ──
function resetOnboarding(){
  // OB keys hatao
  localStorage.removeItem(OB_DONE_KEY);
  localStorage.removeItem(OB_DATA_KEY);
  // Profiles aur user session bhi clear karo taake truly "new user" simulate ho
  localStorage.removeItem('su_profiles');
  localStorage.removeItem('su_active_pid');
  localStorage.removeItem('su_logged_in');
  if(typeof showToast === 'function') showToast('🔄 Onboarding reset! Reload karo.','var(--b)');
  setTimeout(()=>location.reload(), 1200);
}

// ── Get saved onboarding data (for analytics) ──
function getOnboardingData(){
  try{ return JSON.parse(localStorage.getItem(OB_DATA_KEY)||'{}'); }
  catch{ return {}; }
}