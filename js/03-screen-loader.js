// ══════════════════════════════════════════════════
// SpeakUp v8 — 03-screen-loader.js
// Screen Loader — loads HTML screens from separate files and injects them
// ══════════════════════════════════════════════════

(function(){
  async function loadScreens(){
    const includes = document.querySelectorAll('[data-include]');
    const promises = Array.from(includes).map(async function(el){
      const src = el.getAttribute('data-include');
      try {
        const res = await fetch(src);
        if(!res.ok) throw new Error('Failed to load: ' + src);
        const html = await res.text();
        const temp = document.createElement('div');
        temp.innerHTML = html;
        el.replaceWith(...temp.childNodes);
      } catch(e) {
        console.error('Screen load error:', e);
      }
    });
    await Promise.all(promises);
    // All screens loaded — trigger app init
    if(typeof window.onScreensLoaded === 'function') window.onScreensLoaded();
    document.dispatchEvent(new Event('screensLoaded'));
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadScreens);
  } else {
    loadScreens();
  }
})();
