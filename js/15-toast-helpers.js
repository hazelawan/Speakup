// ══════════════════════════════════════════════════
// SpeakUp v8 — 15-toast-helpers.js
// Toast Notifications Helper
// ══════════════════════════════════════════════════

// ═══════════════════════════════════════════════════
// PHASE 3 — SAFE TOAST HELPER
// ═══════════════════════════════════════════════════
function p3Toast(msg, color){
  // Always use a fresh inline toast so it works regardless of which showToast is active
  const t=document.createElement('div');
  color = color || 'var(--g)';
  t.style.cssText=`position:fixed;bottom:96px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(14,28,40,.97);border:2px solid ${color};color:${color};padding:13px 22px;border-radius:20px;font-family:'Fredoka One',sans-serif;font-size:15px;z-index:9999;white-space:nowrap;box-shadow:0 12px 40px rgba(0,0,0,.5);max-width:90vw;text-align:center;backdrop-filter:blur(12px);opacity:0;transition:opacity .22s ease,transform .28s cubic-bezier(.34,1.56,.64,1);`;
  t.textContent=msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{ t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; }));
  setTimeout(()=>{ t.style.opacity='0'; },2400);
  setTimeout(()=>t.remove(),2800);
}

// ═══════════════════════════════════════════════════
// PHASE 3 — STREAK SYSTEM
// ═══════════════════════════════════════════════════

// Streak milestone definitions
const STREAK_MILESTONES = {
  3:  {emoji:'🔥', label:'3 Day Streak!',    badge:'🥉 3-Day Streak!'},
  7:  {emoji:'🔥🔥', label:'7 Day Streak!',  badge:'🥈 1 Week Streak!'},
  14: {emoji:'💥', label:'2 Hafte Streak!',      badge:'🏅 2-Week Fire!'},
  30: {emoji:'⚡', label:'30 Day Streak!',    badge:'🥇 Month Master!'},
  60: {emoji:'🌟', label:'60 Day Streak!',    badge:'💎 Diamond Streak!'},
  100:{emoji:'👑', label:'100 Day Streak!',   badge:'👑 Legend Mode!'},
};

// Streak Freeze storage key
const STREAK_FREEZE_KEY = 'speakup_streak_freeze';

function getStreakFreezes(){
  try{ return JSON.parse(localStorage.getItem(STREAK_FREEZE_KEY)||'{"count":0,"lastGiven":""}'); }
  catch{ return {count:0,lastGiven:''}; }
}
function saveStreakFreezes(data){
  localStorage.setItem(STREAK_FREEZE_KEY, JSON.stringify(data));
}

// Pro users ko weekly 2 freezes milenge
function checkAndGrantStreakFreezes(){
  if(!isPro()) return;
  const data = getStreakFreezes();
  const now = new Date();
  const weekStr = now.getFullYear()+'_'+Math.ceil((now.getDate())/7)+'_'+now.getMonth();
  if(data.lastGiven !== weekStr){
    data.count = Math.min((data.count||0) + 2, 5); // max 5 stack
    data.lastGiven = weekStr;
    saveStreakFreezes(data);
  }
}

// Daily streak check — agar Pro user miss kiya toh freeze lao
function checkDailyStreakMiss(){
  if(!isPro()) return;
  const cs = CS();
  if(!cs.streak || cs.streak === 0) return;
  const lastKey = 'speakup_last_lesson_date';
  const today = new Date().toLocaleDateString('en-PK', {timeZone:'Asia/Karachi'});
  const yesterdayDate = new Date(Date.now() - 86400000);
  const yesterday = yesterdayDate.toLocaleDateString('en-PK', {timeZone:'Asia/Karachi'});
  const lastLesson = localStorage.getItem(lastKey);
  if(lastLesson && lastLesson !== today && lastLesson !== yesterday){
    // Missed! Use freeze if available
    const freezes = getStreakFreezes();
    if(freezes.count > 0){
      freezes.count--;
      saveStreakFreezes(freezes);
      localStorage.setItem(lastKey, today);
      showStreakFreezeUsedToast();
    }
  }
}

function saveLessonDate(){
  const today = new Date().toLocaleDateString('en-PK', {timeZone:'Asia/Karachi'});
  localStorage.setItem('speakup_last_lesson_date', today);
}

function showStreakFreezeUsedToast(){
  const t = document.getElementById('streakFreezeToast');
  if(!t) return;
  t.style.display = 'block';
  setTimeout(()=>{ t.style.display='none'; }, 3500);
}

// ── MAIN: Show Streak Fire Popup ──
function showStreakFirePopup(streak){
  const popup = document.getElementById('streakFirePopup');
  const numEl = document.getElementById('sfpNum');
  const labelEl = document.getElementById('sfpLabel');
  const subEl = document.getElementById('sfpSub');
  const milestoneEl = document.getElementById('sfpMilestone');
  const freezeBox = document.getElementById('sfpFreezeBox');
  const freezeCount = document.getElementById('sfpFreezeCount');
  if(!popup) return;

  // Set streak number
  if(numEl) numEl.textContent = streak;

  // Milestone check
  const ms = STREAK_MILESTONES[streak];
  if(ms && milestoneEl){
    milestoneEl.textContent = '🎉 ' + ms.label;
    milestoneEl.classList.add('show');
    // Show badge
    setTimeout(()=> showStreakBadge(ms.badge, ms.emoji), 600);
  } else if(milestoneEl){
    milestoneEl.classList.remove('show');
  }

  // Dynamic messages
  const msgs = [
    ['🔥 Lajawab!','Aaj bhi seekha! Yahi to consistency hai! 💪'],
    ['⚡ Jaari Raho!','Har din ek naya qadam! 🚀'],
    ['💥 Ghazab!','Tum rok nahi sakte khud ko! 🏆'],
    ['🌟 Wah Wah!','Zubaan seekhna jaari hai! 🎯'],
    ['🔥 Fire Mode!','Aag laga di hai tune seekhne mein! 🔥'],
  ];
  const msg = msgs[streak % msgs.length];
  if(labelEl) labelEl.textContent = msg[0];
  if(subEl) subEl.textContent = msg[1];

  // Streak freeze for Pro
  if(isPro() && freezeBox){
    const freezes = getStreakFreezes();
    freezeBox.classList.add('show');
    if(freezeCount) freezeCount.textContent = freezes.count + ' streak freeze baaki';
  } else if(freezeBox){
    freezeBox.classList.remove('show');
  }

  // Sparks animation
  spawnSFPSparks();

  popup.classList.add('show');

  // Auto-close after 5s if user doesn't interact
  setTimeout(()=>{ if(popup.classList.contains('show')) closeStreakPopup(); }, 5000);
}

function spawnSFPSparks(){
  const card = document.getElementById('sfpCard');
  if(!card) return;
  const emojis = ['🔥','⭐','✨','💫','⚡'];
  for(let i=0;i<8;i++){
    setTimeout(()=>{
      const s = document.createElement('div');
      s.className = 'sfp-spark';
      s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      const tx = (Math.random()-0.5)*200;
      const ty = -(60+Math.random()*120);
      s.style.cssText = `left:${30+Math.random()*40}%;bottom:30%;--tx:${tx}px;--ty:${ty}px;`;
      card.appendChild(s);
      setTimeout(()=>s.remove(), 1600);
    }, i*120);
  }
}

function closeStreakPopup(){
  const popup = document.getElementById('streakFirePopup');
  if(popup) popup.classList.remove('show');
}

function showStreakBadge(text, emoji){
  const div = document.createElement('div');
  div.className = 'streak-badge-anim';
  div.innerHTML = `<div style="background:linear-gradient(135deg,#1a0800,#2d1000);border:2px solid rgba(255,150,0,.6);border-radius:20px;padding:14px 24px;text-align:center;box-shadow:0 0 40px rgba(255,100,0,.5);">
    <div style="font-size:40px;margin-bottom:4px;">${emoji}</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:#FFD700;">${text}</div>
  </div>`;
  document.body.appendChild(div);
  setTimeout(()=>div.remove(), 3200);
}

// ── Hook into finishLesson to show streak popup ──
// We patch after DOMContentLoaded so finishLesson is already defined
document.addEventListener('DOMContentLoaded', function(){
  const _orig = window.finishLesson || finishLesson;
  window.finishLesson = function(b){
    if(typeof _orig === 'function') _orig.call(this, b);
    // Save today's date
    saveLessonDate();
    // Sync leaderboard
    setTimeout(lbSyncMyScore, 1000);
    // Show streak popup after lesson complete screen renders
    try{
      const cs = CS();
      if(cs && cs.streak > 0){
        setTimeout(()=> showStreakFirePopup(cs.streak), 1800);
      }
    } catch(e){}
  };
});

// ─── Grant freezes on Pro activation ───
(function(){
  setTimeout(()=>{
    if(isPro()) checkAndGrantStreakFreezes();
    checkDailyStreakMiss();
  }, 2000);
})();


// ═══════════════════════════════════════════════════
// PHASE 3 — LEADERBOARD SYSTEM
// ═══════════════════════════════════════════════════

const LEAGUES = [
  { id:'bronze',  name:'Bronze League',  icon:'🥉', color:'#CD7F32', minXP:0,    maxPlayers:30 },
  { id:'silver',  name:'Silver League',  icon:'🥈', color:'#C0C0C0', minXP:500,  maxPlayers:30 },
  { id:'gold',    name:'Gold League',    icon:'🥇', color:'#FFD700', minXP:1500, maxPlayers:30 },
  { id:'diamond', name:'Diamond League', icon:'💎', color:'#9FFFFF', minXP:5000, maxPlayers:30 },
];

// Get user's league based on XP
function getUserLeague(xp){
  let league = LEAGUES[0];
  for(const l of LEAGUES){
    if(xp >= l.minXP) league = l;
  }
  return league;
}

// Sync current user's score to Firebase
async function lbSyncMyScore(){
  if(!window.FB_AUTH || !window.FB_AUTH.currentUser) return;
  if(!window.FB_DB) return;
  try{
    const cs = CS();
    const uid = window.FB_AUTH.currentUser.uid;
    const xp = cs.xp || 0;
    const streak = cs.streak || 0;
    const lang = typeof S !== 'undefined' ? (S.activeLang||'en') : 'en';
    const name = typeof S !== 'undefined' ? (S.name||'User') : 'User';
    const avatar = typeof S !== 'undefined' ? (S.avatar||'😊') : '😊';
    const isProUser = typeof isPro === 'function' ? isPro() : false;
    const league = getUserLeague(xp);
    const score = xp + (streak * 5); // Score = XP + streak bonus
    const weekKey = getLbWeekKey();

    const lbRef = window.FB_REF(window.FB_DB, `leaderboard/${uid}`);
    await window.FB_SET(lbRef, {
      uid, name, avatar, xp, streak, lang, score,
      isPro: isProUser, league: league.id,
      weekKey, updatedAt: Date.now()
    });
  } catch(e){ console.log('LB sync error:', e.message); }
}

function getLbWeekKey(){
  const now = new Date();
  const jan1 = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${now.getFullYear()}_W${week}`;
}

// Load leaderboard from Firebase
async function lbLoadData(){
  if(!window.FB_DB) return generateFakeLeaderboard();
  try{
    const lbRef = window.FB_REF(window.FB_DB, 'leaderboard');
    const snap = await window.FB_GET(lbRef);
    if(!snap.exists()) return generateFakeLeaderboard();
    const data = snap.val();
    return Object.values(data).sort((a,b) => (b.score||0)-(a.score||0));
  } catch(e){
    return generateFakeLeaderboard();
  }
}

// Fake data for when Firebase is empty / offline
function generateFakeLeaderboard(){
  const names = ['Ahmed','Sara','Ali','Fatima','Hassan','Ayesha','Omar','Zainab','Bilal','Maryam','Usman','Hira'];
  const avatars = ['😊','🦊','🐯','🦁','🐸','🌸','⚡','🎯','🔥','💫','🌟','🎪'];
  return names.map((n,i)=>({
    uid: 'fake_'+i, name:n, avatar:avatars[i],
    xp: Math.floor(Math.random()*3000)+200,
    streak: Math.floor(Math.random()*30),
    score: Math.floor(Math.random()*3500)+300,
    isPro: i<4, league:'bronze', lang:'en'
  })).sort((a,b)=>b.score-a.score);
}

// ── Render leaderboard ──
async function renderLeaderboard(){
  const cs = CS();
  const myXP = cs.xp || 0;
  const myScore = myXP + (cs.streak||0)*5;
  const myLeague = getUserLeague(myXP);

  // Update league banner
  const banner = document.getElementById('lbMyBanner');
  const icon = document.getElementById('lbMyIcon');
  const lname = document.getElementById('lbMyLeagueName');
  if(banner) banner.style.cssText = `margin:14px 16px 0;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,${myLeague.color}18,${myLeague.color}08);border:2px solid ${myLeague.color}55;`;
  if(icon) icon.textContent = myLeague.icon;
  if(lname){ lname.textContent = myLeague.name; lname.style.color = myLeague.color; }

  // Show loading
  document.getElementById('lbPromoRows').innerHTML = '<div style="padding:12px 16px;color:var(--mut);font-size:13px;">⏳ Loading...</div>';
  document.getElementById('lbMidRows').innerHTML = '';
  document.getElementById('lbDemoteRows').innerHTML = '';

  const allUsers = await lbLoadData();

  // Filter to my league
  const leagueUsers = allUsers.filter(u => getUserLeague(u.xp||0).id === myLeague.id);

  // Add myself if not present, or update my latest score
  const myUID = window.FB_AUTH?.currentUser?.uid || 'me';
  const meInList = leagueUsers.find(u => u.uid === myUID);
  if(!meInList){
    const myName = typeof S !== 'undefined' ? S.name : 'Tum';
    const myAvatar = typeof S !== 'undefined' ? S.avatar : '😊';
    leagueUsers.push({
      uid: myUID, name: myName, avatar: myAvatar,
      xp: myXP, streak: cs.streak||0, score: myScore,
      isPro: isPro(), league: myLeague.id, isMe:true
    });
  } else {
    // ✅ FIX: latest score se update karo aur isMe mark karo
    meInList.isMe = true;
    meInList.xp = myXP;
    meInList.streak = cs.streak||0;
    meInList.score = myScore;
    meInList.isPro = isPro();
  }
  // Hamesha sort karo taake rank sahi ho
  leagueUsers.sort((a,b)=>b.score-a.score);

  const total = leagueUsers.length;
  const promoCount = Math.max(1, Math.floor(total * 0.25));
  const demoteCount = Math.max(1, Math.floor(total * 0.25));
  const demoteStart = total - demoteCount;

  // My rank
  const myRankEl = document.getElementById('lbMyRank');
  const myRankNum = leagueUsers.findIndex(u => u.uid === myUID) + 1;
  if(myRankEl){ myRankEl.textContent = '#'+myRankNum; myRankEl.style.color = myLeague.color; }

  function buildRow(user, idx){
    const rank = idx + 1;
    const isMe = user.uid === myUID || user.isMe;
    const rankDisplay = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '#'+rank;
    const isPromoZone = idx < promoCount;
    const isDemoteZone = idx >= demoteStart;
    const zoneCls = isPromoZone ? 'promo-zone' : isDemoteZone ? 'demote-zone' : '';
    const li = typeof LANG_INFO !== 'undefined' ? (LANG_INFO[user.lang||'en']||{flag:'🌐'}) : {flag:'🌐'};
    return `<div class="lb-row ${isMe?'is-me':''} ${zoneCls}">
      ${isMe ? '<div class="lb-row-shine"></div>' : ''}
      <div class="lb-rank">${rankDisplay}</div>
      <div class="lb-avatar">${user.avatar||'😊'}${user.isPro?'<div class="lb-pro-crown">👑</div>':''}</div>
      <div class="lb-info">
        <div class="lb-name">${isMe?'<b style="color:var(--g)">'+user.name+' (Tum)</b>':user.name}</div>
        <div class="lb-meta">${li.flag} ${user.streak||0}🔥 streak${user.isPro?' · 👑 Pro':''}</div>
      </div>
      <div class="lb-xp">
        <div class="lb-xp-val">${user.score||0}</div>
        <div class="lb-xp-lbl">Score</div>
      </div>
    </div>`;
  }

  const promoRows = leagueUsers.slice(0, promoCount);
  const midRows = leagueUsers.slice(promoCount, demoteStart);
  const demoteRows = leagueUsers.slice(demoteStart);

  // Fix: agar total <= 2, demote zone overlap avoid karo
  const safePromoRows = promoRows;
  const safeDemoteRows = demoteRows.filter(u => !safePromoRows.find(p => p.uid === u.uid));

  document.getElementById('lbPromoRows').innerHTML = safePromoRows.map((u,i)=>buildRow(u,i)).join('');
  document.getElementById('lbMidRows').innerHTML = midRows.map((u,i)=>buildRow(u,promoCount+i)).join('');
  document.getElementById('lbDemoteRows').innerHTML = safeDemoteRows.map((u,i)=>buildRow(u,demoteStart+i)).join('');
}

// ── Render All Leagues grid ──
function renderLeaguesGrid(){
  const cs = CS();
  const myXP = cs.xp || 0;
  const myLeague = getUserLeague(myXP);
  const grid = document.getElementById('lbLeaguesGrid');
  if(!grid) return;
  grid.innerHTML = LEAGUES.map(l => {
    const isActive = l.id === myLeague.id;
    const isUnlocked = myXP >= l.minXP;
    return `<div class="lb-league-card ${isActive?'active':''}" 
      style="--card-color:${l.color};${isActive?`border-color:${l.color};background:${l.color}12;`:''}"
      onclick="lbLeagueClick('${l.id}')">
      <div class="lc-icon">${l.icon}</div>
      <div class="lc-name" style="color:${isUnlocked?l.color:'var(--mut)'}">${l.name}</div>
      ${isActive?`<div style="background:${l.color};color:#000;font-size:9px;font-weight:800;padding:2px 8px;border-radius:8px;margin-top:4px;">TУМHARI LEAGUE ✓</div>`:''}
      ${!isUnlocked?`<div class="lc-lock">🔒 ${l.minXP} XP chahiye</div>`:
        `<div class="lc-req" style="color:${l.color};">${l.minXP===0?'Starting League':'${l.minXP}+ XP'}</div>`}
    </div>`;
  }).join('');
}

function lbLeagueClick(leagueId){
  const l = LEAGUES.find(x=>x.id===leagueId);
  if(l) p3Toast(l.icon+' '+l.name+' — '+l.minXP+'+ XP level!', l.color);
}

// ── Leaderboard Tab Switch ──
function lbSwitchTab(tab){
  ['my','leagues','friends'].forEach(t=>{
    const btn = document.getElementById('lbTab_'+t);
    const panel = document.getElementById('lbPanel'+t.charAt(0).toUpperCase()+t.slice(1));
    if(btn) btn.classList.toggle('active', t===tab);
    if(panel) panel.style.display = t===tab?'':'none';
  });
  if(tab==='my') renderLeaderboard();
  if(tab==='leagues') renderLeaguesGrid();
}

// ── Weekly Timer Countdown ──
function lbUpdateTimer(){
  const el = document.getElementById('lbTimerVal');
  if(!el) return;
  const now = new Date();
  const sunday = new Date(now);
  sunday.setDate(now.getDate() + (7 - now.getDay()) % 7 || 7);
  sunday.setHours(0,0,0,0);
  const diff = sunday - now;
  const days = Math.floor(diff/86400000);
  const hrs = Math.floor((diff%86400000)/3600000);
  const mins = Math.floor((diff%3600000)/60000);
  el.textContent = `${days} din ${hrs} ghante ${mins} minute`;
}
setInterval(lbUpdateTimer, 60000);

// ── Invite friends ──
function lbShareInvite(){
  const txt = '🦉 SpeakUp pe mujhse compete karo! Daily ek language lesson karo aur leaderboard pe race karo. 🔥\nhttps://speakup.app';
  if(navigator.share){
    navigator.share({title:'SpeakUp League Challenge!', text:txt}).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(txt).then(()=>p3Toast('📋 Invite link copy ho gaya!','var(--g)'));
  }
}


// ═══════════════════════════════════════════════════
// PHASE 3 — CERTIFICATE v2
// ═══════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// PROFESSIONAL CERTIFICATE — Bilingual (English + Target Language)
// ══════════════════════════════════════════════════════

// Certificate text per language
const CERT_LANG_TEXT = {
  en: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'This certificate is proudly presented to',
    body:        function(lang,days){ return `For successfully completing the <b>English</b> course on SpeakUp — demonstrating dedication and excellence across <b>${days} Days</b> of structured learning.`; },
    rtl: false
  },
  fr: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Ce certificat est fièrement remis à',
    body:        function(lang,days){ return `Pour avoir complété avec succès le cours de <b>Français</b> sur SpeakUp — avec dévouement et excellence sur <b>${days} jours</b> d'apprentissage.`; },
    rtl: false
  },
  zh: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: '兹证明以下学员',
    body:        function(lang,days){ return `圆满完成 SpeakUp <b>中文</b>课程 — 以坚持不懈的精神和卓越的表现完成了 <b>${days} 天</b>的系统学习。`; },
    rtl: false
  },
  ar: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'تُمنح هذه الشهادة بكل فخر إلى',
    body:        function(lang,days){ return `لإتمامه بنجاح دورة <b>اللغة العربية</b> على منصة SpeakUp — مُظهراً تفانياً وتميزاً خلال <b>${days} يوماً</b> من التعلم المنظّم.`; },
    rtl: true
  },
  es: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Este certificado se otorga con orgullo a',
    body:        function(lang,days){ return `Por completar exitosamente el curso de <b>Español</b> en SpeakUp — demostrando dedicación y excelencia a lo largo de <b>${days} días</b> de aprendizaje.`; },
    rtl: false
  },
  ko: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: '이 수료증은 다음 분께 수여됩니다',
    body:        function(lang,days){ return `SpeakUp <b>한국어</b> 과정을 성공적으로 이수하였음을 증명합니다 — <b>${days}일</b>간의 체계적인 학습을 통해 헌신과 탁월함을 발휘하였습니다.`; },
    rtl: false
  },
  ja: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'この修了証は以下の方に授与されます',
    body:        function(lang,days){ return `SpeakUp <b>日本語</b>コースを見事に修了したことを証明します — <b>${days}日間</b>の体系的な学習を通じ、献身と卓越した成果を示されました。`; },
    rtl: false
  },
  de: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Diese Urkunde wird stolz überreicht an',
    body:        function(lang,days){ return `Für den erfolgreichen Abschluss des <b>Deutsch</b>kurses auf SpeakUp — mit Hingabe und Exzellenz über <b>${days} Tage</b> strukturierten Lernens.`; },
    rtl: false
  },
  tr: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Bu sertifika gururla sunulmaktadır',
    body:        function(lang,days){ return `SpeakUp'taki <b>Türkçe</b> kursunu başarıyla tamamladığı için — <b>${days} gün</b>lük yapılandırılmış öğrenimde özveri ve mükemmellik göstererek.`; },
    rtl: false
  },
  ie: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Tá an teastas seo á bhronnadh go bródúil ar',
    body:        function(lang,days){ return `As clár <b>Gaeilge</b> SpeakUp a chríochnú go rathúil — ag léiriú tiomantais agus barr feabhais thar <b>${days} lá</b> d'fhoghlaim struchtúrtha.`; },
    rtl: false
  },
  chess: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'This certificate is proudly presented to',
    body:        function(lang,days){ return `For successfully completing the <b>Chess Mastery</b> program on SpeakUp — demonstrating strategic thinking and excellence across <b>${days} Days</b> of structured learning.`; },
    rtl: false
  },
  ru: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'Настоящий сертификат торжественно вручается',
    body:        function(lang,days){ return `За успешное завершение курса <b>Русского языка</b> на SpeakUp — проявив целеустремлённость и усердие на протяжении <b>${days} дней</b> обучения.`; },
    rtl: false
  },
  python: {
    heading:     'Certificate',
    headingSub:  'of Achievement',
    presentedTo: 'This certificate is proudly presented to',
    body:        function(lang,days){ return `For successfully completing the <b>Python Programming</b> course on SpeakUp — demonstrating coding skills and excellence across <b>${days} Levels</b> of structured learning.`; },
    rtl: false
  }
};

// Certificate number generator
// ══════════════════════════════════════════════════════
// REALTIME DATABASE CERTIFICATE SERIAL NUMBER SYSTEM
// ══════════════════════════════════════════════════════
// Structure:
//   certSerials/
//     _counter        → 42               (global counter)
//     {uid}_{lang}_{days} → "SIA-2026-0042"  (per user per course)

const _certNumCache = {};

async function _certGetOrCreateNum(uid, lang, days, userName){
  const cacheKey = (uid + '_' + lang + '_' + days).replace(/[.#$\[\]]/g, '_');

  // 1. Memory cache
  if(_certNumCache[cacheKey]) return _certNumCache[cacheKey];

  try {
    const db = window.FB_DB;
    if(!db) throw new Error('Realtime DB not ready');

    const { ref, get, set, runTransaction } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js');

    const userRef    = ref(db, 'certSerials/' + cacheKey);
    const counterRef = ref(db, 'certSerials/_counter');

    // 2. Already issued?
    const existing = await get(userRef);
    if(existing.exists()){
      const certNo = existing.val();
      _certNumCache[cacheKey] = certNo;
      return certNo;
    }

    // 3. New — atomic transaction on counter
    let certNo;
    await runTransaction(counterRef, (current) => {
      const nextNum = (current || 0) + 1;
      const yr = new Date().getFullYear();
      certNo = 'SIA-' + yr + '-' + String(nextNum).padStart(4, '0');
      return nextNum;
    });

    // Save user cert number
    await set(userRef, certNo);

    _certNumCache[cacheKey] = certNo;
    return certNo;

  } catch(err){
    console.warn('CertSerial error, fallback:', err);
    const localKey = 'certNo_' + cacheKey;
    const saved = localStorage.getItem(localKey);
    if(saved) return saved;
    const yr = new Date().getFullYear();
    let hash = 0;
    for(let i=0;i<cacheKey.length;i++){ hash=((hash<<5)-hash)+cacheKey.charCodeAt(i); hash|=0; }
    const fallback = 'SIA-' + yr + '-' + String(1000 + Math.abs(hash) % 8999).padStart(4,'0');
    localStorage.setItem(localKey, fallback);
    return fallback;
  }
}

async function _loadCertNum(uid, lang, days, userName){
  const numEl = document.getElementById('certNum');
  if(!numEl) return;
  numEl.textContent = '...';
  const certNo = await _certGetOrCreateNum(uid, lang, days, userName);
  if(numEl) numEl.textContent = certNo;
}

// Step 1: Open screen → show username confirm modal
function showCertV2(){
  const cs = CS(); const c = AC();
  if(!isDemo() && cs.done.length < c){ showCertLocked(); return; }

  // Show screen first
  showScreen('certificate-v2');

  // Show modal, hide paper
  const modal = document.getElementById('certNameModal');
  const wrap  = document.getElementById('certProWrap');
  if(modal) modal.style.display = 'flex';
  if(wrap)  wrap.style.display  = 'none';

  // Pre-fill with profile name
  const nameInput = document.getElementById('certNameInput');
  if(nameInput){
    const profileName = (typeof S !== 'undefined' && S.name) ? S.name : '';
    nameInput.value = profileName;
    nameInput.focus();
    nameInput.select();
  }
}

// Step 2: User confirms name → render certificate
function certConfirmName(){
  const nameInput = document.getElementById('certNameInput');
  const name = (nameInput ? nameInput.value.trim() : '') || (typeof S !== 'undefined' ? S.name : 'Learner') || 'Learner';

  if(!name){ nameInput && nameInput.focus(); return; }

  // Hide modal, show cert
  const modal = document.getElementById('certNameModal');
  const wrap  = document.getElementById('certProWrap');
  if(modal) modal.style.display = 'none';
  if(wrap)  wrap.style.display  = 'flex';

  // Get lang info
  const lang   = (typeof S !== 'undefined') ? (S.activeLang||'en') : 'en';
  const lt     = CERT_LANG_TEXT[lang] || CERT_LANG_TEXT['en'];
  const c      = AC();

  // Fill student name
  const nameEl = document.getElementById('certStudentName');
  if(nameEl) nameEl.textContent = name;

  // ── Arabic mirror layout ──
  const paper = document.getElementById('certPaperEl');
  if(paper){
    if(lt.rtl){
      paper.classList.add('cert-rtl-mirror');
    } else {
      paper.classList.remove('cert-rtl-mirror');
    }
  }

  // ── Heading (always English)
  const headEl = document.getElementById('certMainTitle');
  if(headEl) headEl.textContent = lt.heading || 'Certificate';

  const headSubEl = document.getElementById('certOfAchievement');
  if(headSubEl) headSubEl.textContent = lt.headingSub || 'of Achievement';

  // ── Presented to (native language)
  const presEl = document.getElementById('certPresentedTo');
  if(presEl){
    presEl.textContent = lt.presentedTo || 'This certificate is proudly presented to';
    presEl.style.direction = lt.rtl ? 'rtl' : 'ltr';
    presEl.style.textAlign = lt.rtl ? 'right' : 'left';
  }

  // ── Body text (native, with HTML bold tags)
  const bodyEl = document.getElementById('certBodyText');
  if(bodyEl){
    bodyEl.innerHTML = lt.body ? lt.body(lang, c) : '';
    bodyEl.style.direction = lt.rtl ? 'rtl' : 'ltr';
    bodyEl.style.textAlign = lt.rtl ? 'right' : 'left';
  }

  // Keep hidden compat fields for share text
  const courseEnEl = document.getElementById('certCourseEn');
  if(courseEnEl) courseEnEl.textContent = lt.heading || '';
  const courseSubEl = document.getElementById('certCourseSub');
  if(courseSubEl) courseSubEl.textContent = c + ' Days';

  // Date
  const dateEl = document.getElementById('certDate');
  if(dateEl) dateEl.textContent = new Date().toLocaleDateString('en-PK',{month:'long',year:'numeric'});

  // Cert number — Firebase se permanent serial
  const uid = (typeof window.firebaseUser !== 'undefined' && window.firebaseUser)
    ? window.firebaseUser.uid
    : (typeof S !== 'undefined' ? (S.uid || S.name || 'guest') : 'guest');
  _loadCertNum(uid, lang, c, name);

  // Pro download button
  const dlBtn = document.getElementById('cv2ProDownload');
  if(dlBtn) dlBtn.style.display = (isPro()||isDemo()) ? 'none' : 'flex';

  // Confetti!
  const box = document.getElementById('confettiBoxV2');
  if(box){
    box.innerHTML='';
    const colors=['#c7a45a','#FFD700','#b08a44','#f7e8ba','#2EE59D','#fff'];
    for(let i=0;i<55;i++){
      setTimeout(()=>{
        const p=document.createElement('div');
        p.className='conf-piece';
        const sz=5+Math.random()*9;
        p.style.cssText=`left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*.8}s;animation-duration:${1.3+Math.random()*1}s;width:${sz}px;height:${sz}px;border-radius:${Math.random()>.5?'50%':'2px'};transform:rotate(${Math.random()*360}deg);`;
        box.appendChild(p);
      },i*28);
    }
    setTimeout(()=>{box.innerHTML='';},3800);
  }
}

// Share certificate - Image ya PDF
function certV2Share(type){
  type = type || 'image';
  const paperEl = document.getElementById('certPaperEl');
  if(!paperEl){ p3Toast('❌ Certificate nahi mila','#FF6B6B'); return; }

  const btnId = type==='pdf' ? 'certSharePdfBtn' : 'certShareImgBtn';
  const btn = document.getElementById(btnId);
  const origText = btn ? btn.textContent : '';
  if(btn){ btn.textContent = '⏳ Taiyaar...'; btn.disabled = true; }

  function _resetBtn(){ if(btn){ btn.textContent = origText; btn.disabled = false; } }

  if(typeof html2canvas === 'undefined'){
    _certTextShare(); _resetBtn(); return;
  }

  html2canvas(paperEl, {
    scale: 2, useCORS: true, allowTaint: true,
    backgroundColor: '#1a1530', logging: false
  }).then(function(canvas){
    _resetBtn();
    const name = (document.getElementById('certStudentName')?.textContent||'Student').replace(/\s+/g,'_');

    if(type === 'pdf'){
      // PDF generate karo
      if(typeof window.jspdf === 'undefined' && typeof jsPDF === 'undefined'){
        p3Toast('❌ PDF library load nahi hui','#FF6B6B'); return;
      }
      const { jsPDF } = window.jspdf || window;
      const imgData = canvas.toDataURL('image/png');
      // A4 landscape
      const pdf = new jsPDF({ orientation:'landscape', unit:'mm', format:'a4' });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      // Canvas aspect ratio maintain karo
      const cr = canvas.width / canvas.height;
      let iw = pw, ih = pw / cr;
      if(ih > ph){ ih = ph; iw = ph * cr; }
      const x = (pw - iw) / 2, y = (ph - ih) / 2;
      pdf.addImage(imgData, 'PNG', x, y, iw, ih);
      const pdfBlob = pdf.output('blob');
      const filename = 'SpeakUp_Certificate_'+name+'.pdf';

      // Share ya download
      if(navigator.share && navigator.canShare){
        const file = new File([pdfBlob], filename, {type:'application/pdf'});
        const certShareText = _buildCertShareText();
        const sd = { files:[file], title:'🎓 SpeakUp Certificate — ' + name.replace(/_/g,' '), text: certShareText };
        if(navigator.canShare(sd)){
          navigator.share(sd)
            .then(()=>p3Toast('✅ PDF share ho gaya!','#2EE59D'))
            .catch(function(e){ if(e.name!=='AbortError') _downloadBlob(pdfBlob, filename); });
          return;
        }
      }
      _downloadBlob(pdfBlob, filename);
      p3Toast('📥 PDF download ho gayi!','#2EE59D');

    } else {
      // Image share
      canvas.toBlob(function(blob){
        if(!blob){ _certTextShare(); return; }
        const filename = 'SpeakUp_Certificate_'+name+'.png';
        if(navigator.share && navigator.canShare){
          const file = new File([blob], filename, {type:'image/png'});
          const certShareText = _buildCertShareText();
          const sd = { files:[file], title:'🎓 SpeakUp Certificate — ' + name.replace(/_/g,' '), text: certShareText };
          if(navigator.canShare(sd)){
            navigator.share(sd)
              .then(()=>p3Toast('✅ Image share ho gayi!','#2EE59D'))
              .catch(function(e){ if(e.name!=='AbortError') _downloadCanvas(canvas, filename); });
            return;
          }
        }
        _downloadCanvas(canvas, filename);
        p3Toast('📥 Image download ho gayi!','#2EE59D');
      }, 'image/png');
    }

  }).catch(function(err){
    console.warn('html2canvas error:', err);
    _resetBtn();
    _certTextShare();
  });
}

function _downloadBlob(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 3000);
}

function _downloadCanvas(canvas, filename){
  const a = document.createElement('a');
  a.download = filename; a.href = canvas.toDataURL('image/png'); a.click();
}

// ── Shared certificate description text (used by image, PDF, and text fallback) ──
function _buildCertShareText(){
  const name   = document.getElementById('certStudentName')?.textContent || S?.name || 'Student';
  const course = document.getElementById('certCourseEn')?.textContent || '';
  const date   = document.getElementById('certDate')?.textContent || '';
  const cleanName = name.replace(/_/g,' ').trim();

  return (
    '🎓 Maine SpeakUp pe ' + (course ? course + ' ' : '') + 'complete kar liya!\n' +
    (date ? '📅 ' + date + '\n' : '') +
    '\n' +
    '━━━━━━━━━━━━━━━━━━━━\n' +
    '🦉 SpeakUp — Daily Seekho, Daily Badho!\n' +
    '\n' +
    '📚 Aik hi jagah par multiple languages seekho — English, Arabic, French, Spanish, Chinese aur bahut kuch!\n' +
    '\n' +
    '📄 Papers: Past papers aur practice tests se apni tayyari mazboot karo.\n' +
    '\n' +
    '🏆 Certificate: Course complete karo aur apna official SpeakUp certificate hasil karo — bilkul is tarah!\n' +
    '\n' +
    '⚡ Daily thodi practice, badi kamyabi — aaj hi shuru karo!\n' +
    '\n' +
    '🔗 Abhi join karo:\n' +
    'https://hazelprojects.github.io/Speakup/index.html'
  );
}

function _certTextShare(){
  const text = _buildCertShareText();
  const name = document.getElementById('certStudentName')?.textContent || 'Certificate';
  if(navigator.share) navigator.share({title:'🎓 ' + name.replace(/_/g,' ') + ' — SpeakUp Certificate', text}).catch(()=>{});
  else navigator.clipboard?.writeText(text).then(()=>p3Toast('📋 Copy ho gaya!','#c7a45a'));
}

// Enter key support for cert name input
document.addEventListener('DOMContentLoaded', function(){
  const inp = document.getElementById('certNameInput');
  if(inp) inp.addEventListener('keydown', function(e){ if(e.key==='Enter') certConfirmName(); });
});

// ── Override showCert to use new professional cert ──
window.showCert = function(){
  showCertV2();
};

// ── Override showCertLocked ──
const _origShowCertLocked = window.showCertLocked;
window.showCertLocked = function(){
  if(typeof _origShowCertLocked === 'function') _origShowCertLocked();
};


// ═══════════════════════════════════════════════════
// PHASE 3 — TAB NAVIGATION PATCH
// ═══════════════════════════════════════════════════

// Leaderboard tab handling — tab() ke andar already handle hai, yeh patch sirf lbUpdateTimer ke liye
document.addEventListener('DOMContentLoaded', function(){
  const _origTab = window.tab || tab;
  window.tab = function(name){
    if(name === 'leaderboard'){
      lbUpdateTimer();
    }
    if(typeof _origTab === 'function') _origTab.call(this, name);
  };
});


// ═══════════════════════════════════════════════════
// PHASE 3 — FIREBASE LEADERBOARD SYNC ON LOAD
// ═══════════════════════════════════════════════════
// Automatically sync user's score when they're logged in
(function initPhase3(){
  setTimeout(()=>{
    // Sync to leaderboard if logged in
    if(window.FB_AUTH && window.FB_AUTH.currentUser){
      lbSyncMyScore();
    }
    // Watch for auth changes
    if(window.FB_AUTH){
      const _origAuthChange = window.onFirebaseAuthChange;
      window.onFirebaseAuthChange = function(user){
        if(typeof _origAuthChange === 'function') _origAuthChange(user);
        if(user) setTimeout(lbSyncMyScore, 1500);
      };
    }
  }, 3000);
})();