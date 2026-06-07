// ══════════════════════════════════════════════════
// SpeakUp v8 — 09-lesson-engine.js
// Lesson Builder — buildSteps, finishLesson, speaking system
// ══════════════════════════════════════════════════

// HEARTS FAIL — day restart
function showHeartsFail(){
  const cs=CS();
  const failDay=cs.day;
  const bd=document.getElementById('lBd');
  const proBtn = !isPro() ? `
    <div style="background:linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,149,0,.1));border:1.5px solid #FFD700;border-radius:16px;padding:14px;margin-bottom:14px;">
      <div style="font-size:11px;color:#FFD700;font-weight:800;margin-bottom:4px;">👑 PRO LO — UNLIMITED HEARTS</div>
      <div style="font-size:12px;color:var(--mut);margin-bottom:10px;">No more worrying about hearts! Pro gives unlimited hearts.</div>
      <button onclick="showProPopup(${failDay})" style="width:100%;padding:10px;background:linear-gradient(135deg,#FFD700,#FF9500);border:none;border-radius:10px;color:#000;font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">👑 Upgrade to Pro</button>
    </div>` : '';
  bd.innerHTML=`<div class="comp" style="text-align:center;padding:32px 16px;">
    <div style="font-size:80px;margin-bottom:12px;animation:tb .6s ease">💔</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:26px;color:var(--r);margin-bottom:8px">Hearts Empty!</div>
    <div style="color:var(--mut);font-size:14px;line-height:1.7;margin-bottom:24px">
      Ghabrao mat! Galtiyon se seekha jaata hai.<br>
      <span style="color:var(--txt);font-weight:700">Day ${failDay}</span> dobara shuru karo — is baar better karoge! 💪
    </div>
    ${proBtn}
    <div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:24px;border:1px solid var(--bdr);">
      <div style="font-size:13px;color:var(--mut);margin-bottom:6px">Wrong Questions</div>
      <div style="font-family:'Fredoka One',sans-serif;font-size:28px;color:var(--r)">${wrongQs.length}</div>
    </div>
    <button class="bg" onclick="restartDay()">🔄 Day ${failDay} Phir Se Shuru Karo</button>
    <button class="bo" style="margin-top:10px" onclick="exitLesson()">🏠 Baad Mein Try Karunga</button>
  </div>`;
}

function restartDay(){
  // Keep the day same — don't advance
  const maxH = getAdminMaxHearts();
  hl=maxH;qcor=0;qtot=0;wrongQs=[];
  _ramScores=[];_ramId=0;
  LS=buildSteps(AC());
  si=0;
  document.getElementById('lHt').textContent='❤️'.repeat(maxH);
  renderStep();
}

// ══════════════════════════════════════════════════════════
//  SPEAKUP v9 — FULL SPEAKING SYSTEM
//  Language codes, TTS, Repeat-After-Me, Conversation Mic
// ══════════════════════════════════════════════════════════

// ── Language voice map ──
const LANG_VOICE_MAP = {
  'en':  {rv:'UK English Female',     web:'en-GB'},
  'fr':  {rv:'French Female',          web:'fr-FR'},
  'zh':  {rv:'Chinese Female',         web:'zh-CN'},
  'ar':  {rv:'Arabic Female',          web:'ar-SA'},
  'ko':  {rv:'Korean Female',          web:'ko-KR'},
  'ja':  {rv:'Japanese Female',        web:'ja-JP'},
  'tr':  {rv:'Turkish Female',         web:'tr-TR'},
  'ie':  {rv:'UK English Female',      web:'ga-IE'},
  'es':  {rv:'Spanish Female',         web:'es-ES'},
  'de':  {rv:'Deutsch Female',         web:'de-DE'},
  'chess':{rv:'UK English Female',    web:'en-GB'},
};

function _getLangCode(){
  return (typeof S!=='undefined'?(S.activeLang||'en'):'en');
}
function _getVoiceInfo(){
  return LANG_VOICE_MAP[_getLangCode()]||LANG_VOICE_MAP['en'];
}

// ── Core TTS ──
function spk(t, slow){
  const vi = _getVoiceInfo();
  const rate = slow ? 0.55 : 0.9;
  if(typeof responsiveVoice!=='undefined'&&responsiveVoice.voiceSupport()){
    responsiveVoice.cancel();
    responsiveVoice.speak(t, vi.rv, {rate, pitch:1, volume:1,
      onerror:()=>_fallback(t, vi.web, rate)
    });
  } else {
    _fallback(t, vi.web, rate);
  }
}
function spkSlow(t){ spk(t, true); }

// ── Speak word + example sentence together ──
function spkWordAndEx(word, ex){
  const vi = _getVoiceInfo();
  const combined = word + '. ' + ex.replace(/["'«»]/g,'');
  if(typeof responsiveVoice!=='undefined'&&responsiveVoice.voiceSupport()){
    responsiveVoice.cancel();
    responsiveVoice.speak(combined, vi.rv, {rate:0.88, pitch:1, volume:1,
      onerror:()=>_fallback(combined, vi.web, 0.88)
    });
  } else {
    _fallback(combined, vi.web, 0.88);
  }
}

function _fallback(t, langCode, rate){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  setTimeout(()=>{
    const u = new SpeechSynthesisUtterance(t);
    u.lang = langCode||'en-GB';
    u.rate = rate||0.9;
    u.pitch = 1; u.volume = 1;
    const vs = window.speechSynthesis.getVoices();
    const lc = langCode||'en-GB';
    const v = vs.find(x=>x.lang===lc) ||
              vs.find(x=>x.lang.startsWith(lc.split('-')[0])) ||
              vs.find(x=>x.lang.startsWith('en'));
    if(v) u.voice = v;
    window.speechSynthesis.speak(u);
  }, 100);
}

// ══════════════════════════════════════════════════════════
//  REPEAT-AFTER-ME (RAM) SYSTEM
// ══════════════════════════════════════════════════════════
// Per-lesson speaking score tracking
let _ramScores = [];  // [{word, result}]  result: 'perfect'|'good'|'miss'
let _ramRecognizing = false;
let _ramRecognition = null;

function _ramSupported(){
  return ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
}

// Renders the RAM widget into given container el
// word=vocab word, pron=pronunciation hint
function renderRAM(word, pron, containerEl){
  if(!_ramSupported()){
    containerEl.innerHTML='<div style="padding:8px 12px;background:rgba(255,150,0,.1);border:1px solid rgba(255,150,0,.3);border-radius:12px;font-size:12px;color:var(--o);">🎤 No microphone support. Try Chrome.</div>';
    return;
  }
  const id = _ramId;
  // Store word safely in a map — avoid all string escaping issues
  _ramWordStore[id] = {word: word, pron: pron||''};

  containerEl.innerHTML=
    '<div class="ram-box">'
    +'<div class="ram-title">🎤 Repeat After Me</div>'
    +'<div class="ram-word" id="ram_word_'+id+'">'+word+'</div>'
    +'<div class="ram-pron" id="ram_pron_'+id+'">'+(pron?'/'+pron+'/':'')+'</div>'
    +'<div class="ram-steps" id="ram_steps_'+id+'">'
    +'<div class="ram-step active" id="ram_s1_'+id+'">🔊 Step 1: Pehle suno</div>'
    +'<div class="ram-step" id="ram_s2_'+id+'">🎤 Step 2: Mic mein bolo</div>'
    +'<div class="ram-step" id="ram_s3_'+id+'">📊 Step 3: Score dekho</div>'
    +'</div>'
    +'<div style="display:flex;gap:8px;margin-top:12px;">'
    +'<button class="spk-btn spk-listen" data-ramid="'+id+'" onclick="ramListenById(this)">🔊 Suno</button>'
    +'<button class="spk-btn spk-mic" id="ram_micbtn_'+id+'" data-ramid="'+id+'" onclick="ramRecordById(this)">🎤 Bolo</button>'
    +'<button class="spk-btn spk-slow" data-ramid="'+id+'" onclick="ramSlowById(this)">🐢 Dheere</button>'
    +'</div>'
    +'<div id="ram_result_'+id+'"></div>'
    +'</div>';
}

let _ramId = 0;
const _ramWordStore = {}; // id -> {word, pron}

function ramListenById(btn){
  const id = parseInt(btn.dataset.ramid);
  const d = _ramWordStore[id]; if(!d) return;
  ramListen(d.word, d.pron, id);
}
function ramRecordById(btn){
  const id = parseInt(btn.dataset.ramid);
  const d = _ramWordStore[id]; if(!d) return;
  ramRecord(d.word, id);
}
function ramSlowById(btn){
  const id = parseInt(btn.dataset.ramid);
  const d = _ramWordStore[id]; if(!d) return;
  spkSlow(d.word);
}
function ramRetryById(id){
  const d = _ramWordStore[id]; if(!d) return;
  ramRecord(d.word, id);
}

function ramListen(word, pron, id){
  // Mark step 1 done
  const s1=document.getElementById('ram_s1_'+id);
  const s2=document.getElementById('ram_s2_'+id);
  if(s1){s1.classList.remove('active');s1.classList.add('done');s1.textContent='✅ Step 1: Suna!';}
  if(s2){s2.classList.add('active');}
  spk(word);
  // Also speak pronunciation hint
  setTimeout(()=>{
    const pronEl=document.getElementById('ram_pron_'+id);
    if(pronEl) pronEl.style.color='var(--g)';
  }, 800);
}

function ramRecord(word, id){
  if(_ramRecognizing){
    // Stop
    if(_ramRecognition) _ramRecognition.stop();
    return;
  }
  const btn=document.getElementById('ram_micbtn_'+id);
  if(btn){btn.classList.add('listening');btn.innerHTML='<div class="wave-anim"><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div></div> Sun raha hoon...';}
  const s2=document.getElementById('ram_s2_'+id);
  const s3=document.getElementById('ram_s3_'+id);
  if(s2){s2.classList.remove('active');s2.classList.add('done');s2.textContent='✅ Step 2: Bola!';}
  if(s3){s3.classList.add('active');}

  const SR = window.SpeechRecognition||window.webkitSpeechRecognition;
  _ramRecognition = new SR();
  const vi = _getVoiceInfo();
  _ramRecognition.lang = vi.web;
  _ramRecognition.continuous = false;
  _ramRecognition.interimResults = false;
  _ramRecognition.maxAlternatives = 5;
  _ramRecognizing = true;

  _ramRecognition.onresult=(e)=>{
    const alts = Array.from(e.results[0]).map(a=>a.transcript.trim().toLowerCase());
    const target = word.toLowerCase().replace(/[^a-zA-ZÀ-ÿ\u4e00-\u9fff\uAC00-\uD7A3\u0600-\u06FF]/g,' ').trim();
    _ramRecognizing = false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Bolo';}
    _evaluateRAM(target, alts, word, id);
  };
  _ramRecognition.onerror=(e)=>{
    _ramRecognizing = false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Bolo';}
    const rd=document.getElementById('ram_result_'+id);
    if(rd) rd.innerHTML=`<div style="padding:10px;background:rgba(255,150,0,.1);border:1px solid rgba(255,150,0,.3);border-radius:12px;font-size:12px;color:var(--o);margin-top:8px;">⚠️ Mic nahi mila (${e.error}). Permission allow karo browser mein.</div>`;
  };
  _ramRecognition.onend=()=>{
    _ramRecognizing=false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Bolo';}
  };
  try{ _ramRecognition.start(); }
  catch(err){
    _ramRecognizing=false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Bolo';}
  }
}

function _evaluateRAM(target, heard, origWord, id){
  // ── Normalize ──
  const norm = s => s.toLowerCase()
    .replace(/[^a-zA-ZÀ-ÿ\u4e00-\u9fff\uAC00-\uD7A3\u0600-\u06FF\s]/g,'')
    .trim();
  const t = norm(target);

  // ── Best match from all alternatives ──
  const bestMatch = heard.reduce((best, h) => {
    const hn = norm(h);
    const sc = _similarity(t, hn);
    return sc > best.score ? {h, hn, score: sc} : best;
  }, {h:'', hn:'', score: 0});

  const s    = bestMatch.score;
  const pct  = Math.round(s * 100);
  const heardNorm = bestMatch.hn || norm(heard[0]||'');

  // ── Grade thresholds ──
  let result, emoji, label, sub, barColor;
  if(pct >= 88){
    result='perfect'; emoji='⭐'; label='Perfect!';
    sub='Ek dum sahi talaffuz! Shabaash!';
    barColor='#FFD166';
  } else if(pct >= 70){
    result='good'; emoji='✅'; label='Achi Koshish!';
    sub='Kaafi achi! Thoda aur practice karo.';
    barColor='#2EE59D';
  } else if(pct >= 45){
    result='close'; emoji='🔶'; label='Karib Hai!';
    sub=`"${bestMatch.h||'kuch nahi'}" suna — thoda aur dhyan do.`;
    barColor='#5B8DEF';
  } else {
    result='tryagain'; emoji='❌'; label='Phir Try Karo!';
    sub=`Mila: "${bestMatch.h||'kuch nahi'}" — pehle suno, phir bolो.`;
    barColor='#FF6B6B';
  }

  // ── Track score ──
  _ramScores.push({word: origWord, result, score: pct});

  // ── Step 3 done ──
  const s3 = document.getElementById('ram_s3_'+id);
  if(s3){ s3.classList.remove('active'); s3.classList.add('done'); s3.textContent='✅ Step 3: Score!'; }

  // ── Phoneme diff (only for single words, max 30 chars) ──
  let diffHTML = '';
  if(t.length <= 30 && !t.includes(' ')){
    const ops = _phonemeDiff(t, heardNorm || t);
    diffHTML = '<div class="ram-diff">'
      + ops.map(o => {
          if(o.status==='ok')    return `<span class="ram-diff-ch ram-diff-ok">${o.ch}</span>`;
          if(o.status==='miss')  return `<span class="ram-diff-ch ram-diff-miss">${o.ch}</span>`;
          if(o.status==='extra') return `<span class="ram-diff-ch ram-diff-extra">${o.ch}</span>`;
          return '';
        }).join('')
      + '</div>'
      + '<div style="display:flex;justify-content:center;gap:12px;font-size:10px;color:var(--mut);margin-bottom:6px;">'
      + '<span><span style="color:#2EE59D">■</span> Sahi</span>'
      + '<span><span style="color:#FF6B6B">■</span> Miss</span>'
      + '<span><span style="color:#FFD700">■</span> Extra</span>'
      + '</div>';
  }

  // ── Render ──
  const rd = document.getElementById('ram_result_'+id);
  if(rd){
    rd.innerHTML =
      `<div class="ram-score ${result}">
        <div class="ram-emoji">${emoji}</div>
        <div class="ram-bar-pct">${pct}%</div>
        <div class="ram-bar-wrap">
          <div class="ram-bar-fill" id="ramBar_${id}"
            style="width:0%;background:${barColor};"></div>
        </div>
        <div class="ram-label">${label}</div>
        <div class="ram-sub">${sub}</div>
        ${diffHTML}
        ${heardNorm ? `<div class="ram-heard">🎤 Suna: "${bestMatch.h}"</div>` : ''}
        ${result !== 'perfect'
          ? `<button class="spk-btn spk-mic" style="margin:10px auto 0;display:flex;"
               data-ramid="${id}" onclick="ramRetryById(parseInt(this.dataset.ramid))">
               🔄 Try Again
             </button>` : ''}
      </div>`;

    // Animate bar after paint
    requestAnimationFrame(()=> requestAnimationFrame(()=>{
      const bar = document.getElementById('ramBar_'+id);
      if(bar) bar.style.width = pct+'%';
    }));
  }
}

// ── Levenshtein Distance ──
function _levenshtein(a, b){
  const la = a.length, lb = b.length;
  if(la === 0) return lb;
  if(lb === 0) return la;
  // Use two-row DP (memory efficient)
  let prev = Array.from({length: lb+1}, (_,i) => i);
  let curr = new Array(lb+1);
  for(let i = 1; i <= la; i++){
    curr[0] = i;
    for(let j = 1; j <= lb; j++){
      const cost = a[i-1] === b[j-1] ? 0 : 1;
      curr[j] = Math.min(
        curr[j-1] + 1,        // insert
        prev[j]   + 1,        // delete
        prev[j-1] + cost      // replace
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[lb];
}

// ── Levenshtein-based similarity (0–1) ──
function _levenshteinSim(a, b){
  if(a === b) return 1;
  if(!a || !b) return 0;
  const dist = _levenshtein(a, b);
  return 1 - dist / Math.max(a.length, b.length);
}

// ── Phoneme-level diff: returns array of {ch, status} for target ──
// Compares character by character using LCS alignment
function _phonemeDiff(target, heard){
  // Simple character alignment using DP backtrack
  const t = target.split(''), h = heard.split('');
  const lt = t.length, lh = h.length;
  // Build DP table for LCS
  const dp = Array.from({length: lt+1}, () => new Array(lh+1).fill(0));
  for(let i = 1; i <= lt; i++)
    for(let j = 1; j <= lh; j++)
      dp[i][j] = t[i-1]===h[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]);

  // Backtrack to get alignment
  const result = [];
  let i = lt, j = lh;
  const ops = [];
  while(i > 0 || j > 0){
    if(i > 0 && j > 0 && t[i-1]===h[j-1]){
      ops.unshift({ch: t[i-1], status:'ok'}); i--; j--;
    } else if(j > 0 && (i===0 || dp[i][j-1] >= dp[i-1][j])){
      ops.unshift({ch: h[j-1], status:'extra'}); j--;
    } else {
      ops.unshift({ch: t[i-1], status:'miss'}); i--;
    }
  }
  return ops;
}

// ── Combined similarity: Levenshtein (60%) + token overlap (40%) ──
function _similarity(a, b){
  if(a === b) return 1;
  if(!a || !b) return 0;

  // 1. Character-level Levenshtein
  const levScore = _levenshteinSim(a, b);

  // 2. Token overlap (word-level) — helps multi-word phrases
  const tWords = new Set(a.split(/\s+/).filter(Boolean));
  const hWords = b.split(/\s+/).filter(Boolean);
  const tokenMatches = hWords.filter(w => tWords.has(w)).length;
  const tokenScore = tWords.size > 0 ? tokenMatches / tWords.size : 0;

  // 3. Prefix bonus (first 3 chars matching = good start)
  const prefixLen = Math.min(3, a.length, b.length);
  let prefixMatch = 0;
  for(let i = 0; i < prefixLen; i++) if(a[i]===b[i]) prefixMatch++;
  const prefixBonus = prefixMatch / prefixLen * 0.05; // max 5% bonus

  return Math.min(1, levScore * 0.6 + tokenScore * 0.4 + prefixBonus);
}

// ══════════════════════════════════════════════════════════
//  CONVERSATION PRACTICE SPEAKING (rSN mic feature)
// ══════════════════════════════════════════════════════════
let _snRecognizing = false;
let _snRecognition = null;

function snMicRecord(targetSentence, resultContainerId, btnId){
  if(_snRecognizing){
    if(_snRecognition) _snRecognition.stop();
    return;
  }
  const btn = document.getElementById(btnId);
  const rc  = document.getElementById(resultContainerId);
  if(btn){btn.classList.add('listening');btn.innerHTML='<div class="wave-anim"><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div></div> Sun raha...';}

  const SR = window.SpeechRecognition||window.webkitSpeechRecognition;
  _snRecognition = new SR();
  const vi = _getVoiceInfo();
  _snRecognition.lang = vi.web;
  _snRecognition.continuous = false;
  _snRecognition.interimResults = false;
  _snRecognition.maxAlternatives = 3;
  _snRecognizing = true;

  _snRecognition.onresult=(e)=>{
    const heard = e.results[0][0].transcript.trim();
    _snRecognizing=false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Try Speaking';}
    _showSNResult(targetSentence, heard, rc);
  };
  _snRecognition.onerror=(e)=>{
    _snRecognizing=false;
    if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Try Speaking';}
    if(rc) rc.innerHTML=`<div style="padding:8px 12px;font-size:12px;color:var(--o);">⚠️ ${e.error==='not-allowed'?'Mic permission allow karo!':'Dobara try karo.'}</div>`;
  };
  _snRecognition.onend=()=>{_snRecognizing=false;if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Try Speaking';}};
  try{_snRecognition.start();}catch(e){_snRecognizing=false;if(btn){btn.classList.remove('listening');btn.innerHTML='🎤 Try Speaking';}}
}

function _showSNResult(target, heard, container){
  if(!container) return;
  const targetWords = target.toLowerCase().split(/\s+/);
  const heardWords  = heard.toLowerCase().split(/\s+/);
  const heardSet = new Set(heardWords);
  let matchCount = 0;
  const highlighted = targetWords.map(w=>{
    const clean = w.replace(/[^a-zA-ZÀ-ÿ]/g,'').toLowerCase();
    if(heardSet.has(clean)||heardSet.has(w.toLowerCase())){
      matchCount++;
      return `<span class="word-match">${w}</span>`;
    }
    return `<span class="word-miss">${w}</span>`;
  }).join(' ');
  const pct = Math.round((matchCount/targetWords.length)*100);
  const grade = pct>=85?'🌟 Excellent!':pct>=60?'✅ Good!':'💪 Try Again';
  const gradeCol = pct>=85?'var(--g)':pct>=60?'var(--b)':'var(--o)';

  // Track for speaking score
  _ramScores.push({word:'[sentence]', result: pct>=85?'perfect':pct>=60?'good':'miss', score:pct});

  container.innerHTML=`<div style="padding:10px 12px;background:rgba(255,255,255,.04);border-radius:12px;margin-top:8px;">
    <div style="font-size:12px;color:var(--mut);margin-bottom:6px;">Tumhara: <span style="color:var(--txt);">"${heard}"</span></div>
    <div style="font-size:13px;line-height:1.9;margin-bottom:6px;">${highlighted}</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:${gradeCol};">${grade} — ${pct}% words sahi</div>
    <div style="font-size:11px;color:var(--mut);margin-top:3px;">🟢 Sahi&nbsp;&nbsp;🔴 Miss</div>
  </div>`;
}

// ══════════════════════════════════════════════════════════
//  SPEAKING SCORE PANEL (shown in finishLesson)
// ══════════════════════════════════════════════════════════
function buildSpeakingScoreHTML(){
  if(_ramScores.length===0) return '';
  const total = _ramScores.length;
  const perfects = _ramScores.filter(x=>x.result==='perfect').length;
  const goods    = _ramScores.filter(x=>x.result==='good').length;
  const misses   = _ramScores.filter(x=>x.result==='miss').length;
  const avgScore = Math.round(_ramScores.reduce((s,x)=>s+x.score,0)/total);
  const fill     = Math.round(avgScore * 2.83); // for 90-radius circle (circumference ~283)

  const tips = [];
  if(misses>0)   tips.push(`<b>💡 Pronunciation Practice:</b> ${misses} word(s) pe zyada dhyan do — roz 5 minute practice karo.`);
  if(avgScore<60) tips.push('<b>🔊 Tip:</b> Pehle word suno, phir bol — "shadowing" technique use karo.');
  if(avgScore>=85) tips.push('<b>🌟 Wah!</b> Tumhari pronunciation bahut aachi hai — keep it up!');
  if(tips.length===0) tips.push('<b>✅ Good job!</b> Bol ke practice karne se fluency fast aati hai.');

  return `<div class="spk-score-panel">
    <div class="spk-score-title">🗣️ Speaking Score</div>
    <div class="spk-score-ring">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="8"/>
        <circle cx="45" cy="45" r="36" fill="none" stroke="${avgScore>=85?'var(--g)':avgScore>=60?'var(--b)':'var(--o)'}" stroke-width="8"
          stroke-dasharray="226" stroke-dashoffset="${226-Math.round(226*avgScore/100)}"
          stroke-linecap="round" style="transition:stroke-dashoffset 1.2s cubic-bezier(.34,1.56,.64,1)"/>
      </svg>
      <div class="spk-score-val">${avgScore}%</div>
    </div>
    <div style="display:flex;justify-content:center;gap:16px;margin-bottom:12px;font-size:12px;">
      <span style="color:var(--y)">⭐ ${perfects} Perfect</span>
      <span style="color:var(--g)">✅ ${goods} Good</span>
      <span style="color:var(--r)">❌ ${misses} Miss</span>
    </div>
    <div class="spk-tips">${tips.join('<br>')}</div>
  </div>`;
}


// LANGUAGE STATS MODAL — Duolingo style flag click popup
function showLangStatsModal(){
  const lang = S.activeLang||'en';
  const li = LANG_INFO[lang]||LANG_INFO['en'];
  const cs = CS(); const c = AC();

  // Compute score
  const pct = c>0 ? Math.round((cs.done.length/c)*100) : 0;
  const score = Math.min(100, Math.max(0, Math.round(
    (cs.done.length * 2) +
    (cs.xp / 50) +
    (cs.streak * 1.5)
  )));

  // Course options for this language
  const courseOptions = lang==='chess' ? [
    {days:7, icon:'♟️', label:'7 Day — Full Chess', desc:'45 min/day — Complete Chess Course', color:'#2ECC71', colorDark:'#1A9E55'},
  ] : [
    {days:30, icon:'⚡', label:'30 Din', desc:'2 hr/day — Fast Track', color:'#58CC02', colorDark:'#46A302'},
    {days:60, icon:'🎯', label:'60 Din', desc:'1 hr/day — Balanced', color:'#1CB0F6', colorDark:'#0A91D1'},
    {days:90, icon:'🐢', label:'90 Din', desc:'30 min/day — Easy', color:'#CE82FF', colorDark:'#9400D3'},
  ];

  // Upcoming Courses — sab ek saath (Music, Art, Math + Programming)
  const upcomingCourses = [
    {icon:'🎵', bg:'linear-gradient(135deg,#CE82FF,#9B40E8)', label:'Music', color:'#CE82FF'},
    {icon:'🎨', bg:'linear-gradient(135deg,#FF6B9D,#CC3366)', label:'Art', color:'#FF6B9D'},
    {icon:'🧮', bg:'linear-gradient(135deg,#1CB0F6,#0A91D1)', label:'Math', color:'#1CB0F6'},
    {icon:'🐍', bg:'linear-gradient(135deg,#3776AB,#1a4a6e)', label:'Python', color:'#3776AB'},
    {icon:'☕', bg:'linear-gradient(135deg,#E76F00,#a84d00)', label:'Java', color:'#E76F00'},
    {icon:'💛', bg:'linear-gradient(135deg,#c9b200,#8a7900)', label:'JavaScript', color:'#F7DF1E'},
    {icon:'🦀', bg:'linear-gradient(135deg,#CE412B,#8c2c1d)', label:'Rust', color:'#CE412B'},
    {icon:'🔷', bg:'linear-gradient(135deg,#7F52FF,#4a24c7)', label:'Kotlin', color:'#7F52FF'},
    {icon:'🍎', bg:'linear-gradient(135deg,#FA7343,#c94d1f)', label:'Swift', color:'#FA7343'},
  ];

  const body = document.getElementById('langStatsBody');
  if(!body) return;

  body.innerHTML = `
    <!-- Header row: flag + name + close + PLUS button -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:58px;height:58px;border-radius:16px;background:${li.color}22;border:3px solid ${li.color};display:flex;align-items:center;justify-content:center;font-size:34px;">${li.flag}</div>
        <div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:${li.color};">${li.name}</div>
          <div style="font-size:12px;color:var(--mut);margin-top:2px;">${c} Din Course • ${cs.done.length} din complete</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <!-- PLUS button — Language & Course change -->
        <button onclick="document.getElementById('langStatsModal').style.display='none';updateLangSelectIndicators();showScreen('langSelect');" 
          style="width:38px;height:38px;border-radius:12px;border:none;background:${li.color};color:#fff;font-size:22px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 8px ${li.color}66;">+</button>
        <button onclick="document.getElementById('langStatsModal').style.display='none'" 
          style="background:var(--card2);border:none;border-radius:10px;padding:6px 12px;color:var(--mut);font-size:13px;cursor:pointer;">✕</button>
      </div>
    </div>

    <!-- Score Card -->
    <div style="background:var(--bg);border:2px solid var(--bdr);border-radius:20px;padding:18px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div style="font-size:13px;color:var(--mut);font-weight:700;">Tumhara ${li.name} Score hai</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:28px;color:var(--txt);">${score}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="font-family:'Fredoka One',sans-serif;font-size:14px;color:var(--mut);">${score}</div>
        <div style="flex:1;height:14px;background:rgba(255,255,255,.08);border-radius:10px;overflow:hidden;border:1px solid var(--bdr);">
          <div style="height:100%;width:${pct}%;background:${li.color};border-radius:10px;transition:width .8s ease;"></div>
        </div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:14px;color:var(--mut);">${Math.min(score+1,100)}</div>
      </div>
      <button onclick="showToast('${li.name} score: ${score}/100 — ${cs.done.length} lessons complete, ${cs.xp} XP earned! 🎯','${li.color}')" style="background:transparent;border:none;color:${li.color};font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;padding:8px 0 0;text-transform:uppercase;letter-spacing:.5px;">MORE ABOUT SCORE →</button>
    </div>

    <!-- Stats row -->
    <div style="display:flex;gap:10px;margin-bottom:18px;">
      <div style="flex:1;background:var(--bg);border:1px solid var(--bdr);border-radius:14px;padding:12px 8px;text-align:center;">
        <div style="font-size:20px;margin-bottom:3px;">🔥</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--o);">${cs.streak}</div>
        <div style="font-size:10px;color:var(--mut);text-transform:uppercase;font-weight:700;">Streak</div>
      </div>
      <div style="flex:1;background:var(--bg);border:1px solid var(--bdr);border-radius:14px;padding:12px 8px;text-align:center;">
        <div style="font-size:20px;margin-bottom:3px;">⭐</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:#CE82FF;">${cs.xp}</div>
        <div style="font-size:10px;color:var(--mut);text-transform:uppercase;font-weight:700;">XP</div>
      </div>
      <div style="flex:1;background:var(--bg);border:1px solid var(--bdr);border-radius:14px;padding:12px 8px;text-align:center;">
        <div style="font-size:20px;margin-bottom:3px;">✅</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:var(--g);">${cs.done.length}</div>
        <div style="font-size:10px;color:var(--mut);text-transform:uppercase;font-weight:700;">Lessons</div>
      </div>
    </div>

    <!-- Course Duration Options -->
    <div style="font-family:'Fredoka One',sans-serif;font-size:17px;margin-bottom:12px;display:flex;align-items:center;gap:8px;">📅 Course Duration Chango</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
      ${courseOptions.map(co=>{
        const isActive = c===co.days;
        return `<div onclick="${isActive?`showToast('Yeh course pehle se active hai! 😊','${co.color}')`:
          `document.getElementById('langStatsModal').style.display='none';pickCourseFromModal(${co.days});`}" 
          style="display:flex;align-items:center;gap:12px;background:${isActive?co.color+'22':'var(--bg)'};border:2px solid ${isActive?co.color:'var(--bdr)'};border-radius:14px;padding:12px 14px;cursor:pointer;transition:all .2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:${co.color}33;border:2px solid ${co.color};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${co.icon}</div>
          <div style="flex:1;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:${co.color};">${co.label}</div>
            <div style="font-size:11px;color:var(--mut);margin-top:1px;">${co.desc}</div>
          </div>
          ${isActive?`<div style="background:${co.color};color:#fff;border-radius:20px;padding:3px 10px;font-size:10px;font-weight:800;">ACTIVE ✓</div>`:
          `<div style="background:var(--card2);color:var(--mut);border-radius:20px;padding:3px 10px;font-size:10px;font-weight:700;">SELECT</div>`}
        </div>`;
      }).join('')}
    </div>

    <!-- Upcoming Courses Section -->
    <div style="font-family:'Fredoka One',sans-serif;font-size:17px;margin-bottom:12px;display:flex;align-items:center;gap:8px;">🚀 Upcoming Courses</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:22px;">
      ${upcomingCourses.map(uc=>`
        <div style="display:flex;align-items:center;gap:10px;background:var(--bg);border:1px solid var(--bdr);border-radius:14px;padding:12px;cursor:pointer;transition:transform .15s;"
          onclick="showToast('${uc.label} — Jald Aa Raha Hai! 🚀','${uc.color}')"
          onmousedown="this.style.transform='scale(.97)'" onmouseup="this.style.transform=''" ontouchstart="this.style.transform='scale(.97)'" ontouchend="this.style.transform=''">
          <div style="width:44px;height:44px;border-radius:12px;background:${uc.bg};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 3px 10px rgba(0,0,0,.3);">
            ${uc.icon}
          </div>
          <div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:var(--txt);">${uc.label}</div>
            <div style="font-size:10px;color:var(--mut);margin-top:1px;">Jald Aayega 🔜</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Course select hint -->
    <div style="background:${li.color}11;border:1px solid ${li.color}33;border-radius:14px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:8px;">
      <div style="font-size:22px;">💡</div>
      <div style="flex:1;font-size:12px;color:var(--mut);line-height:1.6;">To change language/course tap above <b style="color:${li.color}">+ button</b> dabao!</div>
      <button onclick="document.getElementById('langStatsModal').style.display='none';updateLangSelectIndicators();showScreen('langSelect');" 
        style="background:${li.color};border:none;border-radius:10px;padding:8px 14px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;white-space:nowrap;">Change +</button>
    </div>
  `;

  const modal = document.getElementById('langStatsModal');
  modal.style.display = 'flex';
}

// Pick course from inside the modal (without going to courseSelect screen)
function pickCourseFromModal(days){
  const lang = S.activeLang||'en';
  if(!S.langs) S.langs={};
  if(!S.langs[lang]) S.langs[lang]={activeCourse:0,courses:emptyLangCourses()};
  const prev = S.langs[lang].activeCourse;
  S.langs[lang].activeCourse = days;
  S.activeCourse = days;
  if(!S.langs[lang].courses[days].started){
    S.langs[lang].courses[days].started=true;
    S.langs[lang].courses[days].day=1;
  }
  save();
  showToast((days===30?'⚡':days===60?'🎯':'🐢')+' '+days+' Din course select ho gaya!','var(--g)');
  setTimeout(()=>{showScreen('dashboard');renderDash();},400);
}

// SCREENS
// ── Back Button / History System ──
var _suNavHistory = [];   // apna stack
var _suNavIgnore  = false; // popstate loop rokne ke liye

// Screens jinhe back pe dashboard pe le jaana chahiye
var _DASH_SCREENS = ['dashboard','lesson','pastpapers','ppAttempt','certificate','certificate-v2'];

function showScreen(id, _fromPop){
  const prev=document.querySelector('.screen.active');
  const prevId = prev ? prev.id : null;

  // History push — sirf jab user ne navigate kiya (back se nahi)
  if(!_fromPop){
    if(prevId && prevId !== id){
      _suNavHistory.push(prevId);
    }
    // Browser history mein entry dalo taake back button kaam kare
    try{
      history.pushState({suScreen: id}, '', '#'+id);
    }catch(e){}
  }

  if(prev&&prev.id!==id){
    prev.style.transition='opacity .18s ease,transform .18s ease';
    prev.style.opacity='0';
    prev.style.transform='scale(.97) translateY(-8px)';
    setTimeout(()=>{
      prev.style.transition='';prev.style.opacity='';prev.style.transform='';
      prev.classList.remove('active');
    },180);
  } else {
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  }
  const el=document.getElementById(id);
  if(el){
    const delay=prev&&prev.id!==id?160:0;
    setTimeout(()=>{
      el.classList.add('active');
      el.style.opacity='0';
      el.style.transform='scale(1.03) translateY(12px)';
      el.style.transition='opacity .28s ease,transform .28s cubic-bezier(.34,1.56,.64,1)';
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        el.style.opacity='1';
        el.style.transform='scale(1) translateY(0)';
        setTimeout(()=>{el.style.transition='';el.style.opacity='';el.style.transform='';},320);
      }));
    },delay);
  }
  window.scrollTo(0,0);
}

// ── Back button handler ──
window.addEventListener('popstate', function(e){
  if(_suNavIgnore) return;

  // ══════════════════════════════════════
  // 1️⃣ Overlays — pehle band karo
  // ══════════════════════════════════════
  var overlays = ['noHeartsOverlay','pauseOverlay','heartModePopup','shareCardOverlay'];
  for(var i=0;i<overlays.length;i++){
    var ov = document.getElementById(overlays[i]);
    if(ov && (ov.classList.contains('show') || ov.classList.contains('open'))){
      ov.classList.remove('show','open');
      try{ history.pushState({suScreen:(document.querySelector('.screen.active')||{}).id||'dashboard'},'','#current'); }catch(ex){}
      return;
    }
  }

  // ══════════════════════════════════════
  // 2️⃣ Notification Inbox khuli ho
  // ══════════════════════════════════════
  var notifInbox = document.getElementById('notifInbox');
  if(notifInbox && (notifInbox.style.display === 'block' || notifInbox.classList.contains('active'))){
    if(typeof closeNotifInbox === 'function') closeNotifInbox();
    else {
      notifInbox.style.display = 'none';
      notifInbox.classList.remove('active');
      showScreen('dashboard', true);
      if(typeof renderDash === 'function') renderDash();
    }
    try{ history.pushState({suScreen:'dashboard'},'','#dashboard'); }catch(ex){}
    return;
  }

  var activeScreen = document.querySelector('.screen.active');
  var activeId = activeScreen ? activeScreen.id : 'dashboard';

  // ══════════════════════════════════════
  // 3️⃣ Past Papers inner navigation
  // ══════════════════════════════════════
  if(activeId === 'pastpapers'){
    var ppView    = document.getElementById('ppPaperView');
    var ppYears   = document.getElementById('ppYearSelect');
    var ppBoard   = document.getElementById('ppBoardSelect');
    var ppSubject = document.getElementById('ppSubjectSelect');
    var ppClass   = document.getElementById('ppClassSelect');

    var vis = function(el){ return el && el.style.display !== 'none' && el.style.display !== ''; };

    if(vis(ppView)){
      ppBack('years');
      try{ history.pushState({suScreen:'pastpapers'},'','#pastpapers'); }catch(ex){}
      return;
    }
    if(vis(ppYears)){
      ppBack('board');
      try{ history.pushState({suScreen:'pastpapers'},'','#pastpapers'); }catch(ex){}
      return;
    }
    if(vis(ppBoard)){
      ppBack('subject');
      try{ history.pushState({suScreen:'pastpapers'},'','#pastpapers'); }catch(ex){}
      return;
    }
    if(vis(ppSubject)){
      ppBack('class');
      try{ history.pushState({suScreen:'pastpapers'},'','#pastpapers'); }catch(ex){}
      return;
    }
    // Class level — dashboard pe jao
    showScreen('dashboard', true);
    if(typeof renderDash === 'function') renderDash();
    return;
  }

  // ══════════════════════════════════════
  // 4️⃣ Paper Attempt screen
  // ══════════════════════════════════════
  if(activeId === 'ppAttempt'){
    if(typeof ppExitAttempt === 'function') ppExitAttempt();
    else showScreen('pastpapers', true);
    try{ history.pushState({suScreen:'pastpapers'},'','#pastpapers'); }catch(ex){}
    return;
  }

  // ══════════════════════════════════════
  // 5️⃣ Lesson screen — exit lesson
  // ══════════════════════════════════════
  if(activeId === 'lesson'){
    if(typeof exitLesson === 'function') exitLesson();
    else { showScreen('dashboard', true); if(typeof renderDash==='function') renderDash(); }
    return;
  }

  // ══════════════════════════════════════
  // 6️⃣ Certificate screens — dashboard
  // ══════════════════════════════════════
  if(activeId === 'certificate' || activeId === 'certificate-v2'){
    showScreen('dashboard', true);
    if(typeof renderDash === 'function') renderDash();
    return;
  }

  // ══════════════════════════════════════
  // 7️⃣ Baaki screens — apna stack use karo
  // ══════════════════════════════════════
  var goTo = _suNavHistory.length > 0 ? _suNavHistory.pop() : 'dashboard';
  showScreen(goTo, true);
  if(goTo === 'dashboard' && typeof renderDash === 'function') renderDash();
});

// Pehli entry dalo taake app band na ho
try{
  if(history.state === null || !history.state.suScreen){
    history.replaceState({suScreen:'dashboard'}, '', '#dashboard');
  }
}catch(e){}

function exitLesson(){
  // ✅ Goal timer directly yahan band karo
  if(typeof goalSessionEnd === 'function') goalSessionEnd();
  save();showScreen('dashboard');renderDash();
}
function tab(t){
  // ── Sab nav buttons se on class hatao ──
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('on'));

  // ── Tab ke hisab se screen show karo + on class lagao ──
  if(t==='dashboard'){
    showScreen('dashboard'); renderDash();
    document.querySelectorAll('[id$="nb_home"],[id="nb_home"]').forEach(b=>b.classList.add('on'));
  } else if(t==='pastpapers'){
    showScreen('pastpapers');
    document.getElementById('ppClassSelect').style.display = 'block';
    document.getElementById('ppSubjectSelect').style.display = 'none';
    document.getElementById('ppBoardSelect').style.display = 'none';
    document.getElementById('ppYearSelect').style.display = 'none';
    document.getElementById('ppPaperView').style.display = 'none';
    document.querySelectorAll('[id$="nb_papers"],[id="nb_papers"]').forEach(b=>b.classList.add('on'));
  } else if(t==='leaderboard'){
    showScreen('leaderboard');
    if(typeof renderLeaderboard==='function') renderLeaderboard();
    document.querySelectorAll('[id$="nb_leaderboard"],[id="nb_leaderboard"]').forEach(b=>b.classList.add('on'));
  } else if(t==='profile'){
    if(IS_GUEST || !getLoggedInUser()){
      showScreen('guestProfileScreen');
    } else {
      showScreen('profile'); renderProf();
    }
    document.querySelectorAll('[id$="nb_profile"],[id="pnb_profile"]').forEach(b=>b.classList.add('on'));
  } else if(t==='settings'){
    showScreen('settings'); renderSettingsScreen();
    // Support contact info refresh
    if(typeof updateSupportContactUI === 'function') updateSupportContactUI();
    if(typeof loadSupportContactFromFirebase === 'function') loadSupportContactFromFirebase();
    document.querySelectorAll('.nb').forEach(b=>{
      if(b.getAttribute('onclick') && b.getAttribute('onclick').includes("'settings'")) b.classList.add('on');
      if(b.id && (b.id.includes('nb_settings') || b.id.includes('pnb_settings'))) b.classList.add('on');
    });
  }

  // ── Sab .nb buttons check karo — onclick se match karo bhi (id nahi hone wale ke liye) ──
  document.querySelectorAll('.nb').forEach(btn=>{
    const oc = btn.getAttribute('onclick') || '';
    if(oc.includes("'"+t+"'") || (t==='dashboard' && oc.includes("'dashboard'"))) {
      btn.classList.add('on');
    }
  });

  // ── navIconPop animation — active button ke icon pe ──
  document.querySelectorAll('.nb.on').forEach(btn=>{
    const ni = btn.querySelector('.ni');
    if(!ni) return;
    ni.style.animation = 'none';
    requestAnimationFrame(()=>{
      ni.style.animation = 'navIconPop .4s cubic-bezier(.34,1.56,.64,1)';
    });
  });
}

function goName(){
  const v=document.getElementById('nameIn').value.trim();
  if(!v){document.getElementById('nameIn').style.borderColor='var(--r)';return;}
  // Guest mode — sirf naam display ke liye save karo, koi profile nahi banani
  if(!getLoggedInUser()){
    IS_GUEST=true;
    localStorage.setItem('su_wasGuest','1');
    localStorage.setItem('su_guestDisplayName', v);
    S.name=v; // sirf in-memory, localStorage profiles mein save nahi
    // Go to language select
    updateLangSelectIndicators();
    showScreen('langSelect');
    return;
  }
  // Logged in user ke liye profile banao
  if(PROFILES.length===0){
    const p=newProfileData(v,'😊');
    PROFILES.push(p);
    ACTIVE_PID=p.id;
    Object.assign(S,p);
    saveAll();
  } else {
    S.name=v;save();
  }
  // Go to language select
  updateLangSelectIndicators();
  showScreen('langSelect');
}
function pickCourse(c){
  const lang = S.activeLang||'en';
  if(!S.langs) S.langs={};
  // Prog langs ke liye hamesha 60 levels
  const finalC = isPythonLang(lang) ? 60 : c;
  if(!S.langs[lang]) S.langs[lang]={activeCourse:0,courses:emptyLangCourses()};
  // Prog lang ke liye courses object mein 60 ensure karo
  if(isPythonLang(lang) && !S.langs[lang].courses[60]){
    S.langs[lang].courses[60]={day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false};
  }
  S.langs[lang].activeCourse = finalC;
  S.activeCourse = finalC;
  if(!S.langs[lang].courses[finalC]) S.langs[lang].courses[finalC]={day:1,streak:0,xp:0,done:[],wordsLearned:0,started:false};
  if(!S.langs[lang].courses[finalC].started){
    S.langs[lang].courses[finalC].started=true;
    S.langs[lang].courses[finalC].day=1;
  }
  save();showScreen('dashboard');renderDash();
}
function renderDash(){
  const cs=CS(); const c=AC();
  const lang=S.activeLang||'en';
  // ── Prog langs (Python, Java etc) ka alag dashboard ──
  if(isPythonLang(lang)){ renderDashPython(lang, cs, c); return; }
  const li=LANG_INFO[lang]||LANG_INFO['en'];
  // Inject decorative orbs into header if not already there
  const dhEl=document.querySelector('.dh');
  if(dhEl&&!dhEl.querySelector('.dh-orb2')){
    ['dh-orb2','dh-orb3'].forEach(cls=>{const d=document.createElement('div');d.className=cls;dhEl.appendChild(d);});
  }

  // ── Pro indicator in top bar ──
  const proIndEl = document.getElementById('topProIndicator');
  if (proIndEl) {
    const _showAsPro = isPro() && !IS_GUEST && (typeof getLoggedInUser === 'function' ? !!getLoggedInUser() : true);
    if (_showAsPro) {
      proIndEl.innerHTML = '<div style="background:linear-gradient(135deg,#FFD700,#FF9500);border-radius:16px;padding:2px 7px;font-family:\'Fredoka One\',sans-serif;font-size:10px;color:#000;white-space:nowrap;box-shadow:0 2px 8px rgba(255,215,0,.4);">👑 PRO</div>';
      proIndEl.title = 'Pro Member!';
    } else {
      proIndEl.innerHTML = '<div style="background:rgba(255,215,0,.1);border:1.5px solid rgba(255,215,0,.35);border-radius:16px;padding:2px 7px;font-family:\'Fredoka One\',sans-serif;font-size:10px;color:#FFD700;white-space:nowrap;animation:glowPulseY 2s ease infinite;">👑 Pro</div>';
      proIndEl.title = 'Upgrade to Pro';
    }
  }

  // ── Top bar ──
  const ha=document.getElementById('headerAvatar');
  if(ha){
    if(S.googlePhoto){
      ha.innerHTML=`<img src="${S.googlePhoto}" loading="lazy" style="width:26px;height:26px;border-radius:50%;object-fit:cover;">`;
    } else {
      ha.textContent=S.avatar||'😊'; ha.style.fontSize='16px';
    }
  }

  const pct=Math.round((cs.done.length/c)*100);
  const pb=document.getElementById('topProgressBar');
  const pt=document.getElementById('topPct');
  const cl=document.getElementById('topCourseLabel');
  // Update language flag in top bar
  const tlf=document.getElementById('topLangFlag');
  if(tlf) tlf.textContent=li.flag;
  if(pb) pb.style.width=pct+'%';
  if(pt) pt.textContent=pct+'%';
  if(cl) cl.textContent=li.flag+' '+c+' Din';

  const ts=document.getElementById('topStreak');
  const tx=document.getElementById('topXP');
  const th=document.getElementById('topHearts');
  if(ts) ts.textContent=cs.streak;
  if(tx) tx.textContent=cs.xp;
  // Hearts: reset on dashboard + show correct mode
  resetHeartsOnDashboard();
  updateTopHeartsDisplay();
  // Animate streak icon if active
  const tsi=document.getElementById('topStreakIcon');
  if(tsi) tsi.style.animation=cs.streak>0?'streakFire 1.5s ease infinite':'none';

  // ── Section banner ──
  const langDays2=ALL_DAYS[lang]||ALL_DAYS['en'];
  const dayData=langDays2[cs.day];
  const sl=document.getElementById('sectionLabel');
  const st2=document.getElementById('sectionTitle');
  const mainBtn=document.getElementById('mainBtn');
  const sectionBanner=document.getElementById('sectionBanner');

  // Get section & unit info
  const secInfo=getDaySection(cs.day);
  const unitInfo=getDayUnit(cs.day);
  const secNum=secInfo?secInfo.sNum:'?';
  const unitNum=unitInfo?unitInfo.num:'?';

  // Update banner color based on section
  if(sectionBanner&&secInfo){
    sectionBanner.style.background=`linear-gradient(135deg,${secInfo.color},${secInfo.colorDark})`;
    sectionBanner.style.boxShadow=`0 4px 16px ${secInfo.color}44`;
  }

  if(dayData){
    if(sl) sl.textContent='SECTION '+secNum+', UNIT '+unitNum+' — '+( unitInfo?unitInfo.title:'');
    if(st2) st2.textContent='Day '+cs.day+': '+dayData.themeEn;
    if(mainBtn){
      mainBtn.textContent='▶ Day '+cs.day+' Shuru Karo';
      mainBtn.style.background='var(--g)';
      mainBtn.style.color='#fff';
      mainBtn.onclick=goLesson;
    }
  } else {
    if(sl) sl.textContent='SECTION '+secNum+', UNIT '+unitNum;
    if(st2) st2.textContent=cs.done.length>=(c)?'Mubarak ho '+S.name+'! Certificate lo!':'Day '+cs.day+': Coming Soon...';
    if(sectionBanner&&cs.done.length>=c) sectionBanner.style.background='linear-gradient(135deg,#FFD700,#FF9600)';
    if(mainBtn){
      if(cs.done.length>=c){
        mainBtn.textContent='🏆 Certificate Dekho!';
        mainBtn.style.background='linear-gradient(135deg,var(--y),var(--o))';
        mainBtn.style.color='#000';
        mainBtn.onclick=showCert;
        launchConfetti();
      } else if(lang==='en'){
        mainBtn.textContent='▶ Day '+cs.day+' Shuru Karo';
        mainBtn.style.background='var(--g)';
        mainBtn.style.color='#fff';
        mainBtn.onclick=goLesson;
      } else {
        mainBtn.textContent='🔒 Day '+cs.day+' — Jald Aayega!';
        mainBtn.style.background='var(--card2)';
        mainBtn.style.color='var(--mut)';
        mainBtn.onclick=null;
      }
    }
  }

  // ── Duolingo Path ──
  // ── XP mini progress bar ──
  const xpTarget=cs.activeCourse||60;
  const xpPct=Math.min(Math.round((cs.xp/(xpTarget*10))*100),100);
  const xpBarHtml=`<div class="xp-mini-bar">
    <div class="xp-mini-icon">⭐</div>
    <div class="xp-mini-info">
      <div class="xp-mini-title">Level Progress</div>
      <div class="xp-mini-track"><div class="xp-mini-fill" style="width:${xpPct}%;"></div></div>
    </div>
    <div class="xp-mini-val">${cs.xp} XP</div>
  </div>`;

  // ── Streak fire card ──
  const streakMsg=cs.streak===0?'Aaj shuru karo! 🔥':cs.streak<5?'Acha chal raha hai! 💪':cs.streak<10?'Zabardast! 🎯':'Legend! 🏆';
  const streakHtml=cs.streak>0?`<div class="streak-mini-card">
    <div>
      <div class="streak-mini-icon">🔥</div>
    </div>
    <div style="flex:1;padding:0 10px;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:14px;color:var(--o);">${streakMsg}</div>
      <div style="font-size:11px;color:var(--mut);margin-top:2px;">${cs.streak} din ka streak!</div>
    </div>
    <div class="streak-mini-right">
      <div class="streak-mini-val">${cs.streak}</div>
      <div class="streak-mini-lbl">Streak</div>
    </div>
  </div>`:'';

  // Inject after stat row
  const srEl=document.querySelector('.sr');
  if(srEl){
    let after=srEl.nextElementSibling;
    const xpDiv=document.createElement('div');
    xpDiv.innerHTML=xpBarHtml+streakHtml;
    srEl.parentNode.insertBefore(xpDiv,after);
  }

  renderPath(c, cs);
  setTimeout(animateStats,100);

  // ── Daily Goal Card — Dashboard pe inject karo ──
  setTimeout(function() { _injectDashGoalCard(); }, 80);
}

// ── Dashboard Goal Progress Card ──
function _injectDashGoalCard() {
  // Purana card remove karo agar tha
  var old = document.getElementById('dashGoalCard');
  if (old) old.remove();

  var mins   = getGoalTodayMins();
  var target = getGoalTarget();
  var pct    = Math.min(Math.round((mins / target) * 100), 100);
  var streak = parseInt(localStorage.getItem(_gKey(GOAL_STREAK_KEY)) || '0');
  var totalComp = parseInt(localStorage.getItem(_gKey('su_goal_total_completions')) || '0');
  var done   = pct >= 100;

  var goalEmoji = target >= 60 ? '🚀' : target >= 30 ? '🔥' : '🌱';
  var goalLabel = target >= 60 ? '1 Ghanta' : target + ' Min';

  // Progress bar color
  var barColor = done
    ? 'linear-gradient(90deg,#2EE59D,#1BC47D)'
    : pct >= 50
      ? 'linear-gradient(90deg,#FFD166,#FF9A3C)'
      : 'linear-gradient(90deg,#5B8DEF,#C77DFF)';

  // Status message
  var statusMsg = done
    ? '🎉 Aaj ka goal complete ho gaya!'
    : pct >= 75
      ? '💪 Bas thoda aur — ekdum qareeb!'
      : pct >= 50
        ? '🔥 Adha ho gaya — jaari raho!'
        : pct > 0
          ? '🌱 Acha shuru — chalta raho!'
          : '✨ Aaj ka goal start karo!';

  var card = document.createElement('div');
  card.id = 'dashGoalCard';
  card.onclick = function() { showGoalModal(); };
  card.style.cssText = 'margin:0 0 14px;background:var(--card);border-radius:20px;padding:14px 16px;border:1.5px solid '+(done?'rgba(46,229,157,.4)':'rgba(91,141,239,.2)')+';cursor:pointer;transition:transform .15s;box-shadow:'+(done?'0 4px 18px rgba(46,229,157,.12)':'0 2px 12px rgba(0,0,0,.2)')+';';
  var isLM = document.body.classList.contains('light-mode');
  var txtC = isLM ? 'var(--txt)' : '#fff';
  var mutC = isLM ? 'var(--mut)' : 'rgba(255,255,255,.45)';
  var mutC2 = isLM ? 'var(--mut)' : 'rgba(255,255,255,.35)';
  var statBg = isLM ? 'rgba(0,0,0,.04)' : 'rgba(255,255,255,.04)';
  var barTrack = isLM ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.07)';
  card.style.cssText = 'margin:0 0 14px;background:var(--card);border-radius:20px;padding:14px 16px;border:1.5px solid '+(done?'rgba(46,229,157,.4)':'rgba(91,141,239,.2)')+';cursor:pointer;transition:transform .15s;box-shadow:'+(done?'0 4px 18px rgba(46,229,157,.12)':'0 2px 12px rgba(0,0,0,.12)')+';';
  card.innerHTML =
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<div style="font-size:20px;">' + goalEmoji + '</div>' +
        '<div>' +
          '<div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:'+txtC+';">Daily Goal — ' + goalLabel + '</div>' +
          '<div style="font-size:11px;color:'+mutC+';margin-top:1px;">' + statusMsg + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="text-align:right;flex-shrink:0;">' +
        '<div style="font-family:\'Fredoka One\',sans-serif;font-size:18px;color:'+(done?'#2EE59D':txtC)+';">' + pct + '%</div>' +
        '<div style="font-size:10px;color:'+mutC2+';">' + mins + ' / ' + target + ' min</div>' +
      '</div>' +
    '</div>' +
    '<div style="height:10px;background:'+barTrack+';border-radius:10px;overflow:hidden;margin-bottom:10px;">' +
      '<div style="height:100%;width:' + pct + '%;border-radius:10px;background:' + barColor + ';transition:width .7s cubic-bezier(.34,1.2,.64,1);' + (done?'box-shadow:0 0 10px rgba(46,229,157,.5);':'') + '"></div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;">' +
      '<div style="flex:1;background:'+statBg+';border-radius:12px;padding:8px 6px;text-align:center;">' +
        '<div style="font-size:16px;font-weight:900;color:#FF9A3C;">' + streak + '</div>' +
        '<div style="font-size:9px;color:'+mutC2+';margin-top:1px;">Streak 🔥</div>' +
      '</div>' +
      '<div style="flex:1;background:'+statBg+';border-radius:12px;padding:8px 6px;text-align:center;">' +
        '<div style="font-size:16px;font-weight:900;color:#2EE59D;">' + totalComp + '</div>' +
        '<div style="font-size:9px;color:'+mutC2+';margin-top:1px;">Goals ✅</div>' +
      '</div>' +
      '<div style="flex:1;background:'+statBg+';border-radius:12px;padding:8px 6px;text-align:center;">' +
        '<div style="font-size:16px;font-weight:900;color:#C77FFF;">' + parseInt(localStorage.getItem(GOAL_TOTAL_KEY)||'0') + '</div>' +
        '<div style="font-size:9px;color:'+mutC2+';margin-top:1px;">Total Min ⏱️</div>' +
      '</div>' +
    '</div>';

  // `.sr` (stat row) ke baad inject karo, ya path ke pehle
  var srEl = document.querySelector('.sr');
  if (srEl && srEl.parentNode) {
    srEl.parentNode.insertBefore(card, srEl.nextElementSibling);
  } else {
    var db = document.getElementById('dashSkeletonTarget');
    if (db) db.insertBefore(card, db.firstChild);
  }
}

// Milestone animals per 5 days
const MILESTONES = {
  5:  {animal:'🐣', title:'Baby Chick!',    sub:'5 din complete!',  color:'#FFD700'},
  10: {animal:'🐥', title:'Hatched!',       sub:'10 din — great!',  color:'#FF9600'},
  15: {animal:'🦊', title:'Little Fox!',    sub:'15 din — amazing!',color:'#FF6B35'},
  20: {animal:'🦁', title:'Brave Lion!',    sub:'20 din — roar!',   color:'#FF9600'},
  25: {animal:'🦅', title:'Eagle!',         sub:'25 din — soaring!',color:'#1CB0F6'},
  30: {animal:'🏆', title:'Champion!',      sub:'30 din done!',     color:'#FFD700'},
  40: {animal:'🦸', title:'Superhero!',     sub:'40 din — wow!',    color:'#CE82FF'},
  50: {animal:'🧙', title:'Wizard!',        sub:'50 din — magic!',  color:'#58CC02'},
  60: {animal:'👑', title:'King/Queen!',    sub:'60 din done!',     color:'#FFD700'},
  70: {animal:'🚀', title:'Rocket!',        sub:'70 din — flying!', color:'#1CB0F6'},
  80: {animal:'🌟', title:'Star!',          sub:'80 din — shine!',  color:'#FFD700'},
  90: {animal:'🎓', title:'Graduate!',      sub:'90 din done!',     color:'#58CC02'},
};

// Day themes for path nodes
const DAY_EMOJIS = {
  1:'👋',2:'👨‍👩‍👧',3:'🕐',4:'🍽️',5:'🛒',
  6:'🗺️',7:'🏫',8:'💊',9:'📞',10:'🌤️',
  11:'🏪',12:'💼',13:'✈️',14:'🎉',15:'💬',
  16:'📰',17:'🏥',18:'🏦',19:'🎭',20:'🧠',
  21:'📝',22:'🤝',23:'🌍',24:'💡',25:'🗣️',
  26:'📊',27:'🎯',28:'🌟',29:'💎',30:'🏆',
};


// ═══ PRE-CLASS SYSTEM ═══
var PRE_CLASS_LANGS = ['en','fr','zh','ar','ko','ja','tr','ie','es','de','ru'];
var PRE_CLASS_INFO = {
  en:{t:'English Alphabet',  i:'🔤',d:'26 letters + phonics seekho',xp:50,b:'English Alphabet Master'},
  fr:{t:'French Alphabet',   i:'🇫🇷',d:'Accents aur special chars',xp:50,b:'French Alphabet Master'},
  zh:{t:'Chinese Pinyin',i:'拼',d:'46 Pinyin symbols — initials aur finals',xp:50,b:'Pinyin Master'},
  ar:{t:'Arabic Alphabet',   i:'ع', d:'28 huroof + harakat seekho',xp:50,b:'Arabic Alphabet Master'},
  ko:{t:'Korean Hangul',     i:'한',d:'14 consonants + 10 vowels',xp:50,b:'Hangul Master'},
  ja:{t:'Japanese Hiragana', i:'あ',d:'46 basic characters seekho',xp:50,b:'Hiragana Master'},
  tr:{t:'Turkish Alphabet',  i:'🇹🇷',d:'29 letters + special chars',xp:50,b:'Turkish Alphabet Master'},
  ie:{t:'Irish Alphabet',    i:'🇮🇪',d:'18 letters + Gaelic sounds',xp:50,b:'Irish Alphabet Master'},
  es:{t:'Spanish Alphabet',  i:'🇪🇸',d:'27 letters + accents',xp:50,b:'Spanish Alphabet Master'},
  de:{t:'German Alphabet',   i:'🇩🇪',d:'26 letters + ae oe ue ss',xp:50,b:'German Alphabet Master'},
  ru:{t:'Russian Alphabet (Cyrillic)',i:'🇷🇺',d:'33 huroof + pronunciation seekho',xp:50,b:'Cyrillic Master'}
};

// ✅ FIX: Profile-specific preClass key — har profile ka alag data
function _pcKey(lang){
  var pid = (typeof ACTIVE_PID !== 'undefined' && ACTIVE_PID) ? ACTIVE_PID : 'default';
  return 'su_preclass_' + pid + '_' + lang;
}