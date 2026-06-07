// ══════════════════════════════════════════════════
// SpeakUp v8 — 25-heart-system.js
// Heart System — logic for free users
// ══════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// ❤️ HEART SYSTEM — Free Users Only (Pro/Demo = unlimited)
// ═══════════════════════════════════════════════════════════════
(function(){
  var MAX_HEARTS = 5;
  var REGEN_MS   = 3 * 60 * 1000; // 3 min
  var HS_KEY     = 'su_hearts_v1';

  function _getHS(){ try{ return JSON.parse(localStorage.getItem(HS_KEY)||'null'); }catch(e){ return null; } }
  function _saveHS(s){ try{ localStorage.setItem(HS_KEY, JSON.stringify(s)); }catch(e){} }

  function _regenHearts(){
    var hs = _getHS() || { hearts: MAX_HEARTS, lastLostAt: null };
    if(hs.hearts >= MAX_HEARTS){ hs.hearts = MAX_HEARTS; hs.lastLostAt = null; _saveHS(hs); return hs; }
    if(!hs.lastLostAt){ _saveHS(hs); return hs; }
    var regened = Math.floor((Date.now() - hs.lastLostAt) / REGEN_MS);
    if(regened > 0){
      hs.hearts = Math.min(MAX_HEARTS, hs.hearts + regened);
      hs.lastLostAt = hs.hearts >= MAX_HEARTS ? null : hs.lastLostAt + regened * REGEN_MS;
      _saveHS(hs);
    }
    return hs;
  }

  window.getHearts = function(){
    if(typeof isPro==='function' && (isPro()||isDemo())) return MAX_HEARTS;
    return _regenHearts().hearts;
  };

  window.loseHeart = function(){
    if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))) return true;
    var hs = _regenHearts();
    if(hs.hearts <= 0) return false;
    hs.hearts = Math.max(0, hs.hearts - 1);
    if(!hs.lastLostAt) hs.lastLostAt = Date.now();
    _saveHS(hs);
    _renderHeartBar();
    _shakeLastHeart(hs.hearts);
    if(hs.hearts <= 0){ setTimeout(showNoHeartsOverlay, 600); return false; }
    return true;
  };

  window.hasHearts = function(){
    if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))) return true;
    return _regenHearts().hearts > 0;
  };

  window._renderHeartBar = function(){
    var htEl = document.getElementById('lHt');
    if(!htEl) return;
    if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))){ htEl.innerHTML='<span style="font-size:14px;">♾️</span>'; return; }
    var h = _regenHearts().hearts;
    // Compact heart display for header
    var html='<span style="display:inline-flex;align-items:center;gap:2px;">';
    for(var i=0;i<MAX_HEARTS;i++){
      html+='<span class="heart-icon'+(i>=h?' lost':'')+'" id="hrt_'+i+'" style="font-size:14px;">'+(i<h?'❤️':'🖤')+'</span>';
    }
    html+='</span>';
    htEl.innerHTML = html;
  };

  function _shakeLastHeart(remaining){
    var el = document.getElementById('hrt_'+remaining);
    if(!el) return;
    el.classList.add('shake');
    setTimeout(function(){ el.classList.remove('shake'); el.classList.add('lost'); el.textContent='🖤'; }, 400);
  }

  // ── Regen ticker — har 10s check ──
  var _regenTick = null;
  window._startHeartRegenTicker = function(){
    if(_regenTick) clearInterval(_regenTick);
    _regenTick = setInterval(function(){
      if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))) return;
      var before = (_getHS()||{}).hearts||0;
      var hs = _regenHearts();
      if(hs.hearts > before){
        // Heart wapas aaya
        var idx = hs.hearts - 1;
        var el = document.getElementById('hrt_'+idx);
        if(el){ el.textContent='❤️'; el.classList.remove('lost'); el.classList.add('regen'); setTimeout(function(){ el.classList.remove('regen'); },600); }
        _renderHeartBar();
        if(typeof showToast==='function') showToast('❤️ Heart wapas aa gaya! ('+hs.hearts+'/'+MAX_HEARTS+')','#FF4B4B');
        var ov = document.getElementById('noHeartsOverlay');
        if(ov && ov.classList.contains('show')){ ov.classList.remove('show'); if(window._nhoTimer) clearInterval(window._nhoTimer); }
      }
    }, 10000);
  };
  window._stopHeartRegenTicker = function(){
    if(_regenTick){ clearInterval(_regenTick); _regenTick=null; }
  };

  // ── No Hearts Overlay ──
  window.showNoHeartsOverlay = function(){
    var ov = document.getElementById('noHeartsOverlay'); if(!ov) return;
    ov.classList.add('show');
    if(window._nhoTimer) clearInterval(window._nhoTimer);
    var timerEl = document.getElementById('nhoTimerDisplay');
    function tick(){
      var hs = _regenHearts();
      if(hs.hearts > 0){ clearInterval(window._nhoTimer); ov.classList.remove('show'); _renderHeartBar(); if(typeof showToast==='function') showToast('❤️ Heart wapas aa gaya! Continue karo!','#2EE59D'); return; }
      if(!hs.lastLostAt){ if(timerEl) timerEl.textContent='⏳ --:--'; return; }
      var diff = Math.max(0, hs.lastLostAt + REGEN_MS - Date.now());
      var m=Math.floor(diff/60000), s=Math.floor((diff%60000)/1000);
      if(timerEl) timerEl.textContent='⏳ '+m+':'+(s<10?'0':'')+s;
    }
    tick();
    window._nhoTimer = setInterval(tick, 1000);
  };

  window.nhoGoToDashboard = function(){
    var ov=document.getElementById('noHeartsOverlay'); if(ov) ov.classList.remove('show');
    if(window._nhoTimer) clearInterval(window._nhoTimer);
    window._stopHeartRegenTicker();
    goalSessionEnd(); save(); showScreen('dashboard'); renderDash();
  };
  window.nhoUpgradePro = function(){
    var ov=document.getElementById('noHeartsOverlay'); if(ov) ov.classList.remove('show');
    if(window._nhoTimer) clearInterval(window._nhoTimer);
    if(typeof showToast==='function') showToast('👑 Pro ke liye admin se rabta karo!','#FFD700');
    goalSessionEnd(); save(); showScreen('dashboard'); renderDash();
  };

  // ── Sync hl watcher — lesson hl decrease => loseHeart ──
  var _hlPrev = 5, _hlWatch = null;
  window._startHLWatch = function(){
    if(_hlWatch) clearInterval(_hlWatch);
    _hlPrev = typeof window.hl !== 'undefined' ? window.hl : 5;
    _hlWatch = setInterval(function(){
      if(typeof window.hl==='undefined') return;
      if(typeof isPro==='function' && (isPro()||(typeof isDemo==='function'&&isDemo()))) return;
      if(window.hl < _hlPrev){
        var diff = _hlPrev - window.hl;
        for(var i=0;i<diff;i++) if(typeof window.loseHeart==='function') window.loseHeart();
      }
      _hlPrev = window.hl;
    }, 300);
  };
  window._stopHLWatch = function(){
    if(_hlWatch){ clearInterval(_hlWatch); _hlWatch=null; }
  };

  // ── Patch goLesson + exitLesson + launchPreClassLesson ──
  function _patchForHearts(){
    if(typeof window.goLesson==='function' && !window._heartsPatchedGoLesson){
      window._heartsPatchedGoLesson = true;
      var _o = window.goLesson;
      window.goLesson = function(){
        window._startHeartRegenTicker();
        window._startHLWatch();
        _renderHeartBar();
        _o.apply(this,arguments);
      };
    }
    if(typeof window.exitLesson==='function' && !window._heartsPatchedExit){
      window._heartsPatchedExit = true;
      var _oe = window.exitLesson;
      window.exitLesson = function(){
        window._stopHeartRegenTicker();
        window._stopHLWatch();
        _oe.apply(this,arguments);
      };
    }
    if(typeof window.launchPreClassLesson==='function' && !window._heartsPatchedPC){
      window._heartsPatchedPC = true;
      var _opc = window.launchPreClassLesson;
      window.launchPreClassLesson = function(){
        window._startHeartRegenTicker();
        _renderHeartBar();
        _opc.apply(this,arguments);
      };
    }
  }
  // Try now + retry
  _patchForHearts();
  setTimeout(_patchForHearts, 500);
  setTimeout(_patchForHearts, 1500);

})();

// ═══════════════════════════════════════════════════════════════
// ⏸️ PAUSE SYSTEM — Sab Users
// ═══════════════════════════════════════════════════════════════
(function(){
  var PAUSE_KEY = 'su_pause_state_v1';
  function _savePause(ctx,extra){ try{ localStorage.setItem(PAUSE_KEY,JSON.stringify({ctx:ctx,extra:extra||{},savedAt:Date.now()})); }catch(e){} }
  function _loadPause(){ try{ return JSON.parse(localStorage.getItem(PAUSE_KEY)||'null'); }catch(e){ return null; } }
  function _clearPause(){ try{ localStorage.removeItem(PAUSE_KEY); }catch(e){} }

  window.showPauseScreen = function(){
    var ov = document.getElementById('pauseOverlay'); if(!ov) return;
    var ctx = 'lesson';
    document.querySelectorAll('.screen.active').forEach(function(s){ ctx = s.id; });
    var subEl = document.getElementById('pauseSubText');
    if(subEl){
      if(ctx==='pastpapers') subEl.textContent='Paper pause hai — continue ya shuru se shuru karo!';
      else subEl.textContent='Lesson paused — continue or restart!';
    }
    _savePause(ctx, { si: typeof si!=='undefined'?si:0, pcSI: typeof _pcSI!=='undefined'?_pcSI:0 });
    // Goal timer pause
    if(typeof goalSessionEnd==='function') goalSessionEnd();
    ov.classList.add('show');
  };

  window.hidePauseScreen = function(){
    var ov = document.getElementById('pauseOverlay'); if(ov) ov.classList.remove('show');
    // Goal timer resume
    if(typeof goalSessionStart==='function') goalSessionStart();
    _clearPause();
  };

  window.pauseRestartLesson = function(){
    var ov = document.getElementById('pauseOverlay'); if(ov) ov.classList.remove('show');
    var ps = _loadPause();
    var ctx = ps&&ps.ctx ? ps.ctx : 'lesson';
    _clearPause();
    if(ctx==='pastpapers'){ if(typeof ppStartAttempt==='function') ppStartAttempt(); }
    else { if(typeof goLesson==='function') goLesson(); }
  };

  window.pauseGoToDashboard = function(){
    var ov = document.getElementById('pauseOverlay'); if(ov) ov.classList.remove('show');
    // State already saved — don't clear, user wapas aa sakta hai
    if(typeof save==='function') save();
    if(typeof showScreen==='function') showScreen('dashboard');
    if(typeof renderDash==='function') renderDash();
  };

  // ── Resume banner on dashboard ──
  function _checkResumeBanner(){
    var ps = _loadPause();
    if(!ps||!ps.ctx) return;
    if(Date.now()-(ps.savedAt||0) > 30*60*1000){ _clearPause(); return; }
    var old = document.getElementById('resumeBanner'); if(old) old.remove();
    var ctx = ps.ctx;
    var icon = ctx==='pastpapers'?'📝':'📚';
    var label = ctx==='pastpapers'?'Paper Continue Karo':'Lesson Continue Karo';
    var b = document.createElement('div');
    b.id = 'resumeBanner';
    b.style.cssText = 'margin:10px 16px 0;';
    b.innerHTML = '<div style="background:linear-gradient(135deg,rgba(46,229,157,.12),rgba(91,141,239,.08));border:2px solid rgba(46,229,157,.45);border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:12px;">'
      +'<div style="font-size:26px;flex-shrink:0;animation:pauseFloat 2.5s ease infinite;">'+icon+'</div>'
      +'<div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#2EE59D;">Start From There</div>'
      +'<div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:1px;">Session save hua hai</div></div>'
      +'<div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">'
      +'<button onclick="resumePausedLesson()" style="background:linear-gradient(135deg,#2EE59D,#1BC47D);border:none;border-radius:10px;padding:7px 14px;font-family:\'Fredoka One\',sans-serif;font-size:12px;color:#0A0918;cursor:pointer;box-shadow:0 3px 0 #14A363;">▶️ '+label+'</button>'
      +'<button onclick="discardPausedLesson()" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:5px 14px;font-family:\'Fredoka One\',sans-serif;font-size:11px;color:rgba(255,255,255,.45);cursor:pointer;">✕ Hatao</button>'
      +'</div></div>';
    var target = document.getElementById('dashSkeletonTarget');
    if(target) target.insertBefore(b, target.firstChild);
  }

  window.resumePausedLesson = function(){
    var ps = _loadPause(); if(!ps){ _clearPause(); return; }
    var ctx = ps.ctx;
    var old = document.getElementById('resumeBanner'); if(old) old.remove();
    _clearPause();
    if(ctx==='pastpapers'){ if(typeof ppStartAttempt==='function') ppStartAttempt(); return; }
    var savedSI = ps.extra&&ps.extra.si!=null ? ps.extra.si : 0;
    if(typeof goLesson==='function'){
      goLesson();
      setTimeout(function(){
        if(typeof si!=='undefined' && typeof LS!=='undefined' && LS.length>0){
          si = Math.min(savedSI, LS.length-1);
          if(typeof renderStep==='function') renderStep();
        }
      }, 500);
    }
  };

  window.discardPausedLesson = function(){
    _clearPause();
    var old = document.getElementById('resumeBanner');
    if(old){ old.style.transition='opacity .3s,transform .3s'; old.style.opacity='0'; old.style.transform='translateY(-10px)'; setTimeout(function(){ old.remove(); },320); }
  };

  // ── Hook renderDash ──
  function _hookRD(){
    if(typeof window.renderDash==='function' && !window._pauseHookedRD){
      window._pauseHookedRD = true;
      var _b = window.renderDash;
      window.renderDash = function(){ _b.apply(this,arguments); setTimeout(_checkResumeBanner,200); };
    }
  }
  _hookRD(); setTimeout(_hookRD,500); setTimeout(_hookRD,1500);

})();