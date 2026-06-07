// ══════════════════════════════════════════════════
// SpeakUp v8 — 18-goal-modal.js
// Daily Goal Modal — set and track goals
// ══════════════════════════════════════════════════

// ── Constants ──
// ── Profile/User specific goal keys ──
function _goalUid(){
  try{
    // ✅ FIX: S.activeProfile kabhi set nahi hota — ACTIVE_PID use karo
    // Pehle Firebase UID, phir ACTIVE_PID (profile ke liye unique key)
    var uid = (window.FB_AUTH && window.FB_AUTH.currentUser)
      ? window.FB_AUTH.currentUser.uid
      : 'guest';
    var pid = (typeof ACTIVE_PID !== 'undefined' && ACTIVE_PID)
      ? ACTIVE_PID
      : ((typeof S !== 'undefined' && S && S.id) ? S.id : 'p0');
    return uid + '_' + pid;
  } catch(e){ return 'guest_p0'; }
}

var GOAL_KEY        = 'su_daily_goal';
var GOAL_TODAY_KEY  = 'su_goal_today_mins';
var GOAL_TODAY_DATE = 'su_goal_today_date';
var GOAL_STREAK_KEY = 'su_goal_streak';
var GOAL_TOTAL_KEY  = 'su_goal_total_mins';

// ── Dynamic keys — per user per profile ──
function _gKey(base){ return base + '_' + _goalUid(); }

var _goalTimer = null;       // setInterval handle for active session
var _goalSessionStart = null;// Date.now() when session began

// ── Helper: today's YYYY-MM-DD string ──
function _goalToday() {
  var d = new Date();
  return d.toLocaleDateString('en-PK', {timeZone:'Asia/Karachi'});
}

// ── Reset today's mins if it's a new day ──
function _goalCheckDay() {
  var saved = localStorage.getItem(_gKey(GOAL_TODAY_DATE));
  var today = _goalToday();
  if (saved !== today) {
    var yesterday = parseInt(localStorage.getItem(_gKey(GOAL_TODAY_KEY)) || '0');
    var goal      = parseInt(localStorage.getItem(_gKey(GOAL_KEY)) || '30');
    if (saved && yesterday >= goal) {
      var streak = parseInt(localStorage.getItem(_gKey(GOAL_STREAK_KEY)) || '0');
      localStorage.setItem(_gKey(GOAL_STREAK_KEY), String(streak + 1));
    } else if (saved) {
      localStorage.setItem(_gKey(GOAL_STREAK_KEY), '0');
    }
    localStorage.setItem(_gKey(GOAL_TODAY_DATE), today);
    localStorage.setItem(_gKey(GOAL_TODAY_KEY), '0');
  }
}

// ── Get today's mins ──
function getGoalTodayMins() {
  _goalCheckDay();
  return parseInt(localStorage.getItem(_gKey(GOAL_TODAY_KEY)) || '0');
}

// ── Get goal target (mins) ──
function getGoalTarget() {
  return parseInt(localStorage.getItem(_gKey(GOAL_KEY)) || '30');
}

// ── Add mins to today (called on lesson end) ──
function addGoalMins(mins) {
  if (!mins || mins <= 0) return;
  _goalCheckDay();
  var prevMins = getGoalTodayMins();
  var target   = getGoalTarget();
  var total = parseInt(localStorage.getItem(_gKey(GOAL_TOTAL_KEY)) || '0');
  var newVal = prevMins + Math.round(mins);
  localStorage.setItem(_gKey(GOAL_TODAY_KEY), String(newVal));
  localStorage.setItem(_gKey(GOAL_TOTAL_KEY), String(total + Math.round(mins)));

  if (prevMins < target && newVal >= target) {
    _onGoalComplete(target);
  }

  updateGoalRing();
}

// ── Goal complete hone pe celebration ──
function _onGoalComplete(targetMins) {
  var totalComp = parseInt(localStorage.getItem(_gKey('su_goal_total_completions')) || '0') + 1;
  localStorage.setItem(_gKey('su_goal_total_completions'), String(totalComp));

  if (targetMins >= 60) {
    var c60 = parseInt(localStorage.getItem(_gKey('su_goal_60min_count')) || '0') + 1;
    localStorage.setItem(_gKey('su_goal_60min_count'), String(c60));
  } else if (targetMins >= 30) {
    var c30 = parseInt(localStorage.getItem(_gKey('su_goal_30min_count')) || '0') + 1;
    localStorage.setItem(_gKey('su_goal_30min_count'), String(c30));
  }

  if (typeof checkNewAchievements === 'function') {
    var newBadges = checkNewAchievements();
    if (typeof renderAchievements === 'function') renderAchievements();
    if (typeof saveAchievementsToFirebase === 'function') saveAchievementsToFirebase();
  }

  setTimeout(function() { _showGoalCelebration(targetMins, totalComp); }, 400);
}

// ── Goal Celebration Popup ──
function _showGoalCelebration(targetMins, totalComp) {
  // Agar pehle se koi popup open hai toh skip
  if (document.getElementById('goalCelebPopup')) return;

  var streak = parseInt(localStorage.getItem(GOAL_STREAK_KEY) || '0');
  var msgs = [
    '🎉 Zabardast! Aaj ka goal mukammal!',
    '🔥 Kya baat hai! Goal complete!',
    '💪 Sher ho tum! Goal done!',
    '🏆 Laajawab! Goal poora ho gaya!'
  ];
  var msg = msgs[totalComp % msgs.length];

  var goalLabel = targetMins >= 60 ? '1 Ghanta 🚀' : targetMins + ' Minute ⏱️';

  var pop = document.createElement('div');
  pop.id = 'goalCelebPopup';
  pop.style.cssText = 'position:fixed;inset:0;z-index:99990;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);';
  pop.innerHTML = `
    <div id="goalCelebSheet" style="background:linear-gradient(160deg,#0D1B2A,#111827);border-radius:28px 28px 0 0;padding:28px 22px 40px;width:100%;max-width:460px;text-align:center;transform:translateY(100%);transition:transform .35s cubic-bezier(.34,1.2,.64,1);">
      <!-- Confetti row -->
      <div style="font-size:32px;letter-spacing:6px;margin-bottom:10px;">🎊🎯🎊</div>
      <!-- Main icon ring -->
      <div style="width:86px;height:86px;border-radius:50%;background:linear-gradient(135deg,#2EE59D,#1BC47D);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;box-shadow:0 0 32px rgba(46,229,157,.45);font-size:40px;">✅</div>
      <!-- Message -->
      <div style="font-family:'Fredoka One',sans-serif;font-size:22px;color:#fff;margin-bottom:6px;">${msg}</div>
      <div style="font-size:13px;color:rgba(255,255,255,.55);margin-bottom:18px;">Aaj ka goal: <b style="color:#2EE59D;">${goalLabel}</b> complete!</div>
      <!-- Stats row -->
      <div style="display:flex;gap:10px;margin-bottom:20px;">
        <div style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:12px 8px;">
          <div style="font-size:22px;font-weight:900;color:#FFD700;">${streak}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:2px;">Day Streak 🔥</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:12px 8px;">
          <div style="font-size:22px;font-weight:900;color:#2EE59D;">${totalComp}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:2px;">Total Goals ✅</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:12px 8px;">
          <div style="font-size:22px;font-weight:900;color:#C77FFF;">${parseInt(localStorage.getItem(GOAL_TOTAL_KEY)||'0')}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:2px;">Total Mins ⏱️</div>
        </div>
      </div>
      <!-- New badge (agar mila) -->
      <div id="goalCelebBadgeRow" style="display:none;background:rgba(255,215,0,.08);border:1.5px solid rgba(255,215,0,.3);border-radius:16px;padding:12px;margin-bottom:18px;font-size:13px;color:#FFD700;">
        🏅 Naya Badge Mila! <span id="goalCelebBadgeName" style="font-weight:800;"></span>
      </div>
      <!-- Close button -->
      <button onclick="document.getElementById('goalCelebPopup').remove()" style="width:100%;padding:14px;background:linear-gradient(135deg,#2EE59D,#1BC47D);border:none;border-radius:16px;color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 #13A066;">
        Shukriya! 🙌
      </button>
    </div>`;
  document.body.appendChild(pop);

  // Slide up animation
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      var sheet = document.getElementById('goalCelebSheet');
      if (sheet) sheet.style.transform = 'translateY(0)';
    });
  });

  // Naya badge check karke dikhao
  try {
    var newBadges = typeof checkNewAchievements === 'function' ? checkNewAchievements() : [];
    var goalBadges = newBadges.filter(function(b) { return b.id && b.id.indexOf('goal_') === 0; });
    if (goalBadges.length > 0) {
      var badgeRow = document.getElementById('goalCelebBadgeRow');
      var badgeName = document.getElementById('goalCelebBadgeName');
      if (badgeRow) badgeRow.style.display = 'block';
      if (badgeName) badgeName.textContent = goalBadges[0].icon + ' ' + goalBadges[0].name;
    }
  } catch(e) {}

  // 8 second baad auto close
  setTimeout(function() {
    var p = document.getElementById('goalCelebPopup');
    if (p) p.remove();
  }, 8000);
}

// ── Start session timer (call when lesson begins) ──
function goalSessionStart() {
  // Agar pehle se chal raha hai toh reset karo (double start prevention)
  if (_goalTimer) {
    clearInterval(_goalTimer);
    _goalTimer = null;
  }
  _goalSessionStart = Date.now();
  console.log('⏱️ Goal timer shuru hua');
  // Har 60 second pe ring update karo (live progress)
  _goalTimer = setInterval(function() {
    updateGoalRing();
  }, 60000);
}

// ── End session timer (call when lesson ends) ──
function goalSessionEnd() {
  if (!_goalSessionStart) return;
  var elapsedMs = Date.now() - _goalSessionStart;
  var elapsedMin = elapsedMs / 60000;
  clearInterval(_goalTimer);
  _goalTimer = null;
  // Sirf valid time add karo (min 10 sec, max 3 ghante per session)
  if (elapsedMin >= (10/60) && elapsedMin <= 180) {
    console.log('⏱️ Goal session end — ' + elapsedMin.toFixed(1) + ' min');
    addGoalMins(elapsedMin);
  }
  _goalSessionStart = null;
}

// ── Live elapsed mins (lesson chal rahi ho toh) ──
function goalGetLiveElapsed() {
  if (!_goalSessionStart) return 0;
  return (Date.now() - _goalSessionStart) / 60000;
}

// ── Set goal from settings card ──
function setDailyGoal(mins) {
  localStorage.setItem(_gKey(GOAL_KEY), String(mins));

  // Update active state on option cards
  [20, 30, 60].forEach(function(m) {
    var el = document.getElementById('goalOpt' + m);
    if (el) el.classList.toggle('active', m === mins);
  });

  // Update subtitle in settings card
  var sub = document.getElementById('stgGoalCurrentSub');
  var labels = { 20:'🌱 Casual — 20 min roz', 30:'🔥 Regular — 30 min roz', 60:'🚀 Intense — 1 ghanta roz' };
  if (sub) sub.textContent = labels[mins] || mins + ' min/din';

  // Update today bar in settings
  _renderSettingsGoalBar();

  // Update ring
  updateGoalRing();

  showToast('🎯 Goal set: ' + mins + ' min/din!', '#2EE59D');
}

// ── Render today's bar in settings card ──
function _renderSettingsGoalBar() {
  var mins   = getGoalTodayMins();
  var target = getGoalTarget();
  var pct    = Math.min(Math.round((mins / target) * 100), 100);

  var valEl  = document.getElementById('stgGoalTodayVal');
  var fillEl = document.getElementById('stgGoalTodayFill');
  if (valEl)  valEl.textContent  = mins + ' / ' + target + ' min';
  if (fillEl) fillEl.style.width = pct + '%';
}

// ── Sync settings goal card UI with saved state ──
function syncGoalSettingsUI() {
  var goal = getGoalTarget();
  [20, 30, 60].forEach(function(m) {
    var el = document.getElementById('goalOpt' + m);
    if (el) el.classList.toggle('active', m === goal);
  });
  var labels = { 20:'🌱 Casual — 20 min roz', 30:'🔥 Regular — 30 min roz', 60:'🚀 Intense — 1 ghanta roz' };
  var sub = document.getElementById('stgGoalCurrentSub');
  if (sub) sub.textContent = labels[goal] || goal + ' min/din';
  _renderSettingsGoalBar();
}

// ── Update the top-bar goal ring ──
function updateGoalRing() {
  // Live elapsed bhi include karo agar lesson chal rahi ho
  var liveMins = (typeof goalGetLiveElapsed === "function") ? goalGetLiveElapsed() : 0;
  var mins = getGoalTodayMins() + liveMins;
  var target = getGoalTarget();
  var pct    = Math.min(mins / target, 1);

  // SVG circle: circumference = 2*π*r = 2*3.14159*15 ≈ 94.25
  var circ   = 94.25;
  var offset = circ - (pct * circ);

  var fill   = document.getElementById('goalRingFill');
  var center = document.getElementById('goalRingCenter');
  var wrap   = document.getElementById('goalRingWrap');

  if (fill)   fill.style.strokeDashoffset = offset.toFixed(2);

  if (wrap) {
    if (pct >= 1) {
      wrap.classList.add('goal-done');
      if (center) center.textContent = '✅';
    } else if (pct > 0) {
      wrap.classList.remove('goal-done');
      if (center) center.textContent = '⏱️';
    } else {
      wrap.classList.remove('goal-done');
      if (center) center.textContent = '⏱️';
    }
  }
}

// ── Show goal modal ──
function showGoalModal() {
  var modal = document.getElementById('goalModal');
  if (!modal) return;
  modal.style.display = 'flex';

  var mins   = getGoalTodayMins();
  var target = getGoalTarget();
  var total  = parseInt(localStorage.getItem(GOAL_TOTAL_KEY) || '0');
  var streak = parseInt(localStorage.getItem(GOAL_STREAK_KEY) || '0');
  var left   = Math.max(target - mins, 0);
  var pct    = Math.min(mins / target, 1);

  // Circumference = 2*π*55 ≈ 345.4
  var circ   = 345.4;
  var offset = circ - (pct * circ);

  // Animate arc after short delay
  setTimeout(function() {
    var arc = document.getElementById('modalGoalArc');
    if (arc) arc.style.strokeDashoffset = offset.toFixed(2);
  }, 80);

  var doneEl  = document.getElementById('modalGoalMinsDone');
  var targEl  = document.getElementById('modalGoalTarget');
  var msgEl   = document.getElementById('modalGoalMsg');
  var subEl   = document.getElementById('goalModalSub');
  var strEl   = document.getElementById('modalGoalStreak');
  var leftEl  = document.getElementById('modalGoalLeft');
  var totalEl = document.getElementById('modalGoalTotal');

  if (doneEl)  doneEl.textContent  = mins;
  if (targEl)  targEl.textContent  = target;
  if (strEl)   strEl.textContent   = streak;
  if (leftEl)  leftEl.textContent  = left;
  if (totalEl) totalEl.textContent = total;

  var msgs = [
    { t:1,   m:'🎉 Mubarak! Aaj ka goal poora! 🏆' },
    { t:.75, m:'💪 Ekdum qareeb! Thodi aur mehnat!' },
    { t:.5,  m:'🔥 Adha ho gaya! Zabardast!' },
    { t:.25, m:'🌱 Acha shuru! Jaari raho!' },
    { t:0,   m:'✨ Aaj shuru karo! Goal rakho!' }
  ];
  var msg = msgs[msgs.length - 1];
  for (var i = 0; i < msgs.length; i++) {
    if (pct >= msgs[i].t) { msg = msgs[i]; break; }
  }
  if (msgEl) msgEl.textContent = msg.m;

  var goalLabels = { 20:'🌱 Casual goal — 20 min', 30:'🔥 Regular goal — 30 min', 60:'🚀 Intense goal — 60 min' };
  if (subEl) subEl.textContent = goalLabels[target] || target + ' min/din';
}

// ── Close goal modal ──
function closeGoalModal() {
  var modal = document.getElementById('goalModal');
  if (modal) modal.style.display = 'none';
  // Reset arc for next open animation
  var arc = document.getElementById('modalGoalArc');
  if (arc) arc.style.strokeDashoffset = '345.4';
}

// ── Hook into existing lesson flow ──
// Patch goLesson to start timer, and markL / exitLesson to end it
(function patchLessonForGoal() {
  function tryPatch() {
    if (typeof window.goLesson === 'function' && typeof window.exitLesson === 'function') {
      var _origGoLesson = window.goLesson;
      window.goLesson = function() {
        goalSessionStart();
        _origGoLesson.apply(this, arguments);
      };

      var _origExitLesson = window.exitLesson;
      window.exitLesson = function() {
        goalSessionEnd();
        _origExitLesson.apply(this, arguments);
        updateGoalRing();
      };

      // markL patch — fake 2 min hatao, sirf ring update karo
      if (typeof window.markL === 'function') {
        var _origMarkL = window.markL;
        window.markL = function() {
          _origMarkL.apply(this, arguments);
          // Sirf UI update — real time session end pe add hoti hai
          updateGoalRing();
        };
      }
    } else {
      setTimeout(tryPatch, 300);
    }
  }
  tryPatch();
})();

// ── Also patch renderSettingsScreen to sync goal UI ──
(function patchSettingsForGoal() {
  function tryPatch() {
    if (typeof window.renderSettingsScreen === 'function') {
      var _orig = window.renderSettingsScreen;
      window.renderSettingsScreen = function() {
        _orig.apply(this, arguments);
        // After settings renders, sync goal card
        setTimeout(syncGoalSettingsUI, 50);
      };
    } else {
      setTimeout(tryPatch, 200);
    }
  }
  tryPatch();
})();

// ── Init on DOM ready ──
(function initGoalSystem() {
  function run() {
    _goalCheckDay();
    updateGoalRing();
    if (!localStorage.getItem(_gKey(GOAL_KEY))) {
      localStorage.setItem(_gKey(GOAL_KEY), '30');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  // Refresh ring every minute (in case lesson is ongoing)
  setInterval(updateGoalRing, 60000);
})();