// ══════════════════════════════════════════════════
// SpeakUp v8 — 04-pro-screen-ui.js
// Pro Screen UI Logic (payment plans, buttons)
// ══════════════════════════════════════════════════

// ═══════════════════════════════════════════════
// PHASE 2 — PRO SCREEN LOGIC
// ═══════════════════════════════════════════════

const PRO_PLANS = {
  '2week': { label: '2 Weeks Plan',  price: 'Rs. 300',  days: 14,  perDay: '~Rs. 21/din' },
  'month':  { label: '1 Month Plan', price: 'Rs. 500',  days: 30,  perDay: '~Rs. 17/din' },
  'year':   { label: '1 Year Plan',   price: 'Rs. 4000', days: 365, perDay: '~Rs. 11/din' },
};

// Map admin paymentPlans IDs → PRO_PLANS keys
const _PLAN_ID_MAP = { '15din':'2week', '2week':'2week', 'monthly':'month', 'month':'month', 'yearly':'year', 'year':'year' };

// Load plan prices from Firebase adminData.paymentPlans and update PRO_PLANS + UI
function loadAndApplyPlanPrices(){
  function applyPlans(plans){
    if(!plans || !Array.isArray(plans)) return;
    plans.forEach(p => {
      const key = _PLAN_ID_MAP[p.id];
      if(!key || !PRO_PLANS[key]) return;
      if(p.price && p.price > 0){
        const curr = p.currency || 'PKR';
        const formatted = curr === 'PKR' ? 'Rs. ' + p.price : curr + ' ' + p.price;
        PRO_PLANS[key].price = formatted;
        // Update per-day
        const d = PRO_PLANS[key].days;
        if(d) PRO_PLANS[key].perDay = '~Rs. ' + Math.round(p.price/d) + '/din';
      }
      if(p.name) PRO_PLANS[key].label = p.name + ' Plan';
    });
    // Refresh UI cards
    _refreshPlanCardsUI();
  }

  if(window.FIREBASE_READY && window.FB_DB && window.FB_REF && window.FB_GET){
    window.FB_GET(window.FB_REF(window.FB_DB, 'adminData/paymentPlans'))
      .then(snap => { applyPlans(snap && snap.val ? snap.val() : null); })
      .catch(() => {});
  } else {
    try{
      const raw = localStorage.getItem('speakup_admin');
      if(raw){ const ad = JSON.parse(raw); applyPlans(ad.paymentPlans); }
    }catch(e){}
  }
}

function _refreshPlanCardsUI(){
  // Update card prices in DOM
  const cardMap = { '2week': 'planCard_2week', 'month': 'planCard_month', 'year': 'planCard_year' };
  Object.entries(cardMap).forEach(([key, cardId]) => {
    const card = document.getElementById(cardId);
    if(!card) return;
    const p = PRO_PLANS[key];
    const priceEl  = card.querySelector('.plan-price');
    const perDayEl = card.querySelector('.plan-per-day');
    if(priceEl)  priceEl.textContent  = p.price;
    if(perDayEl) perDayEl.textContent = p.perDay;
  });
  // Refresh selected plan badge
  if(_proActivePlan && PRO_PLANS[_proActivePlan]){
    const lblEl   = document.getElementById('proSelPlanLabel');
    const priceEl = document.getElementById('proSelPlanPrice');
    if(lblEl)   lblEl.textContent   = PRO_PLANS[_proActivePlan].label;
    if(priceEl) priceEl.textContent = PRO_PLANS[_proActivePlan].price;
  }
}

// Dynamic payment accounts — loaded from Firebase adminData
let _proPaymentAccounts = [
  { method:'jazzcash', name:'Adeel Younas', number:'03410101415', wa:'923410101415' }
];

const _PAY_METHOD_META = {
  jazzcash:  { label:'📱 JazzCash',  id:'jc', color:'#FF5C00' },
  easypaisa: { label:'💚 EasyPaisa', id:'ep', color:'#4CAF50' },
  nayapay:   { label:'💜 Naya Pay',  id:'np', color:'#7C3AED' },
  bank:      { label:'🏦 Bank',      id:'bk', color:'#5B8DEF' },
  other:     { label:'💳 Other',     id:'ot', color:'#aaa'    },
};

// Load payment accounts from Firebase then rebuild UI
function loadAndRenderPaymentAccounts(){
  // Try Firebase first
  if(window.FIREBASE_READY && window.FB_DB && window.FB_REF && window.FB_GET){
    window.FB_GET(window.FB_REF(window.FB_DB, 'adminData/paymentAccounts'))
      .then(snap => {
        const val = snap && snap.val ? snap.val() : null;
        if(val && Array.isArray(val) && val.length){
          _proPaymentAccounts = val;
        }
        renderProPaymentUI();
      })
      .catch(() => { renderProPaymentUI(); });
  } else {
    // Fallback: try localStorage adminData
    try{
      const raw = localStorage.getItem('su_admin_data');
      if(raw){
        const ad = JSON.parse(raw);
        if(ad.paymentAccounts && ad.paymentAccounts.length) _proPaymentAccounts = ad.paymentAccounts;
      }
    }catch(e){}
    renderProPaymentUI();
  }
}

function renderProPaymentUI(){
  const tabs   = document.getElementById('proPayTabsRow');
  const panels = document.getElementById('proPayPanels');
  if(!tabs || !panels) return;

  const accs = _proPaymentAccounts;
  if(!accs || !accs.length){
    tabs.innerHTML   = '';
    panels.innerHTML = '<div style="color:var(--mut);text-align:center;padding:16px;font-size:13px;">Admin has not set up payment accounts yet</div>';
    return;
  }

  // Build tabs
  tabs.innerHTML = accs.map((acc, i) => {
    const m = _PAY_METHOD_META[acc.method] || { label: acc.method, id:'m'+i, color:'#aaa' };
    const active = i === 0 ? 'active' : '';
    return `<button class="pro-pay-tab ${active}" id="proTab_dyn${i}" onclick="proSwitchDynTab(${i})" style="${active ? 'border-color:'+m.color+';color:'+m.color+';background:'+m.color+'22;' : ''}">${m.label}</button>`;
  }).join('');

  // Build panels
  panels.innerHTML = accs.map((acc, i) => {
    const m = _PAY_METHOD_META[acc.method] || { label: acc.method, id:'m'+i, color:'#aaa' };
    const active = i === 0 ? 'active' : '';
    return `
    <div class="pro-pay-content ${active}" id="proPay_dyn${i}">
      <div class="pro-account-card">
        <div class="pro-account-label">${m.label} Account</div>
        <div class="pro-account-name">${acc.name}</div>
        <div class="pro-account-num-row">
          <div class="pro-account-num">${acc.number.replace(/(\d{4})(?=\d)/g,'$1-')}</div>
          <button class="pro-copy-btn" onclick="proyCopyNum('${acc.number}','${m.label}')">📋 Copy</button>
        </div>
      </div>
    </div>`;
  }).join('');

  // Update WhatsApp button number to first account's WA
  const primaryWA = (accs[0] && accs[0].wa) ? accs[0].wa : '923410101415';
  window._primaryWA = primaryWA;
}

function proSwitchDynTab(idx){
  const accs = _proPaymentAccounts;
  accs.forEach((_,i) => {
    const btn  = document.getElementById('proTab_dyn'+i);
    const pan  = document.getElementById('proPay_dyn'+i);
    if(i === idx){
      if(btn){ btn.classList.add('active'); const m=_PAY_METHOD_META[accs[i].method]; if(m){ btn.style.borderColor=m.color; btn.style.color=m.color; btn.style.background=m.color+'22'; } }
      if(pan) pan.classList.add('active');
    } else {
      if(btn){ btn.classList.remove('active'); btn.style.borderColor=''; btn.style.color=''; btn.style.background=''; }
      if(pan) pan.classList.remove('active');
    }
  });
}

let _proActivePlan = 'month'; // Default selected

function showProScreen(fromDayNum) {
  showScreen('proScreen');
  // Update nav URL bar
  if (typeof updateUrlBar === 'function') updateUrlBar('pro');

  // Load payment accounts dynamically from Firebase
  loadAndRenderPaymentAccounts();
  // Load plan prices from Firebase
  loadAndApplyPlanPrices();

  const banner = document.getElementById('proActiveBanner');
  const featSec = document.getElementById('proFeaturesSection');
  const priceSec = document.querySelector('.pro-pricing-section');
  const paySec   = document.querySelector('.pro-pay-section');
  const trustSec = document.querySelector('.pro-trust-section');

  const _heroSec  = document.querySelector('.pro-hero');
  const _priceSec = document.querySelector('.pro-pricing-section');
  const _paySec   = document.querySelector('.pro-pay-section');
  const _trustSec = document.querySelector('.pro-trust-section');

  // ✅ FIX: Guest mode ya logged-out user ko kabhi Pro screen mat dikhao
  const _isActuallyPro = isPro() && !IS_GUEST && (typeof getLoggedInUser === 'function' ? !!getLoggedInUser() : true);

  if (_isActuallyPro) {
    if (_heroSec)  _heroSec.style.display  = 'none';
    if (banner)    banner.classList.add('show');
    if (featSec)   featSec.style.display   = 'none';
    if (_priceSec) _priceSec.style.display = 'none';
    if (_paySec)   _paySec.style.display   = 'none';
    if (_trustSec) _trustSec.style.display = 'none';

    try {
      const uid = window.FB_AUTH?.currentUser?.uid;
      // ✅ FIX: localStorage nahi — in-memory cache
      const d = uid ? (window._PRO_CACHE || null) : null;
      const exEl = document.getElementById('proExpiryInfo');
      if (d && d.expiry && exEl) {
        const diff = Math.ceil((d.expiry - Date.now()) / (1000*60*60*24));
        const expDate = new Date(d.expiry).toLocaleDateString('en-PK');
        exEl.innerHTML = diff > 0
          ? '<b>' + diff + ' din baaki</b> &mdash; ' + expDate + ' tak active'
          : 'Pro expire ho gaya &mdash; Renew karo!';
        if(diff <= 0){
          exEl.style.borderColor = 'rgba(255,107,107,.4)';
          exEl.style.background  = 'rgba(255,107,107,.08)';
        }
      } else if (exEl) {
        exEl.textContent = 'Pro Active';
      }

      // Upgrade plans
      var upgSec   = document.getElementById('proUpgradePlans');
      var upgCards = document.getElementById('proUpgradeCards');
      if(upgCards && upgSec){
        upgCards.innerHTML = '';
        var cp = d && d.plan ? d.plan : '';
        var uPlans = [];
        if(cp === '2week' || cp === '15din'){
          uPlans.push({key:'month', lbl:'1 Month', price: PRO_PLANS['month']?.price || 'Rs. 500', pop:true});
          uPlans.push({key:'year',  lbl:'1 Year',   price: PRO_PLANS['year']?.price  || 'Rs. 4000', pop:false});
        } else if(cp === 'month'){
          uPlans.push({key:'year',  lbl:'1 Year',   price: PRO_PLANS['year']?.price  || 'Rs. 4000', pop:false});
        }
        if(uPlans.length){
          uPlans.forEach(function(p){
            var c = document.createElement('div');
            c.style.cssText = 'display:flex;align-items:center;justify-content:space-between;background:rgba(255,215,0,.08);border:1.5px solid rgba(255,215,0,.3);border-radius:14px;padding:12px 16px;cursor:pointer;margin-bottom:6px;';
            var badge = p.pop ? '<span style="background:#FFD700;color:#000;font-size:9px;padding:2px 6px;border-radius:8px;font-weight:800;margin-left:4px;">POPULAR</span>' : '';
            c.innerHTML = '<div><div style="font-size:15px;color:#FFD700;font-weight:700;">' + p.lbl + badge + '</div><div style="font-size:11px;color:var(--mut);">Upgrade Now</div></div>'
                        + '<div style="font-size:18px;color:#FFD700;font-weight:700;">' + p.price + '</div>';
            c.onclick = function(){ showPayPopup(p.key); };
            upgCards.appendChild(c);
          });
          upgSec.style.display = 'block';
        } else {
          upgSec.style.display = 'none';
        }
      }
    } catch(e){}
  } else {
    if (_heroSec)  _heroSec.style.display  = '';
    if (banner)    banner.classList.remove('show');
    if (featSec)   { featSec.style.display = ''; featSec.style.opacity = '1'; }
    if (_priceSec) _priceSec.style.display = '';
    if (_paySec)   _paySec.style.display   = '';
    if (_trustSec) _trustSec.style.display = '';
  }

  // Default select month plan
  proSelectPlan(_proActivePlan);
}

function proSelectPlan(plan) {
  _proActivePlan = plan;
  const p = PRO_PLANS[plan];
  if (!p) return;

  // Update selected plan badge
  const lblEl = document.getElementById('proSelPlanLabel');
  const priceEl = document.getElementById('proSelPlanPrice');
  if (lblEl) lblEl.textContent = p.label;
  if (priceEl) priceEl.textContent = p.price;

  // Highlight active card
  Object.keys(PRO_PLANS).forEach(k => {
    const card = document.getElementById('planCard_' + k);
    if (!card) return;
    if (k === plan) {
      card.style.transform = 'scale(1.04)';
      card.style.boxShadow = '0 8px 32px rgba(255,215,0,.35)';
      card.style.borderColor = '#FFD700';
      const btn = card.querySelector('.plan-select-btn');
      if (btn) {
        btn.style.background = 'linear-gradient(135deg,#FFD700,#FF9500)';
        btn.style.color = '#000';
        btn.textContent = '✅ Chuna Gaya';
      }
    } else {
      // Reset non-popular cards
      if (!card.classList.contains('popular')) {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.borderColor = '';
      } else {
        card.style.transform = '';
        card.style.boxShadow = '0 4px 24px rgba(255,215,0,.2)';
        card.style.borderColor = '#FFD700';
      }
      const btn = card.querySelector('.plan-select-btn');
      if (btn) {
        if (card.classList.contains('popular') && k !== plan) {
          btn.style.background = 'linear-gradient(135deg,#FFD700,#FF9500)';
          btn.style.color = '#000';
          btn.textContent = 'Chunno';
        } else {
          btn.style.background = 'rgba(255,255,255,.08)';
          btn.style.color = 'var(--txt, #fff)';
          btn.textContent = 'Chunno';
        }
      }
    }
  });

  // Scroll to payment section smoothly
  setTimeout(() => {
    const payEl = document.querySelector('.pro-pay-section');
    if (payEl) payEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}

function proSwitchTab(tab) {
  // Update tab buttons
  ['jc','ep','np'].forEach(t => {
    const btn = document.getElementById('proTab_' + t);
    const content = document.getElementById('proPay_' + t);
    if (t === tab) {
      if (btn) {
        btn.classList.add('active');
        btn.classList.toggle('ep', t === 'ep');
        btn.classList.toggle('np', t === 'np');
      }
      if (content) content.classList.add('active');
    } else {
      if (btn) { btn.classList.remove('active','ep','np'); }
      if (content) content.classList.remove('active');
    }
  });
}

function proyCopyNum(num, method) {
  navigator.clipboard.writeText(num).then(() => {
    if (typeof showToast === 'function') showToast('✅ ' + method + ' number copy ho gaya!', 'var(--g)');
  }).catch(() => {
    if (typeof showToast === 'function') showToast('📋 ' + num, 'var(--b)');
  });
}

function proOpenWhatsapp(e) {
  e.preventDefault();
  const p = PRO_PLANS[_proActivePlan] || PRO_PLANS['month'];
  const email = (typeof getLoggedInUser === 'function' ? getLoggedInUser() : '') || '';
  const msg = encodeURIComponent(
    'Assalam o Alaikum! 👋\n' +
    'Maine SpeakUp ' + p.label + ' (' + p.price + ') ki payment ki hai.\n' +
    'Mera email: ' + email + '\n' +
    'Kripaya mera Pro account activate kar dein. Screenshot attach kar raha/rahi hoon. Shukriya! 🙏'
  );
  const waNum = window._primaryWA || (typeof WHATSAPP_NUM !== 'undefined' ? WHATSAPP_NUM : '923410101415');
  const wa = 'https://wa.me/' + waNum + '?text=' + msg;
  window.open(wa, '_blank');
}

// Override showProPopup to show full Pro Screen instead of bottom sheet
// (Keep old function as fallback for hearts-fail popup, add new full screen)
function openProUpgradeScreen(dayNum) {
  showProScreen(dayNum);
}