// ══════════════════════════════════════════════════
// SpeakUp v8 — 00-pwa-sw.js
// PWA Service Worker Registration
// ══════════════════════════════════════════════════

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