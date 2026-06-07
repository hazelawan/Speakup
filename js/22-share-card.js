// ══════════════════════════════════════════════════
// SpeakUp v8 — 22-share-card.js
// Share Card — canvas-based progress share
// ══════════════════════════════════════════════════

(function(){

  // ── Emoji flag → unicode-safe render via fillText ──
  // Canvas mein emoji flags seedha kaam karte hain on most platforms
  // but we render them as text overlays on colored bg

  // ── Draw rounded rect helper ──
  function rRect(ctx, x, y, w, h, r){
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
  }

  // ── Draw the streak card on canvas ──
  function drawStreakCard(canvas, data){
    const W = canvas.width;   // 800
    const H = canvas.height;  // 440
    const ctx = canvas.getContext('2d');

    // ── Background gradient ──
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0,   '#0A0918');
    bg.addColorStop(0.5, data.darkBg);
    bg.addColorStop(1,   '#0A0918');
    ctx.fillStyle = bg;
    rRect(ctx, 0, 0, W, H, 28);
    ctx.fill();

    // ── Glow orb top-right ──
    const orb = ctx.createRadialGradient(W*0.82, H*0.18, 0, W*0.82, H*0.18, 220);
    orb.addColorStop(0, data.color + '28');
    orb.addColorStop(1, 'transparent');
    ctx.fillStyle = orb;
    ctx.fillRect(0, 0, W, H);

    // ── Bottom glow orb ──
    const orb2 = ctx.createRadialGradient(W*0.18, H*0.82, 0, W*0.18, H*0.82, 180);
    orb2.addColorStop(0, '#5B8DEF18');
    orb2.addColorStop(1, 'transparent');
    ctx.fillStyle = orb2;
    ctx.fillRect(0, 0, W, H);

    // ── Border ──
    rRect(ctx, 2, 2, W-4, H-4, 26);
    ctx.strokeStyle = data.color + '80';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // ── Top-left: SpeakUp brand ──
    ctx.font = 'bold 22px Nunito, sans-serif';
    ctx.fillStyle = data.color;
    ctx.fillText('🦉 SpeakUp', 44, 54);

    // ── Top-right: language flag + name ──
    ctx.font = 'bold 18px Nunito, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.55)';
    ctx.textAlign = 'right';
    ctx.fillText(data.langFlag + ' ' + data.langName, W - 44, 54);
    ctx.textAlign = 'left';

    // ── Divider line ──
    ctx.strokeStyle = 'rgba(255,255,255,.07)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(44, 70); ctx.lineTo(W-44, 70);
    ctx.stroke();

    // ── Avatar circle ──
    const avatarX = 88, avatarY = 130, avatarR = 52;
    const avatarGrad = ctx.createRadialGradient(avatarX, avatarY, 0, avatarX, avatarY, avatarR);
    avatarGrad.addColorStop(0, data.color + '40');
    avatarGrad.addColorStop(1, data.color + '15');
    ctx.beginPath();
    ctx.arc(avatarX, avatarY, avatarR, 0, Math.PI*2);
    ctx.fillStyle = avatarGrad;
    ctx.fill();
    ctx.strokeStyle = data.color + 'AA';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    // Avatar emoji
    ctx.font = '46px serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.avatar, avatarX, avatarY + 16);
    ctx.textAlign = 'left';

    // ── Name ──
    ctx.font = 'bold 38px Fredoka One, Nunito, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(data.name, 160, 118);

    // ── Course subtitle ──
    ctx.font = '18px Nunito, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.5)';
    ctx.fillText(data.langFlag + ' ' + data.langName + (data.course ? ' — ' + data.course + ' Day Course' : ''), 160, 148);

    // ── Streak fire badge ──
    const streakX = 160, streakY = 175;
    // Pill background
    rRect(ctx, streakX, streakY, 160, 44, 14);
    const streakBg = ctx.createLinearGradient(streakX, streakY, streakX+160, streakY+44);
    streakBg.addColorStop(0, '#FF4500');
    streakBg.addColorStop(1, '#FF8C00');
    ctx.fillStyle = streakBg;
    ctx.fill();
    ctx.font = 'bold 22px Nunito, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText('🔥 ' + data.streak + ' Din Streak!', streakX + 80, streakY + 29);
    ctx.textAlign = 'left';

    // ── Stats row ──
    const stats = [
      { icon:'⭐', label:'XP',         val: data.xp },
      { icon:'✅', label:'Lessons',    val: data.daysCompleted },
      { icon:'📖', label:'Words',      val: data.words },
    ];
    const statW = (W - 88) / 3 - 14;
    stats.forEach(function(st, i){
      const sx = 44 + i * (statW + 14);
      const sy = 254;
      const sh = 100;
      // Card bg
      rRect(ctx, sx, sy, statW, sh, 16);
      ctx.fillStyle = 'rgba(255,255,255,.06)';
      ctx.fill();
      rRect(ctx, sx, sy, statW, sh, 16);
      ctx.strokeStyle = data.color + '40';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Icon
      ctx.font = '24px serif';
      ctx.textAlign = 'center';
      ctx.fillText(st.icon, sx + statW/2, sy + 32);
      // Value
      ctx.font = 'bold 28px Fredoka One, Nunito, sans-serif';
      ctx.fillStyle = data.color;
      ctx.fillText(String(st.val), sx + statW/2, sy + 64);
      // Label
      ctx.font = 'bold 12px Nunito, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,.4)';
      ctx.fillText(st.label.toUpperCase(), sx + statW/2, sy + 84);
      ctx.textAlign = 'left';
    });

    // ── Bottom watermark ──
    ctx.font = '14px Nunito, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.2)';
    ctx.textAlign = 'center';
    ctx.fillText('speakup.app  •  Daily Seekho, Daily Badho 🚀', W/2, H - 22);
    ctx.textAlign = 'left';

    // ── Progress bar strip at bottom edge ──
    if(data.course && data.daysCompleted){
      const pct = Math.min(data.daysCompleted / data.course, 1);
      // track
      rRect(ctx, 44, H-50, W-88, 8, 4);
      ctx.fillStyle = 'rgba(255,255,255,.07)';
      ctx.fill();
      // fill
      rRect(ctx, 44, H-50, (W-88)*pct, 8, 4);
      const barGrad = ctx.createLinearGradient(44, 0, W-44, 0);
      barGrad.addColorStop(0, data.color);
      barGrad.addColorStop(1, '#5B8DEF');
      ctx.fillStyle = barGrad;
      ctx.fill();
    }
  }

  // ── Collect current user data ──
  function getUserCardData(){
    try{
      var cs  = (typeof CS === 'function') ? CS() : {};
      var S_  = (typeof S  !== 'undefined') ? S  : {};
      var lang = S_.activeLang || 'en';
      var li   = (typeof LANG_INFO !== 'undefined' && LANG_INFO[lang]) ? LANG_INFO[lang] : {name:'Language', flag:'🌍', color:'#2EE59D', colorDark:'#1BC47D'};
      var c    = (typeof AC === 'function') ? AC() : 0;
      // Derive a darker bg tone from the lang color
      var darkBgMap = {
        '#58CC02':'#0a1800','#4A90E2':'#060e1e','#E74C3C':'#1a0505',
        '#9B59B6':'#0e0518','#FF6B9D':'#1a0510','#FF8C42':'#1a0d05',
        '#E84142':'#1a0505','#169B62':'#041208','#F5A623':'#1a0e00',
        '#5B9BD5':'#080e1a','#2ECC71':'#041208'
      };
      return {
        name:          S_.name || 'SpeakUp User',
        avatar:        S_.avatar || '😊',
        streak:        cs.streak || 0,
        xp:            cs.xp || 0,
        daysCompleted: (cs.done && cs.done.length) || 0,
        words:         cs.wordsLearned || 0,
        course:        c,
        langName:      li.name,
        langFlag:      li.flag,
        color:         li.color,
        darkBg:        darkBgMap[li.color] || '#0a0a18',
      };
    } catch(e){
      return {
        name:'SpeakUp User', avatar:'😊', streak:0, xp:0,
        daysCompleted:0, words:0, course:30,
        langName:'English', langFlag:'🇬🇧',
        color:'#2EE59D', darkBg:'#041208'
      };
    }
  }

  // ── Open share sheet ──
  window.openShareCard = function(){
    var overlay = document.getElementById('shareCardOverlay');
    var canvas  = document.getElementById('shareCardCanvas');
    if(!overlay || !canvas) return;
    overlay.classList.add('open');
    // Draw after a tick so overlay is visible first
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        var data = getUserCardData();
        drawStreakCard(canvas, data);
        // Update sub text
        var sub = overlay.querySelector('.scs-sub');
        if(sub) sub.textContent = data.name + ' ka progress card tayyar! 🎉';
      });
    });
  };

  window.closeShareCard = function(){
    var overlay = document.getElementById('shareCardOverlay');
    if(overlay) overlay.classList.remove('open');
  };

  // ── Web Share API ──
  window.doShareCard = function(){
    var canvas = document.getElementById('shareCardCanvas');
    if(!canvas) return;
    canvas.toBlob(function(blob){
      if(!blob) return;
      var data = getUserCardData();
      var shareText = '🦉 Main SpeakUp pe language seekh raha/rahi hoon!\n'
        + '🔥 ' + data.streak + ' din ki streak\n'
        + '⭐ ' + data.xp + ' XP\n'
        + '✅ ' + data.daysCompleted + ' lessons complete\n'
        + data.langFlag + ' ' + data.langName + '\n\n'
        + 'Tum bhi seekho: speakup.app 🚀';

      if(navigator.share && navigator.canShare){
        var file = new File([blob], 'speakup-progress.png', {type:'image/png'});
        var shareData = {title:'Meri SpeakUp Progress! 🦉', text: shareText, files:[file]};
        if(navigator.canShare(shareData)){
          navigator.share(shareData)
            .then(function(){ if(typeof showToast==='function') showToast('✅ Share ho gaya!','var(--g)'); })
            .catch(function(){});
          return;
        }
        // Fallback: share without file
        navigator.share({title:'Meri SpeakUp Progress! 🦉', text: shareText, url:'https://speakup.app'})
          .then(function(){ if(typeof showToast==='function') showToast('✅ Share ho gaya!','var(--g)'); })
          .catch(function(){});
      } else {
        // No Web Share API — fallback to download
        doDownloadCard();
        if(typeof showToast==='function') showToast('📱 Image download ho rahi hai — manually share karo!','var(--b)');
      }
    }, 'image/png');
  };

  // ── PNG Download ──
  window.doDownloadCard = function(){
    var canvas = document.getElementById('shareCardCanvas');
    if(!canvas) return;
    var data = getUserCardData();
    var link = document.createElement('a');
    link.download = 'speakup-' + (data.name||'progress').replace(/\s+/g,'_') + '-streak.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    if(typeof showToast==='function') showToast('⬇️ PNG download shuru ho gayi!','var(--b)');
  };

  // ── Copy share text ──
  window.doCopyShareText = function(){
    var data = getUserCardData();
    var text = '🦉 Main SpeakUp pe language seekh raha/rahi hoon!\n'
      + '🔥 ' + data.streak + ' din ki streak\n'
      + '⭐ ' + data.xp + ' XP\n'
      + '✅ ' + data.daysCompleted + ' lessons complete\n'
      + data.langFlag + ' ' + data.langName + '\n\n'
      + 'Tum bhi seekho: speakup.app 🚀';
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){
        if(typeof showToast==='function') showToast('📋 Text copy ho gaya! Kahin bhi paste karo.','var(--g)');
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;';
      document.body.appendChild(ta);
      ta.select();
      try{ document.execCommand('copy'); }catch(e){}
      ta.remove();
      if(typeof showToast==='function') showToast('📋 Text copy ho gaya!','var(--g)');
    }
  };

})();