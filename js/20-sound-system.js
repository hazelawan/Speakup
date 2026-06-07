// ══════════════════════════════════════════════════
// SpeakUp v8 — 20-sound-system.js
// Sound System — audio feedback
// ══════════════════════════════════════════════════

(function(){
  'use strict';

  // ── 1. Sound preference — localStorage se ──
  var SOUND_KEY = 'su_sound_on';
  var _soundOn = true;

  function _loadSoundPref(){
    try {
      var val = localStorage.getItem(SOUND_KEY);
      if(val === null) { _soundOn = true; } // default: on
      else { _soundOn = (val === '1'); }
    } catch(e){ _soundOn = true; }
  }

  function _saveSoundPref(on){
    try { localStorage.setItem(SOUND_KEY, on ? '1' : '0'); } catch(e){}
  }

  // ── Global: settings toggle handler ──
  window.setSoundPref = function(checked){
    _soundOn = !!checked;
    _saveSoundPref(_soundOn);
    var sub = document.getElementById('soundToggleSub');
    if(sub) sub.textContent = _soundOn ? 'Sounds for quizzes' : 'Khaamoshi mode';
    // Preview sound when turning on
    if(_soundOn) setTimeout(function(){ window.SU_SOUND && SU_SOUND.correct(); }, 150);
  };

  // ── 2. AudioContext — lazy init (user gesture ke baad) ──
  var _ctx = null;
  function _getCtx(){
    if(!_ctx){
      try {
        _ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch(e){ return null; }
    }
    if(_ctx.state === 'suspended'){
      try { _ctx.resume(); } catch(e){}
    }
    return _ctx;
  }

  // ── 3. Core tone player ──
  function _playTone(freq, startTime, duration, type, gainVal, ctx){
    type = type || 'sine';
    gainVal = gainVal || 0.4;
    try {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(gainVal, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
    } catch(e){}
  }

  // ── 4. Sound effects ──

  // Correct: C5 → E5 → G5 ascending bright tones
  function _playCorrect(){
    var ctx = _getCtx();
    if(!ctx) return;
    var now = ctx.currentTime;
    var notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach(function(freq, i){
      _playTone(freq, now + i * 0.13, 0.22, 'sine', 0.35, ctx);
    });
    // Soft sparkle overtone on G5
    _playTone(1567.98, now + 0.26, 0.18, 'sine', 0.08, ctx);
  }

  // Wrong: descending buzz — G4 → E4 → C4 with sawtooth
  function _playWrong(){
    var ctx = _getCtx();
    if(!ctx) return;
    var now = ctx.currentTime;
    var notes = [392.00, 329.63, 261.63]; // G4, E4, C4
    notes.forEach(function(freq, i){
      _playTone(freq, now + i * 0.11, 0.18, 'sawtooth', 0.18, ctx);
    });
    // Low thud
    _playTone(80, now, 0.25, 'sine', 0.3, ctx);
  }

  // Lesson complete fanfare: C5-E5-G5-C6 with final chord
  function _playComplete(){
    var ctx = _getCtx();
    if(!ctx) return;
    var now = ctx.currentTime;
    // Rising arpeggio
    var rise = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    rise.forEach(function(freq, i){
      _playTone(freq, now + i * 0.12, 0.20, 'sine', 0.3, ctx);
    });
    // Final chord (C major) at the end
    var chordStart = now + 0.5;
    [523.25, 659.25, 783.99].forEach(function(freq){
      _playTone(freq, chordStart, 0.55, 'sine', 0.22, ctx);
    });
    // Triumph bell
    _playTone(2093.00, chordStart, 0.5, 'sine', 0.12, ctx);
  }

  // ── 5. Public API ──
  window.SU_SOUND = {
    correct:  function(){ if(_soundOn) _playCorrect();  },
    wrong:    function(){ if(_soundOn) _playWrong();    },
    complete: function(){ if(_soundOn) _playComplete(); }
  };

  // ── 6. Patch quiz answer functions ──
  function _patchAnswerFns(){

    // Patch mqa (multi-quiz answer)
    if(typeof window.mqa === 'function'){
      var _origMqa = window.mqa;
      window.mqa = function(sel, ans, btn){
        if(sel === ans) SU_SOUND.correct();
        else SU_SOUND.wrong();
        return _origMqa.apply(this, arguments);
      };
    } else {
      setTimeout(_patchAnswerFns, 300);
      return;
    }

    // Patch fqa (final quiz answer)
    if(typeof window.fqa === 'function'){
      var _origFqa = window.fqa;
      window.fqa = function(sel, ans, btn){
        if(sel === ans) SU_SOUND.correct();
        else SU_SOUND.wrong();
        return _origFqa.apply(this, arguments);
      };
    }

    // Patch retryAns (retry round)
    if(typeof window.retryAns === 'function'){
      var _origRetryAns = window.retryAns;
      window.retryAns = function(sel, ans, btn){
        if(sel === ans) SU_SOUND.correct();
        else SU_SOUND.wrong();
        return _origRetryAns.apply(this, arguments);
      };
    }

    // Patch pzAnswer (puzzle answer, if present)
    if(typeof window.pzAnswer === 'function'){
      var _origPzAnswer = window.pzAnswer;
      window.pzAnswer = function(idx){
        // pzAnswer internally checks correct — listen after call
        var _origCorrect = SU_SOUND.correct;
        var _origWrong   = SU_SOUND.wrong;
        return _origPzAnswer.apply(this, arguments);
      };
    }
  }

  // Patch finishLesson for completion sound
  function _patchFinishLesson(){
    if(typeof window.finishLesson === 'function'){
      var _origFinish = window.finishLesson;
      window.finishLesson = function(b){
        SU_SOUND.complete();
        return _origFinish.apply(this, arguments);
      };
    } else {
      setTimeout(_patchFinishLesson, 300);
    }
  }

  // ── 7. Settings toggle UI init ──
  function _initToggleUI(){
    _loadSoundPref();
    var inp = document.getElementById('soundToggleInput');
    if(inp){
      inp.checked = _soundOn;
      var sub = document.getElementById('soundToggleSub');
      if(sub) sub.textContent = _soundOn ? 'Sounds for quizzes' : 'Khaamoshi mode';
    } else {
      setTimeout(_initToggleUI, 400);
      return;
    }
  }

  // ── 8. AudioContext unlock on first user tap ──
  function _unlockAudio(){
    if(_ctx && _ctx.state !== 'suspended') return;
    var ctx = _getCtx();
    if(ctx){
      // Play silent buffer to unlock
      var buf = ctx.createBuffer(1, 1, 22050);
      var src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    }
    document.removeEventListener('touchstart', _unlockAudio, true);
    document.removeEventListener('click', _unlockAudio, true);
  }
  document.addEventListener('touchstart', _unlockAudio, { passive: true, capture: true });
  document.addEventListener('click', _unlockAudio, { capture: true });

  // ── 9. Init ──
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      _loadSoundPref();
      _initToggleUI();
      setTimeout(_patchAnswerFns, 800);
      setTimeout(_patchFinishLesson, 800);
    });
  } else {
    _loadSoundPref();
    _initToggleUI();
    setTimeout(_patchAnswerFns, 800);
    setTimeout(_patchFinishLesson, 800);
  }

  // Also repatch when lesson opens (fqa/mqa recreated each time)
  var _origGoLesson = null;
  function _patchGoLesson(){
    if(typeof window.goLesson === 'function' && window.goLesson !== _origGoLesson){
      _origGoLesson = window.goLesson;
      var _prevGoLesson = window.goLesson;
      window.goLesson = function(){
        var result = _prevGoLesson.apply(this, arguments);
        // Repatch answer fns after lesson starts
        setTimeout(_patchAnswerFns, 500);
        return result;
      };
    } else {
      setTimeout(_patchGoLesson, 300);
    }
  }
  setTimeout(_patchGoLesson, 600);

})();