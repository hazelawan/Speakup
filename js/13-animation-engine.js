// ══════════════════════════════════════════════════
// SpeakUp v8 — 13-animation-engine.js
// Global Animation Engine — XP pop, confetti, transitions
// ══════════════════════════════════════════════════

/* ═══════════════════════════════════════════════
   SPEAKUP v26 — GLOBAL ANIMATION ENGINE
═══════════════════════════════════════════════ */

// ── 1. GLOBAL RIPPLE on every button/card tap ──
document.addEventListener('pointerdown', e=>{
  const el = e.target.closest('button,.cc,.lang-card,.profile-card,.pnode,.qo,.vc,.ctab,.nb,.bg,.bo,.sbtn,.auth-btn,.auth-tab');
  if(!el) return;
  const r = document.createElement('span');
  r.className = 'ripple-effect';
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height)*2;
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;`;
  el.style.position = el.style.position||'relative';
  el.style.overflow = 'hidden';
  el.appendChild(r);
  setTimeout(()=>r.remove(), 700);
},{passive:true});

// ── 2. NAV button pop on active ──
document.querySelectorAll('.nb').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.querySelector('.ni').style.animation='none';
    requestAnimationFrame(()=>{
      btn.querySelector('.ni').style.animation='navIconPop .4s cubic-bezier(.34,1.56,.64,1)';
    });
  });
});

// ── 3. CARD STAGGER entrance on scroll ──
(function(){
  // ── Observer 1: Entrance animations (cards jo screen pe aayein) ──
  const obs = new IntersectionObserver(entries=>{
    entries.forEach((en,i)=>{
      if(en.isIntersecting){
        const el = en.target;
        el.style.animationDelay = (i*0.06)+'s';
        el.classList.add('anim-entrance');
        obs.unobserve(el); // Ek baar animate ho — phir unobserve
      }
    });
  },{threshold:0.12});

  function observeCards(){
    document.querySelectorAll(
      '.vc,.sc,.gb,.stb,.qc,.cc,.lang-card,.profile-card,.psb,.sb3,.milestone:not(.observed)'
    ).forEach(el=>{
      el.classList.add('observed');
      if(!el.style.animation||el.style.animation==='none') obs.observe(el);
    });
  }

  // ── Observer 2: Infinite animations pause/resume ──
  // Jo elements off-screen hain unka animation pause karo — battery bachao
  const INFINITE_ANIM_SELECTORS = [
    '.pc-ico',           // pcFloat
    '.ach-new',          // achNewPulse
    '.boost-btn',        // boostPulse
    '.bolt-icon',        // boltSpin
    '.pf',               // bgShift + progressGlow
    '.pnode.today',      // nodePulseBig / themePulse
    '.sb2.streak-active',// glowPulse
    '.sb2.xp-earned',    // glowPulseY
    '.dchip',            // neonFlicker
    '.dh::before',       // floatUpBig (via parent .dh)
    '.ce',               // floatUp
    '.cbadge',           // badgeBounce
    '.wave-bar',         // waveBar
  ].join(',');

  const pauseObs = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      // Screen pe dikh raha hai → animation resume karo
      // Screen se bahar → animation pause karo (CPU/battery save)
      en.target.style.animationPlayState = en.isIntersecting ? 'running' : 'paused';
    });
  },{threshold:0, rootMargin:'50px'}); // 50px margin — thoda pehle resume karo

  function observeInfiniteAnims(){
    try {
      document.querySelectorAll(INFINITE_ANIM_SELECTORS).forEach(el=>{
        if(!el.dataset.pauseObserved){
          el.dataset.pauseObserved = '1';
          pauseObs.observe(el);
        }
      });
    } catch(e) {}
  }

  // Re-run observers jab naye elements aayein (DOM update)
  const mo = new MutationObserver(()=>{
    observeCards();
    observeInfiniteAnims();
  });
  mo.observe(document.body,{childList:true,subtree:true});

  observeCards();
  observeInfiniteAnims();
})();

// ── 4. LESSON progress bar animated fill ──
function animateProgressBar(id, pct){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.width = '0%';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.style.transition = 'width 1s cubic-bezier(.34,1.56,.64,1)';
    el.style.width = pct+'%';
    setTimeout(()=>el.style.transition='',1100);
  }));
}

// ── 5. STAT box count-up animation ──
function animateCountUp(el, target, duration=800){
  if(!el) return;
  const start = 0;
  const startTime = performance.now();
  function step(now){
    const p = Math.min((now-startTime)/duration,1);
    const ease = 1-Math.pow(1-p,3);
    el.textContent = Math.floor(ease*target);
    if(p<1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

// ── 6. ENHANCED confetti (double burst) ──
function launchConfettiPro(){
  const colors=['#58CC02','#FFD700','#1CB0F6','#CE82FF','#FF9600','#FF4B4B','#ffffff','#2ECC71'];
  for(let pass=0;pass<2;pass++){
    setTimeout(()=>{
      const box=document.getElementById('confettiBox');
      if(!box) return;
      for(let i=0;i<36;i++){
        const c=document.createElement('div');
        c.className='conf-piece';
        const sz=6+Math.random()*10;
        c.style.cssText=`left:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:${colors[i%colors.length]};animation-delay:${Math.random()*.8}s;animation-duration:${1.3+Math.random()*1}s;transform:rotate(${Math.random()*360}deg);border-radius:${Math.random()>.5?'50%':'2px'};`;
        box.appendChild(c);
      }
      setTimeout(()=>{if(box)box.innerHTML='';},2800);
    },pass*400);
  }
}
// Override old confetti
window._origLaunchConfetti = window.launchConfetti;
window.launchConfetti = launchConfettiPro;

// ── 7. PNODE entrance stagger on path render ──
function animatePathNodes(){
  document.querySelectorAll('.pnode:not(.anim-done)').forEach((n,i)=>{
    n.classList.add('anim-done');
    n.style.opacity='0';
    n.style.transform='scale(0) rotate(-15deg)';
    setTimeout(()=>{
      n.style.transition='opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1)';
      n.style.opacity='1';
      n.style.transform='scale(1) rotate(0)';
      setTimeout(()=>{n.style.transition='';},400);
    }, i*55 + 100);
  });
}
// Hook into renderDash
const _origRenderDash = window.renderDash;
if(typeof renderDash==='function'){
  window._baseRenderDash = renderDash;
}
// Will be picked up after renderDash via MutationObserver above

// ── 8. BUTTON shimmer on load ──
function addButtonShimmer(){
  document.querySelectorAll('.sbtn,.bg,.auth-btn,.cb:not(.shimmer-done)').forEach(btn=>{
    btn.classList.add('shimmer-done');
  });
}

// ── 9. INPUT focus glow animation ──
document.addEventListener('focusin', e=>{
  if(e.target.matches('.nf,.auth-input')){
    e.target.style.transition='border-color .25s,box-shadow .25s,transform .2s';
    e.target.style.borderColor='var(--g)';
    e.target.style.boxShadow='0 0 0 4px rgba(88,204,2,.2), 0 0 16px rgba(88,204,2,.25)';
    e.target.style.transform='scale(1.015)';
  }
},{passive:true});
document.addEventListener('focusout', e=>{
  if(e.target.matches('.nf,.auth-input')){
    e.target.style.borderColor='';
    e.target.style.boxShadow='';
    e.target.style.transform='';
  }
},{passive:true});

// ── 10. LESSON section entrance delay ──
function staggerLessonSections(){
  const items = document.querySelectorAll('.lb > *');
  items.forEach((el,i)=>{
    el.style.opacity='0';
    el.style.transform='translateY(18px)';
    setTimeout(()=>{
      el.style.transition='opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1)';
      el.style.opacity='1';
      el.style.transform='translateY(0)';
      setTimeout(()=>{el.style.transition='';},400);
    }, i*65 + 80);
  });
}

// ── 11. BACKGROUND ambient particles on dashboard ──
function startAmbientParticles(containerId){
  const box = document.getElementById(containerId);
  if(!box) return;
  let timer;
  function spawn(){
    const p = document.createElement('div');
    const colors=['rgba(88,204,2,.4)','rgba(28,176,246,.4)','rgba(206,130,255,.3)','rgba(255,215,0,.35)'];
    const sz = 3+Math.random()*5;
    p.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;background:${colors[Math.floor(Math.random()*colors.length)]};left:${5+Math.random()*90}%;bottom:10%;pointer-events:none;animation:particleFly ${2+Math.random()*2}s ease forwards;`;
    box.style.position='relative';box.style.overflow='hidden';
    box.appendChild(p);
    setTimeout(()=>p.remove(),4000);
  }
  timer = setInterval(spawn,350);
  // Stop after 8s to save perf
  setTimeout(()=>clearInterval(timer),8000);
  return timer;
}

// ── 12. QUIZ option shake on wrong ──
function shakeElement(el){
  if(!el) return;
  el.style.animation='none';
  el.style.transition='transform .07s ease';
  const seq=[8,-8,6,-6,4,-2,0];
  seq.forEach((x,i)=>setTimeout(()=>{el.style.transform=`translateX(${x}px)`;},i*60));
  setTimeout(()=>{el.style.transform='';el.style.transition='';},seq.length*60+100);
}

// Hook quiz wrong answer to shake
document.addEventListener('click', e=>{
  const qo = e.target.closest('.qo');
  if(qo && !qo.classList.contains('dis')){
    // Check after 300ms if it got wrong class
    setTimeout(()=>{
      if(qo.classList.contains('wrong')) shakeElement(qo);
    },310);
  }
},{passive:true});

// ── 13. DASHBOARD header pulse ring ──
function addHeaderPulseRing(){
  const dh = document.querySelector('.dh');
  if(!dh || dh.querySelector('.hpr')) return;
  const ring = document.createElement('div');
  ring.className='hpr';
  ring.style.cssText='position:absolute;top:30px;left:20px;width:70px;height:70px;border-radius:50%;border:2px solid rgba(88,204,2,.2);animation:pulseRing 2.5s ease infinite;pointer-events:none;';
  dh.appendChild(ring);
  const ring2 = document.createElement('div');
  ring2.style.cssText='position:absolute;top:50px;left:40px;width:40px;height:40px;border-radius:50%;border:2px solid rgba(28,176,246,.15);animation:pulseRing 2.8s ease infinite .6s;pointer-events:none;';
  dh.appendChild(ring2);
}

// Run on any dashboard render
const _mo2 = new MutationObserver(()=>{
  const dh=document.querySelector('.dh');
  if(dh && !dh.querySelector('.hpr')) addHeaderPulseRing();
  animatePathNodes();
});
_mo2.observe(document.body,{childList:true,subtree:true});

// ── CSS for entrance animation ──
const style = document.createElement('style');
style.textContent = `
.anim-entrance{animation:cardEntrance .45s cubic-bezier(.34,1.56,.64,1) both!important;}

/* ── Performance: Off-screen infinite animations paused by JS observer ──
   animationPlayState 'paused' lagaya jaata hai jab element viewport se bahar ho
   'running' tab hota hai jab element visible ho — battery + CPU bachata hai */
.spk-mic.listening,
.sn-mic-btn.listening,
.wave-bar,
#splash .sl,
#splash .sf,
#splash .sf::after {
  /* Mic aur splash animations hamesha chalte rahein — pause mat karo */
  animation-play-state: running !important;
}
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(4px)}}
`;
document.head.appendChild(style);

/* ════════════════════════════════════════════════════════════
   CHESS ENGINE — Basic Legal Moves (Pure JS, No Library)
════════════════════════════════════════════════════════════ */
const CHESS_PIECES = {
  K:'♔', Q:'♕', R:'♖', B:'♗', N:'♘', P:'♙',
  k:'♚', q:'♛', r:'♜', b:'♝', n:'♞', p:'♟'
};
const WHITE_PIECES = new Set(['K','Q','R','B','N','P']);
const BLACK_PIECES = new Set(['k','q','r','b','n','p']);
function isWhite(p){return WHITE_PIECES.has(p);}
function isBlack(p){return BLACK_PIECES.has(p);}
function isEmpty(b,r,f){return !b[r][f];}
function inBounds(r,f){return r>=0&&r<8&&f>=0&&f<8;}

// Convert algebraic to [rank, file] (rank 0=row1 white, file 0=a)
function alg2rf(sq){return [parseInt(sq[1])-1, sq.charCodeAt(0)-97];}
function rf2alg(r,f){return String.fromCharCode(97+f)+(r+1);}

// Build 8x8 board array from piece map {e4:'P', e1:'K', ...}
function buildBoard(pieceMap){
  const b=Array.from({length:8},()=>Array(8).fill(null));
  for(const [sq,p] of Object.entries(pieceMap)){
    const [r,f]=alg2rf(sq);
    b[r][f]=p;
  }
  return b;
}

// Get all squares a piece can move to (basic, no check detection)
function getRawMoves(board, r, f){
  const p=board[r][f];
  if(!p) return [];
  const moves=[];
  const white=isWhite(p);
  const pt=p.toUpperCase();

  function canCapture(tr,tf){
    const t=board[tr][tf];
    return t && (white?isBlack(t):isWhite(t));
  }
  function canMove(tr,tf){
    if(!inBounds(tr,tf)) return false;
    const t=board[tr][tf];
    if(!t) return true;
    return white?isBlack(t):isWhite(t);
  }
  function slide(dirs){
    for(const [dr,df] of dirs){
      let cr=r+dr,cf=f+df;
      while(inBounds(cr,cf)){
        const t=board[cr][cf];
        if(!t){moves.push([cr,cf]);}
        else{if(white?isBlack(t):isWhite(t))moves.push([cr,cf]);break;}
        cr+=dr;cf+=df;
      }
    }
  }

  if(pt==='P'){
    const dir=white?1:-1;
    const startRank=white?1:6;
    // Forward
    if(inBounds(r+dir,f)&&!board[r+dir][f]){
      moves.push([r+dir,f]);
      if(r===startRank&&!board[r+2*dir][f]) moves.push([r+2*dir,f]);
    }
    // Captures
    for(const df of [-1,1]){
      const tr=r+dir,tf=f+df;
      if(inBounds(tr,tf)&&board[tr][tf]&&(white?isBlack(board[tr][tf]):isWhite(board[tr][tf])))
        moves.push([tr,tf]);
    }
  }
  else if(pt==='N'){
    for(const [dr,df] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]){
      const tr=r+dr,tf=f+df;
      if(inBounds(tr,tf)&&canMove(tr,tf)) moves.push([tr,tf]);
    }
  }
  else if(pt==='B') slide([[-1,-1],[-1,1],[1,-1],[1,1]]);
  else if(pt==='R') slide([[-1,0],[1,0],[0,-1],[0,1]]);
  else if(pt==='Q') slide([[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]]);
  else if(pt==='K'){
    for(const [dr,df] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]){
      const tr=r+dr,tf=f+df;
      if(inBounds(tr,tf)&&canMove(tr,tf)) moves.push([tr,tf]);
    }
  }
  return moves;
}

// Check if a side's king is in check
function isInCheck(board, whiteKing){
  // Find king
  let kr=-1,kf=-1;
  const kp=whiteKing?'K':'k';
  outer:for(let r=0;r<8;r++) for(let f=0;f<8;f++) if(board[r][f]===kp){kr=r;kf=f;break outer;}
  if(kr<0) return false;
  // Check if any enemy piece attacks king
  for(let r=0;r<8;r++) for(let f=0;f<8;f++){
    const p=board[r][f];
    if(!p) continue;
    if(whiteKing?isBlack(p):isWhite(p)){
      const moves=getRawMoves(board,r,f);
      if(moves.some(([mr,mf])=>mr===kr&&mf===kf)) return true;
    }
  }
  return false;
}

// Apply move on board clone, return new board
function applyMove(board,fr,ff,tr,tf){
  const nb=board.map(r=>[...r]);
  nb[tr][tf]=nb[fr][ff];
  nb[fr][ff]=null;
  return nb;
}

// Get legal moves (filters out moves that leave own king in check)
function getLegalMoves(board,r,f){
  const p=board[r][f];
  if(!p) return [];
  const raw=getRawMoves(board,r,f);
  const white=isWhite(p);
  return raw.filter(([tr,tf])=>{
    const nb=applyMove(board,r,f,tr,tf);
    return !isInCheck(nb,white);
  });
}

/* ════════════════════════════════════════════════════════════
   INTERACTIVE CHESS BOARD RENDERER  (step type t:'cb')
════════════════════════════════════════════════════════════ */
let cbState=null; // {board, selected, legalMoves, lastFrom, lastTo, whiteToMove}

function rCB(step, b){
  const D=step.d; // {title, subtitle, pieceMap, whiteToMove, readOnly}
  cbState={
    board: buildBoard(D.pieceMap||{}),
    selected: null,
    legalMoves: [],
    lastFrom: null,
    lastTo: null,
    whiteToMove: D.whiteToMove!==false
  };
  b.innerHTML=`
  <div class="cb-wrap a">
    <div class="cb-title">${D.title||'♟️ Chess Board'}</div>
    <div class="cb-subtitle">${D.subtitle||'Pieces drag/click se hilao!'}</div>
    <div style="text-align:center;margin-bottom:8px;">
      <span class="cb-turn" id="cbTurn">${cbState.whiteToMove?'⬜ White ki baari':'⬛ Black ki baari'}</span>
    </div>
    <div id="cbBoardOuter" class="cb-board-outer">
      <div style="display:flex;align-items:center;gap:4px;">
        <div class="cb-ranks" id="cbRanks"></div>
        <div class="cb-board" id="cbBoard"></div>
      </div>
    </div>
    <div class="cb-coords" id="cbFiles">
      ${['a','b','c','d','e','f','g','h'].map(c=>`<div class="cb-coord-file">${c}</div>`).join('')}
    </div>
    <div class="cb-btn-row" style="margin-top:10px;">
      <button class="cb-btn danger" onclick="cbReset()">🔄 Reset</button>
      <button class="cb-btn" onclick="cbFlipBoard()">🔃 Flip</button>
      <button class="cb-btn primary" onclick="nx()">Next →</button>
    </div>
  </div>`;
  cbRenderBoard(false);
}

let cbFlipped=false;
function cbFlipBoard(){cbFlipped=!cbFlipped;cbRenderBoard();}
function cbReset(){if(cbState){cbState.selected=null;cbState.legalMoves=[];cbRenderBoard();}}

function cbRenderBoard(animate){
  if(!cbState) return;
  const grid=document.getElementById('cbBoard');
  const ranks=document.getElementById('cbRanks');
  if(!grid) return;
  grid.innerHTML='';
  if(ranks){
    ranks.innerHTML='';
    for(let r=7;r>=0;r--){
      const d=document.createElement('div');
      d.className='cb-rank-num';
      d.textContent=cbFlipped?8-r:r+1;
      ranks.appendChild(d);
    }
  }
  for(let ri=7;ri>=0;ri--){
    const r=cbFlipped?7-ri:ri;
    for(let fi=0;fi<8;fi++){
      const f=cbFlipped?7-fi:fi;
      const isLight=(r+f)%2===1;
      const sq=document.createElement('div');
      sq.className='cb-sq '+(isLight?'light':'dark');
      sq.dataset.r=r;sq.dataset.f=f;

      // Highlights
      if(cbState.selected&&cbState.selected[0]===r&&cbState.selected[1]===f) sq.classList.add('selected');
      if(cbState.legalMoves.some(([mr,mf])=>mr===r&&mf===f)) sq.classList.add('legal');
      if(cbState.lastFrom&&cbState.lastFrom[0]===r&&cbState.lastFrom[1]===f) sq.classList.add('last-from');
      if(cbState.lastTo&&cbState.lastTo[0]===r&&cbState.lastTo[1]===f) sq.classList.add('last-to');

      const piece=cbState.board[r][f];
      if(piece){
        const pd=document.createElement('div');
        pd.className='cb-piece '+(isWhite(piece)?'white':'black');
        pd.textContent=CHESS_PIECES[piece]||piece;
        sq.appendChild(pd);
      }
      sq.addEventListener('click',()=>cbClick(r,f));
      grid.appendChild(sq);
    }
  }
  // Update turn badge
  const tb=document.getElementById('cbTurn');
  if(tb) tb.textContent=cbState.whiteToMove?'⬜ White ki baari':'⬛ Black ki baari';
}

function cbClick(r,f){
  if(!cbState) return;
  const p=cbState.board[r][f];
  const sel=cbState.selected;

  if(sel){
    // Try to move to this square
    const isLegal=cbState.legalMoves.some(([mr,mf])=>mr===r&&mf===f);
    if(isLegal){
      cbState.board=applyMove(cbState.board,sel[0],sel[1],r,f);
      cbState.lastFrom=sel;cbState.lastTo=[r,f];
      cbState.selected=null;cbState.legalMoves=[];
      cbState.whiteToMove=!cbState.whiteToMove;
      cbRenderBoard();
      return;
    }
    // Click on own piece — reselect
    if(p&&(cbState.whiteToMove?isWhite(p):isBlack(p))){
      cbState.selected=[r,f];
      cbState.legalMoves=getLegalMoves(cbState.board,r,f);
      cbRenderBoard();return;
    }
    cbState.selected=null;cbState.legalMoves=[];cbRenderBoard();return;
  }

  // Select a piece
  if(p&&(cbState.whiteToMove?isWhite(p):isBlack(p))){
    cbState.selected=[r,f];
    cbState.legalMoves=getLegalMoves(cbState.board,r,f);
    cbRenderBoard();
  }
}

/* ════════════════════════════════════════════════════════════
   TACTICS PUZZLE TRAINER  (step type t:'puzzle')
════════════════════════════════════════════════════════════ */
function rPuzzle(step, b){
  const pz=step.d;
  const stars='★'.repeat(pz.difficulty||1)+'☆'.repeat(5-(pz.difficulty||1));
  const pieceMap=pz.board?pz.board.pieces:{};

  b.innerHTML=`
  <div class="pz-wrap a">
    <div class="pz-header">
      <div class="pz-icon">♟️</div>
      <div class="pz-htxt">
        <div class="pz-title">${pz.title||'Chess Puzzle'}</div>
        <div class="pz-diff">${stars} Mushkil</div>
      </div>
      <div class="pz-xp">+${pz.xpBonus||30} XP</div>
    </div>
    <div class="pz-desc">${pz.desc||''}</div>

    ${pieceMap&&Object.keys(pieceMap).length?`
    <div class="cb-board-outer" style="margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:4px;">
        <div class="cb-ranks" id="pzRanks"></div>
        <div class="cb-board" id="pzBoard"></div>
      </div>
    </div>
    <div class="cb-coords">
      ${['a','b','c','d','e','f','g','h'].map(c=>`<div class="cb-coord-file">${c}</div>`).join('')}
    </div>`:''}

    ${pz.hint?`<button class="pz-hint-btn" onclick="pzShowHint(this)">💡 Hint Chahiye?</button>
    <div class="pz-hint-box" id="pzHint">${pz.hint}</div>`:''}

    ${pz.choices?`
    <div class="pz-choices" id="pzChoices">
      ${pz.choices.map((c,i)=>`
      <button class="pz-choice" onclick="pzAnswer(${i})" data-idx="${i}">${c.label}</button>`).join('')}
    </div>`:''}

    <div class="pz-feedback" id="pzFeedback"></div>
  </div>`;

  // Render puzzle board (read-only display)
  if(pieceMap&&Object.keys(pieceMap).length){
    const board=buildBoard(pieceMap);
    const grid=document.getElementById('pzBoard');
    const ranks=document.getElementById('pzRanks');
    if(ranks){
      ranks.innerHTML='';
      for(let r=7;r>=0;r--){
        const d=document.createElement('div');
        d.className='cb-rank-num';
        d.textContent=r+1;
        ranks.appendChild(d);
      }
    }
    if(grid){
      grid.innerHTML='';
      for(let ri=7;ri>=0;ri--){
        for(let f=0;f<8;f++){
          const isLight=(ri+f)%2===1;
          const sq=document.createElement('div');
          sq.className='cb-sq '+(isLight?'light':'dark');
          const piece=board[ri][f];
          if(piece){
            const pd=document.createElement('div');
            pd.className='cb-piece '+(isWhite(piece)?'white':'black');
            pd.textContent=CHESS_PIECES[piece]||piece;
            sq.appendChild(pd);
          }
          grid.appendChild(sq);
        }
      }
    }
  }

  // Store puzzle data for answer handler
  window._currentPuzzle=pz;
}

function pzShowHint(btn){
  const h=document.getElementById('pzHint');
  if(h){h.style.display='block';btn.style.display='none';}
}

function pzAnswer(idx){
  const pz=window._currentPuzzle;
  if(!pz||!pz.choices) return;
  const choice=pz.choices[idx];
  const choices=document.querySelectorAll('.pz-choice');
  choices.forEach(c=>{c.classList.add('disabled');c.classList.add('pz-choice');});

  const fb=document.getElementById('pzFeedback');
  if(choice.correct){
    choices[idx].classList.add('correct');
    fb.className='pz-feedback ok';
    fb.style.display='block';
    fb.innerHTML=`${choice.resp||'✅ Bilkul sahi!'}<br><br>
      <button class="bg" style="margin-top:8px" onclick="pzContinue()">Next →</button>`;
    // Award XP
    if(typeof CS==='function'){CS().xp+=(pz.xpBonus||30);}
    // Float XP animation
    const xpEl=document.createElement('div');
    xpEl.className='pz-xp-anim';
    xpEl.textContent='+'+( pz.xpBonus||30)+' XP! 🎉';
    document.body.appendChild(xpEl);
    setTimeout(()=>xpEl.remove(),1400);
    // Flash board green
    document.querySelectorAll('.cb-sq').forEach(sq=>sq.classList.add('flash-green'));
  } else {
    choices[idx].classList.add('wrong');
    fb.className='pz-feedback no';
    fb.style.display='block';
    fb.innerHTML=`${choice.resp||'❌ Wrong!'}<br><br>
      <button class="bg" style="margin-top:8px" onclick="pzContinue()">Got It →</button>`;
    // Flash board red
    document.querySelectorAll('.cb-sq').forEach(sq=>sq.classList.add('flash-red'));
    const pzHtEl = document.getElementById('lHt');
    if(isUnlimitedHearts()){
      if(pzHtEl) pzHtEl.textContent = '♾️';
    } else {
      if(typeof hl!=='undefined' && hl>0){ hl--; }
      const mxH=(typeof getAdminMaxHearts==='function')?getAdminMaxHearts():3;
      if(pzHtEl) pzHtEl.textContent='❤️'.repeat(Math.max(0,hl))+'🖤'.repeat(Math.max(0,mxH-hl));
      if(typeof hl!=='undefined' && hl===0){ setTimeout(()=>showHeartsFail(),1200); }
    }
  }
}

function pzContinue(){
  if(typeof nx==='function') nx();
}

/* ════════════════════════════════════════════════════════════
   HOOK INTO renderStep — Register new step types
════════════════════════════════════════════════════════════ */
// We hook in by overriding the step dispatch INSIDE the timeout.
// The safe approach: after DOM is ready, patch the inner render dispatch.
(function patchRenderStep(){
  // Patch renderStep to add chess/puzzle step support
  // This replaces the original renderStep entirely — hearts use dynamic admin value
  window.renderStep = function(){
    const tot=LS.length;
    document.getElementById('lPf').style.width=Math.round((si/tot)*100)+'%';
  // Dynamic hearts from admin setting
  const maxH = (typeof getAdminMaxHearts==='function') ? getAdminMaxHearts() : 3;
  const lHtEl = document.getElementById('lHt');
  if(lHtEl){
    if(isUnlimitedHearts()){
      lHtEl.textContent = '♾️';
    } else {
      lHtEl.textContent = '❤️'.repeat(Math.max(0,hl)) + '🖤'.repeat(Math.max(0,maxH-hl));
    }
  }
    const step=LS[si];
    const bd=document.getElementById('lBd');
    bd.scrollTop=0;
    bd.style.transition='opacity .15s ease,transform .15s ease';
    bd.style.opacity='0';bd.style.transform='translateX(-12px)';
    setTimeout(()=>{
      // Chess step types
      if(step.t==='cb') rCB(step,bd);
      else if(step.t==='puzzle') rPuzzle(step,bd);
      // Standard step types
      else if(step.t==='sh')rSH(step,bd);
      else if(step.t==='vc')rVC(step,bd);
      else if(step.t==='sn')rSN(step,bd);
      else if(step.t==='gr')rGR(step,bd);
      else if(step.t==='st')rST(step,bd);
      else if(step.t==='qz')rQZ(step,bd);
      else if(step.t==='mq')rMQ(step,bd);
      else if(step.t==='done')rDone(bd);
      bd.style.transform='translateX(14px)';
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        bd.style.transition='opacity .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)';
        bd.style.opacity='1';bd.style.transform='translateX(0)';
        setTimeout(()=>{bd.style.transition='';},380);
      }));
    },150);
  };
})();

/* ════════════════════════════════════════════════════════════
   PATCH buildSteps — Add chess board + puzzle steps for chess course
════════════════════════════════════════════════════════════ */
(function patchBuildSteps(){
  const _origBS=window.buildSteps;
  window.buildSteps=function(course){
    const steps=_origBS(course);
    const lang=typeof S!=='undefined'?(S.activeLang||'en'):'en';
    if(lang!=='chess') return steps;

    const cs=typeof CS==='function'?CS():null;
    const dayNum=cs?cs.day:1;
    const D=(ALL_DAYS['chess']||{})[dayNum];
    if(!D) return steps;

    const doneIdx=steps.findIndex(s=>s.t==='done');
    const insertAt=doneIdx>=0?doneIdx:steps.length;

    // Puzzle section header
    const pzHeader={t:'sh',ic:'🧩',cl:'#F39C12',
      ti:'Tactics Puzzle Trainer ♟️',
      su:`Aaj ke puzzles — sahi move dhundo aur XP kamao!`};

    const pzSteps=(D.puzzles||[]).map(pz=>({t:'puzzle',d:pz}));

    if(pzSteps.length>0){
      steps.splice(insertAt,0,pzHeader,...pzSteps);
    }

    // Add interactive board on Day 1 (right after first sh)
    if(dayNum===1){
      const cbStep={t:'cb',d:{
        title:'♟️ Interactive Chess Board',
        subtitle:'Click se piece select karo, green squares pe move karo! Legal moves only.',
        whiteToMove:true,
        pieceMap:{
          a1:'R',b1:'N',c1:'B',d1:'Q',e1:'K',f1:'B',g1:'N',h1:'R',
          a2:'P',b2:'P',c2:'P',d2:'P',e2:'P',f2:'P',g2:'P',h2:'P',
          a8:'r',b8:'n',c8:'b',d8:'q',e8:'k',f8:'b',g8:'n',h8:'r',
          a7:'p',b7:'p',c7:'p',d7:'p',e7:'p',f7:'p',g7:'p',h7:'p'
        }
      }};
      const cbHeader={t:'sh',ic:'♟️',cl:'#2ECC71',
        ti:'Interactive Board — Khelo!',
        su:'Real chess board — pieces hilao, rules apply honge!'};
      // Insert after first 'sh' step (index 1)
      steps.splice(1,0,cbStep,cbHeader);
      // Swap so header comes first
      const tmp=steps[1];steps[1]=steps[2];steps[2]=tmp;
    }

    return steps;
  };
})();


// ══════════════════════════════════════════════════════════
//  PAST PAPERS SYSTEM — 9th/10th/11th/12th Punjab Boards
// ══════════════════════════════════════════════════════════

// ── Past Papers Data Store ──
// Structure: PP_DATA[class][year][board][subject][session] = {paperData}
// session: 'morning', 'evening', 'supply'
const PP_DATA = {};

// ── Sample Data: Class 9, Year 2021, Rawalpindi Board, English, Morning ──
PP_DATA[9] = PP_DATA[9] || {};
PP_DATA[9][2021] = PP_DATA[9][2021] || {};
PP_DATA[9][2021]['Rawalpindi'] = PP_DATA[9][2021]['Rawalpindi'] || {};
PP_DATA[9][2021]['Rawalpindi']['English'] = PP_DATA[9][2021]['Rawalpindi']['English'] || {};

PP_DATA[9][2021]['Rawalpindi']['English']['morning'] = {
  title: '9th English — Rawalpindi Board 2021 (Morning)',
  class: 9, year: 2021, board: 'Rawalpindi', subject: 'English', session: 'morning',
  sections: [
    // ── SECTION A: MCQs ──
    {
      type: 'mcq',
      title: 'Section A — Objective (MCQs)',
      instructions: 'Har sawaal ke 4 options hain. Sahi jawab choose karo.',
      questions: [
        {
          q: 'Choose the correct word: He is _____ honest man.',
          opts: ['a', 'an', 'the', 'no article'],
          ans: 1,
          exp: '"An" use hota hai jab agle word ki starting vowel sound se ho. "Honest" mein "H" silent hai, isliye "an honest" sahi hai.'
        },
        {
          q: 'Select the correct tense: She _____ to school every day.',
          opts: ['go', 'goes', 'went', 'going'],
          ans: 1,
          exp: 'Third person singular (She/He/It) ke sath "goes" use hota hai — Simple Present Tense.'
        },
        {
          q: 'Find the synonym of "Brave":',
          opts: ['Coward', 'Courageous', 'Afraid', 'Weak'],
          ans: 1,
          exp: '"Brave" aur "Courageous" dono ka matlab himmat wala hota hai — synonyms hain.'
        },
        {
          q: 'Choose the correct plural of "Leaf":',
          opts: ['Leafs', 'Leafes', 'Leaves', 'Leafe'],
          ans: 2,
          exp: 'Jab noun "f" ya "fe" par khatam ho, plural mein "ves" lagta hai: leaf → leaves, knife → knives.'
        },
        {
          q: '"He plays football." — Identify the underlined word type: "plays"',
          opts: ['Noun', 'Adjective', 'Verb', 'Adverb'],
          ans: 2,
          exp: '"Plays" ek action word hai — yeh verb hai. Verb kaam batata hai.'
        },
        {
          q: 'Choose the antonym of "Ancient":',
          opts: ['Old', 'Modern', 'Historical', 'Aged'],
          ans: 1,
          exp: '"Ancient" ka matlab purana/qadeem. Iska antonym (ulta) "Modern" hai jiska matlab naya/jadeed.'
        },
        {
          q: 'Select the correct passive voice: "The teacher teaches students."',
          opts: [
            'Students were taught by the teacher.',
            'Students are taught by the teacher.',
            'Students have been taught by the teacher.',
            'Students will be taught by the teacher.'
          ],
          ans: 1,
          exp: 'Present Simple ki passive: "Subject + is/are + V3 + by + Object". "Teaches" → "are taught".'
        },
        {
          q: '"She is _____ best student in the class." — Fill in the blank:',
          opts: ['a', 'an', 'the', 'some'],
          ans: 2,
          exp: '"The" use hota hai jab hum kisi specific cheez ki baat karein. "Best student" specific hai, isliye "the" sahi hai.'
        }
      ]
    },
    // ── SECTION B: Fill in the Blanks ──
    {
      type: 'fillblanks',
      title: 'Section B — Fill in the Blanks',
      instructions: 'Naeeche diye gaye options mein se sahi lafz choose karke blank baro.',
      questions: [
        {
          q: 'I _____ my homework every evening. (do / does / did)',
          ans: 'do',
          opts: ['do', 'does', 'did'],
          exp: '"I" ke sath "do" use hota hai Simple Present mein. "Does" sirf third person singular ke liye hai.'
        },
        {
          q: 'She was _____ when she heard the good news. (happy / happily / happiness)',
          ans: 'happy',
          opts: ['happy', 'happily', 'happiness'],
          exp: '"Was" ke baad adjective aata hai. "Happy" adjective hai, isliye sahi jawab hai.'
        },
        {
          q: 'They _____ to Lahore tomorrow. (go / goes / will go)',
          ans: 'will go',
          opts: ['go', 'goes', 'will go'],
          exp: '"Tomorrow" future ko indicate karta hai, isliye "will go" sahi hai — Simple Future Tense.'
        },
        {
          q: 'The book is _____ the table. (on / in / at)',
          ans: 'on',
          opts: ['on', 'in', 'at'],
          exp: 'Jab koi cheez kisi surface (surface) pe rakhee ho, "on" use hota hai.'
        }
      ]
    },
    // ── SECTION C: Short Questions ──
    {
      type: 'qa',
      title: 'Section C — Short Questions',
      instructions: 'Naeeche diye gaye sawaalon ke mukhtasar jawab likho.',
      questions: [
        {
          q: 'Q1. What is a noun? Give two examples.',
          ans: 'A noun is a naming word. It names a person, place, thing or idea.\nExamples: Teacher (person), Lahore (place), Book (thing), Courage (idea).',
          hint: 'Noun = naam wala lafz. Insaan, jagah, cheez ya idea ka naam.'
        },
        {
          q: 'Q2. Write a sentence using the word "beautiful" as an adjective.',
          ans: 'The beautiful flowers are in the garden.\n(Ya koi bhi sahi sentence: "She wore a beautiful dress.")',
          hint: 'Adjective kisi noun ko describe karta hai. "Beautiful" kisi noun se pehle aana chahiye.'
        },
        {
          q: 'Q3. What is the difference between "their" and "there"?',
          ans: '"Their" is a possessive pronoun meaning "belonging to them." Example: This is their house.\n"There" refers to a place. Example: The book is there.',
          hint: 'Their = unka (possession). There = wahan (place).'
        },
        {
          q: 'Q4. Change into negative: "He likes tea."',
          ans: 'He does not like tea.\n(Note: "does not" use hoga aur verb "likes" → "like" ho jaata hai)',
          hint: 'Third person singular mein negative ke liye "does not" aur simple form of verb use karo.'
        }
      ]
    },
    // ── SECTION D: Long Questions ──
    {
      type: 'long',
      title: 'Section D — Long Questions',
      instructions: 'Naeeche diye gaye sawaalon ke tafseeli jawab likho.',
      questions: [
        {
          q: 'Q5. Write a paragraph (8-10 sentences) on "My Best Friend".',
          ans: `Answer Guide:
• Para ki shuruat: Name batao (My best friend's name is ___)
• Kahan mila: (I met him/her at school / in my neighbourhood)
• Qualities: (He/She is kind, helpful, intelligent...)
• Shared memories: (We study together, play cricket...)
• Kyon khaas hai: (He/She always helps me when I am sad)
• End: (I am lucky to have such a good friend)

Sample Opening: "My best friend's name is Ahmed. I have known him since childhood. He is a very kind and intelligent boy. We study in the same class and help each other in our studies..."`,
          hint: 'Friend ki qualities batao — kind, honest, helpful. Kuch memories likho. 8-10 sentences mein likho.'
        },
        {
          q: 'Q6. Translate into English: "محنت کامیابی کی کنجی ہے۔ جو طالب علم محنت کرتا ہے وہ ضرور کامیاب ہوتا ہے۔"',
          ans: 'Hard work is the key to success. The student who works hard definitely achieves success.',
          hint: 'Har lafz ka matlab samjho: محنت=hard work, کامیابی=success, کنجی=key, طالب علم=student, ضرور=definitely'
        }
      ]
    }
  ]
};

// ── Sample Data: Class 9, Year 2023, Lahore Board, Urdu, Morning ──
PP_DATA[9][2023] = PP_DATA[9][2023] || {};
PP_DATA[9][2023]['Lahore'] = PP_DATA[9][2023]['Lahore'] || {};
PP_DATA[9][2023]['Lahore']['Urdu'] = PP_DATA[9][2023]['Lahore']['Urdu'] || {};
PP_DATA[9][2023]['Lahore']['Urdu']['morning'] = {
  title: '9th Urdu — Lahore Board 2023 (Morning)',
  class: 9, year: 2023, board: 'Lahore', subject: 'Urdu', session: 'morning',
  sections: [
    {
      type: 'mcq',
      title: 'Section A — Objective (MCQs)',
      instructions: 'Har sawaal ke 4 options hain. Sahi jawab choose karo.',
      questions: [
        { q: 'درج ذیل میں سے درست محاورہ کون سا ہے؟', opts: ['آنکھیں کھلنا', 'آنکھیں ہونا', 'آنکھیں جانا', 'آنکھیں آنا'], ans: 0, exp: 'آنکھیں کھلنا — ہوش آنا کے معنی میں درست محاورہ ہے' },
        { q: '"اقبال" کا پورا نام کیا تھا؟', opts: ['محمد اقبال', 'علامہ محمد اقبال', 'ڈاکٹر محمد اقبال', 'سر محمد اقبال'], ans: 2, exp: 'علامہ اقبال کا پورا نام ڈاکٹر محمد اقبال تھا' },
        { q: 'غزل میں پہلے شعر کو کیا کہتے ہیں؟', opts: ['مقطع', 'مطلع', 'ردیف', 'قافیہ'], ans: 1, exp: 'غزل کے پہلے شعر کو مطلع کہتے ہیں' }
      ]
    },
    {
      type: 'qa',
      title: 'Section B — Short Questions',
      instructions: 'مختصر جواب لکھو۔',
      questions: [
        { q: 'Q1. علامہ اقبال کا مشہور کلام کون سا ہے؟', ans: 'علامہ اقبال کا مشہور کلام "بانگ درا"، "بال جبریل" اور "ضرب کلیم" ہے۔ شکوہ اور جواب شکوہ بھی بہت مشہور ہیں۔', hint: 'بانگ درا کا نام سوچو' },
        { q: 'Q2. محاورہ کسے کہتے ہیں؟', ans: 'محاورہ وہ مخصوص الفاظ یا جملہ ہے جو اپنے اصل معنی کے علاوہ کسی اور مفہوم میں استعمال ہو۔', hint: 'الفاظ کے مجازی معنی' }
      ]
    }
  ]
};

// ── PP Navigation State ──
let ppState = {
  class: null,
  subject: null,
  board: null,
  year: null,
  session: null,
  attemptMode: false,
  currentSectionIdx: 0,
  currentQIdx: 0,
  hearts: 5,
  score: 0,
  answers: {}
};

// Punjab Boards + AJK
const PP_BOARDS = [
  'Lahore', 'Rawalpindi', 'Gujranwala', 'Faisalabad',
  'Multan', 'Sargodha', 'Bahawalpur', 'DG Khan', 'Sahiwal', 'AJK'
];

// Years 2021-2026
const PP_YEARS = [2021, 2022, 2023, 2024, 2025, 2026];

// Subjects per class — complete Punjab board list, koi miss nahi
const PP_SUBJECTS = {
  9: [
    // Compulsory
    { name: 'English',               group: 'Compulsory', emoji: '🇬🇧' },
    { name: 'Urdu',                  group: 'Compulsory', emoji: '📖' },
    { name: 'Islamiat',              group: 'Compulsory', emoji: '☪️' },
    { name: 'Pakistan Studies',      group: 'Compulsory', emoji: '🌙' },
    // Science Group
    { name: 'Mathematics',           group: 'Science',    emoji: '🔢' },
    { name: 'Physics',               group: 'Science',    emoji: '⚡' },
    { name: 'Chemistry',             group: 'Science',    emoji: '🧪' },
    { name: 'Biology',               group: 'Science',    emoji: '🧬' },
    { name: 'Computer Science',      group: 'Science',    emoji: '💻' },
    // Arts / General
    { name: 'General Science',       group: 'General',    emoji: '🔬' },
    { name: 'Home Economics',        group: 'Arts',       emoji: '🏠' },
    { name: 'Civics',                group: 'Arts',       emoji: '🏛️' },
    { name: 'History',               group: 'Arts',       emoji: '📜' },
    { name: 'Geography',             group: 'Arts',       emoji: '🌍' },
    { name: 'Punjabi',               group: 'Arts',       emoji: '✍️' },
    { name: 'Arabic',                group: 'Arts',       emoji: '🕌' },
    { name: 'Fine Arts',             group: 'Arts',       emoji: '🎨' },
    { name: 'Education',             group: 'Arts',       emoji: '🏫' },
    { name: 'Health & Physical Education', group: 'Arts', emoji: '🏃' },
  ],
  10: [
    // Compulsory
    { name: 'English',               group: 'Compulsory', emoji: '🇬🇧' },
    { name: 'Urdu',                  group: 'Compulsory', emoji: '📖' },
    { name: 'Islamiat',              group: 'Compulsory', emoji: '☪️' },
    { name: 'Pakistan Studies',      group: 'Compulsory', emoji: '🌙' },
    // Science Group
    { name: 'Mathematics',           group: 'Science',    emoji: '🔢' },
    { name: 'Physics',               group: 'Science',    emoji: '⚡' },
    { name: 'Chemistry',             group: 'Science',    emoji: '🧪' },
    { name: 'Biology',               group: 'Science',    emoji: '🧬' },
    { name: 'Computer Science',      group: 'Science',    emoji: '💻' },
    // Arts / General
    { name: 'General Science',       group: 'General',    emoji: '🔬' },
    { name: 'Home Economics',        group: 'Arts',       emoji: '🏠' },
    { name: 'Civics',                group: 'Arts',       emoji: '🏛️' },
    { name: 'History',               group: 'Arts',       emoji: '📜' },
    { name: 'Geography',             group: 'Arts',       emoji: '🌍' },
    { name: 'Punjabi',               group: 'Arts',       emoji: '✍️' },
    { name: 'Arabic',                group: 'Arts',       emoji: '🕌' },
    { name: 'Fine Arts',             group: 'Arts',       emoji: '🎨' },
    { name: 'Education',             group: 'Arts',       emoji: '🏫' },
    { name: 'Health & Physical Education', group: 'Arts', emoji: '🏃' },
  ],
  11: [
    // Compulsory (sab k liye)
    { name: 'English',               group: 'Compulsory', emoji: '🇬🇧' },
    { name: 'Urdu',                  group: 'Compulsory', emoji: '📖' },
    { name: 'Islamiat',              group: 'Compulsory', emoji: '☪️' },
    { name: 'Pakistan Studies',      group: 'Compulsory', emoji: '🌙' },
    // FSc Pre-Medical
    { name: 'Biology',               group: 'FSc Pre-Medical', emoji: '🧬' },
    { name: 'Chemistry',             group: 'FSc Pre-Medical', emoji: '🧪' },
    { name: 'Physics',               group: 'FSc Pre-Medical', emoji: '⚡' },
    // FSc Pre-Engineering
    { name: 'Mathematics',           group: 'FSc Pre-Engineering', emoji: '🔢' },
    // ICS
    { name: 'Computer Science',      group: 'ICS',        emoji: '💻' },
    { name: 'Statistics',            group: 'ICS',        emoji: '📊' },
    // I.Com
    { name: 'Principles of Accounting', group: 'I.Com',  emoji: '📒' },
    { name: 'Principles of Commerce',   group: 'I.Com',  emoji: '📦' },
    { name: 'Economics',             group: 'I.Com',      emoji: '💰' },
    { name: 'Business Maths',        group: 'I.Com',      emoji: '🔢' },
    // FA (Arts)
    { name: 'Civics',                group: 'FA',         emoji: '🏛️' },
    { name: 'History',               group: 'FA',         emoji: '📜' },
    { name: 'Geography',             group: 'FA',         emoji: '🌍' },
    { name: 'Sociology',             group: 'FA',         emoji: '👥' },
    { name: 'Psychology',            group: 'FA',         emoji: '🧠' },
    { name: 'Islamic Education',     group: 'FA',         emoji: '☪️' },
    { name: 'Punjabi',               group: 'FA',         emoji: '✍️' },
    { name: 'Arabic',                group: 'FA',         emoji: '🕌' },
    { name: 'Fine Arts',             group: 'FA',         emoji: '🎨' },
    { name: 'Education',             group: 'FA',         emoji: '🏫' },
    { name: 'Home Economics',        group: 'FA',         emoji: '🏠' },
    { name: 'Health & Physical Education', group: 'FA',  emoji: '🏃' },
  ],
  12: [
    // Compulsory (sab k liye)
    { name: 'English',               group: 'Compulsory', emoji: '🇬🇧' },
    { name: 'Urdu',                  group: 'Compulsory', emoji: '📖' },
    { name: 'Islamiat',              group: 'Compulsory', emoji: '☪️' },
    { name: 'Pakistan Studies',      group: 'Compulsory', emoji: '🌙' },
    // FSc Pre-Medical
    { name: 'Biology',               group: 'FSc Pre-Medical', emoji: '🧬' },
    { name: 'Chemistry',             group: 'FSc Pre-Medical', emoji: '🧪' },
    { name: 'Physics',               group: 'FSc Pre-Medical', emoji: '⚡' },
    // FSc Pre-Engineering
    { name: 'Mathematics',           group: 'FSc Pre-Engineering', emoji: '🔢' },
    // ICS
    { name: 'Computer Science',      group: 'ICS',        emoji: '💻' },
    { name: 'Statistics',            group: 'ICS',        emoji: '📊' },
    // I.Com
    { name: 'Principles of Accounting', group: 'I.Com',  emoji: '📒' },
    { name: 'Principles of Commerce',   group: 'I.Com',  emoji: '📦' },
    { name: 'Economics',             group: 'I.Com',      emoji: '💰' },
    { name: 'Business Maths',        group: 'I.Com',      emoji: '🔢' },
    // FA (Arts)
    { name: 'Civics',                group: 'FA',         emoji: '🏛️' },
    { name: 'History',               group: 'FA',         emoji: '📜' },
    { name: 'Geography',             group: 'FA',         emoji: '🌍' },
    { name: 'Sociology',             group: 'FA',         emoji: '👥' },
    { name: 'Psychology',            group: 'FA',         emoji: '🧠' },
    { name: 'Islamic Education',     group: 'FA',         emoji: '☪️' },
    { name: 'Punjabi',               group: 'FA',         emoji: '✍️' },
    { name: 'Arabic',                group: 'FA',         emoji: '🕌' },
    { name: 'Fine Arts',             group: 'FA',         emoji: '🎨' },
    { name: 'Education',             group: 'FA',         emoji: '🏫' },
    { name: 'Home Economics',        group: 'FA',         emoji: '🏠' },
    { name: 'Health & Physical Education', group: 'FA',  emoji: '🏃' },
  ]
};

// ── STEP 1: Class Select ──
function ppSelectClass(cls){
  ppState.class = cls;
  ppState.subject = null;
  ppState.board = null;
  ppState.year = null;
  ppState.session = null;

  const clsLabel = {9:'9th', 10:'10th', 11:'11th', 12:'12th'}[cls];
  document.getElementById('ppClassSelect').style.display = 'none';
  document.getElementById('ppSubjectSelect').style.display = 'block';
  document.getElementById('ppSubjectTitle').textContent = clsLabel + ' Class — Subject';

  // ── Sab subjects dikhao — paper hoga toh open hoga, nahi hoga toh message aayega ──
  const subs = PP_SUBJECTS[cls] || [];

  // Group by group name
  const groups = {};
  subs.forEach(s => {
    if(!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  const groupColors = {
    'Compulsory':'var(--g)', 'Science':'var(--b)', 'General':'var(--b)',
    'FSc Pre-Medical':'var(--r)', 'FSc Pre-Engineering':'var(--o)',
    'ICS':'var(--p)', 'I.Com / FA':'var(--y)', 'FA':'var(--y)', 'Arts':'var(--y)'
  };

  let html = '';
  Object.entries(groups).forEach(([grp, items]) => {
    const gc = groupColors[grp] || 'var(--mut)';
    html += `<div style="margin-bottom:14px;">
      <div style="font-size:10px;font-weight:800;color:${gc};text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px;padding:0 4px;">📁 ${grp}</div>
      <div style="display:flex;flex-direction:column;gap:6px;">`;
    items.forEach(s => {
      html += `<div onclick="ppSelectSubject('${s.name.replace(/'/g,"\\'")}')" style="background:rgba(255,255,255,.05);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:transform .15s;" onmousedown="this.style.transform='scale(.97)'" onmouseup="this.style.transform=''">
        <span style="font-size:20px;">${s.emoji}</span>
        <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:var(--txt);flex:1;">${s.name}</div>
        <div style="color:var(--mut);font-size:16px;">›</div>
      </div>`;
    });
    html += `</div></div>`;
  });
  document.getElementById('ppSubjectGrid').innerHTML = html;
}

// ── STEP 2: Subject Select → Board ──
function ppSelectSubject(sub){
  ppState.subject = sub;
  const clsLabel = {9:'9th', 10:'10th', 11:'11th', 12:'12th'}[ppState.class];

  document.getElementById('ppSubjectSelect').style.display = 'none';
  document.getElementById('ppBoardSelect').style.display = 'block';
  document.getElementById('ppBoardTitle').textContent = clsLabel + ' · ' + sub + ' — Board';

  // ── Sab boards hamesha dikhao — agar paper nahi hoga toh year screen pe batayenge ──
  const cls = ppState.class;
  const boardsToShow = PP_BOARDS;

  let html = '';
  const boardEmojis = { Lahore:'🏛️', Rawalpindi:'🌲', Gujranwala:'⚙️', Faisalabad:'🏭', Multan:'🌸', Sargodha:'🌾', Bahawalpur:'🏜️', 'DG Khan':'🌊', Sahiwal:'🐄', AJK:'🏔️' };
  boardsToShow.forEach(board => {
    const emoji = boardEmojis[board] || '🏫';
    html += `<div onclick="ppSelectBoard('${board}')" style="background:rgba(255,255,255,.05);border:1.5px solid var(--bdr);border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:transform .15s;" onmousedown="this.style.transform='scale(.97)'" onmouseup="this.style.transform=''">
      <span style="font-size:20px;">${emoji}</span>
      <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:var(--txt);flex:1;">${board} Board</div>
      <div style="color:var(--mut);font-size:16px;">›</div>
    </div>`;
  });
  document.getElementById('ppBoardGrid').innerHTML = html;
}

// ── STEP 3: Board Select → Year Sections ──
function ppSelectBoard(board){
  ppState.board = board;
  const clsLabel = {9:'9th', 10:'10th', 11:'11th', 12:'12th'}[ppState.class];

  document.getElementById('ppBoardSelect').style.display = 'none';
  document.getElementById('ppYearSelect').style.display = 'block';
  document.getElementById('ppYearTitle').textContent = clsLabel + ' · ' + ppState.subject + ' · ' + board;

  // Build year buttons for each session
  ['Morning','Evening','Supply'].forEach(sess => {
    const sessKey = sess.toLowerCase();
    const containerId = 'pp' + sess + 'Years';
    const colors = { Morning:'var(--y)', Evening:'var(--p)', Supply:'var(--r)' };
    const c = colors[sess];
    let html = '';
    PP_YEARS.forEach(yr => {
      const hasData = PP_DATA[ppState.class]
        && PP_DATA[ppState.class][yr]
        && PP_DATA[ppState.class][yr][board]
        && PP_DATA[ppState.class][yr][board][ppState.subject]
        && PP_DATA[ppState.class][yr][board][ppState.subject][sessKey];
      html += `<div onclick="ppSelectYearSession(${yr},'${sessKey}')" style="flex:1;min-width:calc(33% - 6px);background:${hasData ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.03)'};border:2px solid ${hasData ? c : 'var(--bdr)'};border-radius:14px;padding:12px 6px;text-align:center;cursor:pointer;transition:transform .15s;" onmousedown="this.style.transform='scale(.95)'" onmouseup="this.style.transform=''">
        <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:${hasData ? c : 'var(--mut)'};">${yr}</div>
        <div style="font-size:9px;color:var(--mut);margin-top:2px;">${hasData ? '✅ Available' : '🔜 Coming'}</div>
      </div>`;
    });
    document.getElementById(containerId).innerHTML = html;
  });
}

// ── STEP 4: Year+Session → Paper View ──
function ppSelectYearSession(yr, sess){
  ppState.year = yr;
  ppState.session = sess;
  const cls = ppState.class;
  const board = ppState.board;
  const sub = ppState.subject;

  const d = PP_DATA[cls]?.[yr]?.[board]?.[sub]?.[sess];
  if(!d){
    showToast('⏳ Yeh paper abhi add nahi hua!', 'var(--o)');
    return;
  }
  if(!isPro()){ showPaperProPopup(); return; }

  // Agar sirf meta hai (sections abhi nahi) toh Firebase se fetch karo
  if(d._metaOnly || !d.sections || d.sections.length === 0){
    if(!d._fbKey){
      showToast('⚠️ Paper key nahi mili', 'var(--o)'); return;
    }
    showToast('⏳ Paper load ho raha hai...', 'var(--b)');
    loadPaperSectionsFromFirebase(d._fbKey, function(sections, err){
      if(err || !sections){
        showToast('❌ Paper load nahi hua: '+(err||'unknown'), '#FF6B6B'); return;
      }
      // Sections save karo aur meta flag hatao
      PP_DATA[cls][yr][board][sub][sess].sections = sections;
      PP_DATA[cls][yr][board][sub][sess]._metaOnly = false;
      // Ab render karo
      ppRenderPaperView(cls, yr, board, sub, sess);
    });
    return;
  }

  ppRenderPaperView(cls, yr, board, sub, sess);
}

// Separate render function — lazy load callback se bhi call hoti hai
function ppRenderPaperView(cls, yr, board, sub, sess){
  const d = PP_DATA[cls]?.[yr]?.[board]?.[sub]?.[sess];
  if(!d) return;

  document.getElementById('ppYearSelect').style.display = 'none';
  document.getElementById('ppPaperView').style.display = 'block';

  const sessLabels = { morning:'🌅 Morning', evening:'🌆 Evening', supply:'🔄 Supply' };
  const sessColors = { morning:'var(--y)', evening:'var(--p)', supply:'var(--r)' };
  const c = sessColors[sess] || 'var(--g)';
  const clsLabel = {9:'9th', 10:'10th', 11:'11th', 12:'12th'}[cls];
  document.getElementById('ppPaperTitle').textContent = clsLabel + ' · ' + sub + ' · ' + board + ' · ' + yr + ' ' + (sessLabels[sess]||sess);

  let html = `<div style="background:rgba(255,255,255,.04);border-radius:16px;padding:14px;margin-bottom:14px;border:1px solid var(--bdr);">
    <div style="font-family:'Fredoka One',sans-serif;font-size:16px;color:${c};margin-bottom:4px;">${d.title}</div>
    <div style="font-size:12px;color:var(--mut);">Sections: ${d.sections.length} · Attempt karo ya sirf dekho</div>
  </div>
  <div style="display:flex;gap:8px;margin-bottom:16px;">
    <button onclick="ppStartAttempt()" style="flex:1;padding:14px;border-radius:16px;border:none;background:linear-gradient(135deg,var(--p),var(--b));color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 #3A6BD4;">✏️ Attempt</button>
  </div>
  <div style="font-size:13px;font-weight:700;color:var(--mut);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px;">Paper Preview:</div>`;

  d.sections.forEach((sec) => {
    html += `<div style="background:var(--card);border-radius:16px;padding:14px;margin-bottom:10px;border:1px solid var(--bdr);">
      <div style="font-family:'Fredoka One',sans-serif;font-size:15px;color:var(--b);margin-bottom:6px;">${sec.title}</div>
      <div style="font-size:12px;color:var(--mut);margin-bottom:10px;">${sec.instructions}</div>`;
    if(sec.type === 'mcq'){
      sec.questions.forEach((q, qi) => {
        html += `<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:12px;">
          <div style="font-size:13px;color:var(--txt);font-weight:600;margin-bottom:6px;">${qi+1}. ${q.q}</div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            ${q.opts.map((o,oi)=>`<div style="font-size:12px;color:${oi===q.ans?'var(--g)':'var(--mut)'};">${['A','B','C','D'][oi]}. ${o}${oi===q.ans?' ✅':''}</div>`).join('')}
          </div>
        </div>`;
      });
    } else if(sec.type === 'fillblanks'){
      sec.questions.forEach((q, qi) => {
        html += `<div style="margin-bottom:8px;padding:10px;background:rgba(255,255,255,.04);border-radius:12px;">
          <div style="font-size:13px;color:var(--txt);margin-bottom:4px;">${qi+1}. ${q.q}</div>
          <div style="font-size:12px;color:var(--g);">Jawab: ${q.ans}</div>
        </div>`;
      });
    } else if(sec.type === 'qa' || sec.type === 'long'){
      sec.questions.forEach((q) => {
        html += `<div style="margin-bottom:8px;padding:10px;background:rgba(255,255,255,.04);border-radius:12px;">
          <div style="font-size:13px;color:var(--txt);font-weight:600;margin-bottom:6px;">${q.q}</div>
          <button onclick="this.nextElementSibling.style.display='block';this.style.display='none';" style="background:rgba(46,229,157,.12);border:1px solid var(--g);border-radius:10px;padding:6px 14px;color:var(--g);font-size:12px;cursor:pointer;font-family:'Fredoka One',sans-serif;">📖 Show Answer</button>
          <div style="display:none;font-size:12px;color:rgba(255,255,255,.7);line-height:1.7;margin-top:8px;white-space:pre-line;">${q.ans}</div>
        </div>`;
      });
    }
    html += `</div>`;
  });
  document.getElementById('ppPaperContent').innerHTML = html;

  // Build next/prev paper navigation within same section (same sess)
  ppBuildPaperNav();
}

// Next / Prev paper within same session type
function ppBuildPaperNav(){
  const cls = ppState.class;
  const board = ppState.board;
  const sub = ppState.subject;
  const sess = ppState.session;
  const currentYr = ppState.year;

  // Find available years for this sess
  const available = PP_YEARS.filter(yr =>
    PP_DATA[cls]?.[yr]?.[board]?.[sub]?.[sess]
  );
  const idx = available.indexOf(currentYr);

  const navDiv = document.getElementById('ppPaperNav');
  let html = '';
  if(idx > 0){
    const prevYr = available[idx-1];
    html += `<button onclick="ppSelectYearSession(${prevYr},'${sess}')" style="flex:1;padding:12px;border-radius:14px;border:1.5px solid var(--bdr);background:rgba(255,255,255,.05);color:var(--txt);font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">← ${prevYr}</button>`;
  }
  if(idx < available.length - 1){
    const nextYr = available[idx+1];
    html += `<button onclick="ppSelectYearSession(${nextYr},'${sess}')" style="flex:1;padding:12px;border-radius:14px;border:none;background:linear-gradient(135deg,var(--b),var(--p));color:#fff;font-family:'Fredoka One',sans-serif;font-size:14px;cursor:pointer;">Next: ${nextYr} →</button>`;
  }
  navDiv.innerHTML = html;
}

function ppStartAttempt(){
  const d = PP_DATA[ppState.class]?.[ppState.year]?.[ppState.board]?.[ppState.subject]?.[ppState.session];
  if(!d) return;
  ppState.currentSectionIdx = 0;
  ppState.currentQIdx = 0;
  ppState.hearts = 5;
  ppState.score = 0;
  ppState.answers = {};
  ppState.sectionScores = {};
  ppState.subjectiveAttempted = {};
  // Pro unlimited check — agar unlimited mode hai toh hearts deduct nahi honge
  ppState.unlimitedHearts = (typeof isPro === 'function' && isPro()) && (typeof getHeartMode === 'function' ? getHeartMode() === 'unlimited' : true);
  d.sections.forEach((sec, i)=>{
    ppState.sectionScores[i] = { got: 0, total: sec.questions ? sec.questions.length : 0, type: sec.type||'mcq', title: sec.title||('Section '+(i+1)) };
  });
  
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('ppAttempt').classList.add('active');
  document.getElementById('ppAttemptHt').textContent = ppState.unlimitedHearts ? '♾️' : '❤️'.repeat(ppState.hearts);
  ppRenderAttemptQ();
}

function ppExitAttempt(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('pastpapers').classList.add('active');
  // Wapas paper view pe aao
  document.getElementById('ppPaperView').style.display = 'block';
  document.getElementById('ppYearSelect').style.display = 'none';
  document.getElementById('ppBoardSelect').style.display = 'none';
  document.getElementById('ppSubjectSelect').style.display = 'none';
  document.getElementById('ppClassSelect').style.display = 'none';
}

function ppGetCurrentSection(){
  const d = PP_DATA[ppState.class]?.[ppState.year]?.[ppState.board]?.[ppState.subject]?.[ppState.session];
  if(!d) return null;
  return d.sections[ppState.currentSectionIdx] || null;
}

function ppTotalQInSection(sec){
  return (sec && sec.questions) ? sec.questions.length : 0;
}

function ppTotalQAll(){
  const d = PP_DATA[ppState.class]?.[ppState.year]?.[ppState.board]?.[ppState.subject]?.[ppState.session];
  if(!d) return 1;
  return d.sections.reduce((t, s)=> t + (s.questions ? s.questions.length : 0), 0);
}

function ppCurrentQNum(){
  const d = PP_DATA[ppState.class]?.[ppState.year]?.[ppState.board]?.[ppState.subject]?.[ppState.session];
  if(!d) return 0;
  let n = 0;
  for(let i = 0; i < ppState.currentSectionIdx; i++){
    n += (d.sections[i] && d.sections[i].questions) ? d.sections[i].questions.length : 0;
  }
  return n + ppState.currentQIdx + 1;
}

function ppUpdateProgress(){
  const tot = ppTotalQAll();
  const cur = ppCurrentQNum();
  const pct = Math.round(((cur-1)/tot)*100);
  document.getElementById('ppAttemptPf').style.width = pct + '%';
}

function ppRenderAttemptQ(){
  const bd = document.getElementById('ppAttemptBd');
  bd.scrollTop = 0;
  const sec = ppGetCurrentSection();
  if(!sec){
    ppShowFinalResult();
    return;
  }
  const q = sec.questions[ppState.currentQIdx];
  if(!q){
    // Next section
    ppState.currentSectionIdx++;
    ppState.currentQIdx = 0;
    const nextSec = ppGetCurrentSection();
    if(!nextSec){ ppShowFinalResult(); return; }
    ppRenderAttemptQ();
    return;
  }
  ppUpdateProgress();
  
  const L = ['A','B','C','D'];
  let html = `<div style="font-size:11px;color:var(--p);font-weight:800;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">${sec.title}</div>
    <div style="font-size:12px;color:var(--mut);margin-bottom:14px;">Q ${ppCurrentQNum()} / ${ppTotalQAll()}</div>`;
  
  if(sec.type === 'mcq'){
    html += `<div style="background:var(--card);border-radius:18px;padding:16px;border:2px solid var(--bdr);margin-bottom:14px;">
      <div style="font-size:15px;font-weight:700;color:var(--txt);line-height:1.6;">${q.q}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;" id="ppMcqOpts">
      ${q.opts.map((o,i)=>`<button class="qo" onclick="ppAnswerMCQ(${i},${q.ans},this)" style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:2px solid var(--bdr);border-radius:16px;padding:14px 16px;cursor:pointer;text-align:left;transition:all .2s;">
        <span class="qol" style="min-width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-family:'Fredoka One',sans-serif;font-size:13px;flex-shrink:0;">${L[i]}</span>
        <span style="font-size:14px;color:var(--txt);font-weight:600;">${o}</span>
      </button>`).join('')}
    </div>
    <div id="ppQFeedback" style="margin-top:14px;"></div>`;
    
  } else if(sec.type === 'fillblanks'){
    html += `<div style="background:var(--card);border-radius:18px;padding:16px;border:2px solid var(--bdr);margin-bottom:14px;">
      <div style="font-size:15px;font-weight:700;color:var(--txt);line-height:1.6;">${q.q}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;" id="ppFillOpts">
      ${q.opts.map((o,i)=>`<button onclick="ppAnswerFill('${o}','${q.ans}',this)" style="background:rgba(255,255,255,.05);border:2px solid var(--bdr);border-radius:16px;padding:14px 16px;cursor:pointer;text-align:center;font-size:15px;font-weight:700;color:var(--txt);transition:all .2s;" onmousedown="this.style.transform='scale(.97)'" onmouseup="this.style.transform=''">${o}</button>`).join('')}
    </div>
    <div id="ppQFeedback" style="margin-top:14px;"></div>`;
    
  } else if(sec.type === 'qa' || sec.type === 'long'){
    html += `<div style="background:var(--card);border-radius:18px;padding:16px;border:2px solid var(--bdr);margin-bottom:14px;">
      <div style="font-size:15px;font-weight:700;color:var(--txt);line-height:1.6;">${q.q}</div>
      ${q.hint ? `<div style="margin-top:10px;padding:8px 12px;background:rgba(91,141,239,.1);border-radius:10px;font-size:12px;color:var(--b);">💡 Hint: ${q.hint}</div>` : ''}
    </div>
    <button onclick="ppShowQAnswer('${sec.type}')" style="width:100%;padding:14px;border-radius:16px;border:2px solid var(--g);background:rgba(46,229,157,.08);color:var(--g);font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;margin-bottom:10px;">📖 Show Answer / Guide</button>
    <div id="ppQFeedback"></div>`;
  }
  
  bd.innerHTML = html;
}

function ppAnswerMCQ(sel, ans, btn){
  document.querySelectorAll('#ppMcqOpts .qo').forEach(b=>{ b.style.pointerEvents='none'; b.style.opacity='.8'; });
  const opts = document.querySelectorAll('#ppMcqOpts .qo');
  opts[ans].style.background = 'rgba(46,229,157,.2)';
  opts[ans].style.borderColor = 'var(--g)';
  opts[ans].querySelector('.qol').style.background = 'var(--g)';
  opts[ans].querySelector('.qol').style.color = '#000';
  
  const fb = document.getElementById('ppQFeedback');
  if(sel === ans){
    ppState.score++;
    if(ppState.sectionScores && ppState.sectionScores[ppState.currentSectionIdx] !== undefined)
      ppState.sectionScores[ppState.currentSectionIdx].got++;
    btn.style.background = 'rgba(46,229,157,.2)';
    btn.style.borderColor = 'var(--g)';
    btn.querySelector('.qol').style.background = 'var(--g)';
    const q = ppGetCurrentSection().questions[ppState.currentQIdx];
    fb.innerHTML = `<div style="background:rgba(46,229,157,.12);border:2px solid rgba(46,229,157,.4);border-radius:16px;padding:14px;margin-bottom:12px;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:var(--g);margin-bottom:6px;">✅ Bilkul Sahi! Shabaash! 🎉</div>
      ${q.exp ? `<div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;">${q.exp}</div>` : ''}
    </div>
    <button onclick="ppNextQ()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--g);color:#000;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 var(--g2);">Next Question →</button>`;
  } else {
    btn.style.background = 'rgba(255,107,107,.2)';
    btn.style.borderColor = 'var(--r)';
    btn.querySelector('.qol').style.background = 'var(--r)';
    if(!ppState.unlimitedHearts){
      ppState.hearts = Math.max(0, ppState.hearts - 1);
      document.getElementById('ppAttemptHt').textContent = '❤️'.repeat(ppState.hearts) + '🖤'.repeat(5 - ppState.hearts);
    }
    const q = ppGetCurrentSection().questions[ppState.currentQIdx];
    fb.innerHTML = `<div style="background:rgba(255,107,107,.1);border:2px solid rgba(255,107,107,.3);border-radius:16px;padding:14px;margin-bottom:12px;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:var(--r);margin-bottom:6px;">❌ Wrong! Sahi jawab: <span style="color:var(--g)">${['A','B','C','D'][ans]}. ${q.opts[ans]}</span></div>
      ${q.exp ? `<div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;">${q.exp}</div>` : ''}
    </div>
    <button onclick="ppNextQ()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--b);color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 var(--b2);">Next Question →</button>`;
    if(!ppState.unlimitedHearts && ppState.hearts === 0){
      setTimeout(ppHeartsFail, 1000);
    }
  }
}

function ppAnswerFill(sel, ans, btn){
  document.querySelectorAll('#ppFillOpts button').forEach(b=>{ b.style.pointerEvents='none'; });
  const fb = document.getElementById('ppQFeedback');
  const isCorrect = sel.trim().toLowerCase() === ans.trim().toLowerCase();
  if(isCorrect){
    ppState.score++;
    if(ppState.sectionScores && ppState.sectionScores[ppState.currentSectionIdx] !== undefined)
      ppState.sectionScores[ppState.currentSectionIdx].got++;
    btn.style.background = 'rgba(46,229,157,.2)';
    btn.style.borderColor = 'var(--g)';
    btn.style.color = 'var(--g)';
    const q = ppGetCurrentSection().questions[ppState.currentQIdx];
    fb.innerHTML = `<div style="background:rgba(46,229,157,.12);border:2px solid rgba(46,229,157,.4);border-radius:16px;padding:14px;margin-bottom:12px;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:var(--g);margin-bottom:4px;">✅ Sahi! "${ans}"</div>
      ${q.exp ? `<div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;">${q.exp}</div>` : ''}
    </div>
    <button onclick="ppNextQ()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--g);color:#000;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 var(--g2);">Next →</button>`;
  } else {
    btn.style.background = 'rgba(255,107,107,.15)';
    btn.style.borderColor = 'var(--r)';
    btn.style.color = 'var(--r)';
    if(!ppState.unlimitedHearts){
      ppState.hearts = Math.max(0, ppState.hearts - 1);
      document.getElementById('ppAttemptHt').textContent = '❤️'.repeat(ppState.hearts) + '🖤'.repeat(5 - ppState.hearts);
    }
    const q = ppGetCurrentSection().questions[ppState.currentQIdx];
    fb.innerHTML = `<div style="background:rgba(255,107,107,.1);border:2px solid rgba(255,107,107,.3);border-radius:16px;padding:14px;margin-bottom:12px;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:17px;color:var(--r);">❌ Wrong! Sahi: <span style="color:var(--g)">${ans}</span></div>
      ${q.exp ? `<div style="font-size:12px;color:rgba(255,255,255,.7);line-height:1.6;margin-top:6px;">${q.exp}</div>` : ''}
    </div>
    <button onclick="ppNextQ()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--b);color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;box-shadow:0 5px 0 var(--b2);">Next →</button>`;
    if(!ppState.unlimitedHearts && ppState.hearts === 0) setTimeout(ppHeartsFail, 1000);
  }
}

function ppShowQAnswer(type){
  const q = ppGetCurrentSection().questions[ppState.currentQIdx];
  const fb = document.getElementById('ppQFeedback');
  const secIdx = ppState.currentSectionIdx;
  const qKey = secIdx + '_' + ppState.currentQIdx;
  fb.innerHTML = `<div style="background:rgba(46,229,157,.08);border:2px solid rgba(46,229,157,.3);border-radius:16px;padding:16px;margin-bottom:14px;">
    <div style="font-size:11px;color:var(--g);font-weight:800;margin-bottom:8px;">📖 Model Answer / Guide:</div>
    <div style="font-size:13px;color:rgba(255,255,255,.85);line-height:1.7;white-space:pre-line;">${q.ans}</div>
  </div>
  <div style="font-size:12px;color:var(--mut);text-align:center;margin-bottom:10px;">Check your answer — how correct was it?</div>
  <div style="display:flex;gap:8px;margin-bottom:12px;">
    <button onclick="ppSubjectiveMark('full','${qKey}')" style="flex:1;padding:12px 6px;border-radius:14px;border:2px solid rgba(46,229,157,.5);background:rgba(46,229,157,.1);color:var(--g);font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">✅ Bilkul Sahi<br><span style="font-size:10px;opacity:.7;">Full Marks</span></button>
    <button onclick="ppSubjectiveMark('half','${qKey}')" style="flex:1;padding:12px 6px;border-radius:14px;border:2px solid rgba(255,193,7,.5);background:rgba(255,193,7,.1);color:var(--y);font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">🤔 That Was OK<br><span style="font-size:10px;opacity:.7;">Half Marks</span></button>
    <button onclick="ppSubjectiveMark('none','${qKey}')" style="flex:1;padding:12px 6px;border-radius:14px;border:2px solid rgba(255,107,107,.5);background:rgba(255,107,107,.1);color:var(--r);font-family:'Fredoka One',sans-serif;font-size:13px;cursor:pointer;">❌ That Was Wrong<br><span style="font-size:10px;opacity:.7;">0 Marks</span></button>
  </div>`;
}

function ppSubjectiveMark(level, qKey){
  const secIdx = ppState.currentSectionIdx;
  if(ppState.subjectiveAttempted && ppState.subjectiveAttempted[qKey]) { ppNextQ(); return; }
  if(!ppState.subjectiveAttempted) ppState.subjectiveAttempted = {};
  ppState.subjectiveAttempted[qKey] = true;
  if(level === 'full'){
    ppState.score++;
    if(ppState.sectionScores && ppState.sectionScores[secIdx] !== undefined)
      ppState.sectionScores[secIdx].got++;
  } else if(level === 'half'){
    ppState.score += 0.5;
    if(ppState.sectionScores && ppState.sectionScores[secIdx] !== undefined)
      ppState.sectionScores[secIdx].got += 0.5;
  }
  const fb = document.getElementById('ppQFeedback');
  const msgs = { full:'✅ Full marks mile!', half:'🤔 Half marks — agle baar puri koshish!', none:'❌ 0 marks — model answer dobara parho!' };
  const colors = { full:'var(--g)', half:'var(--y)', none:'var(--r)' };
  fb.innerHTML = `<div style="text-align:center;padding:10px;color:${colors[level]};font-family:'Fredoka One',sans-serif;font-size:15px;margin-bottom:10px;">${msgs[level]}</div>
  <button onclick="ppNextQ()" style="width:100%;padding:14px;border-radius:16px;border:none;background:linear-gradient(135deg,var(--p),var(--b));color:#fff;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;">Next Question →</button>`;
}

function ppNextQ(){
  const sec = ppGetCurrentSection();
  if(!sec){ ppShowFinalResult(); return; }
  ppState.currentQIdx++;
  if(ppState.currentQIdx >= sec.questions.length){
    ppState.currentSectionIdx++;
    ppState.currentQIdx = 0;
  }
  const bd = document.getElementById('ppAttemptBd');
  bd.style.opacity = '0';
  bd.style.transform = 'translateX(-12px)';
  bd.style.transition = 'opacity .15s, transform .15s';
  setTimeout(()=>{
    ppRenderAttemptQ();
    bd.style.transform = 'translateX(14px)';
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      bd.style.transition = 'opacity .3s, transform .35s cubic-bezier(.34,1.56,.64,1)';
      bd.style.opacity = '1';
      bd.style.transform = 'translateX(0)';
    }));
  }, 150);
}

function ppHeartsFail(){
  const bd = document.getElementById('ppAttemptBd');
  bd.innerHTML = `<div style="text-align:center;padding:30px 20px;">
    <div style="font-size:64px;margin-bottom:16px;">💔</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:24px;color:var(--r);margin-bottom:8px;">Hearts Empty!</div>
    <div style="font-size:14px;color:var(--mut);margin-bottom:24px;">Score: ${ppState.score} correct</div>
    <button onclick="ppStartAttempt()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--g);color:#000;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;margin-bottom:10px;box-shadow:0 5px 0 var(--g2);">🔄 Try Again</button>
    <button onclick="ppExitAttempt()" style="width:100%;padding:14px;border-radius:16px;border:2px solid var(--bdr);background:transparent;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:15px;cursor:pointer;">← Go Back</button>
  </div>`;
}

function ppShowFinalResult(){
  const tot = ppTotalQAll();
  document.getElementById('ppAttemptPf').style.width = '100%';
  const pct = Math.round((ppState.score / tot) * 100);
  const bd = document.getElementById('ppAttemptBd');
  let grade, gradeColor, emoji;
  if(pct >= 90){ grade='A+'; gradeColor='var(--g)'; emoji='🏆'; }
  else if(pct >= 80){ grade='A'; gradeColor='var(--g)'; emoji='🎉'; }
  else if(pct >= 70){ grade='B'; gradeColor='var(--y)'; emoji='😊'; }
  else if(pct >= 60){ grade='C'; gradeColor='var(--o)'; emoji='👍'; }
  else if(pct >= 50){ grade='D'; gradeColor='var(--r)'; emoji='📚'; }
  else { grade='F'; gradeColor='var(--r)'; emoji='💪'; }
  const secIcons = { mcq:'🔤', fillblanks:'✏️', qa:'📝', long:'📄' };
  let sectionBreakdown = '';
  if(ppState.sectionScores){
    sectionBreakdown = Object.entries(ppState.sectionScores).map(([idx, s])=>{
      const secPct = s.total > 0 ? Math.round((s.got / s.total)*100) : 0;
      const barColor = secPct>=70?'var(--g)':secPct>=40?'var(--y)':'var(--r)';
      const gotDisplay = Number.isInteger(s.got) ? s.got : s.got.toFixed(1);
      return `<div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
          <span style="font-size:12px;color:var(--txt);font-weight:700;">${secIcons[s.type]||'📋'} ${s.title}</span>
          <span style="font-size:12px;color:${barColor};font-weight:800;">${gotDisplay} / ${s.total}</span>
        </div>
        <div style="height:6px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden;">
          <div style="height:100%;width:${secPct}%;background:${barColor};border-radius:4px;"></div>
        </div>
      </div>`;
    }).join('');
  }
  bd.innerHTML = `<div style="text-align:center;padding:20px 16px;">
    <div style="font-size:64px;margin-bottom:10px;">${emoji}</div>
    <div style="font-family:'Fredoka One',sans-serif;font-size:26px;color:${gradeColor};margin-bottom:4px;">Grade: ${grade}</div>
    <div style="font-size:44px;font-family:'Fredoka One',sans-serif;color:${gradeColor};margin-bottom:6px;">${pct}%</div>
    <div style="font-size:14px;color:var(--mut);margin-bottom:20px;">${ppState.score} / ${tot} marks</div>
    ${sectionBreakdown ? `<div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:16px;border:1px solid var(--bdr);text-align:left;">
      <div style="font-family:'Fredoka One',sans-serif;font-size:13px;color:var(--p);margin-bottom:12px;">📊 Section-wise Breakdown</div>
      ${sectionBreakdown}
    </div>` : ''}
    <div style="background:var(--card);border-radius:16px;padding:14px;margin-bottom:20px;border:1px solid var(--bdr);text-align:left;">
      <div style="font-size:12px;color:var(--txt);line-height:1.9;">
        📄 ${ppState.subject} — ${ppState.board} Board<br>
        📅 Class ${ppState.class}th — Year ${ppState.year}<br>
        🌅 ${ppState.session.charAt(0).toUpperCase()+ppState.session.slice(1)} Session<br>
        ❤️ Hearts remaining: ${ppState.unlimitedHearts ? '♾️ Unlimited (Pro)' : ppState.hearts+'/5'}
      </div>
    </div>
    <button onclick="ppStartAttempt()" style="width:100%;padding:14px;border-radius:16px;border:none;background:var(--g);color:#000;font-family:'Fredoka One',sans-serif;font-size:16px;cursor:pointer;margin-bottom:10px;box-shadow:0 5px 0 var(--g2);">🔄 Try Again</button>
    <button onclick="ppExitAttempt()" style="width:100%;padding:14px;border-radius:16px;border:2px solid var(--bdr);background:transparent;color:var(--mut);font-family:'Fredoka One',sans-serif;font-size:15px;cursor:pointer;">← Papers List</button>
  </div>`;
}

function ppBack(to){
  if(to === 'class'){
    // Subject → Class
    ppState.subject = null;
    document.getElementById('ppSubjectSelect').style.display = 'none';
    document.getElementById('ppClassSelect').style.display = 'block';
  } else if(to === 'subject'){
    // Board → Subject
    ppState.board = null;
    document.getElementById('ppBoardSelect').style.display = 'none';
    document.getElementById('ppSubjectSelect').style.display = 'block';
  } else if(to === 'board'){
    // Years → Board
    ppState.year = null;
    ppState.session = null;
    document.getElementById('ppYearSelect').style.display = 'none';
    document.getElementById('ppBoardSelect').style.display = 'block';
  } else if(to === 'years'){
    // Paper View → Year Sections
    ppState.year = null;
    ppState.session = null;
    document.getElementById('ppPaperView').style.display = 'none';
    document.getElementById('ppYearSelect').style.display = 'block';
  }
}

// ── Hook showPage AFTER DOM loads so original showPage is already defined ──
(function ppLoadSaved(){
  try {
    // Load user-added papers
    const stored = JSON.parse(localStorage.getItem('speakup_pp') || '{}');
    Object.values(stored).forEach(p => {
      if(!p.class || !p.year || !p.board || !p.subject || !p.session) return;
      PP_DATA[p.class] = PP_DATA[p.class] || {};
      PP_DATA[p.class][p.year] = PP_DATA[p.class][p.year] || {};
      PP_DATA[p.class][p.year][p.board] = PP_DATA[p.class][p.year][p.board] || {};
      PP_DATA[p.class][p.year][p.board][p.subject] = PP_DATA[p.class][p.year][p.board][p.subject] || {};
      PP_DATA[p.class][p.year][p.board][p.subject][p.session] = p;
    });
    // Apply deletions for built-in papers
    const deleted = JSON.parse(localStorage.getItem('speakup_pp_deleted') || '[]');
    deleted.forEach(key => {
      const parts = key.split('_');
      if(parts.length < 5) return;
      const cls = parseInt(parts[0]);
      const yr = parseInt(parts[1]);
      if(PP_DATA[cls] && PP_DATA[cls][yr]){
        Object.keys(PP_DATA[cls][yr]).forEach(board => {
          Object.keys(PP_DATA[cls][yr][board] || {}).forEach(sub => {
            Object.keys(PP_DATA[cls][yr][board][sub] || {}).forEach(sess => {
              const k = cls+'_'+yr+'_'+board+'_'+sub+'_'+sess;
              if(k === key) delete PP_DATA[cls][yr][board][sub][sess];
            });
          });
        });
      }
    });
  } catch(e){}
})();

// ── Firebase Papers — Lazy Loader ──

// Step 1: Sirf META fetch karo (login ke baad) — chhota data
function loadFirebasePapersMeta(){
  try{
    if(!window.FB_DB || !window.FB_REF || !window.FB_GET) return;
    const papersRef = window.FB_REF(window.FB_DB, 'pastPapers');
    window.FB_GET(papersRef).then(function(snap){
      if(!snap.exists()) return;
      const data = snap.val();
      let count = 0;
      Object.entries(data).forEach(function([key, entry]){
        // New format: entry.meta | Old format: entry directly
        const p = (entry && entry.meta) ? entry.meta : entry;
        if(!p || !p.class || !p.year || !p.board || !p.subject || !p.session) return;
        const cls = parseInt(p.class);
        const yr  = parseInt(p.year);
        PP_DATA[cls] = PP_DATA[cls] || {};
        PP_DATA[cls][yr] = PP_DATA[cls][yr] || {};
        PP_DATA[cls][yr][p.board] = PP_DATA[cls][yr][p.board] || {};
        PP_DATA[cls][yr][p.board][p.subject] = PP_DATA[cls][yr][p.board][p.subject] || {};
        // Sirf meta save karo — sections baad mein fetch honge
        PP_DATA[cls][yr][p.board][p.subject][p.session] = {
          title: p.title, class: cls, year: yr,
          board: p.board, subject: p.subject, session: p.session,
          sections: [], // placeholder — baad mein load hoga
          _fbKey: key,
          _metaOnly: true  // flag — sections abhi nahi hain
        };
        count++;
      });
      console.log('✅ Firebase paper meta loaded:', count, 'papers');
      // Agar year screen open hai toh refresh
      try{
        const yrScreen = document.getElementById('ppYearSelect');
        if(yrScreen && yrScreen.style.display !== 'none' && typeof ppState !== 'undefined' && ppState.board){
          ppSelectBoard(ppState.board);
        }
      }catch(e){}
    }).catch(function(e){ console.warn('Papers meta load error:', e); });
  }catch(e){ console.warn('loadFirebasePapersMeta error:', e); }
}

// Step 2: Jab user paper select kare tab sirf us paper ka sections fetch karo
function loadPaperSectionsFromFirebase(fbKey, callback){
  try{
    if(!window.FB_DB || !window.FB_REF || !window.FB_GET){
      callback(null, 'Firebase ready nahi'); return;
    }
    const sectRef = window.FB_REF(window.FB_DB, 'pastPapers/' + fbKey + '/sections');
    window.FB_GET(sectRef).then(function(snap){
      if(!snap.exists()){ callback(null, 'Sections nahi mile'); return; }
      const data = snap.val();
      const sections = data.sections || (Array.isArray(data) ? data : []);
      callback(sections, null);
    }).catch(function(e){ callback(null, e.message); });
  }catch(e){ callback(null, e.message); }
}