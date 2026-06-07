// ══════════════════════════════════════════════════
// SpeakUp v8 — 24-streak-screen.js
// Streak Screen — streak display and freezes
// ══════════════════════════════════════════════════

// ════════════════════════════════════════
// 🔥 STREAK SCREEN
// ════════════════════════════════════════
function showStreakScreen(){
  renderStreakScreen();
  showScreen('streakScreen');
}

function renderStreakScreen(){
  var body = document.getElementById('streakScreenBody');
  if(!body) return;

  var cs2  = CS();
  var streak = cs2.streak || 0;
  var isp  = isPro();

  // Streak freeze count
  var freezeCount = 0;
  try{
    var fd = JSON.parse(localStorage.getItem('speakup_streak_freeze')||'{"count":0}');
    freezeCount = fd.count || 0;
  }catch(e){}

  // Milestones
  var MS = [
    {days:3,   emoji:'🔥',  badge:'🥉 3-Day Streak!'},
    {days:7,   emoji:'🔥🔥',badge:'🥈 1 Week Streak!'},
    {days:14,  emoji:'💥',  badge:'🏅 2-Week Fire!'},
    {days:30,  emoji:'⚡',  badge:'🥇 Month Master!'},
    {days:60,  emoji:'🌟',  badge:'💎 Diamond Streak!'},
    {days:100, emoji:'👑',  badge:'👑 Legend Mode!'},
  ];

  // Next milestone
  var nextMS = null;
  for(var i=0;i<MS.length;i++){ if(MS[i].days > streak){ nextMS=MS[i]; break; } }
  var daysToNext = nextMS ? nextMS.days - streak : 0;

  // Streak message
  var msg = streak===0 ? 'Aaj pehla din shuru karo! 🌟'
           : streak<5  ? 'Acha shuru! Jaari raho 💪'
           : streak<10 ? 'Maza aa raha hai! Rokna mat 🔥'
           : streak<30 ? 'Koi nahi rok sakta tujhe! ⚡'
           : streak<60 ? 'Ek mahine ka ustaa! 🏆'
           :             'Tum legend ho! 👑';

  var html = '';

  // ── Big streak display ──
  html += '<div style="background:linear-gradient(135deg,rgba(255,150,0,.12),rgba(255,80,0,.06));border:2px solid rgba(255,150,0,.4);border-radius:22px;padding:22px 18px;margin-bottom:14px;text-align:center;">';
  html += '<div style="font-size:11px;color:rgba(255,150,0,.8);font-weight:800;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;">MERI STREAK</div>';
  html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:64px;line-height:1;animation:streakFire 1.5s ease infinite;">'+(streak>0?'🔥':'💤')+'</div>';
  html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:52px;color:var(--o);line-height:1.1;margin-top:4px;">'+streak+'</div>';
  html += '<div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;">Day Streak</div>';
  html += '<div style="font-size:14px;color:#fff;margin-top:10px;font-family:\'Fredoka One\',sans-serif;">'+msg+'</div>';
  html += '</div>';

  // ── Next milestone progress ──
  if(nextMS){
    var prog = Math.min(100, Math.round((streak / nextMS.days)*100));
    html += '<div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.08);border-radius:18px;padding:16px 18px;margin-bottom:14px;">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">';
    html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#fff;">Next Milestone</div>';
    html += '<div style="font-size:13px;color:var(--o);font-weight:700;">'+daysToNext+' din baaki</div>';
    html += '</div>';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">';
    html += '<div style="font-size:28px;">'+nextMS.emoji+'</div>';
    html += '<div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:15px;color:var(--o);">'+nextMS.badge+'</div>';
    html += '<div style="font-size:11px;color:rgba(255,255,255,.4);">'+nextMS.days+' din lgataar seekho</div></div>';
    html += '</div>';
    html += '<div style="height:8px;background:rgba(255,255,255,.07);border-radius:8px;overflow:hidden;">';
    html += '<div style="height:100%;width:'+prog+'%;background:linear-gradient(90deg,#FF6B00,#FF9A3C);border-radius:8px;transition:width 1s ease;"></div>';
    html += '</div>';
    html += '<div style="font-size:10px;color:rgba(255,255,255,.35);margin-top:4px;">'+streak+' / '+nextMS.days+' din ('+prog+'%)</div>';
    html += '</div>';
  } else {
    html += '<div style="background:rgba(255,215,0,.1);border:1.5px solid rgba(255,215,0,.4);border-radius:18px;padding:14px 18px;margin-bottom:14px;text-align:center;">';
    html += '<div style="font-size:28px;margin-bottom:6px;">👑</div>';
    html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#FFD700;">Sab Milestones Haasil! Legend Ho Tum!</div>';
    html += '</div>';
  }

  // ── Streak Freeze (Pro) ──
  if(isp){
    html += '<div class="ss-freeze-card">';
    html += '<div style="display:flex;align-items:center;gap:12px;">';
    html += '<div style="font-size:32px;">🧊</div>';
    html += '<div style="flex:1;">';
    html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:15px;color:#5B8DEF;margin-bottom:3px;">Streak Freeze</div>';
    html += '<div style="font-size:12px;color:rgba(255,255,255,.5);">Streak doesn&#39;t break on one missed day</div>';
    html += '</div>';
    html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:22px;color:#5B8DEF;flex-shrink:0;">'+freezeCount+'</div>';
    html += '</div>';
    if(freezeCount > 0){
      html += '<div style="margin-top:10px;background:rgba(91,141,239,.12);border-radius:10px;padding:8px 12px;font-size:12px;color:rgba(255,255,255,.6);">✅ Aapke paas '+freezeCount+' Streak Freeze hain — safe ho!</div>';
    } else {
      html += '<div style="margin-top:10px;background:rgba(255,75,75,.1);border-radius:10px;padding:8px 12px;font-size:12px;color:rgba(255,100,100,.8);">⚠️ No freezes left — learn tomorrow!</div>';
    }
    html += '<div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:8px;">Pro users ko har hafte 2 naye freezes milte hain (max 5)</div>';
    html += '</div>';
  } else {
    // Free user — freeze promote
    html += '<div style="background:linear-gradient(135deg,rgba(91,141,239,.1),rgba(91,141,239,.04));border:1.5px dashed rgba(91,141,239,.4);border-radius:18px;padding:16px 18px;margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">';
    html += '<div style="font-size:28px;">🧊</div>';
    html += '<div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#5B8DEF;margin-bottom:2px;">Streak Freeze — Pro Feature</div>';
    html += '<div style="font-size:12px;color:rgba(255,255,255,.4);">Streak doesn&#39;t break on one missed day</div></div>';
    html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:11px;color:rgba(255,255,255,.3);flex-shrink:0;background:rgba(255,255,255,.06);border-radius:8px;padding:3px 8px;">🔒 Pro</div>';
    html += '</div>';
    html += '<button onclick="showProScreen();" style="width:100%;padding:11px;background:linear-gradient(135deg,#5B8DEF,#3A6BD4);border:none;border-radius:12px;font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#fff;cursor:pointer;">👑 Pro Lo — Streak Freeze Pao</button>';
    html += '</div>';
  }

  // ── All Milestones ──
  html += '<div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.08);border-radius:18px;padding:16px 18px;margin-bottom:12px;">';
  html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:var(--o);margin-bottom:12px;">🏆 Saare Milestones</div>';
  MS.forEach(function(m){
    var reached = streak >= m.days;
    html += '<div class="ss-milestone-row '+(reached?'reached':'locked')+'">';
    html += '<div class="ss-ms-ico">'+m.emoji+'</div>';
    html += '<div style="flex:1;"><div class="ss-ms-badge">'+m.badge+'</div>';
    html += '<div class="ss-ms-days">'+m.days+' din lgataar</div></div>';
    html += '<div class="ss-ms-tick">'+(reached?'✅':'🔒')+'</div>';
    html += '</div>';
  });
  html += '</div>';

  // ── Tips ──
  html += '<div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.08);border-radius:18px;padding:16px 18px;margin-bottom:12px;">';
  html += '<div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:var(--o);margin-bottom:4px;">💡 Streak Kaise Barhayen</div>';
  [
    {ico:'📅',txt:'Har roz ek lesson zaroor karo — chahe chhota ho'},
    {ico:'⏰',txt:'Ek waqt set karo — subah ya raat, routine bano'},
    {ico:'🎯',txt:'Pre-Class quiz bhi streak mein count hota hai'},
    {ico:'🧊',txt:'Pro: Streak Freeze use karo agar din miss ho'},
    {ico:'🔔',txt:'Notification on rakho — reminder milega'},
  ].forEach(function(t){
    html += '<div class="ss-tip-row"><div class="ss-tip-ico">'+t.ico+'</div><div style="font-size:13px;color:rgba(255,255,255,.65);line-height:1.5;">'+t.txt+'</div></div>';
  });
  html += '</div>';

  body.innerHTML = html;
}