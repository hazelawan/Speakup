// Screen loader — screens already inline in index.html, nothing to load
// Dispatch event for compatibility
document.addEventListener('DOMContentLoaded', function(){
  document.dispatchEvent(new Event('screensLoaded'));
});
