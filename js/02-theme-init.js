// ══════════════════════════════════════════════════
// SpeakUp v8 — 02-theme-init.js
// App Theme Initialization
// ══════════════════════════════════════════════════

(function initAppTheme() {
  const KNOWN_THEMES = [
    'eid','eidadha','ramadan','halloween','christmas',
    'newyear','easter','independence','diwali','spring','winter'
  ];

  // ── Sab theme classes hataao, naya lagao ──
  function _applyBodyTheme(key) {
    // Pehle sab hataao
    KNOWN_THEMES.forEach(k => document.body.classList.remove('theme-' + k));
    // Custom theme classes bhi hataao
    Array.from(document.body.classList)
      .filter(c => c.startsWith('theme-'))
      .forEach(c => document.body.classList.remove(c));

    if (!key || key === 'default') return;
    document.body.classList.add('theme-' + key);
    console.log('🎨 Theme applied:', key);
  }

  // ── Global function — app kaheen se bhi call kar sake ──
  window.applyAppTheme = _applyBodyTheme;

  // ── Step 1: Startup pe seedha localStorage se paro (instant, no delay) ──
  try {
    const savedTheme = localStorage.getItem('speakup_theme');
    if (savedTheme && savedTheme !== 'default') {
      _applyBodyTheme(savedTheme);
    }
  } catch(e) {}

  // ── Step 2: speakup_admin mein bhi activeTheme ho sakti hai ──
  try {
    const adminData = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
    const adTheme = adminData && adminData.settings && adminData.settings.activeTheme;
    if (adTheme && adTheme !== 'default') {
      _applyBodyTheme(adTheme);
      localStorage.setItem('speakup_theme', adTheme);
    }
  } catch(e) {}

  // ── Step 3: Firebase se adminData sync hone ke baad theme update karo ──
  // (Firebase load hone mein time lagta hai — isiliye delay se check)
  function _checkFirebaseTheme() {
    try {
      const adminData = JSON.parse(localStorage.getItem('speakup_admin') || '{}');
      const adTheme = adminData && adminData.settings && adminData.settings.activeTheme;
      if (adTheme) {
        _applyBodyTheme(adTheme === 'default' ? null : adTheme);
        if (adTheme !== 'default') localStorage.setItem('speakup_theme', adTheme);
        else localStorage.setItem('speakup_theme', 'default');
      }
    } catch(e) {}
  }
  // 2 second aur 5 second baad check karo (Firebase ko time do)
  setTimeout(_checkFirebaseTheme, 2000);
  setTimeout(_checkFirebaseTheme, 5000);
})();