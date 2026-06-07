// ══════════════════════════════════════════════════
// SpeakUp v8 — 17-notifications.js
// Notification System — push notifications
// ══════════════════════════════════════════════════

// ══════════════════════════════════════════
//   NOTIFICATION SYSTEM — App Side
// ══════════════════════════════════════════
const NF_COLORS = {
  info:    { bg:'rgba(91,141,239,.12)',  border:'#5B8DEF', icon:'ℹ️' },
  success: { bg:'rgba(46,229,157,.12)', border:'#2EE59D', icon:'✅' },
  warning: { bg:'rgba(255,209,102,.12)',border:'#FFD166', icon:'⚠️' },
  promo:   { bg:'rgba(255,107,157,.12)',border:'#FF6B9D', icon:'🎁' },
  urgent:  { bg:'rgba(255,107,107,.14)',border:'#FF6B6B', icon:'🚨' },
  pro:     { bg:'rgba(255,215,0,.12)',  border:'#FFD700', icon:'👑' },
  pro_exp: { bg:'rgba(255,154,60,.12)', border:'#FF9500', icon:'⏰' },
};
const NF_15DAYS = 15 * 24 * 60 * 60 * 1000;
let _nfListener = null;

// ══════════════════════════════════════════════
// MAINTENANCE MODE — App-side
// adminData/settings/maintenanceMode listen karo
// ══════════════════════════════════════════════
function _applyMaintenanceMode(isOn, msg){
  const screen = document.getElementById('maintenanceScreen');
  if(!screen) return;
  // Admin users ko bypass — check email
  const userEmail = window.FB_AUTH?.currentUser?.email || '';
  const ADMIN_EMAIL = 'hazelawan0786@gmail.com'; // same as MAIN_ADMIN_EMAIL in admin panel
  if(userEmail === ADMIN_EMAIL) return; // Admin ko nahi dikhayenge

  if(isOn){
    screen.classList.add('show');
    const msgEl = document.getElementById('maintenanceMsgDisplay');
    if(msgEl && msg) msgEl.textContent = msg;
  } else {
    screen.classList.remove('show');
  }
}

// Real-time listener — jab bhi admin toggle kare, foran app pe apply ho
function initMaintenanceListener(){
  if(!window.FB_DB || !window.FB_REF || !window.FB_ON_VALUE) return;
  if(window._maintListenerActive) return;
  window._maintListenerActive = true;

  const mRef = window.FB_REF(window.FB_DB, 'adminData/settings/maintenanceMode');
  const msgRef = window.FB_REF(window.FB_DB, 'adminData/settings/maintenanceMessage');

  window.FB_ON_VALUE(mRef, function(snap){
    const isOn = snap.val() === true;
    window.FB_GET(msgRef).then(ms => {
      _applyMaintenanceMode(isOn, ms.val() || '');
    }).catch(()=>{ _applyMaintenanceMode(isOn, ''); });
  }, ()=>{ window._maintListenerActive = false; });
}

// ── Get current user UID ──
function getNfUid() {
  return window.FB_AUTH?.currentUser?.uid || null;
}

// ── Init: start listening ──
function initNotifSystem() {
  const uid = getNfUid();
  if(!uid || !window.FB_DB) return;

  // Show bell
  const bell = document.getElementById('notifBellWrap');
  if(bell) bell.style.display = 'block';

  // Listen for new notifications
  if(_nfListener) _nfListener(); // detach old
  const nRef = window.FB_REF(window.FB_DB, 'userNotifs/' + uid);
  _nfListener = window.FB_ON_VALUE(nRef, (snap) => {
    if(!snap.exists()) { updateNotifBadge(0); return; }
    const all = Object.values(snap.val()).filter(n => !n.deleted);
    const unread = all.filter(n => !n.read).length;
    updateNotifBadge(unread);
    // Auto-delete old non-pro notifications (15 din se zyada)
    autoCleanNotifs(snap.val(), uid);
  });

  // Pro expiry check
  checkProExpiry(uid);
}

function updateNotifBadge(count) {
  const badge = document.getElementById('notifBadge');
  if(!badge) return;
  if(count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ── Auto-clean: 15 din baad non-pro delete ──
async function autoCleanNotifs(data, uid) {
  if(!window.FB_DB || !uid) return;
  const now = Date.now();
  for(const [id, n] of Object.entries(data)) {
    if(n.deleted) continue;
    if(n.isProNotif) continue; // Pro notifications hamesha rakho
    if(n.sentAt && (now - n.sentAt) > NF_15DAYS) {
      try {
        await window.FB_SET(window.FB_REF(window.FB_DB, 'userNotifs/'+uid+'/'+id+'/deleted'), true);
      } catch(_) {}
    }
  }
}

// ── Open inbox ──
function openNotifInbox() {
  // Sab screens hide karo
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const inbox = document.getElementById('notifInbox');
  if(inbox) {
    inbox.style.display = 'block';
    inbox.classList.add('active');
  }
  renderNotifList();
}

// ── Close inbox — wapas dashboard ──
function closeNotifInbox() {
  const inbox = document.getElementById('notifInbox');
  if(inbox) { inbox.style.display = 'none'; inbox.classList.remove('active'); }
  // Dashboard wapas
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  if(typeof showScreen === 'function') showScreen('dashboard');
  if(typeof renderDash === 'function') renderDash();
}
async function renderNotifList() {
  const el = document.getElementById('notifList');
  const uid = getNfUid();
  if(!el) return;
  if(!uid || !window.FB_DB) {
    el.innerHTML = '<div style="color:var(--mut);text-align:center;padding:32px;font-size:14px;">Login to view notifications</div>';
    return;
  }
  el.innerHTML = '<div style="color:var(--mut);text-align:center;padding:24px;">⏳ Load ho raha hai...</div>';
  try {
    const snap = await window.FB_GET(window.FB_REF(window.FB_DB, 'userNotifs/'+uid));
    if(!snap.exists()) { el.innerHTML='<div style="color:var(--mut);text-align:center;padding:32px;font-size:14px;">🔔 No notifications yet<br><span style="font-size:12px;opacity:.6;">Notifications yahan dikhengi</span></div>'; return; }

    const items = Object.entries(snap.val())
      .filter(([,n])=>!n.deleted)
      .sort(([,a],[,b])=>b.sentAt-a.sentAt);

    if(!items.length) { el.innerHTML='<div style="color:var(--mut);text-align:center;padding:32px;font-size:14px;">🔔 Koi active notification nahi</div>'; return; }

    el.innerHTML = items.map(([id, n]) => {
      const c = NF_COLORS[n.type] || NF_COLORS.info;
      const date = timeAgo(n.sentAt);
      const unreadStyle = !n.read ? `border-left:3px solid ${c.border};` : '';
      const unreadDot = !n.read ? `<span style="display:inline-block;width:7px;height:7px;background:${c.border};border-radius:50%;margin-right:6px;vertical-align:middle;"></span>` : '';
      const isProNotif = n.isProNotif ? '<span style="font-size:9px;background:rgba(255,215,0,.15);border:1px solid rgba(255,215,0,.3);color:#FFD700;border-radius:6px;padding:1px 6px;margin-left:4px;">👑 Pro</span>' : '';
      return `<div class="notif-card" id="ncard_${id}" style="background:${c.bg};border:1px solid ${c.border}33;${unreadStyle}" onclick="markNotifRead('${id}')">
        <button class="notif-del-btn" onclick="event.stopPropagation();deleteNotif('${id}')">✕</button>
        <div style="display:flex;align-items:flex-start;gap:10px;padding-right:28px;">
          <div style="font-size:22px;flex-shrink:0;">${c.icon}</div>
          <div style="flex:1;">
            <div style="font-size:13px;font-weight:800;color:#fff;margin-bottom:3px;">${unreadDot}${n.title}${isProNotif}</div>
            <div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.5;">${n.message}</div>
            <div style="font-size:10px;color:var(--mut);margin-top:5px;">${date}</div>
          </div>
        </div>
      </div>`;
    }).join('');

    // Sab read mark karo jab khola
    markAllNotifsRead();
  } catch(e) {
    el.innerHTML = `<div style="color:var(--r);text-align:center;padding:16px;font-size:13px;">❌ Error: ${e.message}</div>`;
  }
}

// ── Mark single read ──
async function markNotifRead(id) {
  const uid = getNfUid();
  if(!uid || !window.FB_DB) return;
  try { await window.FB_SET(window.FB_REF(window.FB_DB,'userNotifs/'+uid+'/'+id+'/read'), true); } catch(_){}
}

// ── Mark all read ──
async function markAllNotifsRead() {
  const uid = getNfUid();
  if(!uid || !window.FB_DB) return;
  try {
    const snap = await window.FB_GET(window.FB_REF(window.FB_DB,'userNotifs/'+uid));
    if(!snap.exists()) return;
    for(const [id,n] of Object.entries(snap.val())) {
      if(!n.read && !n.deleted) {
        window.FB_SET(window.FB_REF(window.FB_DB,'userNotifs/'+uid+'/'+id+'/read'), true).catch(()=>{});
      }
    }
  } catch(_){}
}

// ── Delete one ──
async function deleteNotif(id) {
  const uid = getNfUid();
  if(!uid || !window.FB_DB) return;
  const card = document.getElementById('ncard_'+id);
  if(card) { card.style.opacity='0'; card.style.transform='translateX(100%)'; card.style.transition='all .25s'; }
  setTimeout(async () => {
    try { await window.FB_SET(window.FB_REF(window.FB_DB,'userNotifs/'+uid+'/'+id+'/deleted'), true); }
    catch(_){}
    await renderNotifList();
  }, 250);
}

// ── Pro Expiry Check (on app open) ──
async function checkProExpiry(uid) {
  if(!uid || !window.FB_DB) return;
  const now = Date.now();
  const ONE_DAY = 86400000;

  try {
    // proSub user ke paas check karo
    const proSnap = await window.FB_GET(window.FB_REF(window.FB_DB, 'users/'+uid+'/proSub'));
    if(!proSnap.exists()) return;
    const pro = proSnap.val();
    if(!pro.expiry) return;

    const diff = pro.expiry - now;
    const alreadyNotified = localStorage.getItem('pro_exp_notif_'+uid+'_'+Math.floor(pro.expiry/ONE_DAY));

    // 1 din ya kam bacha hai — reminder bhejo (ek baar)
    if(diff > 0 && diff <= ONE_DAY && !alreadyNotified) {
      const exDate = new Date(pro.expiry).toLocaleDateString('ur-PK');
      const notifId = 'pro_exp_' + Date.now();
      const nRef = window.FB_REF(window.FB_DB, 'userNotifs/'+uid+'/'+notifId);
      await window.FB_SET(nRef, {
        id: notifId, title: '⏰ Pro Khatam Hone Wala Hai!',
        message: `Tumhara Pro subscription kal (${exDate}) expire ho raha hai! Renew karo taake premium features milte rahein 🔥`,
        type: 'pro_exp', sentAt: now, read: false, deleted: false,
        isProNotif: true, sentBy: 'system'
      });
      localStorage.setItem('pro_exp_notif_'+uid+'_'+Math.floor(pro.expiry/ONE_DAY), '1');
    }
  } catch(_) {}
}

// ── Time ago helper ──
function timeAgo(ts) {
  const diff = Date.now() - ts;
  const m = Math.floor(diff/60000);
  const h = Math.floor(diff/3600000);
  const d = Math.floor(diff/86400000);
  if(m < 1) return 'Abhi abhi';
  if(m < 60) return m + ' min pehle';
  if(h < 24) return h + ' ghante pehle';
  if(d < 7) return d + ' din pehle';
  return new Date(ts).toLocaleDateString('ur-PK');
}

// ── Notification init: onFirebaseAuthChange se call hota hai ──
// (Alag onAuthStateChanged hata diya — centralized handler use hota hai)