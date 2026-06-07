// ══════════════════════════════════════════════════
// SpeakUp v8 — 21-xp-boost.js
// XP Boost / Double Power-Up System
// ══════════════════════════════════════════════════

(function(){
  // ── Constants ──
  var XP_BOOST_KEY = 'su_xpboost';
  var BOOST_DURATION_MS = 30 * 60 * 1000; // 30 minutess

  // ── Get today's date string (YYYY-MM-DD) ──
  function _todayKey(){
    var d = new Date();
    return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
  }

  // ── Load boost state ──
  function loadBoost(){
    try{ return JSON.parse(localStorage.getItem(XP_BOOST_KEY)||'null'); }
    catch(e){ return null; }
  }

  // ── Save boost state ──
  function saveBoost(data){
    try{ localStorage.setItem(XP_BOOST_KEY, JSON.stringify(data)); }
    catch(e){}
  }

  // ── Is boost currently active? ──
  window.isXpBoostActive = function(){
    var b = loadBoost();
    if(!b || !b.startedAt) return false;
    return (Date.now() - b.startedAt) < BOOST_DURATION_MS;
  };

  // ── Was boost already used today? ──
  function boostUsedToday(){
    var b = loadBoost();
    return !!(b && b.usedDate === _todayKey());
  }

  // ── Remaining boost milliseconds ──
  function boostRemaining(){
    var b = loadBoost();
    if(!b || !b.startedAt) return 0;
    return Math.max(0, BOOST_DURATION_MS - (Date.now() - b.startedAt));
  }

  // ── Format remaining time ──
  function fmtTime(ms){
    var totalSecs = Math.ceil(ms / 1000);
    var mins = Math.floor(totalSecs / 60);
    var secs = totalSecs % 60;
    return mins + ' min ' + (secs < 10 ? '0'+secs : secs) + ' sec baaki';
  }

  // ── Activate boost ──
  window.activateXpBoost = function(){
    if(boostUsedToday()){
      if(typeof showToast === 'function')
        showToast('⚡ Aaj ka Boost istemal ho chuka hai! Kal dobara milega.', '#FF9500');
      return;
    }
    // Confirm popup
    var pop = document.createElement('div');
    pop.id = 'xpBoostConfirmPop';
    pop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px);';
    pop.innerHTML = [
      '<div style="background:linear-gradient(135deg,#1a1000,#2d1e00,#1a1000);border:2px solid rgba(255,209,0,.6);border-radius:24px;padding:30px 22px;max-width:320px;width:100%;text-align:center;animation:xpConfPop .35s cubic-bezier(.34,1.56,.64,1);">',
        '<style>@keyframes xpConfPop{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}</style>',
        '<div style="font-size:56px;margin-bottom:10px;">⚡</div>',
        '<div style="font-family:\'Fredoka One\',sans-serif;font-size:22px;color:#FFD700;margin-bottom:6px;text-shadow:0 0 14px rgba(255,200,0,.5);">XP Double Power-Up!</div>',
        '<div style="font-size:13px;color:rgba(255,255,255,.6);margin-bottom:20px;line-height:1.7;">Agle <b style="color:#FFD700">30 minutes</b> any lesson done in<br><b style="color:#FFD700">double XP</b> dega! ⭐⭐<br><span style="font-size:11px;opacity:.6;">Can only use once per day</span></div>',
        '<button id="xpBoostConfirmYes" style="width:100%;padding:14px;background:linear-gradient(135deg,#FFD700,#FF9500);border:none;border-radius:14px;color:#000;font-family:\'Fredoka One\',sans-serif;font-size:16px;cursor:pointer;margin-bottom:10px;box-shadow:0 5px 0 #CC7700,0 8px 20px rgba(255,180,0,.4);">⚡ Activate Now!</button>',
        '<button onclick="document.getElementById(\'xpBoostConfirmPop\').remove()" style="width:100%;padding:10px;background:transparent;border:1px solid rgba(255,255,255,.15);border-radius:12px;color:rgba(255,255,255,.5);font-family:\'Fredoka One\',sans-serif;font-size:14px;cursor:pointer;">Baad Mein</button>',
      '</div>'
    ].join('');
    document.body.appendChild(pop);
    pop.addEventListener('click', function(e){ if(e.target===pop) pop.remove(); });
    document.getElementById('xpBoostConfirmYes').addEventListener('click', function(){
      pop.remove();
      _doActivate();
    });
  };

  function _doActivate(){
    saveBoost({ startedAt: Date.now(), usedDate: _todayKey() });
    updateBoostUI();
    if(typeof launchConfetti === 'function') launchConfetti();
    if(typeof showToast === 'function')
      showToast('⚡ 2x XP BOOST ACTIVE! 30 min ke liye!', '#FFD700');
    // Sound burst if available
    try{
      var ctx = window.AudioContext || window.webkitAudioContext;
      if(ctx){
        var c = new ctx();
        [523,659,784,1047].forEach(function(f,i){
          var o=c.createOscillator(), g=c.createGain();
          o.connect(g); g.connect(c.destination);
          o.frequency.value=f; o.type='sine';
          g.gain.setValueAtTime(0,c.currentTime+i*.1);
          g.gain.linearRampToValueAtTime(.3,c.currentTime+i*.1+.02);
          g.gain.exponentialRampToValueAtTime(.001,c.currentTime+i*.1+.25);
          o.start(c.currentTime+i*.1);
          o.stop(c.currentTime+i*.1+.3);
        });
      }
    }catch(e){}
    startBoostCountdown();
  }

  // ── Update boost UI on dashboard ──
  window.updateBoostUI = function(){
    var banner = document.getElementById('xpBoostBanner');
    var activateWrap = document.getElementById('xpBoostActivateBtn');
    var btnInner = document.getElementById('xpBoostBtnInner');
    var btnTitle = document.querySelector('.xpbtn-title');
    var btnSub = document.getElementById('xpBoostBtnSub');
    var btnTag = document.getElementById('xpBoostBtnTag');

    if(window.isXpBoostActive()){
      // Show active banner, hide activate btn
      if(banner) banner.classList.add('active');
      if(activateWrap) activateWrap.classList.remove('show');
    } else {
      // Hide banner, show activate btn
      if(banner) banner.classList.remove('active');
      if(activateWrap) activateWrap.classList.add('show');
      if(boostUsedToday()){
        // Already used today — disabled state
        if(btnInner){ btnInner.classList.add('used'); btnInner.onclick=function(){ if(typeof showToast==='function') showToast('⚡ Aaj ka Boost istemal ho chuka hai! Kal dobara milega.','#FF9500'); }; }
        if(btnTitle) btnTitle.textContent = 'XP Boost — Aaj Istemal Ho Gaya';
        if(btnSub) btnSub.textContent = 'Kal phir milega 🕐';
        if(btnTag){ btnTag.textContent = 'USED'; btnTag.style.background='rgba(255,255,255,.07)'; btnTag.style.borderColor='rgba(255,255,255,.1)'; btnTag.style.color='var(--mut)'; }
      } else {
        // Available
        if(btnInner){ btnInner.classList.remove('used'); btnInner.onclick=function(){ window.activateXpBoost(); }; }
        if(btnTitle) btnTitle.textContent = 'XP Double Power-Up!';
        if(btnSub) btnSub.textContent = '30 min of 2x XP — once per day';
        if(btnTag){ btnTag.textContent = 'ACTIVATE'; btnTag.style.background=''; btnTag.style.borderColor=''; btnTag.style.color=''; }
      }
    }
  };

  // ── Countdown ticker ──
  var _boostInterval = null;
  function startBoostCountdown(){
    if(_boostInterval) clearInterval(_boostInterval);
    _boostInterval = setInterval(function(){
      var rem = boostRemaining();
      var timerEl = document.getElementById('xpBoostTimerText');
      if(rem > 0){
        if(timerEl) timerEl.textContent = '⚡ 2x XP — ' + fmtTime(rem);
      } else {
        clearInterval(_boostInterval);
        updateBoostUI();
        if(typeof showToast === 'function')
          showToast('⚡ XP Boost khatam ho gaya! Lesson karo aur kal dobara lo.', '#FF9500');
      }
    }, 1000);
  }

  // ── Patch finishLesson to double XP when boost active ──
  function _patchFinishLessonForBoost(){
    if(typeof window.finishLesson !== 'function'){
      setTimeout(_patchFinishLessonForBoost, 400);
      return;
    }
    var _prevFL = window.finishLesson;
    window.finishLesson = function(b){
      // Run original first — XP gets added inside _prevFL
      if(window.isXpBoostActive()){
        // Capture XP before
        var cs = (typeof CS === 'function') ? CS() : null;
        var xpBefore = cs ? cs.xp : 0;
        _prevFL.apply(this, arguments);
        // Now add the same amount again (doubling it)
        cs = (typeof CS === 'function') ? CS() : null;
        if(cs){
          var gained = cs.xp - xpBefore;
          if(gained > 0){
            cs.xp += gained; // double!
            if(typeof save === 'function') save();
            // Show doubled XP popup
            setTimeout(function(){
              var xppEl = b ? b.querySelector('.xpp') : null;
              if(xppEl) xppEl.innerHTML = '<span style="color:#FFD700;text-shadow:0 0 12px rgba(255,200,0,.6);">⚡ +'+(gained*2)+' XP (2x Boost!) ⭐⭐</span>';
              // Floating popup
              try{
                var p = document.createElement('div');
                p.className = 'xp-popup-double';
                p.textContent = '⚡ +'+gained+' BONUS XP!';
                p.style.left = (window.innerWidth/2 - 70)+'px';
                p.style.top = (window.innerHeight/2 - 60)+'px';
                document.body.appendChild(p);
                setTimeout(function(){ p.remove(); }, 1500);
              }catch(e2){}
            }, 300);
          }
        }
      } else {
        _prevFL.apply(this, arguments);
      }
    };
  }

  // ── Init on DOM ready ──
  function _init(){
    updateBoostUI();
    // If boost was active before page load, resume countdown
    if(window.isXpBoostActive()) startBoostCountdown();
    // Patch finishLesson
    _patchFinishLessonForBoost();
    // Re-run updateBoostUI whenever dashboard renders
    var _origRenderDash = window.renderDash;
    if(typeof _origRenderDash === 'function'){
      window.renderDash = function(){
        var r = _origRenderDash.apply(this, arguments);
        setTimeout(updateBoostUI, 100);
        return r;
      };
    } else {
      // renderDash not ready — patch it when it appears
      setTimeout(function(){
        var _origRD = window.renderDash;
        if(typeof _origRD === 'function'){
          window.renderDash = function(){
            var r = _origRD.apply(this, arguments);
            setTimeout(updateBoostUI, 100);
            return r;
          };
        }
      }, 2000);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    setTimeout(_init, 500);
  }

})();