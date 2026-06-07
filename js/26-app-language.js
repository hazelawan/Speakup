// ══════════════════════════════════════════════════
// SpeakUp v8 — 26-app-language.js
// App Language System — UI language switcher
// ══════════════════════════════════════════════════

// ══════════════════════════════════════════════
// 🌐 APP LANGUAGE SYSTEM
// ══════════════════════════════════════════════
(function(){
  var _lang = localStorage.getItem('speakup_app_lang') || 'en';

  // Full UR dictionary (EN → Roman Urdu) for JS-generated text
  var UR = {
    '← Back':'← Wapas','← Go Back':'← Wapas Jao','Go Back':'Wapas Jao',
    'Next →':'Agla →','Next Question →':'Agla Sawaal →','Next Section →':'Agla Section →',
    'Got It →':'Samajh Gaya →','Got It! →':'Samajh Gaya! →','Start Now! →':'Shuru Karo! →',
    '▶️ Continue':'▶️ Continue Karo','▶️ Start Now!':'▶️ Shuru Karo!',
    '🔄 Restart':'🔄 Shuru Se Karo','🔄 Try Again':'🔄 Dobara Try Karo',
    'Upgrade Now':'Abhi upgrade karo','Upgrade':'Upgrade Karo',
    '👑 Upgrade to Pro':'👑 Pro Upgrade Karo',
    'Yes, Do It':'Haan, Karo','No, Go Back':'Nahi, Wapas Jao',
    '🔑 Login':'🔑 Login Karo','✅ Create Account':'✅ Account Banao',
    '✅ Create Profile':'✅ Profile Banao',
    "Today's Goal":'Aaj Ka Goal',
    'Get Pro today and unlock all days! 🚀':'Aaj hi Pro lo aur saari days unlock karo! 🚀',
    '🗺️ Your Journey':'🗺️ Tumhara Safar',
    'Day Streak':'Din Ka Streak','🔥 Day Streak':'🔥 Din Ki Streak',
    'Daily goal done':'Din goal poora','Min left today':'Min baaki aaj',
    '30 min of 2x XP — once per day':'30 minute ke liye 2x XP — din mein 1 baar',
    'Customize App':'App customize karo',
    'Easy on the eyes':'Aankhon ke liye acha',
    'Sounds for quizzes':'Quiz ke liye awaazein',
    '🎯 Daily Learning Goal':'🎯 Roz Ka Seekhne Ka Goal',
    '2 hours/day':'2 ghante/din','1 hour/day — Balanced':'1 ghanta/din — Balanced',
    'Response within 24 hours — guaranteed!':'24 ghante mein jawab milega — guaranteed!',
    'This will delete your progress. Think twice!':'Yeh karne se progress delete ho jaayega. Sooch lo!',
    '🗑️ Reset My Progress':'🗑️ Mera Progress Reset Karo',
    '🗑️ Delete My Profile':'🗑️ Meri Profile Delete Karo',
    '2 Weeks':'2 Hafta','🔥 2 Weeks':'🔥 2 Hafta',
    '1 Month':'1 Mahina','1 Year':'1 Saal',
    'Hearts Empty!':'Hearts Khatam!',
    '5 mistakes made. Hearts take time to refill.':'5 galtiyan ho gaeen. Hearts wapis aane mein waqt lagta hai.',
    'No Wrong Answers!':'Koi Galat Jawab Nahi!','Wrong Questions':'Galat Sawaal',
    'Wrong Answer — Try Again!':'Galat Jawab — Dobara!',
    'Mega Quiz Done!':'Mega Quiz Khatam!','Speed Round Done!':'Speed Round Khatam!',
    'Content Not Available':'Content Abhi Nahi Hai',
    'Listen then speak into the mic!':'Suno phir mic mein bolo!',
    'What to Learn? 📚':'Kya Seekhna Hai? 📚',
    'Which Language to Learn?':'Kaunsi Zubaan Seekhni Hai?',
    'What is Your Goal?':'Tumhara Goal Kya Hai?',
    'SpeakUp — Learn Languages':'SpeakUp — Zubaan Seekho',
    'Learn Languages':'Zubaan Seekho',
    '10 Languages':'10 Zubaanein','4 Languages':'4 Zubaanein',
    'Daily':'Roz',
    'Any issue? Contact admin':'Koi masla? Admin se rabta karo',
    'No notifications yet':'Koi notification nahi',
    '🔔 No notifications yet':'🔔 Abhi koi notification nahi',
    'Start From There':'Wahan Se Shuru Karo',
    '2 Weeks':'2 Hafta','1 Month':'1 Mahina','1 Year':'1 Saal',
    'Login 🚀':'Login Karo 🚀',
    'Login to view notifications':'Login karo notifications dekhne ke liye',
    'Login to always save your progress':'Login karo progress hamesha bachane ke liye',
    'Verify Your Email!':'Email Verify Karo!',
    'Your Journey':'Tumhara Safar',
    '9th to 12th all papers':'9th se 12th saare papers',
    'First session paper':'Pehle session ka paper',
    'Second session paper':'Doosre session ka paper',
  };

  window.getAppLang = function(){ return _lang; };

  window.T = function(enText){
    if(_lang === 'ur') return UR[enText] || enText;
    return enText;
  };

  window.setAppLang = function(lang){
    localStorage.setItem('speakup_app_lang', lang);
    window.location.reload();
  };

  function _updateToggleUI(){
    var enBtn = document.getElementById('appLangEnBtn');
    var urBtn = document.getElementById('appLangUrBtn');
    var lb = document.getElementById('appLangLabel');
    var sb = document.getElementById('appLangSub');
    if(!enBtn || !urBtn) return;
    if(_lang === 'ur'){
      urBtn.style.background='var(--g)'; urBtn.style.color='#000';
      enBtn.style.background='var(--card2)'; enBtn.style.color='var(--txt)';
      if(lb) lb.textContent='Roman Urdu';
      if(sb) sb.textContent='App ki language';
    } else {
      enBtn.style.background='var(--g)'; enBtn.style.color='#000';
      urBtn.style.background='var(--card2)'; urBtn.style.color='var(--txt)';
      if(lb) lb.textContent='English';
      if(sb) sb.textContent='App display language';
    }
  }

  function _tryUpdateToggle(attempts){
    attempts = attempts||0;
    var enBtn = document.getElementById('appLangEnBtn');
    if(enBtn){ _updateToggleUI(); return; }
    if(attempts < 20) setTimeout(function(){ _tryUpdateToggle(attempts+1); }, 200);
  }
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(_tryUpdateToggle, 500); });
  document.addEventListener('screensLoaded', function(){ _tryUpdateToggle(); });
})();