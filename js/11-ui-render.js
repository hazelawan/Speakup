// ══════════════════════════════════════════════════
// SpeakUp v8 — 11-ui-render.js
// UI Render — dashboard, path, treasure, achievements, flashcards
// ══════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// 🆕 NEW RENDER FUNCTIONS — Batch System + Mega Quiz
// ══════════════════════════════════════════════════════════════

// ── CSS for new components (injected once) ──
(function _injectPCStyles(){
  if(document.getElementById('pcBatchStyles')) return;
  var s = document.createElement('style');
  s.id = 'pcBatchStyles';
  s.textContent = `
@keyframes batchPop { from{transform:scale(.5) rotate(-8deg);opacity:0;} 60%{transform:scale(1.1) rotate(2deg);} to{transform:scale(1) rotate(0);opacity:1;} }
@keyframes phaseSlide { from{transform:translateY(30px);opacity:0;} to{transform:translateY(0);opacity:1;} }
@keyframes letterEntrance { 0%{transform:scale(0) rotate(-15deg);opacity:0;filter:blur(8px);} 60%{transform:scale(1.15) rotate(3deg);opacity:1;filter:none;} 100%{transform:scale(1) rotate(0);opacity:1;filter:none;} }
@keyframes cardFlip { 0%{transform:rotateY(-90deg) scale(.8);opacity:0;} 60%{transform:rotateY(8deg) scale(1.05);opacity:1;} 100%{transform:rotateY(0) scale(1);opacity:1;} }
@keyframes shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
@keyframes countPop { 0%,100%{transform:scale(1);} 50%{transform:scale(1.3);} }
@keyframes megaEntrance { from{transform:scale(.7) translateY(40px);opacity:0;} 60%{transform:scale(1.05) translateY(-5px);opacity:1;} to{transform:scale(1) translateY(0);opacity:1;} }
@keyframes timerUrgent2 { 0%,100%{background:rgba(255,75,75,.15);} 50%{background:rgba(255,75,75,.35);} }
.pc-batch-badge { display:inline-flex;align-items:center;gap:6px;background:rgba(199,125,255,.15);border:1.5px solid rgba(199,125,255,.4);border-radius:20px;padding:5px 14px;font-family:'Fredoka One',sans-serif;font-size:12px;color:#C77DFF; }
.pc-phase-dot { width:10px;height:10px;border-radius:50%;display:inline-block;flex-shrink:0; }
.pc-quiz-counter { font-family:'Fredoka One',sans-serif;font-size:11px;color:rgba(255,255,255,.4);text-align:center;margin-bottom:10px; }
.pc-mega-timer-bar { height:8px;background:rgba(255,255,255,.07);border-radius:8px;overflow:hidden;margin-bottom:12px; }
.pc-mega-timer-fill { height:100%;border-radius:8px;background:linear-gradient(90deg,#2EE59D,#FFD166,#FF4B4B);transition:width 10s linear; }

/* ── Heart System ── */
.heart-icon { font-size:16px; transition:transform .2s,filter .2s; line-height:1; display:inline-block; }
.heart-icon.lost { filter:grayscale(1) opacity(.35); }
.heart-icon.shake { animation:heartShake .4s ease; }
.heart-icon.regen { animation:heartRegen .5s cubic-bezier(.34,1.56,.64,1); }
@keyframes heartShake { 0%,100%{transform:translateX(0) scale(1);} 25%{transform:translateX(-4px) scale(.85);} 50%{transform:translateX(4px) scale(.85);} 75%{transform:translateX(-3px) scale(.9);} }
@keyframes heartRegen { 0%{transform:scale(0) rotate(-20deg);filter:grayscale(1) opacity(.3);} 60%{transform:scale(1.3) rotate(5deg);filter:none;} 100%{transform:scale(1) rotate(0);filter:none;} }

/* ── No Hearts Overlay ── */
#noHeartsOverlay {
  position:fixed; inset:0; z-index:99998;
  background:rgba(0,0,0,.88);
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  display:none; align-items:center; justify-content:center;
}
#noHeartsOverlay.show { display:flex; }
.nho-box {
  background:linear-gradient(135deg,#1a0505,#2d0a0a,#1a0505);
  border:2px solid rgba(255,75,75,.55); border-radius:28px;
  padding:32px 24px; text-align:center; max-width:300px; width:90%;
  box-shadow:0 20px 60px rgba(255,75,75,.25);
  animation:nhoPopIn .4s cubic-bezier(.34,1.56,.64,1);
}
@keyframes nhoPopIn { from{transform:scale(.6);opacity:0;} to{transform:scale(1);opacity:1;} }
.nho-emoji { font-size:64px; margin-bottom:12px; animation:nhoBeat 1.5s ease infinite; }
@keyframes nhoBeat { 0%,100%{transform:scale(1);} 14%{transform:scale(1.2);} 28%{transform:scale(1);} 42%{transform:scale(1.15);} }
.nho-title { font-family:'Fredoka One',sans-serif; font-size:24px; color:#FF4B4B; margin-bottom:8px; }
.nho-sub { font-size:13px; color:rgba(255,255,255,.55); margin-bottom:8px; line-height:1.5; }
.nho-timer { font-family:'Fredoka One',sans-serif; font-size:28px; color:#FF9A3C; margin-bottom:20px; }
.nho-btn-go { width:100%; padding:14px; border-radius:16px; border:none; background:linear-gradient(135deg,#FF4B4B,#cc2222); color:#fff; font-family:'Fredoka One',sans-serif; font-size:16px; cursor:pointer; box-shadow:0 5px 0 #991111; margin-bottom:10px; }
.nho-btn-dash { width:100%; padding:12px; border-radius:14px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.07); color:rgba(255,255,255,.6); font-family:'Fredoka One',sans-serif; font-size:14px; cursor:pointer; }

/* ── Pause Overlay ── */
#pauseOverlay {
  position:fixed; inset:0; z-index:99997;
  background:rgba(0,0,0,.92);
  backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
  display:none; align-items:center; justify-content:center;
}
#pauseOverlay.show { display:flex; }
.pause-box {
  background:linear-gradient(135deg,#0d0a1e,#1a0f3a,#0d0a1e);
  border:2px solid rgba(91,141,239,.5); border-radius:28px;
  padding:32px 24px; text-align:center; max-width:300px; width:90%;
  box-shadow:0 20px 60px rgba(91,141,239,.25);
  animation:pausePopIn .4s cubic-bezier(.34,1.56,.64,1);
}
@keyframes pausePopIn { from{transform:scale(.65) translateY(30px);opacity:0;} to{transform:scale(1) translateY(0);opacity:1;} }
.pause-emoji { font-size:60px; margin-bottom:10px; animation:pauseFloat 2.5s ease infinite; }
@keyframes pauseFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
.pause-title { font-family:'Fredoka One',sans-serif; font-size:26px; color:#5B8DEF; margin-bottom:6px; text-shadow:0 0 16px rgba(91,141,239,.5); }
.pause-sub { font-size:13px; color:rgba(255,255,255,.45); margin-bottom:24px; line-height:1.5; }
.pause-btn-continue { width:100%; padding:16px; border-radius:18px; border:none; background:linear-gradient(135deg,#2EE59D,#1BC47D); color:#0A0918; font-family:'Fredoka One',sans-serif; font-size:17px; cursor:pointer; box-shadow:0 5px 0 #14A363; margin-bottom:10px; }
.pause-btn-restart { width:100%; padding:14px; border-radius:16px; border:2px solid rgba(255,150,0,.4); background:rgba(255,150,0,.1); color:#FF9A3C; font-family:'Fredoka One',sans-serif; font-size:15px; cursor:pointer; margin-bottom:10px; }
.pause-btn-dash { width:100%; padding:12px; border-radius:14px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.06); color:rgba(255,255,255,.5); font-family:'Fredoka One',sans-serif; font-size:14px; cursor:pointer; }
.pause-divider { height:1px; background:rgba(255,255,255,.08); margin:14px 0; }
`;
  document.head.appendChild(s);
})();

// ── BATCH INTRO ──
function renderPCBatchIntro(s, b){
  var first = s.batch[0];
  var last  = s.batch[s.batch.length-1];
  var fc = first ? (first.char||first.character||'?') : '?';
  var lc = last  ? (last.char||last.character||'?') : '?';
  var phaseColors = ['#C77DFF','#FFD166','#2EE59D'];
  var phases = [
    {icon:'📖', label:'Parhai'},
    {icon:'❓', label:'Quiz'},
    {icon:'🎤', label:'Speaking'}
  ];
  b.innerHTML = '<div class="a" style="text-align:center;padding:16px 0 24px;">'
    + '<div style="font-size:64px;margin-bottom:6px;animation:batchPop .5s cubic-bezier(.34,1.56,.64,1);">📦</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:22px;color:#C77DFF;margin-bottom:4px;animation:phaseSlide .4s ease;">Batch ' + s.batchNum + ' / ' + s.batchTotal + '</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:16px;">Letters: <b style="color:#fff;font-size:16px;font-family:serif;">' + fc + ' → ' + lc + '</b></div>'
    + '<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;">'
    + s.batch.map(function(l){
        var c = l.char||l.character||l.letter||'?';
        return '<div style="background:rgba(199,125,255,.12);border:1.5px solid rgba(199,125,255,.3);border-radius:12px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:22px;font-family:serif;color:#C77DFF;animation:cardFlip .5s ease;">'+c+'</div>';
      }).join('')
    + '</div>'
    + '<div style="background:rgba(255,255,255,.04);border-radius:16px;padding:14px;margin-bottom:20px;">'
    + '<div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;">Is batch mein:</div>'
    + '<div style="display:flex;justify-content:center;gap:12px;">'
    + phases.map(function(p,i){ return '<div style="text-align:center;"><div style="font-size:22px;">'+p.icon+'</div><div style="font-size:10px;color:'+phaseColors[i]+';margin-top:2px;font-family:\'Fredoka One\',sans-serif;">'+p.label+'</div></div>'; }).join('')
    + '</div></div>'
    + '<button class="bg" onclick="if(!_pcRendering){this.disabled=true;pcNx();}" style="width:100%;min-height:52px;font-size:17px;touch-action:manipulation;">▶️ Start Now!</button>'
    + '</div>';
}

// ── PHASE BANNER ──
function renderPCPhaseBanner(s, b){
  var configs = {
    1: {bg:'rgba(199,125,255,.12)',border:'rgba(199,125,255,.4)',color:'#C77DFF',iconBg:'rgba(199,125,255,.2)',emoji:'📖'},
    2: {bg:'rgba(255,209,102,.08)',border:'rgba(255,209,102,.35)',color:'#FFD166',iconBg:'rgba(255,209,102,.15)',emoji:'❓'},
    3: {bg:'rgba(46,229,157,.08)',border:'rgba(46,229,157,.3)',color:'#2EE59D',iconBg:'rgba(46,229,157,.15)',emoji:'🎤'}
  };
  var cfg = configs[s.phase] || configs[1];
  var emoji = s.phase===1?'📖':s.phase===2?'❓':'🎤';
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 28px;">'
    + '<div style="width:80px;height:80px;border-radius:50%;background:'+cfg.iconBg+';border:2px solid '+cfg.border+';display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:38px;animation:batchPop .45s cubic-bezier(.34,1.56,.64,1);">'+emoji+'</div>'
    + ''
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:24px;color:'+cfg.color+';margin-bottom:6px;animation:phaseSlide .4s ease;">'+s.title+'</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:20px;">'+s.sub+'</div>'
    + '<div style="display:flex;justify-content:center;gap:8px;margin-bottom:20px;">'
    + [1,2,3].map(function(p){
        var active = p <= s.phase;
        var current = p === s.phase;
        return '<div style="height:6px;width:'+(current?'40px':'24px')+';border-radius:6px;background:'+(active?cfg.color:'rgba(255,255,255,.1)')+';transition:all .3s ease;'+(current?'box-shadow:0 0 10px '+cfg.color+';':'')+'"></div>';
      }).join('')
    + '</div>'
    + '<button class="bg" onclick="if(!_pcRendering){this.disabled=true;pcNx();}" style="width:100%;min-height:52px;touch-action:manipulation;background:linear-gradient(135deg,'+cfg.color+','+cfg.color+'cc);">▶️ Start!</button>'
    + '</div>';
}

// ── ENHANCED LETTER CARD (Urdu + animations) ──
function renderPCLetter(s, b){
  var l = s.letter;
  var char    = l.char||l.character||l.letter||'?';
  var name    = l.name||l.letterName||char;
  var pron    = l.pronunciation||l.sound||l.phonetic||'';
  var example = l.example||l.word||'';
  var meaning = l.meaning||l.urdu||l.translation||'';
  var upper   = l.upper||l.uppercase||'';
  var lower   = l.lower||l.lowercase||'';
  var ttsText = pron||name||char;
  var tid = _storeTTS ? _storeTTS(ttsText, example) : 0;

  // Batch progress dots
  var dotsHtml = '';
  if(s.total){
    dotsHtml = '<div style="display:flex;gap:5px;justify-content:center;margin-bottom:8px;">'
      + Array.from({length:s.total},function(_,i){
          return '<div style="width:8px;height:8px;border-radius:50%;background:'+(i<s.num?'#C77DFF':'rgba(255,255,255,.12)')+';transition:all .3s;'+(i===s.num-1?'box-shadow:0 0 8px #C77DFF;':'')+'"></div>';
        }).join('')
      + '</div>';
  }

  b.innerHTML = '<div class="a">'
    + '<div style="text-align:center;margin-bottom:8px;">'
    + dotsHtml
    + '<span style="font-size:11px;color:rgba(255,255,255,.35);">Letter '+s.num+' / '+s.total+(s.totalLetters?' &nbsp;|&nbsp; Overall: '+s.allLetterNum+'/'+s.totalLetters:'')+'</span>'
    + '</div>'
    // Main letter card
    + '<div style="background:linear-gradient(135deg,rgba(199,125,255,.18),rgba(199,125,255,.06));border:2px solid rgba(199,125,255,.4);border-radius:24px;padding:28px 20px;text-align:center;margin-bottom:14px;position:relative;overflow:hidden;">'
    + '<div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C77DFF,transparent);animation:shimmer 2s ease infinite;background-size:200% 100%;"></div>'
    + '<div style="font-size:86px;font-weight:700;color:#C77DFF;font-family:serif;animation:letterEntrance .6s cubic-bezier(.34,1.56,.64,1);line-height:1.1;">'+char+'</div>'
    + (upper||lower ? '<div style="font-size:14px;color:rgba(255,255,255,.45);margin-top:4px;margin-bottom:4px;">'+(upper?'A: <b style="color:#fff;">'+upper+'</b>&nbsp;&nbsp;':'')+(lower?'a: <b style="color:#fff;">'+lower+'</b>':'')+'</div>' : '')
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:20px;color:#fff;margin-top:6px;">'+name+'</div>'
    + (pron?'<div style="font-size:14px;color:rgba(255,255,255,.45);margin-top:3px;">/ '+pron+' /</div>':'')
    + '</div>'
    // Example word box
    + (example?'<div style="background:linear-gradient(135deg,rgba(88,204,2,.1),rgba(88,204,2,.04));border:1.5px solid rgba(88,204,2,.3);border-radius:18px;padding:14px 16px;margin-bottom:14px;display:flex;align-items:center;gap:12px;">'
      + '<div style="font-size:28px;flex-shrink:0;">📚</div>'
      + '<div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.4);margin-bottom:3px;">Misal:</div>'
      + '<div style="font-size:20px;color:#58CC02;font-weight:700;font-family:serif;">'
      + '<span style="color:#FFD166;font-size:22px;">'+char+'</span>'
      + example.slice(1)
      + '</div>'
      + (meaning?'<div style="font-size:15px;color:rgba(255,255,255,.65);margin-top:4px;font-family:\'Noto Nastaliq Urdu\',\'Jameel Noori Nastaleeq\',serif;direction:rtl;text-align:right;">'+meaning+'</div>':'')
      + '</div>'
      + '</div>':'')
    // Buttons
    + '<div class="spk-bar" style="margin-bottom:14px;">'
    + (tid?'<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')" style="touch-action:manipulation;">🔊 Suno</button>'
          +'<button class="spk-btn spk-slow" onclick="ttsSlow('+tid+')" style="touch-action:manipulation;">🐢 Dheere</button>'
         :'<button class="spk-btn spk-listen" onclick="if(window.spk)spk(\''+ttsText+'\')" style="touch-action:manipulation;">🔊 Suno</button>')
    + '</div>'
    + '<button class="bg" onclick="if(!_pcRendering){this.disabled=true;pcNx();}" style="width:100%;min-height:52px;touch-action:manipulation;">✓ Got It! →</button>'
    + '</div>';
  setTimeout(function(){ if(tid&&window.ttsPlay) ttsPlay(tid); else if(window.spk) spk(ttsText); }, 500);
}

// ── EXAMPLE QUESTION (word se letter dhundo) ──
function renderPCExampleQ(s, b){
  var l = s.letter;
  var char = l.char||l.character||l.letter||'?';
  var example = l.example||char;
  var meaning = l.meaning||l.urdu||'';
  var qId = 'pcexq_'+_pcSI;
  _pcTotal++;
  window._pcQData[qId] = {correct:char, options:s.options};
  var counterHtml = s.quizTotal
    ? '<div class="pc-quiz-counter">Sawaal '+s.quizNum+' / '+s.quizTotal+'</div>'
    : '';
  var optHtml = s.options.map(function(o,oi){
    var oc = o.char||o.character||o.letter||'?';
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="pcExQAnswer(this)" '
      +'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:18px 8px;font-family:serif;font-size:34px;color:#fff;cursor:pointer;min-height:70px;touch-action:manipulation;">'+oc+'</button>';
  }).join('');
  b.innerHTML = '<div class="a">'
    + counterHtml
    + '<div style="text-align:center;background:rgba(88,204,2,.08);border:1.5px solid rgba(88,204,2,.25);border-radius:20px;padding:22px;margin-bottom:16px;">'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:8px;">📚 Which letter does this word start with?</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:30px;color:#58CC02;animation:letterEntrance .5s cubic-bezier(.34,1.56,.64,1);">'+example+'</div>'
    + (meaning?'<div style="font-size:14px;color:rgba(255,255,255,.5);margin-top:6px;font-family:\'Noto Nastaliq Urdu\',serif;direction:rtl;">'+meaning+'</div>':'')
    + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" id="'+qId+'">'
    + optHtml + '</div></div>';
}
function pcExQAnswer(btn){
  var qId=btn.dataset.qid, oi=parseInt(btn.dataset.oi);
  var data=window._pcQData[qId]; if(!data) return;
  var container=document.getElementById(qId); if(!container) return;
  var sel=data.options[oi].char||data.options[oi].character||data.options[oi].letter||'?';
  var ok=(sel===data.correct);
  container.querySelectorAll('button').forEach(function(b){b.disabled=true;});
  if(ok) _pcScore++; else { _pcWrongLetters.push(data.correct); if(typeof loseHeart==='function') loseHeart(); }
  _pcApplyFeedback(btn,container,ok,data.correct,'char');
  _pcAddNext(container.parentNode);
}

// ── MEGA QUIZ INTRO ──
function renderPCMegaIntro(s, b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:18px 0 28px;">'
    + '<div style="font-size:72px;margin-bottom:8px;animation:megaEntrance .6s cubic-bezier(.34,1.56,.64,1);">🏆</div>'
    + '<div style="font-size:11px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Sab Batches Complete!</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:28px;color:#FFD166;margin-bottom:6px;text-shadow:0 0 20px rgba(255,209,102,.5);">MEGA QUIZ</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.7;">Sab '+s.totalLetters+' letters ka grand test!<br>Speaking practice + 10-second speed quiz.</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:20px;">'
    + ['🎤 Speaking','⚡ Speed Quiz','💔 Retry'].map(function(item){
        return '<div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px 6px;font-size:11px;color:rgba(255,255,255,.6);text-align:center;">'+item+'</div>';
      }).join('')
    + '</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;min-height:52px;font-size:17px;background:linear-gradient(135deg,#FFD166,#FF9A3C);color:#0A0918;touch-action:manipulation;">🚀 Start Mega Quiz!</button>'
    + '</div>';
}

// ── MEGA SPEAKING INTRO ──
function renderPCMegaSpeakingIntro(b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 28px;">'
    + '<div style="font-size:60px;margin-bottom:10px;animation:batchPop .5s ease;">🎤</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:24px;color:#2EE59D;margin-bottom:8px;">Speaking Practice</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.7;">Practice all learned letters one more time.<br>Listen then speak into the mic!</div>'
    + '<button class="bg" onclick="if(!_pcRendering){this.disabled=true;pcNx();}" style="width:100%;min-height:52px;background:linear-gradient(135deg,#2EE59D,#1BC47D);color:#0A0918;touch-action:manipulation;">🎤 Start Practice!</button>'
    + '</div>';
}

// ── MEGA SPEED INTRO ──
function renderPCMegaSpeedIntro(s, b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 28px;">'
    + '<div style="font-size:64px;margin-bottom:10px;animation:batchPop .5s ease;">⚡</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:26px;color:#FF4B4B;margin-bottom:6px;">Speed Quiz!</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:16px;line-height:1.7;"><b style="color:#FFD166;">'+s.total+' sawaal</b> — only for each question <b style="color:#FF4B4B;">10 second</b>!<br>Fill in the blank, find the letter from the word.</div>'
    + '<div style="background:rgba(255,75,75,.08);border:1.5px solid rgba(255,75,75,.25);border-radius:16px;padding:14px;margin-bottom:20px;font-size:12px;color:rgba(255,255,255,.55);line-height:1.9;">'
    + '⏱️ 10 sec per sawaal<br>💔 Wrong = heart minus<br>🔄 Wrong sawal end mein dobara aayenge'
    + '</div>'
    + '<button class="bg" onclick="if(!_pcRendering){this.disabled=true;pcNx();}" style="width:100%;min-height:52px;font-size:17px;background:linear-gradient(135deg,#FF4B4B,#cc2222);touch-action:manipulation;">⚡ Start Speed Quiz!</button>'
    + '</div>';
}

// ── MEGA SPEED QUIZ ──
var _megaSpeedState = null;

function renderPCMegaSpeed(s, b){
  _megaSpeedState = {
    questions: s.questions.slice(),
    wrongQueue: [],
    current: 0,
    totalQ: s.totalQ,
    score: 0,
    done: false,
    retryMode: false,
    bd: b
  };
  _megaSpeedRender();
}

function _megaSpeedRender(){
  var st = _megaSpeedState;
  if(!st) return;
  var b = st.bd;
  if(!b) b = document.getElementById('lBd');
  if(!b) return;

  // Check if done
  if(st.current >= st.questions.length){
    if(st.wrongQueue.length > 0 && !st.retryMode){
      // Retry mode for wrong answers
      st.retryMode = true;
      st.questions = _pcShuffle(st.wrongQueue.slice());
      st.wrongQueue = [];
      st.current = 0;
      _megaSpeedRetryIntro(b);
      return;
    }
    _megaSpeedFinish(b);
    return;
  }

  var q = st.questions[st.current];
  var l = q.letter;
  var char = l.char||l.character||l.letter||'?';
  var example = l.example||char;
  var meaning = l.meaning||l.urdu||'';
  var qId = 'megaspeed_'+(_pcSI)+'_'+st.current;
  window._pcQData[qId] = {correct:char, options:q.options, qtype:q.qtype};

  var remaining = st.questions.length - st.current;
  var counterTxt = (st.retryMode?'🔄 Retry — ':'')+'Sawaal '+(st.current+1)+'/'+st.questions.length+' | '+remaining+' Baaki | Score: '+st.score;

  // Question HTML
  var qHtml = '';
  if(q.qtype==='mega_fill'){
    // "D_G" — fill in first letter
    var rest = example.length>1 ? example.slice(1) : '';
    qHtml = '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:10px;">✏️ What is the first letter of this word?</div>'
      + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:32px;color:#5B8DEF;letter-spacing:4px;">'
      + '<span style="border-bottom:3px solid #C77DFF;color:#C77DFF;min-width:30px;display:inline-block;text-align:center;animation:blink 1s ease infinite;font-size:34px;">?</span>'
      + '<span style="color:#fff;">'+rest+'</span>'
      + '</div>'
      + (meaning?'<div style="font-size:13px;color:rgba(255,255,255,.45);margin-top:6px;font-family:\'Noto Nastaliq Urdu\',serif;direction:rtl;">'+meaning+'</div>':'');
  } else if(q.qtype==='mega_example'){
    qHtml = '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:10px;">📚 Which letter does this word start with?</div>'
      + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:28px;color:#58CC02;animation:letterEntrance .4s ease;">'+example+'</div>'
      + (meaning?'<div style="font-size:13px;color:rgba(255,255,255,.45);margin-top:6px;font-family:\'Noto Nastaliq Urdu\',serif;direction:rtl;">'+meaning+'</div>':'');
  } else {
    // mega_listen — pronunciation
    var pron = l.pronunciation||l.sound||l.name||char;
    var tid = _storeTTS ? _storeTTS(pron,'') : 0;
    qHtml = '<div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:10px;">🔊 Awaaz sun ke letter dhundo:</div>'
      + (tid?'<button class="spk-btn spk-listen" onclick="ttsPlay('+tid+')" style="font-size:14px;padding:10px 20px;touch-action:manipulation;">🔊 Suno</button>'
            :'<button class="spk-btn spk-listen" onclick="if(window.spk)spk(\''+pron+'\')" style="font-size:14px;padding:10px 20px;touch-action:manipulation;">🔊 Suno</button>');
    setTimeout(function(){ if(tid&&window.ttsPlay) ttsPlay(tid); else if(window.spk) spk(pron); },600);
  }

  var optHtml = q.options.map(function(o,oi){
    var oc = o.char||o.character||o.letter||'?';
    return '<button data-qid="'+qId+'" data-oi="'+oi+'" onclick="_megaSpeedAnswer(this)" '
      +'style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:14px;padding:16px 8px;font-family:serif;font-size:30px;color:#fff;cursor:pointer;min-height:68px;touch-action:manipulation;">'+oc+'</button>';
  }).join('');

  b.innerHTML = '<div class="a">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:12px;color:#FFD166;">'+(st.retryMode?'🔄 Retry':'⚡ Mega Quiz')+'</div>'
    + '<div id="megaSpeedTimer" style="font-family:\'Fredoka One\',sans-serif;font-size:26px;color:#FF4B4B;min-width:36px;text-align:right;">10</div>'
    + '</div>'
    + '<div class="pc-mega-timer-bar"><div id="megaSpeedBar" class="pc-mega-timer-fill" style="width:100%;"></div></div>'
    + '<div class="pc-quiz-counter">'+counterTxt+'</div>'
    + '<div style="text-align:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:18px;margin-bottom:14px;">'
    + qHtml + '</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;" id="'+qId+'">'
    + optHtml + '</div></div>';

  // Start 10-second countdown
  if(st.timer) clearInterval(st.timer);
  var timeLeft = 10;
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    var tb = document.getElementById('megaSpeedBar');
    if(tb) tb.style.width = '0%';
  }); });
  st.timer = setInterval(function(){
    timeLeft--;
    var td = document.getElementById('megaSpeedTimer');
    if(td){ td.textContent = timeLeft; if(timeLeft<=3) td.style.color='#FF4B4B'; else td.style.color='#FFD166'; }
    if(timeLeft<=0){
      clearInterval(st.timer); st.timer=null;
      var c2=document.getElementById(qId);
      if(c2) c2.querySelectorAll('button').forEach(function(bb){bb.disabled=true;});
      // Time up = wrong
      st.wrongQueue.push(q);
      _pcWrongLetters.push(char);
      _pcTotal++;
      if(typeof loseHeart==='function') loseHeart();
      st.current++;
      setTimeout(_megaSpeedRender, 800);
    }
  }, 1000);
}

function _megaSpeedAnswer(btn){
  var st = _megaSpeedState; if(!st) return;
  if(st.timer){ clearInterval(st.timer); st.timer=null; }
  var qId = btn.dataset.qid, oi = parseInt(btn.dataset.oi);
  var data = window._pcQData[qId]; if(!data) return;
  var container = document.getElementById(qId); if(!container) return;
  container.querySelectorAll('button').forEach(function(b){b.disabled=true;});
  var sel = data.options[oi].char||data.options[oi].character||data.options[oi].letter||'?';
  var ok = (sel===data.correct);
  if(ok){ st.score++; _pcScore++; } else {
    st.wrongQueue.push(st.questions[st.current]);
    _pcWrongLetters.push(data.correct);
    if(typeof loseHeart==='function') loseHeart();
  }
  _pcTotal++;
  btn.style.background = ok?'rgba(88,204,2,.3)':'rgba(255,75,75,.3)';
  btn.style.borderColor = ok?'#58CC02':'#FF4B4B';
  btn.style.color = ok?'#58CC02':'#FF4B4B';
  if(!ok){
    container.querySelectorAll('button').forEach(function(b2){
      if(b2.textContent.trim()===data.correct){ b2.style.background='rgba(88,204,2,.3)'; b2.style.borderColor='#58CC02'; b2.style.color='#58CC02'; }
    });
  }
  var fb = document.createElement('div');
  fb.style.cssText = 'text-align:center;padding:6px;font-family:\'Fredoka One\',sans-serif;font-size:14px;color:'+(ok?'#58CC02':'#FF4B4B')+';animation:phaseSlide .3s ease;';
  fb.innerHTML = ok?'✓ Sahi! 🎉':'✗ Wrong — <b>'+data.correct+'</b>';
  container.parentNode.appendChild(fb);
  st.current++;
  setTimeout(_megaSpeedRender, 700);
}

function _megaSpeedRetryIntro(b){
  b.innerHTML = '<div class="a" style="text-align:center;padding:20px 0 28px;">'
    + '<div style="font-size:60px;margin-bottom:10px;animation:batchPop .5s ease;">🔄</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:24px;color:#FF9A3C;margin-bottom:8px;">Wrong Answer — Try Again!</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:20px;line-height:1.7;">'
    + (_megaSpeedState?_megaSpeedState.questions.length:0)+' galat sawal dobara aayenge.<br>Get it right this time!</div>'
    + '<button class="bg" onclick="_megaSpeedRender()" style="width:100%;min-height:52px;background:linear-gradient(135deg,#FF9A3C,#cc6600);touch-action:manipulation;">🔄 Try Again!</button>'
    + '</div>';
}

function _megaSpeedFinish(b){
  var st = _megaSpeedState||{score:0,totalQ:0};
  var pct = st.totalQ>0 ? Math.round((st.score/st.totalQ)*100) : 0;
  var col = pct>=80?'#58CC02':pct>=50?'#FFD166':'#FF4B4B';
  var msg = pct>=80?'🎉 Zabardast! Tum champion ho!':pct>=50?'💪 Acha! Thodi aur practice karo!':'📚 Dobara seekho aur phir try karo!';
  b.innerHTML = '<div class="a" style="text-align:center;padding:22px 0 28px;">'
    + '<div style="font-size:72px;margin-bottom:8px;animation:megaEntrance .6s ease;">🏆</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:22px;color:#FFD166;margin-bottom:4px;">Mega Quiz Done!</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:52px;color:'+col+';margin-bottom:4px;">'+pct+'%</div>'
    + '<div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:'+col+';margin-bottom:4px;">'+st.score+' / '+st.totalQ+' sahi</div>'
    + '<div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:20px;">'+msg+'</div>'
    + '<button class="bg" onclick="pcNx()" style="width:100%;min-height:52px;font-size:16px;touch-action:manipulation;">🎓 Natija Dekho!</button>'
    + '</div>';
}


function pcFinishAndComplete(lang){
  if(typeof window._stopHeartRegenTicker==='function') window._stopHeartRegenTicker();
  exitLesson();
  setTimeout(function(){
    if(typeof completePreClass === 'function') completePreClass(lang);
  }, 400);
}

function completePreClass(lang){
  var nfo = PRE_CLASS_INFO[lang]; if(!nfo) return;
  markPreClassDone(lang);
  var cs = (typeof CS === 'function') ? CS() : null;
  if(cs){ cs.xp = (cs.xp||0) + nfo.xp; if(typeof saveAll==='function') saveAll(); }
  var ol = document.getElementById('pcOverlay'); if(ol) ol.remove();
  showPreClassBadge(lang);
  if(typeof renderPath==='function') renderPath(typeof AC==='function'?AC():30, typeof CS==='function'?CS():{});
}

function showPreClassBadge(lang){
  var nfo = PRE_CLASS_INFO[lang]; if(!nfo) return;
  if(typeof launchConfetti==='function') launchConfetti();
  var popup = document.createElement('div');
  popup.className = 'pcbadge-overlay';
  var box = document.createElement('div');
  box.className = 'pcbadge-box';
  box.style.animation = 'pcPop .4s cubic-bezier(.34,1.56,.64,1)';
  var closeBtn = document.createElement('button');
  closeBtn.style.cssText = 'background:linear-gradient(135deg,#C77DFF,#9B40E8);border:none;border-radius:16px;padding:13px;font-family:Fredoka One,sans-serif;font-size:15px;color:#fff;cursor:pointer;box-shadow:0 4px 18px rgba(199,125,255,.4);width:100%;margin-top:10px;';
  closeBtn.textContent = '\uD83C\uDF89 Shukriya! Aagey Barhein';
  closeBtn.onclick = function(){ popup.remove(); if(typeof renderDash==='function') renderDash(); };
  box.innerHTML = '<div style="font-size:72px;margin-bottom:12px;animation:heartbeat 1.5s ease infinite;">&#x1F3C5;</div>'
    + '<div style="font-family:Fredoka One,sans-serif;font-size:26px;color:#C77DFF;margin-bottom:6px;">Badge Mila!</div>'
    + '<div style="font-size:14px;color:rgba(255,255,255,.65);margin-bottom:16px;line-height:1.5;">' + nfo.b + '<br><span style="font-size:12px;color:rgba(255,255,255,.4);">' + nfo.t + ' complete!</span></div>'
    + '<div style="display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.35);border-radius:14px;padding:10px;margin-bottom:4px;font-family:Fredoka One,sans-serif;font-size:15px;color:#FFD166;">⭐ +' + nfo.xp + ' XP mila!</div>';
  box.appendChild(closeBtn);
  popup.appendChild(box);
  document.body.appendChild(popup);
}

function renderPath(totalDays, cs){
  const g=document.getElementById('dG');
  g.innerHTML='';
  const lang=S.activeLang||'en';
  const langDays=ALL_DAYS[lang]||ALL_DAYS['en'];

  // Zigzag positions
  const positions=['flex-start','center','flex-end','center'];
  let html='';
  const currentDay=cs.day;
  const courseComplete=cs.done.length>=totalDays;

  // Treasure box every 5 days, special boss every 10
  const TREASURE_DAYS=new Set([5,10,15,20,25,30,40,50,60,70,80,90].filter(d=>d<=totalDays));
  const BOSS_DAYS=new Set([10,20,30,40,50,60,70,80,90].filter(d=>d<=totalDays));

  // PRE-CLASS CARD — injected after g.innerHTML via _pcLang marker
  var _pcLang = (PRE_CLASS_LANGS && PRE_CLASS_LANGS.indexOf(lang)>=0) ? lang : null;

  for(let i=1;i<=totalDays;i++){
    const isDone=cs.done.includes(i);
    const isToday=i===currentDay;
    const pos=positions[(i-1)%4];
    const emoji=DAY_EMOJIS[i]||'📚';
    const dayData=langDays[i];
    const theme=dayData?dayData.themeEn:'Coming soon';
    const delay=(Math.min(i,15)*0.04).toFixed(2);
    const margin=pos==='center'?'0 auto':'0 24px';

    // ── SECTION HEADER — show at start of each section ──
    const secForDay=getDaySection(i);
    const secNum=secForDay?secForDay.sNum:null;
    if(secForDay && i===secForDay.days[0]){
      const secDone=cs.done.filter(d=>d>=secForDay.days[0]&&d<=secForDay.days[1]).length;
      const secTotal=secForDay.days[1]-secForDay.days[0]+1;
      const secPct=Math.round(secDone/secTotal*100);
      html+=`<div style="width:100%;margin:${i===1?'0':'24px'} 0 10px;padding:0 2px;">
        <div style="background:linear-gradient(135deg,${secForDay.color}28,${secForDay.color}14);border:2px solid ${secForDay.color}66;border-radius:22px;padding:16px 18px;box-shadow:0 4px 20px ${secForDay.color}22;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
            <div style="width:50px;height:50px;border-radius:16px;background:${secForDay.color}33;border:2px solid ${secForDay.color}55;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 0 14px ${secForDay.color}44;">${secForDay.icon}</div>
            <div style="flex:1;">
              <div style="font-size:9px;color:${secForDay.color};font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">SECTION ${secNum}</div>
              <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:${secForDay.color};text-shadow:0 0 12px ${secForDay.color}66;">${secForDay.title}</div>
            </div>
            <div style="background:${secForDay.color}22;border:1px solid ${secForDay.color}55;border-radius:20px;padding:4px 10px;font-size:12px;color:${secForDay.color};font-weight:800;">${secPct}%</div>
          </div>
          <div style="height:8px;background:rgba(255,255,255,.06);border-radius:8px;overflow:hidden;border:1px solid ${secForDay.color}22;">
            <div style="height:100%;width:${secPct}%;background:linear-gradient(90deg,${secForDay.color},${secForDay.color}CC);border-radius:8px;transition:width .8s cubic-bezier(.34,1.56,.64,1);box-shadow:0 0 8px ${secForDay.color}66;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px;color:${secForDay.color}88;font-weight:700;">
            <span>${secDone} din complete</span><span>${secTotal-secDone} din baaki</span>
          </div>
        </div>
      </div>`;
    }

    // ── UNIT HEADER — show at start of each unit ──
    const unitForDay=getDayUnit(i);
    if(unitForDay && i===unitForDay.days[0]){
      const uDone=cs.done.filter(d=>d>=unitForDay.days[0]&&d<=unitForDay.days[1]).length;
      const uTotal=unitForDay.days[1]-unitForDay.days[0]+1;
      html+=`<div style="width:100%;margin:8px 0 6px;padding:0 2px;">
        <div style="background:linear-gradient(135deg,${unitForDay.color}18,${unitForDay.color}0A);border-radius:16px;padding:11px 14px;display:flex;align-items:center;gap:10px;border:1px solid ${unitForDay.color}44;box-shadow:0 2px 12px ${unitForDay.color}18;">
          <div style="width:42px;height:42px;border-radius:13px;background:${unitForDay.color}28;border:2px solid ${unitForDay.color}44;display:flex;align-items:center;justify-content:center;font-size:20px;">${uDone>=uTotal?'✅':unitForDay.icon}</div>
          <div style="flex:1;">
            <div style="font-size:9px;color:${unitForDay.color};font-weight:800;text-transform:uppercase;letter-spacing:.6px;">UNIT ${unitForDay.num}</div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:${unitForDay.color};">${unitForDay.title}</div>
            <div style="font-size:10px;color:var(--mut);margin-top:2px;">${uDone}/${uTotal} complete • ${unitForDay.goal}</div>
          </div>
          <div style="font-size:${uDone>=uTotal?'22':'14'}px;">${uDone>=uTotal?'🏅':'⏳'}</div>
        </div>
      </div>`;
    }

    // ── Treasure box BEFORE milestone ──
    if(TREASURE_DAYS.has(i-1) && i>1){
      // ✅ Demo accounts ke liye sab treasure boxes open
      const tDone=isDemo() ? true : cs.done.length>=(i-1);
      const isBoss=BOSS_DAYS.has(i-1);
      const tClaimed=!!(cs.treasuresClaimed && cs.treasuresClaimed.includes(i-1));

      const iconHtml = tDone
        ? (tClaimed
            ? `<div style="position:relative;display:inline-flex;align-items:center;justify-content:center;">
                 <div style="font-size:46px;opacity:.45;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));">🎯</div>
                 <div style="position:absolute;top:-5px;right:-8px;background:#58CC02;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff;border:2px solid var(--bg,#0F0E17);">✓</div>
               </div>`
            : (isBoss
                ? `<div style="position:relative;display:inline-flex;align-items:center;justify-content:center;">
                     <div style="font-size:52px;filter:drop-shadow(0 0 20px rgba(255,215,0,.95)) drop-shadow(0 8px 14px rgba(255,140,0,.6));animation:bounceBig 1.8s ease infinite;">🏆</div>
                     <div style="position:absolute;top:-7px;right:-10px;background:linear-gradient(135deg,#FFD700,#FF8C00);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid var(--bg,#0F0E17);animation:achNewPulse 1.2s ease infinite;">⚡</div>
                   </div>`
                : `<div style="position:relative;display:inline-flex;align-items:center;justify-content:center;">
                     <div style="font-size:50px;filter:drop-shadow(0 0 16px rgba(46,229,157,.9)) drop-shadow(0 6px 14px rgba(27,196,125,.5));animation:bounceBig 2s ease infinite;">🎯</div>
                     <div style="position:absolute;top:-7px;right:-10px;background:linear-gradient(135deg,#2EE59D,#1BC47D);border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:11px;border:2px solid var(--bg,#0F0E17);animation:achNewPulse 1.4s ease infinite;">⚡</div>
                   </div>`
              )
          )
        : `<div style="font-size:44px;filter:grayscale(1);opacity:.25;">🎯</div>`;

      const labelColor = tClaimed ? 'rgba(88,204,2,.55)' : tDone ? (isBoss ? 'var(--y)' : 'var(--g)') : 'var(--mut)';
      const labelText  = tClaimed ? '✅ Mukammal' : tDone ? (isBoss ? '⚡ Boss Test' : '⚡ Review Test') : '🔒 Locked';

      html+=`<div class="path-row" style="justify-content:center;margin:8px 0;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div onclick="${tDone ? (tClaimed ? 'showToast(\'✅ Yeh test pehle de chuke ho!\',\'var(--b)\')' : 'showTreasure('+(i-1)+')') : ''}"
            style="cursor:${tDone?'pointer':'default'};position:relative;display:flex;align-items:center;justify-content:center;
            transition:transform .2s;"
            ${(tDone && !tClaimed) ? 'onmousedown="this.style.transform=\'scale(.88)\'" onmouseup="this.style.transform=\'\'" ontouchstart="this.style.transform=\'scale(.88)\'" ontouchend="this.style.transform=\'\'"' : ''}>
            ${iconHtml}
          </div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:11px;color:${labelColor};text-align:center;letter-spacing:.3px;">
            ${labelText}
          </div>
        </div>
      </div>
      <div class="path-row" style="justify-content:center;">
        <div style="width:4px;height:16px;border-radius:4px;background:${tDone?'var(--g)':'var(--bdr)'};margin:0 auto;"></div>
      </div>`;
    }

    // ── Milestone banner ──
    if(MILESTONES[i-1]&&i>1&&!TREASURE_DAYS.has(i-1)){
      const m=MILESTONES[i-1];
      const mileDone=cs.done.length>=(i-1);
      html+=`<div class="path-row" style="justify-content:center;margin:4px 0;">
        <div class="milestone ${mileDone?'unlocked':''}" style="border-color:${mileDone?m.color:'var(--bdr)'};opacity:${mileDone?1:.45};max-width:285px;">
          <div class="m-animal" style="${mileDone?'':'filter:grayscale(1)'}">${m.animal}</div>
          <div><div class="m-title" style="color:${mileDone?m.color:'var(--mut)'}">${m.title}</div><div class="m-sub">${m.sub}</div></div>
          ${mileDone?'<div style="margin-left:auto;font-size:18px">✨</div>':''}
        </div>
      </div>`;
    }

    // ── Owl "you are here" ──
    if(isToday){
      html+=`<div class="owl-pos" style="margin:10px 0;">
        <div class="owl-pos-inner">
          <div class="owl-bubble" style="font-size:13px;padding:8px 18px;border-radius:22px;">📍 Tum yahaan ho!</div>
          <div style="font-size:36px;filter:drop-shadow(0 6px 14px rgba(255,154,60,.6));animation:owlFloat 2s ease infinite;margin-top:2px;">🦉</div>
        </div>
      </div>`;
    }

    // ── Path Node ──
    // Boss day nodes look different
    const isBossNode=BOSS_DAYS.has(i);
    const nodeSize=isBossNode?'66px':'58px';
    // Color per position for variety
    const nodeColors=[
      ['#2EE59D','#1BC47D','#13A066'],  // green-teal
      ['#5B8DEF','#3A6BD4','#2A55B0'],  // blue
      ['#C77DFF','#9B40E8','#7B2FBE'],  // purple
      ['#FFD166','#FF9A3C','#D4700A'],  // gold
    ];
    const nc=nodeColors[(i-1)%4];
    const nodeBg=isDone
      ? (isBossNode?'linear-gradient(135deg,#FFD166,#FF9A3C)':`linear-gradient(135deg,${nc[0]},${nc[1]})`)
      : isToday
        ? 'linear-gradient(135deg,#FF9A3C,#FFD166)'
        : 'linear-gradient(135deg,#1E1C38,#2A2748)';
    const nodeShadow=isDone
      ? (isBossNode?`0 5px 0 #D4700A,0 0 22px rgba(255,209,102,.5)`:`0 5px 0 ${nc[2]},0 0 18px ${nc[0]}88`)
      : isToday?'0 5px 0 #D4700A,0 0 22px rgba(255,154,60,.5)':'0 4px 0 #14122A';
    const isEnglish=(S&&S.activeLang==='en');
    // Sequential unlock: day is accessible only if it's done OR it's the next day after last done
    // i.e. user can only go to days they've completed OR the very next day
    const maxDoneDay = cs.done.length > 0 ? Math.max(...cs.done) : 0;
    // Sirf Demo/Tester accounts ke liye sab nodes unlocked — Pro ke liye bhi sequential
    const isSequentiallyUnlocked = isDemo() ? true : (isDone || (i <= maxDoneDay + 1));
    const canClick = isToday ? true : isDone ? true : isSequentiallyUnlocked;
    // Guest mode — Day 2+ locked
    const guestLocked = IS_GUEST && i > 1;
    const nodeIcon=isDone?(isBossNode?'⭐':'✓'):isToday?emoji:(guestLocked?'🔒':(!(isSequentiallyUnlocked)?'🔒':(isEnglish?emoji:'🔓')));
    const ringStyle=isToday?`border:3px solid rgba(255,255,255,.9);box-shadow:${nodeShadow},0 0 0 8px rgba(255,154,60,.2);`:`box-shadow:${nodeShadow};`;

    html+=`<div class="path-row" style="justify-content:${pos};">
      <div class="pnode pnode-entrance ${isDone?'done':isToday?'today':'locked'}"
        onclick="${isToday?'goLesson()':isDone?'reviewDay('+i+')':(guestLocked?'showGuestLockPopup()':(canClick?'selectDay('+i+')':'showLockedToast('+i+')'))}"
        style="width:${nodeSize};height:${nodeSize};margin:${margin};background:${nodeBg};${ringStyle}animation-delay:${delay}s;cursor:pointer;">
        <div style="font-size:${isBossNode?'26':'20'}px;line-height:1;">${nodeIcon}</div>
        <div class="pnode-num">${i}</div>
        <div class="pnode-tip">${theme.slice(0,12)}</div>
      </div>
    </div>`;

    // ── Connector + side decorations ──
    if(i<totalDays){
      // Side decoration — alternating stars, XP orbs, sparkles
      const decoSide=i%2===0?'right':'left';
      const decoOffset=decoSide==='left'?'8px':'auto';
      const decoRight=decoSide==='right'?'8px':'auto';
      const decos=['⭐','✨','💫','🌟','⚡','🔥','💎','🎯'];
      const decoIcon=decos[(i-1)%decos.length];
      const decoColor=['#FFD166','#C77DFF','#2EE59D','#5B8DEF','#FF9A3C','#FF6B6B','#5B8DEF','#FFD166'][(i-1)%8];
      const connColor=isDone?`linear-gradient(180deg,${nc[0]},${nc[1]})`:'linear-gradient(180deg,#2E2B4A,#1E1C35)';
      const connBorder=isDone?'none':'1.5px dashed #3A3660';
      const showDeco=i%3!==0; // show deco on 2 of 3 nodes
      html+=`<div class="path-row" style="justify-content:${pos};position:relative;">
        <div style="margin:${margin};width:5px;height:28px;border-radius:4px;background:${connColor};${!isDone?'border:'+connBorder+';background:transparent;':''}${isDone?'box-shadow:0 0 8px '+nc[0]+'66;':''}"></div>
        ${showDeco?`<div style="position:absolute;${decoSide==='left'?'left:12px':'right:12px'};top:50%;transform:translateY(-50%);font-size:16px;opacity:${isDone?'.9':'.25'};animation:sideFloat ${2.5+((i%3)*.4)}s ease infinite;filter:${isDone?'none':'grayscale(1)'};">${decoIcon}</div>`:''}
      </div>`;
    }
  }

  // ── Certificate Node at end ──
  html+=`<div class="path-row" style="justify-content:center;margin-top:10px;">
    <div style="width:5px;height:28px;border-radius:4px;background:${courseComplete?'linear-gradient(180deg,#FFD166,#FF9A3C)':'linear-gradient(180deg,#2E2B4A,#1E1C35)'};margin:0 auto;${courseComplete?'box-shadow:0 0 10px rgba(255,209,102,.5);':''}"></div>
  </div>
  <div class="path-row" style="justify-content:center;margin:8px 0 24px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
      <div class="cert-node ${(courseComplete||isDemo())?'unlocked':'locked'}" onclick="${(courseComplete||isDemo())?'showCert()':'showCertLocked()'}">
        <div style="font-size:${courseComplete?'32':'22'}px">${courseComplete?'🏆':'🔒'}</div>
        <div class="cert-label">${courseComplete?'OPEN!':'LOCKED'}</div>
      </div>
      <div style="text-align:center;">
        <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:${courseComplete?'var(--y)':'var(--mut)'}">
          ${courseComplete?'🎓 Certificate!':'🏆 Certificate'}
        </div>
        <div style="font-size:10px;color:var(--mut);margin-top:2px;">
          ${courseComplete?'Mubarak ho! Tap karo!':cs.done.length+'/'+totalDays+' din baaki'}
        </div>
      </div>
    </div>
  </div>`;

  g.innerHTML=html;
  // Prepend pre-class card if applicable
  if(_pcLang){
    var _pd = isPreClassDone(_pcLang);
    var _pnfo = PRE_CLASS_INFO[_pcLang];
    var _pcard = document.createElement('div');
    _pcard.className = 'pc-card';
    var _pwrap = document.createElement('div');
    _pwrap.className = 'pc-wrap' + (_pd?' done':'');
    _pwrap.innerHTML = '<div class="pc-glow"></div>'
      + '<div class="pc-tag">' + (_pd?'✅ COMPLETE':'⭐ PRE-CLASS') + '</div>'
      + '<div class="pc-row"><div class="pc-ico">' + _pnfo.i + '</div>'
      + '<div style="flex:1;"><div class="pc-title">' + _pnfo.t + '</div><div class="pc-sub">' + _pnfo.d + '</div></div></div>'
      + '<div class="pc-bar-wrap"><div class="pc-bar-fill" style="width:' + (_pd?100:0) + '%;"></div></div>'
      + '<div class="pc-foot"><div class="pc-btn">' + (_pd?'&#x1F3C5; Badge Dekho':'&#x1F4D6; Start Karo') + ' &rarr;</div>'
      + '<div class="pc-stars">' + (_pd?'★★★':'☆☆☆') + '</div></div>';
    _pwrap.onclick = (function(l){ return function(){ openPreClass(l); }; })(_pcLang);
    _pcard.appendChild(_pwrap);
    var _pconn = document.createElement('div');
    _pconn.className = 'path-row';
    _pconn.style.cssText = 'justify-content:center;';
    _pconn.innerHTML = '<div style="width:4px;height:18px;border-radius:4px;background:' + (_pd?'linear-gradient(180deg,#2EE59D,#1BC47D)':'linear-gradient(180deg,#2E2B4A,#1E1C35)') + ';margin:0 auto;"></div>';
    g.insertBefore(_pconn, g.firstChild);
    g.insertBefore(_pcard, g.firstChild);
  }

  // ── Add floating sparkle decorations in empty areas ──
  const sparkles=['✦','◆','✧','◇','⬡','▲'];
  const spColors=['rgba(46,229,157,.35)','rgba(91,141,239,.35)','rgba(199,125,255,.3)','rgba(255,209,102,.3)'];
  for(let s=0;s<14;s++){
    const sp=document.createElement('div');
    sp.style.cssText=`position:absolute;font-size:${9+Math.random()*8}px;color:${spColors[s%4]};left:${Math.random()*88+6}%;top:${Math.random()*96+2}%;animation:twinkle ${2.5+Math.random()*2.5}s ease infinite;animation-delay:${Math.random()*3}s;pointer-events:none;user-select:none;z-index:0;`;
    sp.textContent=sparkles[s%6];
    g.appendChild(sp);
  }
  g.style.position='relative';

  // Scroll to today
  setTimeout(()=>{
    const nodes=g.querySelectorAll('.pnode.today');
    if(nodes.length>0) nodes[0].scrollIntoView({behavior:'smooth',block:'center'});
  },300);
}

// ══════════════════════════════════════════════════════
//  TREASURE BOX — Full 45-Question Review Quiz System
// ══════════════════════════════════════════════════════

function showTreasure(day){
  const cs = CS();
  const lang = S.activeLang || 'en';
  const isBoss = [10,20,30,40,50,60,70,80,90].includes(day);

  // ── Already claimed check ──
  if(!cs.treasuresClaimed) cs.treasuresClaimed = [];
  if(cs.treasuresClaimed.includes(day)){
    showToast('✅ Yeh inaam pehle le chuke ho!','var(--b)');
    return;
  }

  // ── Collect all quizzes from day 1 → day (cumulative) ──
  const langDays = ALL_DAYS[lang] || ALL_DAYS['en'] || {};
  let pool = [];
  for(let d = 1; d <= day; d++){
    const dd = langDays[d];
    if(dd && Array.isArray(dd.quizzes)){
      dd.quizzes.forEach(q => {
        if(q && q.q && Array.isArray(q.o) && typeof q.a === 'number'){
          pool.push({ ...q, _fromDay: d });
        }
      });
    }
  }

  // ── Shuffle pool ──
  for(let i = pool.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // ── Pick 45 (or all if less) ──
  const questions = pool.slice(0, 45);

  if(questions.length === 0){
    showToast('❌ Koi quiz nahi mila — pehle lessons complete karo!','var(--r)');
    return;
  }

  // ── Open the Treasure Quiz Modal ──
  _openTreasureQuiz(questions, day, isBoss, cs);
}

function _openTreasureQuiz(questions, day, isBoss, cs){
  const LABELS = ['A','B','C','D'];
  let qi = 0;          // current question index
  let correct = 0;     // correct count
  let totalAnswered = 0;
  let xpEarned = 0;
  const xpPerQ = isBoss ? 3 : 2;   // boss box slightly more per Q
  const bonusXP = isBoss ? 50 : 20; // final bonus

  // ── Build modal if not exists ──
  if(!document.getElementById('tqModal')){
    const modal = document.createElement('div');
    modal.id = 'tqModal';
    modal.innerHTML = `
      <div id="tqBackdrop" style="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99990;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:flex-end;justify-content:center;">
        <div id="tqSheet" style="width:100%;max-width:520px;height:92vh;background:var(--bg,#0F0E17);border-radius:28px 28px 0 0;border-top:2px solid rgba(255,215,0,.35);display:flex;flex-direction:column;overflow:hidden;animation:tqSlideUp .38s cubic-bezier(.34,1.56,.64,1);">
          <!-- Header -->
          <div id="tqHeader" style="padding:16px 18px 12px;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.06);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
              <div id="tqTitle" style="font-family:'Fredoka One',sans-serif;font-size:18px;color:#FFD700;"></div>
              <button onclick="_closeTreasureQuiz()" style="background:rgba(255,255,255,.07);border:none;color:rgba(255,255,255,.5);font-size:18px;width:34px;height:34px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
            </div>
            <!-- Progress bar -->
            <div style="height:6px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;margin-bottom:6px;">
              <div id="tqProgress" style="height:100%;border-radius:6px;background:linear-gradient(90deg,#FFD700,#FF8C00);transition:width .4s ease;width:0%;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div id="tqCounter" style="font-size:12px;color:rgba(255,255,255,.4);font-weight:700;"></div>
              <div id="tqXPLive" style="font-family:'Fredoka One',sans-serif;font-size:13px;color:#FFD700;">⭐ 0 XP</div>
            </div>
          </div>
          <!-- Question Body -->
          <div id="tqBody" style="flex:1;overflow-y:auto;padding:16px 16px 24px;-webkit-overflow-scrolling:touch;"></div>
        </div>
      </div>`;
    document.body.appendChild(modal);

    // Add slide-up animation
    if(!document.getElementById('tqStyle')){
      const s = document.createElement('style');
      s.id = 'tqStyle';
      s.textContent = `
        @keyframes tqSlideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes tqPopIn{from{transform:scale(.7);opacity:0}to{transform:scale(1);opacity:1}}
        #tqBody::-webkit-scrollbar{display:none}
        .tqQ{font-family:'Fredoka One',sans-serif;font-size:19px;line-height:1.45;color:var(--txt,#fff);margin-bottom:18px;padding:4px 0;}
        .tqOpts{display:flex;flex-direction:column;gap:10px;margin-bottom:14px;}
        .tqO{padding:14px 16px;border-radius:16px;border:2px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);cursor:pointer;font-size:14px;font-weight:700;color:var(--txt,#fff);text-align:left;transition:all .2s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;gap:10px;}
        .tqO:active{transform:scale(.97);}
        .tqO.tq-correct{border-color:#58CC02!important;background:rgba(88,204,2,.15)!important;color:#58CC02!important;}
        .tqO.tq-wrong{border-color:#FF4B4B!important;background:rgba(255,75,75,.14)!important;color:#FF4B4B!important;}
        .tqO.tq-dis{pointer-events:none;}
        .tqLbl{width:30px;height:30px;border-radius:10px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;transition:all .2s;}
        .tqO.tq-correct .tqLbl{background:#58CC02;color:#fff;}
        .tqO.tq-wrong .tqLbl{background:#FF4B4B;color:#fff;}
        .tqFb{margin-top:12px;padding:12px 16px;border-radius:14px;font-weight:800;font-size:13px;line-height:1.5;animation:tqPopIn .3s ease;}
        .tqFb.ok{background:rgba(88,204,2,.12);color:#58CC02;border:1px solid rgba(88,204,2,.3);}
        .tqFb.no{background:rgba(255,75,75,.12);color:#FF4B4B;border:1px solid rgba(255,75,75,.3);}
        .tqNext{width:100%;padding:15px;border-radius:16px;border:none;background:linear-gradient(135deg,#FFD700,#FF8C00);color:#000;font-family:'Fredoka One',sans-serif;font-size:17px;cursor:pointer;margin-top:12px;box-shadow:0 4px 0 #B85E00;transition:transform .15s;}
        .tqNext:active{transform:translateY(2px);box-shadow:0 2px 0 #B85E00;}
        .tqDayTag{display:inline-block;background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.25);border-radius:8px;padding:2px 8px;font-size:10px;font-weight:800;color:rgba(255,215,0,.7);margin-bottom:10px;letter-spacing:.5px;}
      `;
      document.head.appendChild(s);
    }
  }

  // ── Render one question ──
  function renderQ(){
    const q = questions[qi];
    const pct = Math.round((qi / questions.length) * 100);
    document.getElementById('tqProgress').style.width = pct + '%';
    document.getElementById('tqCounter').textContent = `Sawal ${qi+1} / ${questions.length}`;
    document.getElementById('tqXPLive').textContent = `⭐ ${xpEarned} XP`;
    document.getElementById('tqTitle').textContent = isBoss ? '👑 Boss Review Test' : '⚡ Review Test';

    const body = document.getElementById('tqBody');
    body.innerHTML = `
      <div class="tqDayTag">📅 Din ${q._fromDay} se</div>
      <div class="tqQ">${q.emoji ? q.emoji + ' ' : ''}${q.q}</div>
      ${q.hint ? `<div style="font-size:12px;color:rgba(255,255,255,.4);margin-bottom:12px;font-style:italic;">💡 ${q.hint}</div>` : ''}
      <div class="tqOpts">
        ${q.o.map((opt, i) => `
          <button class="tqO" onclick="_tqAnswer(${i},${q.a},this)">
            <span class="tqLbl">${LABELS[i]}</span>${opt}
          </button>`).join('')}
      </div>
      <div id="tqFb"></div>`;

    body.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Answer handler ──
  window._tqAnswer = function(sel, ans, btn){
    totalAnswered++;
    const allOpts = document.querySelectorAll('.tqO');
    allOpts.forEach(x => x.classList.add('tq-dis'));
    allOpts[ans].classList.add('tq-correct');
    allOpts[ans].querySelector('.tqLbl').style.background = '#58CC02';
    allOpts[ans].querySelector('.tqLbl').style.color = '#fff';

    const fb = document.getElementById('tqFb');
    const q = questions[qi];

    if(sel === ans){
      correct++;
      xpEarned += xpPerQ;
      document.getElementById('tqXPLive').textContent = `⭐ ${xpEarned} XP`;
      btn.classList.add('tq-correct');
      btn.querySelector('.tqLbl').style.background = '#58CC02';
      btn.querySelector('.tqLbl').style.color = '#fff';
      fb.innerHTML = `<div class="tqFb ok">✅ Sahi! +${xpPerQ} XP 🎉${q.explain ? '<br><span style="font-weight:400;font-size:12px;opacity:.8">' + q.explain + '</span>' : ''}</div>`;
    } else {
      btn.classList.add('tq-wrong');
      btn.querySelector('.tqLbl').style.background = '#FF4B4B';
      btn.querySelector('.tqLbl').style.color = '#fff';
      const correctTxt = q.o[ans];
      fb.innerHTML = `<div class="tqFb no">❌ Wrong! Sahi jawab: "${correctTxt}"${q.explain ? '<br><span style="font-weight:400;font-size:12px;opacity:.9">' + q.explain + '</span>' : ''}</div>`;
    }

    // Next / Finish button
    const isLast = (qi >= questions.length - 1);
    fb.innerHTML += `<button class="tqNext" onclick="${isLast ? '_tqFinish()' : '_tqNext()'}">
      ${isLast ? '🏆 Nateeja Dekho' : 'Agla Sawal →'}
    </button>`;
  };

  window._tqNext = function(){
    qi++;
    renderQ();
  };

  // ── Finish screen ──
  window._tqFinish = function(){
    const totalXP = xpEarned + bonusXP;
    const accuracy = Math.round((correct / questions.length) * 100);

    // Save XP + mark treasure claimed
    const cs2 = CS();
    cs2.xp = (cs2.xp || 0) + totalXP;
    if(!cs2.treasuresClaimed) cs2.treasuresClaimed = [];
    if(!cs2.treasuresClaimed.includes(day)) cs2.treasuresClaimed.push(day);
    if(typeof save === 'function') save();

    // Update top bar XP display
    const txEl = document.getElementById('topXP');
    if(txEl) txEl.textContent = cs2.xp;

    // Medal based on score
    const medal = accuracy >= 90 ? '🥇' : accuracy >= 70 ? '🥈' : accuracy >= 50 ? '🥉' : '💪';
    const grade = accuracy >= 90 ? 'Zabardast!' : accuracy >= 70 ? 'Bohot Acha!' : accuracy >= 50 ? 'Theek Hai!' : 'Koshish Karo!';

    document.getElementById('tqProgress').style.width = '100%';
    document.getElementById('tqCounter').textContent = 'Mukammal! ✅';
    document.getElementById('tqTitle').textContent = isBoss ? '👑 Boss Test Complete' : '⚡ Review Complete';
    document.getElementById('tqXPLive').textContent = `⭐ ${cs2.xp} XP`;

    document.getElementById('tqBody').innerHTML = `
      <div style="text-align:center;padding:10px 0 20px;">
        <div style="font-size:72px;margin-bottom:6px;animation:tqPopIn .5s ease">${medal}</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:26px;color:#FFD700;margin-bottom:4px;">${grade}</div>
        <div style="color:rgba(255,255,255,.5);font-size:13px;margin-bottom:24px;">${isBoss ? '👑 Boss Review' : '⚡ Review Test'} — Din 1–${day}</div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:24px;">
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 8px;text-align:center;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:24px;color:#58CC02;">${correct}</div>
            <div style="font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;margin-top:2px;">Sahi</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 8px;text-align:center;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:24px;color:#FF4B4B;">${questions.length - correct}</div>
            <div style="font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;margin-top:2px;">Wrong</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 8px;text-align:center;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:24px;color:#FFD700;">${accuracy}%</div>
            <div style="font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;margin-top:2px;">Score</div>
          </div>
        </div>

        <div style="background:linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,140,0,.08));border:2px solid rgba(255,215,0,.4);border-radius:20px;padding:18px;margin-bottom:20px;">
          <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:4px;">Milne wala XP</div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:32px;color:#FFD700;">+${totalXP} ⭐</div>
          <div style="font-size:12px;color:rgba(255,255,255,.4);margin-top:4px;">Quiz XP: ${xpEarned} + Bonus: ${bonusXP}</div>
        </div>

        <button onclick="_closeTreasureQuiz()" style="width:100%;padding:16px;border-radius:18px;border:none;background:linear-gradient(135deg,#FFD700,#FF8C00);color:#000;font-family:'Fredoka One',sans-serif;font-size:18px;cursor:pointer;box-shadow:0 5px 0 #B85E00;margin-bottom:10px;">
          🏠 Dashboard Par Wapas
        </button>
      </div>`;

    launchConfetti();
    showToast(`${medal} ${grade} +${totalXP}⭐ XP mila!`, isBoss ? 'var(--y)' : 'var(--g)');
  };

  // ── Close modal ──
  window._closeTreasureQuiz = function(){
    const modal = document.getElementById('tqModal');
    if(modal){
      const sheet = document.getElementById('tqSheet');
      if(sheet){
        sheet.style.animation = 'none';
        sheet.style.transform = 'translateY(100%)';
        sheet.style.opacity = '0';
        sheet.style.transition = 'transform .3s ease, opacity .3s ease';
      }
      setTimeout(()=> modal.remove(), 320);
    }
    if(typeof renderDash === 'function') try{ renderDash(); }catch(e){}
  };

  // ── Remove old modal if exists, then show fresh ──
  const old = document.getElementById('tqModal');
  if(old) old.remove();

  // Re-inject (since we removed it above) and render first Q
  const modal2 = document.createElement('div');
  modal2.id = 'tqModal';
  modal2.innerHTML = `
    <div id="tqBackdrop" style="position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99990;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:flex-end;justify-content:center;">
      <div id="tqSheet" style="width:100%;max-width:520px;height:92vh;background:var(--bg,#0F0E17);border-radius:28px 28px 0 0;border-top:2px solid rgba(255,215,0,.4);display:flex;flex-direction:column;overflow:hidden;animation:tqSlideUp .38s cubic-bezier(.34,1.56,.64,1);">
        <div id="tqHeader" style="padding:16px 18px 12px;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.06);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <div id="tqTitle" style="font-family:'Fredoka One',sans-serif;font-size:18px;color:#FFD700;"></div>
            <button onclick="_closeTreasureQuiz()" style="background:rgba(255,255,255,.07);border:none;color:rgba(255,255,255,.5);font-size:18px;width:34px;height:34px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
          </div>
          <div style="height:6px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;margin-bottom:6px;">
            <div id="tqProgress" style="height:100%;border-radius:6px;background:linear-gradient(90deg,#FFD700,#FF8C00);transition:width .4s ease;width:0%;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div id="tqCounter" style="font-size:12px;color:rgba(255,255,255,.4);font-weight:700;"></div>
            <div id="tqXPLive" style="font-family:'Fredoka One',sans-serif;font-size:13px;color:#FFD700;">⭐ 0 XP</div>
          </div>
        </div>
        <div id="tqBody" style="flex:1;overflow-y:auto;padding:16px 16px 24px;-webkit-overflow-scrolling:touch;"></div>
      </div>
    </div>`;
  document.body.appendChild(modal2);

  renderQ();
}

// ── END TREASURE QUIZ SYSTEM ──

// Certificate locked toast
function showCertLocked(){
  const cs=CS();const c=AC();
  const rem=c-cs.done.length;
  showToast(`🔒 ${rem} din aur baaki hain certificate ke liye!`,'var(--o)');
}

// Welcome screen Ollie bubble messages cycle
const OLLIE_MSGS = [
  'Hi! Main hoon <span style="color:#2EE59D;">Ollie</span> 👋',
  'Aao koi bhi Zubaan seekhte hain! 🌍',
  'English, Arabic, French, Chinese — sab! 🎓',
  'Daily thoda thoda — baat banti hai! 🔥',
  'Tumhara naam batao pehle 😊',
];
let _ollieIdx = 0;
function startOllieCycle(){
  const el = document.getElementById('wlBubbleText');
  if(!el) return;
  setInterval(()=>{
    el.style.opacity='0';
    el.style.transform='translateY(6px)';
    setTimeout(()=>{
      _ollieIdx = (_ollieIdx+1) % OLLIE_MSGS.length;
      el.innerHTML = OLLIE_MSGS[_ollieIdx];
      el.style.transition='opacity .3s,transform .3s';
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    },300);
  },2800);
  el.style.transition='opacity .3s,transform .3s';
}

// Toast notification
function showToast(msg,color='var(--g)'){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:96px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(14,28,40,.97);border:2px solid ${color};color:${color};padding:13px 22px;border-radius:20px;font-family:'Fredoka One',sans-serif;font-size:15px;z-index:999;white-space:nowrap;box-shadow:0 12px 40px rgba(0,0,0,.5);max-width:90vw;text-align:center;backdrop-filter:blur(12px);opacity:0;transition:opacity .22s ease,transform .28s cubic-bezier(.34,1.56,.64,1);`;
  t.textContent=msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    t.style.opacity='1';
    t.style.transform='translateX(-50%) translateY(0) scale(1.04)';
    setTimeout(()=>{t.style.transform='translateX(-50%) translateY(0) scale(1)';},250);
  }));
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(12px) scale(.93)';},2200);
  setTimeout(()=>t.remove(),2550);
}

// XP floating popup
function showXpPopup(amount, el){
  try{
    const r=el?el.getBoundingClientRect():{top:window.innerHeight/2,left:window.innerWidth/2};
    const p=document.createElement('div');
    p.className='xp-popup';
    p.textContent='+'+amount+'⭐';
    p.style.left=r.left+'px';
    p.style.top=r.top+'px';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1300);
  }catch(e){}
}

// Confetti burst
function launchConfetti(){
  const box=document.getElementById('confettiBox');
  if(!box)return;
  const colors=['#58CC02','#FFD700','#1CB0F6','#CE82FF','#FF9600','#FF4B4B','#ffffff','#2ECC71','#E74C3C'];
  const shapes=['2px','50%','4px'];
  for(let pass=0;pass<2;pass++){
    setTimeout(()=>{
      for(let i=0;i<40;i++){
        const c=document.createElement('div');
        c.className='conf-piece';
        const sz=5+Math.random()*12;
        const col=colors[Math.floor(Math.random()*colors.length)];
        const br=shapes[Math.floor(Math.random()*shapes.length)];
        c.style.cssText=`left:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:${col};animation-delay:${Math.random()*.8}s;animation-duration:${1.3+Math.random()*1.1}s;transform:rotate(${Math.random()*360}deg);border-radius:${br};box-shadow:0 0 6px ${col}88;`;
        box.appendChild(c);
      }
      setTimeout(()=>{if(box)box.innerHTML='';},3000);
    },pass*350);
  }
}

// Animate stat boxes on dashboard render
function animateStats(){
  const cs=CS();
  const streak=cs.streak;
  const xp=cs.xp;
  const boxes=document.querySelectorAll('.sb2');
  const streakBox=boxes[0];
  const xpBox=boxes[1];
  if(streak>0&&streakBox) streakBox.classList.add('streak-active');
  if(xp>0&&xpBox) xpBox.classList.add('xp-earned');
  // Count-up on stat values
  boxes.forEach((box,i)=>{
    const valEl=box.querySelector('.sv');
    if(!valEl) return;
    const finalVal=valEl.textContent;
    const num=parseInt(finalVal);
    if(!isNaN(num)&&num>0){
      valEl.textContent='0';
      const start=performance.now();
      const dur=600+i*120;
      function step(now){
        const p=Math.min((now-start)/dur,1);
        const ease=1-Math.pow(1-p,3);
        valEl.textContent=Math.floor(ease*num);
        if(p<1) requestAnimationFrame(step);
        else valEl.textContent=finalVal;
      }
      setTimeout(()=>requestAnimationFrame(step),i*100);
    }
    // Entrance animation stagger
    box.style.opacity='0';
    box.style.transform='translateY(16px) scale(.94)';
    setTimeout(()=>{
      box.style.transition='opacity .35s ease,transform .4s cubic-bezier(.34,1.56,.64,1)';
      box.style.opacity='1';
      box.style.transform='translateY(0) scale(1)';
      setTimeout(()=>{box.style.transition='';},450);
    },i*80+60);
  });
}

// Review a completed day
function reviewDay(dayNum){
  const lang=S.activeLang||'en';
  const langDays=ALL_DAYS[lang]||ALL_DAYS['en'];
  const dayData=langDays[dayNum];
  if(!dayData) return;
  const bd=document.getElementById('lBd');
  showScreen('lesson');
  document.getElementById('lPf').style.width='100%';
  document.getElementById('lHt').textContent='👁️ Review';
  bd.innerHTML=`
    <div class="a" style="padding:20px 0 32px;text-align:center;">
      <div style="font-size:56px;margin-bottom:8px">${dayData.emoji}</div>
      <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:var(--g);margin-bottom:4px">Day ${dayNum} Review</div>
      <div style="color:var(--mut);font-size:13px;margin-bottom:24px">${dayData.themeEn} — ${dayData.theme}</div>
      <div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:14px;border:1px solid var(--bdr);text-align:left;">
        <div style="font-size:11px;color:var(--mut);font-weight:700;text-transform:uppercase;margin-bottom:10px;">📖 Vocabulary (${dayData.vocab.length} words)</div>
        ${dayData.vocab.map(v=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);"><span style="font-weight:700">${v.w||''}</span><span style="color:var(--y);font-size:13px">${v.u||''}</span></div>`).join('')}
      </div>
      <div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:20px;border:1px solid var(--bdr);text-align:left;">
        <div style="font-size:11px;color:var(--mut);font-weight:700;text-transform:uppercase;margin-bottom:10px;">🗣️ Sentences (${dayData.sentences.length})</div>
        ${dayData.sentences.map(s=>`<div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);"><div style="font-size:13px;font-weight:700;color:var(--b)">${s.en||''}</div><div style="font-size:12px;color:var(--y)">${s.ur||''}</div></div>`).join('')}
      </div>
      <button class="bg" onclick="exitLesson()">← Dashboard Pe Jao</button>
    </div>`;
}

function renderProf(){
  const cs=CS();const c=AC();
  const lang=S.activeLang||'en';
  const li=LANG_INFO[lang]||LANG_INFO['en'];

  document.getElementById('pN').textContent=S.name;
  const pac2=document.getElementById('profAvatarCircle');
  if(pac2) pac2.textContent=S.avatar||'😊';
  document.getElementById('pC2').textContent=c?(li.flag+' '+li.name+' — '+c+' Day Course'):'Koi course select nahi';
  document.getElementById('psD').textContent=cs.done.length;
  document.getElementById('psS').textContent=cs.streak;
  document.getElementById('psX').textContent=cs.xp;
  document.getElementById('psW').textContent=cs.wordsLearned;
  document.getElementById('cBtn').classList.toggle('hid',!(cs.done.length>=c&&c>0));

  // Guest banner
  const gb=document.getElementById('guestBanner');
  if(gb) gb.style.display=(IS_GUEST||!getLoggedInUser())?'flex':'none';

  const icons={7:'♟️',30:'⚡',60:'🎯',90:'🐢'};
  const times={7:'45 minutes/din — Full Chess',30:'2 hours/day',60:'1 ghanta/din',90:'30 minutes/din'};
  const colors={7:'#2ECC71',30:'var(--g)',60:'var(--b)',90:'var(--p)'};

  // Sirf active course card
  const pac=document.getElementById('profActiveCourse');
  if(pac&&c){
    const pct=Math.round((cs.done.length/c)*100);
    pac.innerHTML=`
      <div style="background:var(--card);border-radius:16px;padding:18px;border:2px solid ${colors[c]};">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div style="font-size:36px">${icons[c]}</div>
          <div style="flex:1">
            <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:${colors[c]}">${li.flag} ${li.name} — ${c} Day</div>
            <div style="font-size:12px;color:var(--mut)">${times[c]}</div>
          </div>
          <div style="background:${colors[c]};color:#000;font-size:10px;font-weight:800;padding:4px 10px;border-radius:20px;">ACTIVE ✅</div>
        </div>
        <div style="height:10px;background:rgba(255,255,255,.08);border-radius:10px;overflow:hidden;margin-bottom:8px;">
          <div style="height:100%;width:${pct}%;background:${colors[c]};border-radius:10px;transition:width .5s;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;">
          <span style="color:var(--mut)">Day ${cs.day}/${c} • ${cs.streak}🔥 streak</span>
          <span style="color:${colors[c]};font-weight:700">${pct}% complete</span>
        </div>
      </div>`;
  }
  // ✅ Achievements render karo
  checkNewAchievements();
  renderAchievements();
  saveAchievementsToFirebase();
  // ✅ Mistakes review render karo
  renderMistakesSection();
}

// ══════════════════════════════════════════════════════
// ACHIEVEMENT SYSTEM — Har language + chess ke badges
// ══════════════════════════════════════════════════════
const ACHIEVEMENTS = [
  // ── Pre-Class Badges (language alphabet) ──
  { id:'pc_fr',  icon:'🇫🇷', name:'French Alphabet Master',   desc:'French pre-class complete kiya',       check: ()=> isPreClassDone('fr') },
  { id:'pc_en',  icon:'🇬🇧', name:'English Alphabet Master',  desc:'English pre-class complete kiya',      check: ()=> isPreClassDone('en') },
  { id:'pc_zh',  icon:'🇨🇳', name:'Chinese Script Master',    desc:'Chinese pre-class complete kiya',      check: ()=> isPreClassDone('zh') },
  { id:'pc_ar',  icon:'🇸🇦', name:'Arabic Alphabet Master',   desc:'Arabic pre-class complete kiya',       check: ()=> isPreClassDone('ar') },
  { id:'pc_ko',  icon:'🇰🇷', name:'Hangul Master',            desc:'Korean pre-class complete kiya',       check: ()=> isPreClassDone('ko') },
  { id:'pc_ja',  icon:'🇯🇵', name:'Hiragana Master',          desc:'Japanese pre-class complete kiya',     check: ()=> isPreClassDone('ja') },
  { id:'pc_tr',  icon:'🇹🇷', name:'Turkish Alphabet Master',  desc:'Turkish pre-class complete kiya',      check: ()=> isPreClassDone('tr') },
  { id:'pc_ie',  icon:'🇮🇪', name:'Irish Alphabet Master',    desc:'Irish pre-class complete kiya',        check: ()=> isPreClassDone('ie') },
  { id:'pc_es',  icon:'🇪🇸', name:'Spanish Alphabet Master',  desc:'Spanish pre-class complete kiya',      check: ()=> isPreClassDone('es') },
  { id:'pc_de',  icon:'🇩🇪', name:'German Alphabet Master',   desc:'German pre-class complete kiya',       check: ()=> isPreClassDone('de') },
  // ── Chess Achievements ──
  { id:'chess_start',  icon:'♟️',  name:'Chess Explorer',       desc:'Chess course start kiya',              check: ()=>{ try{ const ld=S.langs&&S.langs['chess']; return !!(ld&&ld.activeCourse&&ld.courses&&ld.courses[7]&&ld.courses[7].started); }catch(e){return false;} } },
  { id:'chess_3',      icon:'🐴',  name:'Knight Rider',         desc:'Chess ke 3 din complete kiye',         check: ()=>{ try{ const cs=S.langs&&S.langs['chess']&&S.langs['chess'].courses&&S.langs['chess'].courses[7]; return !!(cs&&cs.done&&cs.done.length>=3); }catch(e){return false;} } },
  { id:'chess_7',      icon:'👑',  name:'Chess Master ♟️',      desc:'7-din chess course mukammal!',         check: ()=>{ try{ const cs=S.langs&&S.langs['chess']&&S.langs['chess'].courses&&S.langs['chess'].courses[7]; return !!(cs&&cs.done&&cs.done.length>=7); }catch(e){return false;} } },
  { id:'chess_streak', icon:'⚡',  name:'Chess Blitz Streak',   desc:'Chess mein 5 din lgataar',             check: ()=>{ try{ const cs=S.langs&&S.langs['chess']&&S.langs['chess'].courses&&S.langs['chess'].courses[7]; return !!(cs&&cs.streak>=5); }catch(e){return false;} } },
  // ── Language Course Badges ──
  { id:'lang_any_start', icon:'🌱', name:'Pehla Qadam',         desc:'Koi bhi course start kiya',            check: ()=>{ try{ return Object.keys(S.langs||{}).some(l=>{ const ld=S.langs[l]; return ld&&ld.activeCourse&&ld.courses&&ld.courses[ld.activeCourse]&&ld.courses[ld.activeCourse].started; }); }catch(e){return false;} } },
  { id:'lang_7days',     icon:'🔥', name:'7 Din Warrior',       desc:'Kisi bhi course mein 7 din complete',  check: ()=>{ try{ return Object.keys(S.langs||{}).some(l=>{ const ld=S.langs[l]; if(!ld||!ld.activeCourse) return false; const cs=ld.courses&&ld.courses[ld.activeCourse]; return cs&&cs.done&&cs.done.length>=7; }); }catch(e){return false;} } },
  { id:'lang_30_done',   icon:'🎯', name:'30 Din Champion',     desc:'30-din course complete kiya',          check: ()=>{ try{ return Object.keys(S.langs||{}).some(l=>{ const cs=S.langs[l]&&S.langs[l].courses&&S.langs[l].courses[30]; return cs&&cs.done&&cs.done.length>=30; }); }catch(e){return false;} } },
  { id:'lang_60_done',   icon:'🎓', name:'60 Din Scholar',      desc:'60-din course complete kiya',          check: ()=>{ try{ return Object.keys(S.langs||{}).some(l=>{ const cs=S.langs[l]&&S.langs[l].courses&&S.langs[l].courses[60]; return cs&&cs.done&&cs.done.length>=60; }); }catch(e){return false;} } },
  { id:'lang_90_done',   icon:'🏆', name:'90 Din Legend',       desc:'90-din course complete kiya',          check: ()=>{ try{ return Object.keys(S.langs||{}).some(l=>{ const cs=S.langs[l]&&S.langs[l].courses&&S.langs[l].courses[90]; return cs&&cs.done&&cs.done.length>=90; }); }catch(e){return false;} } },
  { id:'multilang',      icon:'🌍', name:'Multilingual',        desc:'2 ya zyada languages mein courses',    check: ()=>{ try{ const langs=Object.keys(S.langs||{}).filter(l=>l!=='chess'&&S.langs[l]&&S.langs[l].activeCourse&&S.langs[l].courses&&S.langs[l].courses[S.langs[l].activeCourse]&&S.langs[l].courses[S.langs[l].activeCourse].started); return langs.length>=2; }catch(e){return false;} } },
  // ── Daily Goal Badges ──
  { id:'goal_first',  icon:'🎯', name:'Pehla Goal!',         desc:'Pehli baar daily goal complete kiya',  check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey(GOAL_STREAK_KEY))||'0')>=1 || parseInt(localStorage.getItem(_gKey('su_goal_total_completions'))||'0')>=1; }catch(e){return false;} } },
  { id:'goal_3',      icon:'🏅', name:'Goal Getter',          desc:'3 din goal complete kiya',             check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey('su_goal_total_completions'))||'0')>=3; }catch(e){return false;} } },
  { id:'goal_7',      icon:'🥇', name:'Goal Champion',        desc:'7 din goal complete kiya',             check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey('su_goal_total_completions'))||'0')>=7; }catch(e){return false;} } },
  { id:'goal_streak3',icon:'⚡', name:'Goal Streak — 3 din',  desc:'3 din lgataar goal complete kiya',     check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey(GOAL_STREAK_KEY))||'0')>=3; }catch(e){return false;} } },
  { id:'goal_streak7',icon:'🔥', name:'Goal Streak — 7 din',  desc:'7 din lgataar goal complete kiya',     check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey(GOAL_STREAK_KEY))||'0')>=7; }catch(e){return false;} } },
  { id:'goal_30min',  icon:'⏱️', name:'30-Min Master',        desc:'30 min/din goal 5 baar complete',      check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey('su_goal_30min_count'))||'0')>=5; }catch(e){return false;} } },
  { id:'goal_60min',  icon:'🚀', name:'Power Learner',        desc:'1 ghanta goal 3 baar complete kiya',   check: ()=>{ try{ return parseInt(localStorage.getItem(_gKey('su_goal_60min_count'))||'0')>=3; }catch(e){return false;} } },
  // ── Streak Badges ──
  { id:'streak_3',   icon:'🔥', name:'3-Din Streak',       desc:'3 din lgataar kiya',                   check: ()=>{ try{ return (typeof CS==='function'&&CS().streak>=3); }catch(e){return false;} } },
  { id:'streak_7',   icon:'💥', name:'Hafta Hazir!',       desc:'7 din ki streak banai',                check: ()=>{ try{ return (typeof CS==='function'&&CS().streak>=7); }catch(e){return false;} } },
  { id:'streak_30',  icon:'🌟', name:'Maheena Champion',   desc:'30 din ki zabardast streak!',          check: ()=>{ try{ return (typeof CS==='function'&&CS().streak>=30); }catch(e){return false;} } },
  // ── XP Badges ──
  { id:'xp_100',   icon:'⭐', name:'100 XP Club',        desc:'100 XP hasil kiya',                    check: ()=>{ try{ return (typeof CS==='function'&&CS().xp>=100); }catch(e){return false;} } },
  { id:'xp_500',   icon:'💫', name:'500 XP Star',        desc:'500 XP ka milestone',                  check: ()=>{ try{ return (typeof CS==='function'&&CS().xp>=500); }catch(e){return false;} } },
  { id:'xp_1000',  icon:'🚀', name:'1000 XP Rocket',     desc:'1000 XP — asli khiladi!',              check: ()=>{ try{ return (typeof CS==='function'&&CS().xp>=1000); }catch(e){return false;} } },
];

// ── Track jo badges newly unlocked hain (session mein) ──
var _newlyUnlockedAch = new Set();

function getUnlockedAchievements(){
  return ACHIEVEMENTS.filter(a=>{ try{ return a.check(); }catch(e){ return false; } });
}

function getLockedAchievements(){
  return ACHIEVEMENTS.filter(a=>{ try{ return !a.check(); }catch(e){ return true; } });
}

// ── Check for new unlocks (call karo day complete hone ke baad) ──
function checkNewAchievements(){
  var prevKey = 'su_ach_seen';
  var seen = {};
  try{ seen = JSON.parse(localStorage.getItem(prevKey)||'{}'); }catch(e){}
  var unlocked = getUnlockedAchievements();
  var newOnes = unlocked.filter(a=>!seen[a.id]);
  newOnes.forEach(a=>{
    seen[a.id] = Date.now();
    _newlyUnlockedAch.add(a.id);
  });
  try{ localStorage.setItem(prevKey, JSON.stringify(seen)); }catch(e){}
  return newOnes;
}

function saveAchievementsToFirebase(){
  try{
    if(window.FB_DB && window.FB_AUTH && window.FB_AUTH.currentUser && !IS_GUEST){
      var uid = window.FB_AUTH.currentUser.uid;
      var unlocked = getUnlockedAchievements().map(a=>a.id);
      var data = {};
      unlocked.forEach(id=>{ data[id]=true; });
      window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/achievements'), data).catch(function(){});
    }
  }catch(e){}
}

// ══════════════════════════════════════════════════════════
// ❌ MISTAKES TRACKING SYSTEM
// Path: users/{uid}/mistakes/{lang}/{wordKey}
// ══════════════════════════════════════════════════════════

// ── Word ko Firebase-safe key mein convert karo ──
function _mkKey(word){
  return (word||'').toString()
    .replace(/[.#$\[\]\/]/g,'_')
    .replace(/\s+/g,'_')
    .substring(0, 80);
}

// ── Mistake Firebase mein save karo ──
async function saveMistakeToFirebase(stepData, correctAnswer){
  try{
    if(!window.FB_DB || !window.FB_AUTH || !window.FB_AUTH.currentUser || IS_GUEST) return;
    const uid = window.FB_AUTH.currentUser.uid;
    const lang = (typeof S !== 'undefined' ? S.activeLang : null) || 'en';

    // Question text nikalo
    const question = (stepData && stepData.q) ? stepData.q : (stepData || '');
    const qKey = _mkKey(question.toString().substring(0,60));
    if(!qKey) return;

    const path = 'users/' + uid + '/mistakes/' + lang + '/' + qKey;
    const ref = window.FB_REF(window.FB_DB, path);

    // Pehle existing data dekho (count increment ke liye)
    const snap = await window.FB_GET(ref);
    const existing = snap.exists() ? snap.val() : null;
    const newCount = ((existing && existing.count) || 0) + 1;

    await window.FB_SET(ref, {
      question: question.toString().substring(0, 150),
      correctAnswer: (correctAnswer || '').toString().substring(0, 100),
      lang: lang,
      count: newCount,
      lastWrong: Date.now(),
      options: (stepData && stepData.o) ? stepData.o.slice(0,4) : [],
      answerIdx: (stepData && typeof stepData.a !== 'undefined') ? stepData.a : -1,
      day: (typeof CS === 'function') ? (CS().day || 1) : 1
    });
  } catch(e){ console.log('Mistake save error:', e.message); }
}

// ── Mistakes Firebase se load karo ──
async function loadMistakesFromFirebase(lang){
  try{
    if(!window.FB_DB || !window.FB_AUTH || !window.FB_AUTH.currentUser) return [];
    const uid = window.FB_AUTH.currentUser.uid;
    const path = 'users/' + uid + '/mistakes/' + (lang || 'en');
    const snap = await window.FB_GET(window.FB_REF(window.FB_DB, path));
    if(!snap.exists()) return [];
    const data = snap.val();
    return Object.entries(data)
      .map(([key, val]) => ({ key, ...val }))
      .sort((a, b) => (b.count||0) - (a.count||0)); // Zyada galat → pehle
  } catch(e){ return []; }
}

// ── Ek mistake Firebase se delete karo (mastered) ──
async function deleteMistakeFromFirebase(lang, key){
  try{
    if(!window.FB_DB || !window.FB_AUTH || !window.FB_AUTH.currentUser) return;
    const uid = window.FB_AUTH.currentUser.uid;
    const path = 'users/' + uid + '/mistakes/' + lang + '/' + key;
    await window.FB_SET(window.FB_REF(window.FB_DB, path), null);
  } catch(e){}
}

// ── Profile screen mein mistakes section render karo ──
var _mistakesCache = []; // current loaded mistakes
var _currentCard = 0;    // active flashcard index
var _cardFlipped = false;

async function renderMistakesSection(){
  const el = document.getElementById('mistakesReviewSection');
  if(!el) return;

  if(!window.FB_AUTH || !window.FB_AUTH.currentUser || IS_GUEST){
    el.innerHTML = `<div style="background:var(--card);border-radius:16px;padding:16px;border:1px solid var(--bdr);text-align:center;color:var(--mut);font-size:13px;">🔒 Login to see wrong answer records</div>`;
    return;
  }

  el.innerHTML = `<div style="background:var(--card);border-radius:16px;padding:16px;border:1px solid var(--bdr);color:var(--mut);font-size:13px;text-align:center;"><span style="animation:spin 1s linear infinite;display:inline-block;">⏳</span> Load ho raha hai...</div>`;

  const lang = (typeof S !== 'undefined' ? S.activeLang : null) || 'en';
  const li = (typeof LANG_INFO !== 'undefined') ? (LANG_INFO[lang]||{flag:'🌐',name:'Language'}) : {flag:'🌐',name:'Language'};
  const mistakes = await loadMistakesFromFirebase(lang);
  _mistakesCache = mistakes;
  _currentCard = 0;
  _cardFlipped = false;

  if(mistakes.length === 0){
    el.innerHTML = `
      <div style="background:linear-gradient(135deg,rgba(46,229,157,.08),rgba(46,229,157,.03));border:2px solid rgba(46,229,157,.25);border-radius:18px;padding:20px;text-align:center;">
        <div style="font-size:40px;margin-bottom:8px;">🎉</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:var(--g);margin-bottom:4px;">No Wrong Answers!</div>
        <div style="font-size:12px;color:var(--mut);">${li.flag} ${li.name} mein abhi tak sab sahi raha — Shabaash! 💪</div>
      </div>`;
    return;
  }

  el.innerHTML = buildMistakesSectionHTML(mistakes, lang, li);
}

function buildMistakesSectionHTML(mistakes, lang, li){
  const total = mistakes.length;
  const topMistakes = mistakes.slice(0, 3); // Top 3 most wrong

  return `
    <!-- Header stats -->
    <div style="display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(255,107,107,.1),rgba(255,107,107,.05));border:2px solid rgba(255,107,107,.3);border-radius:16px;padding:14px 16px;margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:44px;height:44px;border-radius:14px;background:rgba(255,107,107,.2);border:2px solid rgba(255,107,107,.4);display:flex;align-items:center;justify-content:center;font-size:22px;">❌</div>
        <div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:#FF6B6B;">${total} Wrong Questions</div>
          <div style="font-size:11px;color:var(--mut);">${li.flag} ${li.name} • Review karo!</div>
        </div>
      </div>
      <button onclick="openFlashcardMode('${lang}')" style="background:linear-gradient(135deg,#FF6B6B,#FF4757);border:none;border-radius:12px;padding:9px 14px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:12px;cursor:pointer;box-shadow:0 4px 12px rgba(255,71,87,.3);">
        🃏 Flashcards
      </button>
    </div>

    <!-- Top 3 worst mistakes preview -->
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
      ${topMistakes.map((m, i) => `
        <div style="background:var(--card);border:1px solid rgba(255,107,107,.2);border-radius:13px;padding:12px 14px;display:flex;align-items:center;gap:10px;">
          <div style="width:32px;height:32px;border-radius:50%;background:${i===0?'rgba(255,71,87,.25)':i===1?'rgba(255,107,107,.18)':'rgba(255,150,150,.12)'};display:flex;align-items:center;justify-content:center;font-family:'Fredoka One',sans-serif;font-size:14px;color:#FF6B6B;flex-shrink:0;">${m.count}x</div>
          <div style="flex:1;overflow:hidden;">
            <div style="font-size:12px;color:var(--txt);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.question||'—'}</div>
            <div style="font-size:11px;color:var(--g);margin-top:2px;">✅ Sahi: ${m.correctAnswer||'—'}</div>
          </div>
        </div>`).join('')}
    </div>

    ${total > 3 ? `<div style="text-align:center;font-size:12px;color:var(--mut);margin-bottom:10px;">+ ${total-3} aur galat sawaal</div>` : ''}

    <button onclick="openFlashcardMode('${lang}')" style="width:100%;padding:13px;background:linear-gradient(135deg,rgba(255,107,107,.15),rgba(255,71,87,.1));border:2px solid rgba(255,107,107,.35);border-radius:14px;color:#FF6B6B;font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">
      🔄 Sab Review Karo — ${total} Flashcards
    </button>`;
}

// ══════════════════════════════════════════════════════════
// 🃏 FLASHCARD MODE — Full Screen Review
// ══════════════════════════════════════════════════════════

function openFlashcardMode(lang){
  if(!_mistakesCache.length){ renderMistakesSection(); return; }
  _currentCard = 0;
  _cardFlipped = false;

  const li = (typeof LANG_INFO !== 'undefined') ? (LANG_INFO[lang]||{flag:'🌐',name:'Language'}) : {flag:'🌐',name:'Language'};

  const overlay = document.createElement('div');
  overlay.id = 'flashcardOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99990;background:linear-gradient(160deg,#0A0918 0%,#12091F 50%,#0F0E17 100%);overflow-y:auto;display:flex;flex-direction:column;';

  overlay.innerHTML = `
    <!-- Top bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:rgba(15,14,23,.95);border-bottom:1px solid rgba(255,107,107,.2);position:sticky;top:0;z-index:10;backdrop-filter:blur(12px);">
      <button onclick="closeFlashcardMode()" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:8px 14px;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">← Back</button>
      <div style="text-align:center;">
        <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:#FF6B6B;">❌ Review Mode</div>
        <div style="font-size:11px;color:var(--mut);" id="fcProgress">${li.flag} ${li.name} • 1/${_mistakesCache.length}</div>
      </div>
      <div style="font-size:11px;color:var(--mut);text-align:right;" id="fcRemaining">${_mistakesCache.length} baaki</div>
    </div>

    <!-- Progress bar -->
    <div style="height:4px;background:rgba(255,255,255,.06);">
      <div id="fcProgressBar" style="height:100%;width:${Math.round(1/_mistakesCache.length*100)}%;background:linear-gradient(90deg,#FF6B6B,#FF4757);transition:width .4s ease;"></div>
    </div>

    <!-- Card area -->
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 20px;" id="fcCardArea">
    </div>

    <!-- Bottom hint -->
    <div style="padding:12px 20px 32px;text-align:center;">
      <div style="font-size:11px;color:rgba(255,255,255,.25);">Tap the card → to see the answer</div>
    </div>`;

  document.body.appendChild(overlay);
  renderFlashcard();
}

function renderFlashcard(){
  const area = document.getElementById('fcCardArea');
  if(!area) return;

  const total = _mistakesCache.length;
  if(_currentCard >= total){
    // Sab complete!
    area.innerHTML = `
      <div style="text-align:center;animation:fadeIn .5s ease;">
        <div style="font-size:80px;margin-bottom:16px;">🎊</div>
        <div style="font-family:'Fredoka One',sans-serif;font-size:26px;color:var(--g);margin-bottom:8px;">Review Mukammal!</div>
        <div style="font-size:14px;color:var(--mut);margin-bottom:28px;">You reviewed all wrong questions!</div>
        <button onclick="closeFlashcardMode();renderMistakesSection();" style="background:linear-gradient(135deg,#2EE59D,#1BC47D);border:none;border-radius:16px;padding:14px 32px;color:#0A0918;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 4px 20px rgba(46,229,157,.4);">✅ Thanks! Go Back</button>
      </div>`;
    return;
  }

  const m = _mistakesCache[_currentCard];
  _cardFlipped = false;

  // Progress update
  const prog = document.getElementById('fcProgress');
  const bar = document.getElementById('fcProgressBar');
  const rem = document.getElementById('fcRemaining');
  if(prog) prog.textContent = `${(_currentCard+1)}/${total}`;
  if(bar) bar.style.width = Math.round((_currentCard+1)/total*100)+'%';
  if(rem) rem.textContent = (total - _currentCard - 1) + ' baaki';

  area.innerHTML = `
    <!-- Flashcard -->
    <div id="theFlashcard" onclick="flipFlashcard()" style="width:100%;max-width:380px;cursor:pointer;perspective:1000px;margin-bottom:20px;">
      <div id="cardInner" style="position:relative;width:100%;transition:transform .5s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d;min-height:220px;">

        <!-- FRONT — Question -->
        <div id="cardFront" style="position:relative;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:linear-gradient(135deg,#1a0810,#2a1020);border:2px solid rgba(255,107,107,.45);border-radius:24px;padding:28px 22px;text-align:center;box-shadow:0 8px 32px rgba(255,71,87,.2);min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <div style="position:absolute;top:12px;left:14px;background:rgba(255,107,107,.2);border:1px solid rgba(255,107,107,.4);border-radius:20px;padding:3px 10px;font-size:10px;font-weight:800;color:#FF6B6B;text-transform:uppercase;letter-spacing:.6px;">❌ ${m.count}x Wrong</div>
          <div style="position:absolute;top:12px;right:14px;font-size:11px;color:rgba(255,255,255,.3);">Day ${m.day||'?'}</div>
          <div style="font-size:32px;margin-bottom:12px;">🤔</div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:#fff;line-height:1.4;margin-bottom:16px;">${m.question||'Sawaal'}</div>
          <div style="font-size:12px;color:rgba(255,255,255,.35);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:6px 14px;">👆 Tap to see the answer</div>
        </div>

        <!-- BACK — Answer + Options -->
        <div id="cardBack" style="position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(135deg,#0a1a10,#0f2a18);border:2px solid rgba(46,229,157,.45);border-radius:24px;padding:22px;text-align:center;box-shadow:0 8px 32px rgba(46,229,157,.2);min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;">
          <div style="font-size:28px;">✅</div>
          <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.5px;">Sahi Jawab</div>
          <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:#2EE59D;margin-bottom:4px;">${m.correctAnswer||'—'}</div>
          ${m.options && m.options.length ? `
          <div style="width:100%;margin-top:6px;">
            <div style="font-size:10px;color:rgba(255,255,255,.3);margin-bottom:8px;">Tamam options:</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              ${m.options.map((opt,i) => `
                <div style="background:${i===m.answerIdx?'rgba(46,229,157,.15)':'rgba(255,255,255,.04)'};border:1px solid ${i===m.answerIdx?'rgba(46,229,157,.4)':'rgba(255,255,255,.08)'};border-radius:10px;padding:8px 12px;font-size:12px;color:${i===m.answerIdx?'#2EE59D':'rgba(255,255,255,.5)'};text-align:left;display:flex;align-items:center;gap:6px;">
                  <span>${i===m.answerIdx?'✅':'○'}</span>${opt}
                </div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div style="display:flex;gap:10px;width:100%;max-width:380px;">
      <button onclick="markMistakeMastered('${m.key}')" style="flex:1;padding:13px;background:linear-gradient(135deg,rgba(46,229,157,.15),rgba(46,229,157,.08));border:2px solid rgba(46,229,157,.35);border-radius:14px;color:#2EE59D;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">
        ✅ Yaad Ho Gaya!
      </button>
      <button onclick="nextFlashcard()" style="flex:1;padding:13px;background:linear-gradient(135deg,rgba(255,107,107,.15),rgba(255,71,87,.08));border:2px solid rgba(255,107,107,.35);border-radius:14px;color:#FF6B6B;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">
        ⏭️ Agla
      </button>
    </div>`;
}

function flipFlashcard(){
  _cardFlipped = !_cardFlipped;
  const inner = document.getElementById('cardInner');
  if(inner) inner.style.transform = _cardFlipped ? 'rotateY(180deg)' : 'rotateY(0)';
}

function nextFlashcard(){
  _currentCard++;
  _cardFlipped = false;
  renderFlashcard();
}

async function markMistakeMastered(key){
  // Firebase se delete karo
  const lang = (typeof S !== 'undefined' ? S.activeLang : null) || 'en';
  await deleteMistakeFromFirebase(lang, key);
  // Local cache se bhi remove karo
  _mistakesCache = _mistakesCache.filter(m => m.key !== key);
  // Toast
  if(typeof showToast === 'function') showToast('🎉 Shabaash! Word master ho gaya!', '#2EE59D');
  // Next card
  if(_currentCard >= _mistakesCache.length && _currentCard > 0) _currentCard--;
  renderFlashcard();
}

function closeFlashcardMode(){
  const ov = document.getElementById('flashcardOverlay');
  if(ov) ov.remove();
}

function renderAchievements(){
  var el = document.getElementById('profAchievements');
  if(!el) return;

  var seen = {};
  try{ seen = JSON.parse(localStorage.getItem('su_ach_seen')||'{}'); }catch(e){}

  var unlocked = getUnlockedAchievements();
  var locked = getLockedAchievements();
  var total = ACHIEVEMENTS.length;
  var unlockedCount = unlocked.length;

  var summaryHtml = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">'
    + '<div style="font-size:12px;color:rgba(255,255,255,.5);">'
    + '<span style="color:#FFD700;font-weight:800;">' + unlockedCount + '</span> / ' + total + ' unlock hue'
    + '</div>'
    + '<div style="background:rgba(255,215,0,.12);border:1px solid rgba(255,215,0,.3);border-radius:20px;padding:3px 10px;font-size:11px;color:#FFD700;font-weight:800;">'
    + Math.round((unlockedCount/total)*100) + '% Complete'
    + '</div>'
    + '</div>';

  // Progress bar
  var pct = Math.round((unlockedCount/total)*100);
  summaryHtml += '<div style="height:6px;background:rgba(255,255,255,.07);border-radius:6px;overflow:hidden;margin-bottom:16px;">'
    + '<div style="height:100%;width:'+pct+'%;background:linear-gradient(90deg,#FFD700,#FF9500);border-radius:6px;transition:width .6s;"></div>'
    + '</div>';

  function badgeHtml(a, isUnlocked){
    var isNew = _newlyUnlockedAch.has(a.id);
    return '<div class="ach-badge '+(isUnlocked?'unlocked':'locked')+'">'
      + (isNew ? '<div class="ach-new">NEW!</div>' : '')
      + (!isUnlocked ? '<div class="ach-lock-ico">🔒</div>' : '')
      + '<div class="ach-ico">' + a.icon + '</div>'
      + '<div class="ach-name">' + a.name + '</div>'
      + '<div class="ach-desc">' + a.desc + '</div>'
      + '</div>';
  }

  var unlockedHtml = unlocked.map(a=>badgeHtml(a,true)).join('');
  var lockedHtml = locked.map(a=>badgeHtml(a,false)).join('');

  el.innerHTML = summaryHtml
    + (unlocked.length>0 ? '<div style="font-size:10px;color:rgba(255,215,0,.7);font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">✅ Unlock Hue</div><div class="ach-grid">' + unlockedHtml + '</div>' : '')
    + (locked.length>0 ? '<div style="font-size:10px;color:rgba(255,255,255,.25);font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin:14px 0 8px;">🔒 Coming Soon</div><div class="ach-grid">' + lockedHtml + '</div>' : '');
}

// ── Name edit functions
function editName(){
  document.getElementById('nameEditBox').style.display='block';
  document.getElementById('nameEditIn').value=S.name;
  document.getElementById('nameEditIn').focus();
}
function saveName(){
  const v=document.getElementById('nameEditIn').value.trim();
  if(!v) return;
  S.name=v;save();
  document.getElementById('pN').textContent=v;
  document.getElementById('nameEditBox').style.display='none';
  document.getElementById('dU').textContent=v+'!';
}
function cancelEdit(){
  document.getElementById('nameEditBox').style.display='none';
}

function showCert(){
  const cs=CS();const c=AC();
  if(!isDemo() && cs.done.length<c){
    showCertLocked();
    return;
  }
  document.getElementById('cN').textContent=S.name;
  const lang3=S.activeLang||'en';
  const li3=LANG_INFO[lang3]||LANG_INFO['en'];
  document.getElementById('cCo').textContent=c+' Day '+li3.name+' Journey';
  document.getElementById('cDt').textContent=new Date().toLocaleDateString('en-PK',{month:'long',year:'numeric'});
  showScreen('certificate');
  // Launch confetti in both boxes
  function burst(boxId){
    const box=document.getElementById(boxId);
    if(!box)return;
    const colors=['#58CC02','#FFD700','#1CB0F6','#CE82FF','#FF9600','#FF4B4B','#fff'];
    for(let i=0;i<35;i++){
      const piece=document.createElement('div');
      piece.className='conf-piece';
      piece.style.cssText=`left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*0.8}s;animation-duration:${1.2+Math.random()*1}s;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;border-radius:${Math.random()>0.5?'50%':'2px'};transform:rotate(${Math.random()*360}deg);`;
      box.appendChild(piece);
    }
    setTimeout(()=>{box.innerHTML='';},3000);
  }
  setTimeout(()=>burst('confettiBox'),200);
  setTimeout(()=>burst('confettiBox2'),200);
  setTimeout(()=>burst('confettiBox2'),1400);
}
function resetApp(){
  showConfirm(
    '🗑️',
    S.name+' ka Progress Reset?',
    'Sirf tumhara active language ka course progress delete hoga. Doosri profiles safe rahenge.',
    '🗑️ Haan, Reset Karo',
    'var(--r)', '#991111',
    ()=>{
      const lang=S.activeLang||'en';
      if(!S.langs) S.langs={};
      if(!S.langs[lang]) S.langs[lang]={activeCourse:0,courses:emptyLangCourses()};
      S.langs[lang].activeCourse=0;
      S.langs[lang].courses=emptyLangCourses();
      S.activeCourse=0;
      // ✅ FIX: Pre-class progress bhi reset karo (profile-specific)
      try{
        var _pidR = (typeof ACTIVE_PID !== 'undefined' && ACTIVE_PID) ? ACTIVE_PID : 'default';
        localStorage.removeItem('su_preclass_'+_pidR+'_'+lang);
        // Legacy key bhi hataao
        localStorage.removeItem('su_preclass_'+lang);
      }catch(e){}
      // Firebase se bhi hataao (logged-in users ke liye)
      try{
        var uid = window.FB_AUTH && window.FB_AUTH.currentUser ? window.FB_AUTH.currentUser.uid : null;
        if(uid && !IS_GUEST && window.FIREBASE_READY && window.FB_DB){
          window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/preClass/'+lang)).catch(function(){});
        }
      }catch(e){}
      save();
      showToast('🗑️ '+S.name+' ka progress reset ho gaya','var(--r)');
      setTimeout(()=>{
        updateLangSelectIndicators();
        showScreen('langSelect');
      },600);
    }
  );
}
function resetAllProfiles(){
  showConfirm(
    '💣',
    'Sab Profiles Delete?',
    'SABI profiles aur unka sara progress hamesha ke liye khatam ho jaayega. Yeh action wapas nahi hoga!',
    '💣 Haan, Sab Delete Karo',
    '#cc2200', '#880000',
    ()=>{
      localStorage.removeItem('su_profiles');
      localStorage.removeItem('su_activePid');
      localStorage.removeItem('su5');
      // ✅ FIX: Sab languages ki preclass keys bhi delete karo
      try{
        var allKeys = Object.keys(localStorage);
        allKeys.forEach(function(k){ if(k.indexOf('su_preclass_')===0) localStorage.removeItem(k); });
        // ✅ FIX: Profile-specific keys bhi remove karo
      }catch(e){}
      PROFILES=[];ACTIVE_PID=null;
      S={name:'',avatar:'😊',activeLang:'en',activeCourse:0,langs:{en:{activeCourse:0,courses:emptyLangCourses()},fr:{activeCourse:0,courses:emptyLangCourses()},zh:{activeCourse:0,courses:emptyLangCourses()},ar:{activeCourse:0,courses:emptyLangCourses()}}};
      localStorage.removeItem(OB_DONE_KEY);
      window._showOnboardingNext = true;
      forceShowOnboarding();
    }
  );
}
// ✅ NEW: Settings mein sirf apni (active) profile delete karo — doosri profiles safe rahein
function deleteMyOwnProfile(){
  if(PROFILES.length <= 1){
    showConfirm(
      '🗑️',
      S.name+' ka Profile Delete?',
      'Tumhari profile aur sara progress hamesha ke liye khatam ho jaayega. Naya account fresh shuru hoga!',
      '🗑️ Haan, Delete Karo',
      'var(--r)', '#991111',
      ()=>{
        const uid = window.FB_AUTH?.currentUser?.uid;
        const deletedPid = ACTIVE_PID;
        if(uid && window.FIREBASE_READY && window.FB_DB && !IS_GUEST){
          window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/profiles/'+deletedPid)).catch(()=>{});
          window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId')).catch(()=>{});
        }
        localStorage.removeItem('su_profiles');
        localStorage.removeItem('su_activePid');
        localStorage.removeItem('su5');
        // ✅ Onboarding reset — naya user dobara onboard ho
        localStorage.removeItem('speakup_ob_done_v1');
        localStorage.removeItem('speakup_ob_data_v1');
        try{ Object.keys(localStorage).forEach(k=>{ if(k.startsWith('su_preclass_')) localStorage.removeItem(k); }); }catch(e){}
        PROFILES=[]; ACTIVE_PID=null;
        S={name:'',avatar:'😊',activeLang:'en',activeCourse:0,langs:{en:{activeCourse:0,courses:emptyLangCourses()},fr:{activeCourse:0,courses:emptyLangCourses()},zh:{activeCourse:0,courses:emptyLangCourses()},ar:{activeCourse:0,courses:emptyLangCourses()}}};
        showToast('🗑️ Profile delete ho gayi — fresh shuru karo!','var(--r)');
        setTimeout(()=>{
          window._showOnboardingNext = true;
          if(typeof forceShowOnboarding==='function') forceShowOnboarding();
        }, 600);
      }
    );
  } else {
    const p = PROFILES.find(x=>x.id===ACTIVE_PID);
    if(!p) return;
    showConfirm(
      p.avatar||'😊',
      p.name+' ka Profile Delete?',
      'Sirf yeh profile delete hogi. Baaki profiles safe rahein gi!',
      '🗑️ Haan, Delete Karo',
      'var(--r)', '#991111',
      ()=>{
        const uid = window.FB_AUTH?.currentUser?.uid;
        const deletedPid = ACTIVE_PID;
        PROFILES = PROFILES.filter(x=>x.id!==deletedPid);
        ACTIVE_PID = PROFILES[0].id;
        Object.assign(S, PROFILES[0]);
        saveAll();
        if(uid && window.FIREBASE_READY && window.FB_DB && !IS_GUEST){
          window.FB_REMOVE(window.FB_REF(window.FB_DB,'users/'+uid+'/profiles/'+deletedPid)).catch(()=>{});
          window.FB_SET(window.FB_REF(window.FB_DB,'users/'+uid+'/activeProfileId'), ACTIVE_PID).catch(()=>{});
        }
        showToast('🗑️ Profile delete ho gayi','var(--r)');
        setTimeout(()=>{
          if(typeof renderProf==='function') renderProf();
          if(typeof showScreen==='function') showScreen('profile');
        }, 400);
      }
    );
  }
}

function switchCourse(c){
  const lang=S.activeLang||'en';
  if(!S.langs) S.langs={};
  if(!S.langs[lang]) S.langs[lang]={activeCourse:0,courses:emptyLangCourses()};
  S.langs[lang].activeCourse=c;
  S.activeCourse=c;
  if(!S.langs[lang].courses[c].started){
    S.langs[lang].courses[c].started=true;
    S.langs[lang].courses[c].day=1;
  }
  save();
  renderSettingsScreen();
  showScreen('dashboard');renderDash();
}

// ── SETTINGS SCREEN RENDER ──
function renderSettingsScreen(){
  // Sync dark/light toggle state
  try {
    const isLight = localStorage.getItem('speakup_ui_mode') === 'light';
    const inp  = document.getElementById('themeToggleInput');
    const icon = document.getElementById('themeToggleIcon');
    const lbl  = document.getElementById('themeToggleLabel');
    const sub  = document.getElementById('themeToggleSub');
    if(inp) inp.checked = isLight;
    if(icon) icon.textContent = isLight ? '☀️' : '🌙';
    if(lbl)  lbl.textContent  = isLight ? 'Light Mode' : 'Dark Mode';
    if(sub)  sub.textContent  = isLight ? 'Roshan aur saaf' : 'Easy on the eyes';
  } catch(e) {}

  const icons={7:'♟️',30:'⚡',60:'🎯',90:'🐢'};
  const times={7:'45 min/day — Full Chess',30:'2 hours/day',60:'1 hour/day',90:'30 min/day'};
  const descs={30:'Fast track — learn quickly',60:'Balanced — comfortable pace',90:'Easy & Steady — a little each day'};
  const colors={7:'#2ECC71',30:'var(--g)',60:'var(--b)',90:'var(--p)'};
  const lang=S.activeLang||'en';
  const li=LANG_INFO[lang]||LANG_INFO['en'];
  const langData=S.langs&&S.langs[lang] ? S.langs[lang] : {activeCourse:0,courses:emptyLangCourses()};

  // Name display
  const nd=document.getElementById('stgNameDisplay');
  if(nd) nd.textContent=S.name;
  const sa=document.getElementById('stgAvatar');
  if(sa) sa.textContent=S.avatar||'😊';
  // Google photo
  const gPhoto = document.getElementById('stgGooglePhoto');
  if(gPhoto){
    if(S.googlePhoto){
      gPhoto.src = S.googlePhoto;
      gPhoto.style.display = 'block';
      if(sa) sa.style.visibility = 'hidden';
    } else {
      gPhoto.style.display = 'none';
      if(sa) sa.style.visibility = 'visible';
    }
  }

  // ── Language info in settings (read-only, no switching) ──
  const lsEl=document.getElementById('stgLangSection');
  if(lsEl){
    lsEl.innerHTML=`
      <div style="background:var(--card);border-radius:16px;padding:16px 18px;border:2px solid ${li.color}55;display:flex;align-items:center;gap:14px;">
        <div style="font-size:36px;">${li.flag}</div>
        <div style="flex:1;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:${li.color};">${li.name}</div>
          <div style="font-size:12px;color:var(--mut);margin-top:2px;">Active Language</div>
        </div>
        <div style="background:${li.color};color:#000;font-size:10px;font-weight:800;padding:4px 10px;border-radius:20px;">ACTIVE ✅</div>
      </div>
      <div style="margin-top:10px;padding:10px 14px;background:rgba(255,255,255,.04);border-radius:12px;border:1px solid var(--bdr);display:flex;align-items:center;gap:8px;">
        <div style="font-size:16px;">💡</div>
        <div style="font-size:12px;color:var(--mut);line-height:1.6;">To change language or course <b style="color:${li.color}">dashboard flag icon</b> dabao.</div>
      </div>`;
  }

  // ── Active course card (settings) ──
  const ac=langData.activeCourse||S.activeCourse||(S.langs&&S.langs[lang]&&S.langs[lang].activeCourse)||0; // ✅ FIX: multi-fallback
  const acd=ac?(langData.courses[ac]||{done:[],started:false,streak:0,day:1}):{done:[],started:false,streak:0,day:1};
  const apct=ac&&acd.started?Math.round((acd.done.length/ac)*100):0;
  const acEl=document.getElementById('stgActiveCourse');
  if(acEl) acEl.innerHTML=`
    <div style="background:var(--card);border-radius:16px;padding:18px;border:2px solid ${ac?colors[ac]:'var(--bdr)'};">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <div style="font-size:36px">${ac?icons[ac]:'❓'}</div>
        <div style="flex:1;">
          <div style="font-family:'Fredoka One',sans-serif;font-size:20px;color:${ac?colors[ac]:'var(--mut)'}">${li.flag} ${li.name} — ${ac?ac+' Day':'Select Course'}</div>
          <div style="font-size:12px;color:var(--mut)">${ac?(times[ac]+' — '+descs[ac]):'No course active'}</div>
        </div>
        ${ac?`<div style="background:${colors[ac]};color:#000;font-size:10px;font-weight:800;padding:4px 10px;border-radius:20px;">ACTIVE ✅</div>`:''}
      </div>
      ${ac?`
      <div style="height:10px;background:rgba(255,255,255,.08);border-radius:10px;overflow:hidden;margin-bottom:8px;">
        <div style="height:100%;width:${apct}%;background:${colors[ac]};border-radius:10px;transition:width .5s;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:13px;">
        <span style="color:var(--mut)">Day ${acd.day}/${ac} • ${acd.streak}🔥 streak</span>
        <span style="color:${colors[ac]};font-weight:700">${apct}% complete</span>
      </div>`:''}
    </div>`;

  // ── Change course panel cards ──
  const cc=document.getElementById('stgCourseCards');
  if(cc){
    cc.innerHTML=[30,60,90].filter(n=>n!==ac).map(n=>{
      const cd=langData.courses[n]||{done:[],started:false};
      const pct=cd.started?Math.round((cd.done.length/n)*100):0;
      return `<div onclick="switchCourseFromSettings(${n})" style="background:var(--card);border-radius:14px;padding:16px;border:2px solid var(--bdr);cursor:pointer;transition:all .2s;" 
        onmousedown="this.style.transform='scale(.97)'" onmouseup="this.style.transform='scale(1)'">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <div style="font-size:32px">${icons[n]}</div>
          <div style="flex:1;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:18px;color:${colors[n]}">${n} Day Course</div>
            <div style="font-size:12px;color:var(--mut)">${times[n]} — ${descs[n]}</div>
          </div>
          <div style="color:${colors[n]};font-size:20px;">→</div>
        </div>
        <div style="height:7px;background:rgba(255,255,255,.08);border-radius:7px;overflow:hidden;margin-bottom:6px;">
          <div style="height:100%;width:${pct}%;background:${colors[n]};border-radius:7px;"></div>
        </div>
        <div style="font-size:12px;color:var(--mut);">
          ${cd.started?`${cd.done.length}/${n} din complete • ${pct}%`:'Abhi shuru nahi kiya'}
        </div>
      </div>`;
    }).join('');
  }


  // ── App Language Toggle ──
  const langToggleEl = document.getElementById('stgAppLangToggle');
  if(langToggleEl){
    const curLang = localStorage.getItem('speakup_app_lang')||'en';
    const isUR = curLang === 'ur';
    langToggleEl.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="font-size:26px;">🌐</div>
          <div>
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:var(--txt);">${isUR ? 'Roman Urdu' : 'English'}</div>
            <div style="font-size:11px;color:var(--mut);margin-top:2px;">${isUR ? 'App ki language' : 'App display language'}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="setAppLang('ur')" style="padding:8px 14px;border-radius:12px;border:none;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;background:${isUR?'var(--g)':'var(--card2)'};color:${isUR?'#000':'var(--txt)'};">🇵🇰 UR</button>
          <button onclick="setAppLang('en')" style="padding:8px 14px;border-radius:12px;border:none;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;background:${isUR?'var(--card2)':'var(--g)'};color:${isUR?'var(--txt)':'#000'};">🇬🇧 EN</button>
        </div>
      </div>`;
  }

  // ── Account section ──
  const loggedUser=getLoggedInUser();
  const acctEl=document.getElementById('stgAccountSection');
  if(acctEl){
    if(loggedUser){
      acctEl.innerHTML=`
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="font-size:28px;">✅</div>
          <div style="flex:1;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:var(--g);">Logged In</div>
            <div style="font-size:13px;color:var(--mut);">@${loggedUser}</div>
          </div>
          <button onclick="doLogout()" style="background:rgba(255,75,75,.1);border:1px solid rgba(255,75,75,.3);border-radius:10px;padding:8px 14px;color:var(--r);font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">Logout 🚪</button>
        </div>`;
    } else {
      acctEl.innerHTML=`
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="font-size:28px;">👻</div>
          <div style="flex:1;">
            <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:var(--o);">Guest Mode</div>
            <div style="font-size:12px;color:var(--mut);">Login to always save your progress</div>
          </div>
          <button onclick="goToAuth()" style="background:var(--o);border:none;border-radius:10px;padding:8px 14px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;box-shadow:0 3px 0 var(--o2);">Login →</button>
        </div>`;
    }
  }
}

// ── Download Updated App — sirf 2211787awan1@gmail.com ke liye ──
function downloadUpdatedApp(){
  // Current page ka poora HTML le lo
  const html = document.documentElement.outerHTML;

  // File name mein date/time add karo taake version pata chale
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const dateStr = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  const fileName = `speakup-v${dateStr}.html`;

  // Blob banao aur download karo
  const blob = new Blob([html], {type: 'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);

  showToast('📥 Download shuru ho gaya! File: ' + fileName, '#1CB0F6');
}

function doLogout(){
  showConfirm(
    '🚪','Logout Karna Chahte Ho?',
    'Logout karne ke baad dobara login karna hoga. Progress safe rahega!',
    '🚪 Haan, Logout Karo',
    'var(--r)','#991111',
    async ()=>{
      // ✅ FIX: Logout pe in-memory Pro cache reset karo
      window._PRO_CACHE = null;

      // Firebase signOut
      try{
        if(window.FB_AUTH && window.FB_signOut){
          await window.FB_signOut(window.FB_AUTH);
        }
      }catch(e){}

      setLoggedInUser(null);
      IS_GUEST=false;
      localStorage.removeItem('su_wasGuest');
      loadAll();
      switchAuthTab('login');
      showScreen('authScreen');
      showToast('🚪 Logout ho gaya!','var(--o)');
    }
  );
}

function showChangeCourse(){
  document.getElementById('changeCoursePanel').style.display='block';
  // scroll to it
  document.getElementById('changeCoursePanel').scrollIntoView({behavior:'smooth'});
}
function hideChangeCourse(){
  document.getElementById('changeCoursePanel').style.display='none';
}
function switchCourseFromSettings(c){
  switchCourse(c);
  hideChangeCourse();
  renderSettingsScreen();
}

function switchLanguage(lang){
  S.activeLang=lang;
  if(!S.langs) S.langs={};
  LANG_CODES.forEach(lc=>{if(!S.langs[lc])S.langs[lc]={activeCourse:0,courses:emptyLangCourses()};});
  // Set activeCourse from the lang's data
  S.activeCourse = S.langs[lang].activeCourse||0;
  save();
  // ── Lazy: Language switch pe naya lang ka current day fetch karo ──
  if(typeof window.lazyFetchLangDay === 'function') window.lazyFetchLangDay(lang);
  const li=LANG_INFO[lang]||LANG_INFO['en'];
  showToast(li.flag+' '+li.name+' par switch ho gaya!','var(--g)');
  renderSettingsScreen();
  // If that lang has a course active, go to dashboard, else go to course select
  if(S.langs[lang].activeCourse){
    showScreen('dashboard');renderDash();
  } else {
    setTimeout(()=>goToCourseSelect(),500);
  }
}

// Settings name edit
function stgEditName(){
  document.getElementById('stgNameEdit').style.display='block';
  document.getElementById('stgNameIn').value=S.name;
  document.getElementById('stgNameIn').focus();
}
function stgSaveName(){
  const v=document.getElementById('stgNameIn').value.trim();
  if(!v) return;
  S.name=v; save();
  document.getElementById('stgNameDisplay').textContent=v;
  document.getElementById('stgNameEdit').style.display='none';
  // Update all name displays
  const pn=document.getElementById('pN'); if(pn) pn.textContent=v;
  const du=document.getElementById('dU'); if(du) du.textContent=v+'!';
}
function stgCancelName(){
  document.getElementById('stgNameEdit').style.display='none';
}

// ============================================================
// AUTH SYSTEM — Firebase Email/Password + Google Sign-In
// ============================================================

function togglePass(inputId, btnId){
  const inp = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if(!inp) return;
  if(inp.type === 'password'){
    inp.type = 'text';
    if(btn) btn.textContent = '🙈';
  } else {
    inp.type = 'password';
    if(btn) btn.textContent = '👁️';
  }
}

function hashPass(s){
  // Simple hash for legacy localStorage users (backward compat)
  let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;}
  return 'h'+Math.abs(h).toString(36);
}

function loadUsers(){
  try{return JSON.parse(localStorage.getItem('su_users')||'[]');}catch{return[];}
}
function saveUsers(arr){localStorage.setItem('su_users',JSON.stringify(arr));}
function getLoggedInUser(){return localStorage.getItem('su_loggedInUser')||null;}
function setLoggedInUser(u){
  if(u) localStorage.setItem('su_loggedInUser',u);
  else localStorage.removeItem('su_loggedInUser');
}

let IS_GUEST = false;

function switchAuthTab(tab){
  IS_GUEST=false;
  document.getElementById('tabLogin').classList.toggle('active',tab==='login');
  document.getElementById('tabSignup').classList.toggle('active',tab==='signup');
  document.getElementById('loginForm').style.display=tab==='login'?'block':'none';
  document.getElementById('signupForm').style.display=tab==='signup'?'block':'none';
  document.getElementById('authErr').style.display='none';
  const succ=document.getElementById('authSuccess');
  if(succ) succ.style.display='none';
  hideForgotPassword();
}

function showAuthError(msg){
  const el=document.getElementById('authErr');
  if(!el) return;
  el.textContent=msg;
  el.style.display='block';
  const succ=document.getElementById('authSuccess');
  if(succ) succ.style.display='none';
}
function showAuthSuccess(msg){
  const el=document.getElementById('authSuccess');
  if(!el) return;
  el.textContent=msg;
  el.style.display='block';
  document.getElementById('authErr').style.display='none';
}
function clearAuthMessages(){
  document.getElementById('authErr').style.display='none';
  const succ=document.getElementById('authSuccess');
  if(succ) succ.style.display='none';
}

// ── Forgot Password ──
function showForgotPassword(){
  const panel=document.getElementById('forgotPasswordPanel');
  if(!panel) return;
  panel.style.display='block';
  // Pre-fill email if already typed
  const emailVal=document.getElementById('loginEmail')?.value||'';
  const forgotEl=document.getElementById('forgotEmail');
  if(forgotEl && emailVal) forgotEl.value=emailVal;
}
function hideForgotPassword(){
  const panel=document.getElementById('forgotPasswordPanel');
  if(panel) panel.style.display='none';
}
async function doForgotPassword(){
  const email=(document.getElementById('forgotEmail')?.value||'').trim();
  if(!email){showAuthError('⚠️ Email daalo!');return;}
  if(!window.FB_AUTH){showAuthError('❌ Firebase load nahi hua. Dobara try karo.');return;}
  try{
    await window.FB_sendPasswordResetEmail(window.FB_AUTH, email);
    hideForgotPassword();
    showAuthSuccess('✅ Reset link bhej diya! Inbox check karo 📬');
  }catch(err){
    showAuthError(firebaseErrMsg(err));
  }
}

// ── Firebase Error Messages (Urdu) ──
function firebaseErrMsg(err){
  const code=err.code||'';
  if(code==='auth/user-not-found') return '❌ Yeh email registered nahi hai!';
  if(code==='auth/wrong-password') return '❌ Password galat hai. Dobara try karo!';
  if(code==='auth/invalid-credential') return '❌ Email ya password galat hai!';
  if(code==='auth/email-already-in-use') return '❌ Yeh email pehle se use ho rahi hai!';
  if(code==='auth/weak-password') return '❌ Password kam az kam 6 characters ka ho!';
  if(code==='auth/invalid-email') return '❌ Email sahi format mein likho!';
  if(code==='auth/network-request-failed') return '❌ Network error! Internet check karo.';
  if(code==='auth/too-many-requests') return '❌ Bahut zyada attempts. Thodi der baad try karo.';
  if(code==='auth/popup-closed-by-user') return '⚠️ Popup band ho gaya. Dobara try karo.';
  if(code==='auth/cancelled-popup-request') return '⚠️ Login cancel hua.';
  if(code==='auth/popup-blocked') return '❌ Popup block hua! Browser mein popups allow karo.';
  return '❌ Kuch galat hua: '+(err.message||code);
}