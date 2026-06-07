// ══════════════════════════════════════════════════
// SpeakUp v8 — 19-skeleton.js
// Skeleton Loading System
// ══════════════════════════════════════════════════

(function initSkeletonSystem(){

  // ── 1. Show skeleton — dashboard mein jab bhi jaao ──
  function showDashSkeleton(){
    const sk = document.getElementById('dashboardSkeletonWrap');
    const target = document.getElementById('dashSkeletonTarget');
    if(!sk || !target) return;

    // Skeleton dikhao
    sk.classList.remove('sk-hidden');

    // Real content temporarily hide (slbl + path-wrap + sr etc)
    Array.from(target.children).forEach(function(child){
      if(child.id !== 'dashboardSkeletonWrap'){
        child.style.opacity = '0';
        child.style.pointerEvents = 'none';
        child.style.transition = 'opacity 0.35s ease';
      }
    });

    // Top bar + section banner bhi shimmer dikhao
    _applyTopBarSkeleton(true);
    _applySectionBannerSkeleton(true);
  }

  // ── 2. Hide skeleton — data aane ke baad ──
  function hideDashSkeleton(){
    const sk = document.getElementById('dashboardSkeletonWrap');
    const target = document.getElementById('dashSkeletonTarget');
    if(!sk || !target) return;

    // Fade out skeleton
    sk.style.transition = 'opacity 0.3s ease';
    sk.style.opacity = '0';
    setTimeout(function(){
      sk.classList.add('sk-hidden');
      sk.style.opacity = '';
    }, 300);

    // Real content wapas dikhao (fade in)
    Array.from(target.children).forEach(function(child){
      if(child.id !== 'dashboardSkeletonWrap'){
        child.style.opacity = '1';
        child.style.pointerEvents = '';
      }
    });

    // Top bar + section banner restore
    _applyTopBarSkeleton(false);
    _applySectionBannerSkeleton(false);
  }

  // ── Top bar skeleton overlay ──
  function _applyTopBarSkeleton(show){
    const topBar = document.getElementById('duoTopBar');
    if(!topBar) return;
    if(show){
      topBar.style.opacity = '0.3';
      topBar.style.pointerEvents = 'none';
    } else {
      topBar.style.transition = 'opacity 0.35s ease';
      topBar.style.opacity = '1';
      topBar.style.pointerEvents = '';
    }
  }

  // ── Section banner skeleton overlay ──
  function _applySectionBannerSkeleton(show){
    const banner = document.getElementById('sectionBanner');
    if(!banner) return;
    if(show){
      banner.style.opacity = '0.2';
      banner.style.pointerEvents = 'none';
    } else {
      banner.style.transition = 'opacity 0.35s ease';
      banner.style.opacity = '1';
      banner.style.pointerEvents = '';
    }
  }

  // ── 3. Patch renderDash — hone ke baad skeleton hide karo ──
  function _patchRenderDash(){
    if(typeof window.renderDash !== 'function') {
      setTimeout(_patchRenderDash, 150);
      return;
    }
    const _origRenderDash = window.renderDash;
    window.renderDash = function(){
      _origRenderDash.apply(this, arguments);
      // Data render ho gaya — skeleton hatao
      hideDashSkeleton();
    };
  }

  // ── 4. Patch renderPath bhi (path render hone ke baad) ──
  function _patchRenderPath(){
    if(typeof window.renderPath !== 'function') {
      setTimeout(_patchRenderPath, 150);
      return;
    }
    const _origRenderPath = window.renderPath;
    window.renderPath = function(){
      _origRenderPath.apply(this, arguments);
      hideDashSkeleton();
    };
  }

  // ── 5. Patch tab('home') aur showScreen('dashboard') ──
  function _patchTabAndScreen(){
    // tab function patch
    if(typeof window.tab === 'function'){
      const _origTab = window.tab;
      window.tab = function(t){
        if(t === 'home'){
          showDashSkeleton();
        }
        _origTab.apply(this, arguments);
      };
    } else {
      setTimeout(_patchTabAndScreen, 200);
      return;
    }

    // showScreen function patch
    if(typeof window.showScreen === 'function'){
      const _origShowScreen = window.showScreen;
      window.showScreen = function(s){
        if(s === 'dashboard'){
          showDashSkeleton();
        }
        _origShowScreen.apply(this, arguments);
      };
    }
  }

  // ── 6. Firebase auth ready hone se pehle bhi skeleton dikhao ──
  // App load hoti hai toh dashboard first screen nahi hoti
  // Jab bhi dashboard visible ho, skeleton dikhao
  function _observeDashboardVisibility(){
    const dashScreen = document.getElementById('dashboard');
    if(!dashScreen) {
      setTimeout(_observeDashboardVisibility, 200);
      return;
    }

    // MutationObserver — jab dashboard active ho
    const obs = new MutationObserver(function(mutations){
      mutations.forEach(function(m){
        if(m.type === 'attributes' && m.attributeName === 'style'){
          const isVisible = dashScreen.style.display !== 'none' &&
                            dashScreen.classList.contains('active');
          if(isVisible){
            // Check karo agar skeleton already hidden nahi hai
            const sk = document.getElementById('dashboardSkeletonWrap');
            if(sk && sk.classList.contains('sk-hidden')){
              // Pehle se hidden hai — theek hai
            }
          }
        }
      });
    });
    obs.observe(dashScreen, { attributes: true, attributeFilter: ['style','class'] });
  }

  // ── 7. App start pe — pehli baar dashboard show hone ka wait ──
  // Startup par dashboard pehle se render ho sakta hai (localStorage se)
  // Isliye pehle skeleton show karo, phir real data aane pe hide karo
  function _initOnReady(){
    // Dashboard screen ka initial skeleton — sirf tab agar dashboard visible ho
    const dashScreen = document.getElementById('dashboard');
    if(dashScreen){
      const style = window.getComputedStyle(dashScreen);
      if(style.display !== 'none'){
        showDashSkeleton();
      }
    }

    // Patches apply karo
    _patchRenderDash();
    _patchRenderPath();
    _patchTabAndScreen();
    _observeDashboardVisibility();

    // Fallback: 8 second ke baad skeleton force hide karo (network slow ho toh)
    setTimeout(function(){
      hideDashSkeleton();
    }, 8000);
  }

  // ── 8. Firebase ready hone ke baad bhi ek baar hide karo ──
  function _waitForFirebaseAndHide(){
    if(window.FIREBASE_READY && window.FB_AUTH){
      // Firebase ready — renderDash ke baad hide hoga via patch
      // Agar 3 sec mein nahi hua toh force hide
      setTimeout(function(){
        const sk = document.getElementById('dashboardSkeletonWrap');
        if(sk && !sk.classList.contains('sk-hidden')){
          hideDashSkeleton();
        }
      }, 3000);
    } else {
      setTimeout(_waitForFirebaseAndHide, 300);
    }
  }

  // ── Global expose karo (tab function patch ke baad zaroorat) ──
  window._showDashSkeleton = showDashSkeleton;
  window._hideDashSkeleton = hideDashSkeleton;

  // ── DOM ready hone pe init karo ──
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      _initOnReady();
      _waitForFirebaseAndHide();
    });
  } else {
    _initOnReady();
    _waitForFirebaseAndHide();
  }

})();