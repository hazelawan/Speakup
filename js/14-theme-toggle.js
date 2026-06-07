// ══════════════════════════════════════════════════
// SpeakUp v8 — 14-theme-toggle.js
// Theme Toggle + Firebase Status Checker
// ══════════════════════════════════════════════════

(function initThemeToggle() {

  const LS_KEY = 'speakup_ui_mode'; // 'dark' | 'light'

  // ── Apply mode to DOM ──
  function applyMode(isLight) {
    if (isLight) {
      document.body.classList.add('light-mode');
      // Fix inline-styled Settings header
      var settingsHdr = document.querySelector('#settings > div:first-child');
      if(settingsHdr){ settingsHdr.style.background = 'linear-gradient(160deg,#E8F4FF,#EEE8FF)'; settingsHdr.querySelectorAll('div').forEach(function(d){ d.style.color = '#1A1830'; }); }
      // Fix inline-styled Past Papers header
      var ppHdr = document.querySelector('#pastpapers > div:first-child');
      if(ppHdr){ ppHdr.style.background = 'linear-gradient(135deg,#EEE8FF,#E8F0FF)'; ppHdr.querySelectorAll('[style]').forEach(function(d){ if(d.style.color) d.style.color = '#1A1830'; }); }
    } else {
      document.body.classList.remove('light-mode');
      // Restore Settings header
      var settingsHdr = document.querySelector('#settings > div:first-child');
      if(settingsHdr){ settingsHdr.style.background = ''; settingsHdr.querySelectorAll('div').forEach(function(d){ d.style.color = ''; }); }
      // Restore Past Papers header
      var ppHdr = document.querySelector('#pastpapers > div:first-child');
      if(ppHdr){ ppHdr.style.background = ''; ppHdr.querySelectorAll('[style]').forEach(function(d){ d.style.color = ''; }); }
    }
    _syncToggleUI(isLight);
  }

  // ── Sync toggle UI state ──
  function _syncToggleUI(isLight) {
    const inp  = document.getElementById('themeToggleInput');
    const icon = document.getElementById('themeToggleIcon');
    const lbl  = document.getElementById('themeToggleLabel');
    const sub  = document.getElementById('themeToggleSub');
    if (!inp) return;
    inp.checked = isLight;
    if (isLight) {
      icon.textContent = '☀️';
      lbl.textContent  = 'Light Mode';
      sub.textContent  = 'Roshan aur saaf';
    } else {
      icon.textContent = '🌙';
      lbl.textContent  = 'Dark Mode';
      sub.textContent  = 'Easy on the eyes';
    }
    // Spin animation
    icon.classList.remove('spin');
    void icon.offsetWidth; // reflow
    icon.classList.add('spin');
  }

  // ── Global toggle function — called by checkbox onchange ──
  window.toggleAppTheme = function(isLight) {
    try { localStorage.setItem(LS_KEY, isLight ? 'light' : 'dark'); } catch(e) {}
    applyMode(isLight);
  };

  // ── Startup: read saved preference ──
  // Run immediately + also after DOM ready in case elements not yet parsed
  function startup() {
    let saved = 'dark';
    try { saved = localStorage.getItem(LS_KEY) || 'dark'; } catch(e) {}
    applyMode(saved === 'light');
  }

  startup();
  // Re-sync toggle UI once DOM is ready (handles cases where settings not yet rendered)
  document.addEventListener('DOMContentLoaded', startup);

})();


<!-- ══════════════════════════════════════════════
     FIREBASE HELPER FUNCTIONS
══════════════════════════════════════════════ -->

// Firebase status checker — settings page mein dikhao
function updateFirebaseStatusUI(){
  const el = document.getElementById('firebaseStatus');
  if(!el) return;
  if(window.FIREBASE_READY && window.FB_DB){
    el.innerHTML = `
      <div style="color:#2EE59D;font-weight:800;margin-bottom:4px;">✅ Firebase Connected!</div>
      <div>Database: speakup-8fa2a</div>
      <div>Status: 🟢 Live Sync Active</div>
      <div style="margin-top:4px;font-size:11px;color:var(--mut);">Save from Admin → Updates all devices! 🚀</div>
    `;
  } else {
    el.innerHTML = `
      <div style="color:#FFD166;font-weight:800;margin-bottom:4px;">⏳ Connecting...</div>
      <div>Firebase load ho raha hai</div>
    `;
    setTimeout(updateFirebaseStatusUI, 2000);
  }
}

// Test connection button
function testFirebaseConnection(){
  if(!window.FIREBASE_READY || !window.FB_DB){
    showToast('⚠️ Firebase abhi connect nahi hua — thoda wait karo', '#FFD166');
    return;
  }
  const testRef = window.FB_REF(window.FB_DB, 'connectionTest');
  window.FB_SET(testRef, {time: new Date().toISOString(), status: 'ok'})
    .then(()=>{
      showToast('✅ Firebase working! Cloud se connected hai 🔥', '#2EE59D');
      updateFirebaseStatusUI();
    })
    .catch(err=>{
      showToast('❌ Firebase error: ' + err.message, '#FF6B6B');
    });
}

// Force sync all admin data to Firebase
function forceSyncToFirebase(){
  if(!window.FIREBASE_READY || !window.FB_DB){
    showToast('⚠️ Firebase connect nahi hua abhi tak', '#FFD166');
    return;
  }
  const raw = localStorage.getItem('speakup_admin');
  const adminData = raw ? JSON.parse(raw) : {};
  const adminRef = window.FB_REF(window.FB_DB, 'adminData');
  window.FB_SET(adminRef, adminData)
    .then(()=>{
      showToast('☁️ Sab data Firebase pe sync ho gaya! 🎉', '#2EE59D');
    })
    .catch(err=>{
      showToast('❌ Sync failed: ' + err.message, '#FF6B6B');
    });
}

// Auto-update Firebase status when settings page loads
const _origLoadSettings = window.loadSettings;
window.loadSettings = function(){
  if(typeof _origLoadSettings === 'function') _origLoadSettings();
  setTimeout(updateFirebaseStatusUI, 500);
};

// Check status on load
setTimeout(updateFirebaseStatusUI, 3000);


<!-- ══════════════════════════════════════════════
     PWA — Install Button + Offline Support
══════════════════════════════════════════════ -->
<style>
#pwaInstallBtn{
  position:fixed;bottom:90px;right:16px;z-index:9999;
  display:none;align-items:center;gap:8px;
  background:linear-gradient(135deg,#2EE59D,#1BC47D);
  color:#0F0E17;border:none;border-radius:50px;
  padding:12px 20px;font-family:'Fredoka One',sans-serif;
  font-size:15px;cursor:pointer;
  box-shadow:0 4px 20px rgba(46,229,157,.55);
  animation:pwaPulse 2s ease infinite;
}
#pwaInstallBtn:active{transform:scale(.93);}
@keyframes pwaPulse{
  0%,100%{box-shadow:0 4px 20px rgba(46,229,157,.5),0 0 0 0 rgba(46,229,157,.35);}
  50%{box-shadow:0 4px 30px rgba(46,229,157,.7),0 0 0 10px rgba(46,229,157,0);}
}
#pwaOfflineBanner{
  display:none;position:fixed;top:0;left:0;right:0;z-index:99999;
  background:linear-gradient(90deg,#FF6B6B,#CC3333);
  color:#fff;font-family:'Fredoka One',sans-serif;font-size:14px;
  text-align:center;padding:8px 16px;
  box-shadow:0 2px 12px rgba(255,107,107,.5);
}
#pwaOfflineBanner.show{display:block;}
#pwaOnlineToast{
  display:none;position:fixed;top:44px;left:50%;transform:translateX(-50%);
  z-index:99999;background:linear-gradient(90deg,#2EE59D,#1BC47D);
  color:#0F0E17;font-family:'Fredoka One',sans-serif;font-size:13px;
  padding:7px 18px;border-radius:50px;white-space:nowrap;
  box-shadow:0 4px 16px rgba(46,229,157,.5);
}
</style>

<button id="pwaInstallBtn" onclick="pwaInstall()">📲 Install App</button>
<div id="pwaOfflineBanner">⚡ Offline mode — SpeakUp chal raha hai!</div>
<div id="pwaOnlineToast">✅ Internet aa gaya!</div>

  </div><!-- /windowContent -->
</div><!-- /desktopWindow -->



// ── URL bar update (no-op now, kept for compatibility) ──
function updateUrlBar(screenName){ /* desktop bar removed */ }
const _origShow = window.showScreen;
window.showScreen = function(id){
  if(_origShow) _origShow(id);
  updateUrlBar(id);
};



// ══ PWA: Inline Service Worker via  trick ══
// Kyunki blob: protocol Android mein allow nahi — hum SW ko
// same-page script se register karte hain using a data: URI workaround.
// Best working approach for single HTML file: use a named cache via
// window.caches API directly (no SW needed for offline cache on same origin).

// ── Cache API direct (works without SW for same-origin pages) ──
const SPEAKUP_CACHE = 'speakup-offline-v1';

async function pwaPreCache(){
  if(!('caches' in window)) return;
  try {
    const cache = await caches.open(SPEAKUP_CACHE);
    // Cache current page
    const resp = await fetch(location.href);
    if(resp.ok) await cache.put(location.href, resp);
    console.log('✅ SpeakUp: Page cached for offline use!');
  } catch(e){ console.log('Cache failed (normal on first load):', e); }
}

// Try SW with data: URI (works on Chrome Android 93+)
(function tryServiceWorker(){
  if(!('serviceWorker' in navigator)) return;

  // Method: Use a separate  tag content as SW via data URI
  const swScript = `
    const C='speakup-sw-v8';
    self.addEventListener('install',e=>{self.skipWaiting();});
    self.addEventListener('activate',e=>{
      e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));
      self.clients.claim();
    });
    self.addEventListener('fetch',e=>{
      const u=e.request.url;
      if(u.includes('firebaseio')||u.includes('googleapis.com/identitytoolkit')||u.includes('responsivevoice')){
        e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
        return;
      }
      e.respondWith(
        caches.open(C).then(cache=>
          cache.match(e.request).then(cached=>{
            const net=fetch(e.request).then(res=>{
              if(res&&res.status===200&&e.request.method==='GET')
                cache.put(e.request,res.clone());
              return res;
            });
            return cached||net;
          })
        )
      );
    });
  `;

  // Try registering via data: URI (supported Chrome 93+)
  const dataUrl = 'data:application/javascript;charset=utf-8,' + encodeURIComponent(swScript);
  navigator.serviceWorker.register(dataUrl, {scope: '/'})
    .then(r => console.log('✅ SW registered via data URI', r.scope))
    .catch(err => {
      console.warn('SW data URI failed, using Cache API fallback:', err.message);
      // Fallback: just pre-cache using Cache API
      pwaPreCache();
    });
})();

// ── Install Prompt ──
let _pwaEvt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _pwaEvt = e;
  const btn = document.getElementById('pwaInstallBtn');
  if(btn) btn.style.display = 'flex';
  console.log('📲 Install prompt ready!');
});
window.addEventListener('appinstalled', () => {
  _pwaEvt = null;
  const btn = document.getElementById('pwaInstallBtn');
  if(btn) btn.style.display = 'none';
  if(typeof showToast==='function') showToast('🎉 SpeakUp install ho gaya! Home screen pe dekho', '#2EE59D');
});
function pwaInstall(){
  if(!_pwaEvt){
    if(typeof showToast==='function')
      showToast('📲 Browser menu → "Add to Home Screen" tap karo', '#FFD166');
    else
      alert('Install karne ke liye:\n• Android: Browser menu (⋮) → Install App\n• iOS: Share (↗) → Add to Home Screen');
    return;
  }
  _pwaEvt.prompt();
  _pwaEvt.userChoice.then(()=>{
    _pwaEvt = null;
    const btn = document.getElementById('pwaInstallBtn');
    if(btn) btn.style.display = 'none';
  });
}

// ── Online / Offline ──
window.addEventListener('offline', ()=>{
  const b = document.getElementById('pwaOfflineBanner');
  if(b) b.classList.add('show');
  if(typeof showToast==='function') showToast('📡 Offline mode on — app chal raha hai!', '#FF6B6B');
});
window.addEventListener('online', ()=>{
  const b = document.getElementById('pwaOfflineBanner');
  if(b) b.classList.remove('show');
  const t = document.getElementById('pwaOnlineToast');
  if(t){ t.style.display='block'; setTimeout(()=>t.style.display='none', 3000); }
  if(typeof showToast==='function') showToast('✅ Internet aa gaya!', '#2EE59D');
});
// Check on load
if(!navigator.onLine){
  const b = document.getElementById('pwaOfflineBanner');
  if(b) b.classList.add('show');
}

// Also generate manifest dynamically
(function injectManifest(){
  const m = {
    name:"SpeakUp — Learn Languages",short_name:"SpeakUp",
    description:"Game-style language learning",
    start_url:location.href,display:"standalone",
    background_color:"#0F0E17",theme_color:"#2EE59D",orientation:"portrait",
    icons:[
      {src:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'><rect width='192' height='192' rx='36' fill='%230F0E17'/><text y='.9em' font-size='160'>🦉</text></svg>",sizes:"192x192",type:"image/svg+xml"},
      {src:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><rect width='512' height='512' rx='96' fill='%230F0E17'/><text y='.9em' font-size='430'>🦉</text></svg>",sizes:"512x512",type:"image/svg+xml"}
    ]
  };
  const blob = new Blob([JSON.stringify(m)],{type:'application/json'});
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = URL.createObjectURL(blob);
  document.head.appendChild(link);
})();