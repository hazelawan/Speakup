// ══════════════════════════════════════════════════
// SpeakUp v8 — 23-heart-screen.js
// Heart Screen — free user heart display
// ══════════════════════════════════════════════════

// ════════════════════════════════════════
// ❤️ HEART SCREEN
// ════════════════════════════════════════
function showHeartScreen(){
  renderHeartScreen();
  showScreen('heartScreen');
}
function renderHeartScreen(){
  var body=document.getElementById('heartScreenBody');
  if(!body) return;
  var isFree=!isPro();
  var isUnlim=!isFree&&isUnlimitedHearts();
  var regenMs=3*60*1000;
  var freeHLeft=5;
  if(isFree){
    try{
      var hs=JSON.parse(localStorage.getItem('su_hearts_v1')||'null')||{hearts:5,lastLostAt:null};
      if(hs.lastLostAt){ var rg=Math.floor((Date.now()-hs.lastLostAt)/regenMs); if(rg>0) hs.hearts=Math.min(5,hs.hearts+rg); }
      freeHLeft=Math.max(0,Math.min(5,hs.hearts));
    }catch(e){}
  }
  var proH=getAdminMaxHearts();
  if(!isFree&&!isUnlim){ try{ proH=Math.max(0,CS().hearts!==undefined?CS().hearts:proH); }catch(e){} }

  var html='';
  // Big hearts display
  html+='<div style="background:linear-gradient(135deg,rgba(255,75,75,.1),rgba(255,75,75,.04));border:2px solid rgba(255,75,75,.3);border-radius:22px;padding:20px 18px 18px;margin-bottom:14px;text-align:center;">';
  html+='<div style="font-size:12px;color:rgba(255,75,75,.8);font-weight:800;text-transform:uppercase;letter-spacing:.8px;margin-bottom:12px;">ABHI KE HEARTS</div>';
  html+='<div class="hs-hearts-row">';
  if(isUnlim){
    html+='<span style="font-size:44px;">♾️</span>';
  } else {
    var total=isFree?5:getAdminMaxHearts(), left=isFree?freeHLeft:proH;
    for(var i=0;i<total;i++) html+='<span class="hs-heart'+(i>=left?' lost':'')+'">❤️</span>';
  }
  html+='</div>';
  if(isUnlim){ html+='<div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#2EE59D;margin-top:8px;">Unlimited — koi tension nahi!</div>'; }
  else { var lc=isFree?freeHLeft:proH, mc=isFree?5:getAdminMaxHearts(); html+='<div style="font-family:\'Fredoka One\',sans-serif;font-size:20px;color:#FF4B4B;margin-top:8px;">'+lc+' / '+mc+' Hearts</div>'; }
  html+='</div>';

  // Free regen timer — sirf tab dikhe jab hearts < 5 hon
  if(isFree && freeHLeft < 5){
    try{
      var hs2=JSON.parse(localStorage.getItem('su_hearts_v1')||'{}');
      var diff=hs2.lastLostAt?Math.max(0,(hs2.lastLostAt+regenMs)-Date.now()):0;
      var mm=Math.floor(diff/60000),ss=Math.floor((diff%60000)/1000);
      html+='<div class="hs-regen-card"><div style="display:flex;align-items:center;gap:10px;"><div style="font-size:26px;">⏳</div><div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#FF4B4B;margin-bottom:3px;">Next Heart Refills In</div><div style="font-family:\'Fredoka One\',sans-serif;font-size:22px;color:#fff;" id="hsRegenTimer">'+mm+':'+(ss<10?'0':'')+ss+'</div><div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:2px;">1 heart regenerates every 3 minutes</div></div></div></div>';
    }catch(e){}
  }
  // Puray hearts houn toh "Full" message
  if(isFree && freeHLeft >= 5){
    html+='<div style="background:rgba(46,229,157,.08);border:1.5px solid rgba(46,229,157,.35);border-radius:16px;padding:14px 18px;margin-bottom:12px;display:flex;align-items:center;gap:10px;"><div style="font-size:24px;">✅</div><div style="font-family:\'Fredoka One\',sans-serif;font-size:15px;color:#2EE59D;">Hearts Full! Start the lesson!</div></div>';
  }

  // How hearts work
  html+='<div class="hs-info-card"><div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#FF4B4B;margin-bottom:12px;">💡 Hearts Kaise Kaam Karte Hain</div>';
  var infoRows = isFree ? [
    {ico:'❌',txt:'Wrong jawab dene pe 1 heart ghatta hai',val:'–1 ❤️'},
    {ico:'⏳',txt:'Har 3 minute mein 1 heart wapas aata hai',val:'+1 ❤️'},
    {ico:'💔',txt:'Sab hearts khatam — lesson ruk jaata hai',val:'Game Over'},
    {ico:'👑',txt:'Pro lo — unlimited hearts, koi rukawat nahi',val:'Pro'},
  ] : [
    {ico:'❌',txt:'Wrong jawab dene pe 1 heart ghatta hai',val:'–1 ❤️'},
    {ico:'🏠',txt:'Dashboard pe aane se hearts reset ho jaate hain',val:'Reset'},
    {ico:'💔',txt:'Sab hearts khatam — lesson ruk jaata hai',val:'Game Over'},
  ];
  infoRows.forEach(function(r){
    html+='<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);"><div style="font-size:20px;width:28px;text-align:center;">'+r.ico+'</div><div style="flex:1;font-size:13px;color:rgba(255,255,255,.65);">'+r.txt+'</div><div style="font-family:\'Fredoka One\',sans-serif;font-size:13px;color:#FF4B4B;flex-shrink:0;">'+r.val+'</div></div>';
  });
  html+='</div>';

  // Pro upgrade or mode toggle
  if(isFree){
    html+='<div style="background:linear-gradient(135deg,rgba(255,215,0,.1),rgba(255,130,0,.06));border:2px solid rgba(255,215,0,.4);border-radius:18px;padding:18px;text-align:center;margin-bottom:14px;"><div style="font-size:32px;margin-bottom:8px;">👑</div><div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#FFD700;margin-bottom:6px;">Pro Lo — Unlimited Hearts</div><div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:14px;">No more worry — learn as much as you want!</div><button onclick="showProScreen();" style="background:linear-gradient(135deg,#FFD700,#FF9500);border:none;border-radius:14px;padding:12px 28px;font-family:\'Fredoka One\',sans-serif;font-size:15px;color:#000;cursor:pointer;box-shadow:0 4px 16px rgba(255,200,0,.4);">🚀 Pro Upgrade</button></div>';
  } else {
    var cur=getHeartMode();
    html+='<div class="hs-info-card"><div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#CE82FF;margin-bottom:12px;">⚙️ Heart Mode — Pro</div>';
    html+='<div class="hs-mode-card" onclick="setHeartMode(\'unlimited\');renderHeartScreen();" style="background:'+(cur==='unlimited'?'rgba(46,229,157,.1)':'rgba(255,255,255,.03)')+';border:2px solid '+(cur==='unlimited'?'#2EE59D':'rgba(255,255,255,.1')+');">';
    html+='<div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">♾️</span><div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#fff;">Unlimited Hearts</div><div style="font-size:12px;color:rgba(255,255,255,.4);">Make mistakes — lesson never stops</div></div>'+(cur==='unlimited'?'<span style="font-size:18px;">✅</span>':'')+'</div></div>';
    html+='<div class="hs-mode-card" onclick="setHeartMode(\'5hearts\');renderHeartScreen();" style="background:'+(cur==='5hearts'?'rgba(255,75,75,.1)':'rgba(255,255,255,.03)')+';border:2px solid '+(cur==='5hearts'?'#FF4B4B':'rgba(255,255,255,.1')+');">';
    html+='<div style="display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">❤️</span><div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:#fff;">5 Hearts Mode</div><div style="font-size:12px;color:rgba(255,255,255,.4);">5 mistakes ends lesson — challenge mode</div></div>'+(cur==='5hearts'?'<span style="font-size:18px;">✅</span>':'')+'</div></div>';
    html+='</div>';
  }

  body.innerHTML=html;

  // Start regen countdown
  if(isFree&&freeHLeft<5){
    setTimeout(function(){
      var tel=document.getElementById('hsRegenTimer');
      if(!tel) return;
      var iv=setInterval(function(){
        if(!document.getElementById('hsRegenTimer')){clearInterval(iv);return;}
        var h3=JSON.parse(localStorage.getItem('su_hearts_v1')||'{}');
        if(!h3.lastLostAt){tel.textContent='Tayar! ✅';clearInterval(iv);return;}
        var d=Math.max(0,(h3.lastLostAt+regenMs)-Date.now());
        var m=Math.floor(d/60000),s=Math.floor((d%60000)/1000);
        tel.textContent=m+':'+(s<10?'0':'')+s;
        if(d===0) clearInterval(iv);
      },1000);
    },100);
  }
}

// ════════════════════════════════════════
// ⭐ XP SCREEN
// ════════════════════════════════════════
function showXpScreen(){
  renderXpScreen();
  showScreen('xpScreen');
}
function renderXpScreen(){
  var body=document.getElementById('xpScreenBody');
  if(!body) return;
  var cs2=CS();
  var myXP=cs2.xp||0;
  var lessonsD=cs2.done?cs2.done.length:0;
  var streak2=cs2.streak||0;

  var LG=[
    {id:'bronze',name:'Bronze League',icon:'🥉',color:'#CD7F32',minXP:0},
    {id:'silver',name:'Silver League',icon:'🥈',color:'#C0C0C0',minXP:500},
    {id:'gold',  name:'Gold League',  icon:'🥇',color:'#FFD700',minXP:1500},
    {id:'diamond',name:'Diamond League',icon:'💎',color:'#9FFFFF',minXP:5000},
  ];
  var myL=LG[0];
  for(var i=LG.length-1;i>=0;i--){if(myXP>=LG[i].minXP){myL=LG[i];break;}}
  var nxtL=null;
  for(var j=0;j<LG.length;j++){if(LG[j].minXP>myXP){nxtL=LG[j];break;}}
  var prog=100,xpToNext=0;
  if(nxtL){var tot=nxtL.minXP-myL.minXP,dn=myXP-myL.minXP;prog=Math.min(100,Math.round((dn/tot)*100));xpToNext=nxtL.minXP-myXP;}

  var html='';
  // Big XP
  html+='<div style="background:linear-gradient(135deg,rgba(206,130,255,.12),rgba(91,141,239,.08));border:2px solid rgba(206,130,255,.35);border-radius:22px;padding:22px 18px;margin-bottom:14px;text-align:center;">';
  html+='<div style="font-size:11px;color:rgba(206,130,255,.8);font-weight:800;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px;">TOTAL XP</div>';
  html+='<div style="font-family:\'Fredoka One\',sans-serif;font-size:52px;color:#CE82FF;line-height:1;">'+myXP+'</div>';
  html+='<div style="font-size:13px;color:rgba(255,255,255,.4);margin-top:4px;">⭐ Experience Points</div></div>';

  // Stats
  html+='<div class="xs-stat-row">';
  html+='<div class="xs-stat"><div class="xs-stat-val">'+lessonsD+'</div><div class="xs-stat-lbl">📚 Lessons Mukamal</div></div>';
  html+='<div class="xs-stat"><div class="xs-stat-val">'+streak2+'</div><div class="xs-stat-lbl">🔥 Day Streak</div></div>';
  html+='</div>';

  // League
  html+='<div class="xs-league-badge" style="background:linear-gradient(135deg,'+myL.color+'18,'+myL.color+'08);border:2px solid '+myL.color+'55;">';
  html+='<div style="font-size:40px;">'+myL.icon+'</div><div style="flex:1;">';
  html+='<div style="font-size:11px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px;">MERI LEAGUE</div>';
  html+='<div style="font-family:\'Fredoka One\',sans-serif;font-size:18px;color:'+myL.color+';">'+myL.name+'</div>';
  if(nxtL){
    html+='<div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:4px;">'+xpToNext+' XP aur chahiye → '+nxtL.name+'</div>';
    html+='<div style="margin-top:8px;height:6px;background:rgba(255,255,255,.08);border-radius:6px;overflow:hidden;"><div style="height:100%;width:'+prog+'%;background:linear-gradient(90deg,'+myL.color+','+nxtL.color+');border-radius:6px;"></div></div>';
    html+='<div style="font-size:10px;color:rgba(255,255,255,.35);margin-top:3px;">'+prog+'% complete</div>';
  } else {
    html+='<div style="font-size:12px;color:#9FFFFF;margin-top:4px;">🏆 Max League! Zabardast!</div>';
  }
  html+='</div></div>';

  // All leagues
  html+='<div class="xs-how-card"><div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#CE82FF;margin-bottom:12px;">🏆 Saari Leagues</div>';
  LG.forEach(function(l){
    var isA=l.id===myL.id, isP=myXP>=l.minXP;
    html+='<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;margin-bottom:8px;'+(isA?'background:'+l.color+'18;border:1.5px solid '+l.color+'55;':'background:rgba(255,255,255,.03);border:1.5px solid rgba(255,255,255,.07);')+'">';
    html+='<span style="font-size:24px;'+(isP?'':'filter:grayscale(1);opacity:.4;')+'">'+l.icon+'</span>';
    html+='<div style="flex:1;"><div style="font-family:\'Fredoka One\',sans-serif;font-size:14px;color:'+(isA?l.color:isP?'#fff':'rgba(255,255,255,.4)')+';">'+l.name+'</div>';
    html+='<div style="font-size:11px;color:rgba(255,255,255,.35);">'+l.minXP+'+ XP'+(isA?' — Abhi Yahan Ho!':isP?' ✅':'')+'</div></div>';
    if(isA) html+='<span style="font-size:16px;">👈</span>';
    html+='</div>';
  });
  html+='</div>';

  // How to earn XP
  html+='<div class="xs-how-card"><div style="font-family:\'Fredoka One\',sans-serif;font-size:16px;color:#CE82FF;margin-bottom:4px;">💡 XP Kaise Kamao</div>';
  [{ico:'📚',txt:'Lesson mukamal karo',val:'+XP'},
   {ico:'🎯',txt:'Pre-Class quiz karo',val:'+50'},
   {ico:'🔥',txt:'Streak active rakho',val:'Bonus'},
   {ico:'⚡',txt:'XP Boost activate karo',val:'2x'},
   {ico:'🧩',txt:'Puzzle solve karo',val:'+30'},
   {ico:'📝',txt:'Past paper attempt karo',val:'+XP'},
  ].forEach(function(w){
    html+='<div class="xs-how-row"><div class="xs-how-ico">'+w.ico+'</div><div style="flex:1;font-size:13px;color:rgba(255,255,255,.65);">'+w.txt+'</div><div class="xs-how-val">'+w.val+'</div></div>';
  });
  html+='</div>';

  body.innerHTML=html;
}