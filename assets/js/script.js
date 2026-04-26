
/* ============================================================
 JAVASCRIPT
 ============================================================ */

'use strict';

/* ── LOADER ── */
const loader = document.getElementById('loader');
const ldStatus = document.getElementById('ldStatus');
const statuses = ['LOADING MODULES...', 'COMPILING ASSETS...', 'MOUNTING DOM...', 'READY.'];
let si = 0;
const statusInt = setInterval(() => {
    if (si < statuses.length) ldStatus.textContent = statuses[si++];
    else clearInterval(statusInt);
}, 400);
window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('out'), 1700);
});

/* ── CUSTOM CURSOR ── */
const cur = document.getElementById('cur');
let mx = -200, my = -200;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
});
document.querySelectorAll('a,button,.sk-card,.proj-item,.svc-card').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
});

/* ── CLOCK ── */
function tick() {
    const now = new Date();
    const t = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map(n => String(n).padStart(2, '0')).join(':');
    const el = document.getElementById('navTime');
    if (el) el.textContent = t;
}
tick(); setInterval(tick, 1000);

/* ── NAV STUCK ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 10);
}, { passive: true });

/* ── ACTIVE NAV ── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
function updateActive() {
    let cur = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) cur = s.id;
    });
    navAs.forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + cur));
}
window.addEventListener('scroll', updateActive, { passive: true });

/* ── BURGER ── */
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mobNav');
burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});
mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobNav.classList.remove('open');
    document.body.style.overflow = '';
}));

/* ── SCROLL REVEAL ── */
const rvEls = document.querySelectorAll('.rv,.rv-l,.rv-r');
const rvObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); rvObs.unobserve(e.target); } });
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
rvEls.forEach(el => rvObs.observe(el));

/* ── SKILL BARS ── */
const skObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const fill = e.target.querySelector('.sk-fill');
            if (fill) setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, 200);
            skObs.unobserve(e.target);
        }
    });
}, { threshold: .3 });
document.querySelectorAll('.sk-card').forEach(c => skObs.observe(c));

/* ── TYPEWRITER in terminal ── */
const typeTarget = document.getElementById('typeTarget');
const commands = ['laravel new my-app', 'php artisan migrate', 'php artisan serve', 'php artisan route:list', 'php artisan cache:clear', 'php artisan migrate:refresh', 'git status'];
let ci = 0, chi = 0, typing = true, waitFrames = 0;
function typeStep() {
    if (!typeTarget) { return; }
    if (typing) {
        if (chi < commands[ci].length) {
            typeTarget.textContent += commands[ci][chi++];
        } else {
            waitFrames++;
            if (waitFrames > 60) { typing = false; waitFrames = 0; }
        }
    } else {
        if (chi > 0) {
            typeTarget.textContent = commands[ci].slice(0, --chi);
        } else {
            typing = true; ci = (ci + 1) % commands.length;
        }
    }
    setTimeout(typeStep, typing ? (waitFrames > 0 ? 16 : 80) : 40);
}
setTimeout(typeStep, 2200);

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) {
            e.preventDefault();
            const offset = 60;
            window.scrollTo({ top: t.offsetTop - offset, behavior: 'smooth' });
        }
    });
});

/* ── BACK TO TOP ── */
document.getElementById('backTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── FOOTER YEAR ── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── CONTACT FORM ── */
const form = document.getElementById('cf');
if (form) {
    const fields = {
        fn: { el: document.getElementById('fn'), err: document.getElementById('fnErr'), msg: 'NAME_REQUIRED' },
        fe: { el: document.getElementById('fe'), err: document.getElementById('feErr'), msg: 'VALID_EMAIL_REQUIRED' },
        fm: { el: document.getElementById('fm'), err: document.getElementById('fmErr'), msg: 'MESSAGE_REQUIRED' },
    };
    const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    Object.values(fields).forEach(f => {
        f.el.addEventListener('input', () => { f.err.textContent = ''; f.el.style.borderColor = ''; });
    });
    form.addEventListener('submit', e => {
        e.preventDefault();
        let ok = true;
        if (!fields.fn.el.value.trim()) { fields.fn.err.textContent = fields.fn.msg; fields.fn.el.style.borderColor = 'var(--red)'; ok = false; }
        if (!isEmail(fields.fe.el.value)) { fields.fe.err.textContent = fields.fe.msg; fields.fe.el.style.borderColor = 'var(--red)'; ok = false; }
        if (!fields.fm.el.value.trim()) { fields.fm.err.textContent = fields.fm.msg; fields.fm.el.style.borderColor = 'var(--red)'; ok = false; }
        if (!ok) return;

        const btn = document.getElementById('cfBtn');
        const txt = document.getElementById('cfBtnTxt');
        const ld = document.getElementById('cfBtnLd');
        btn.disabled = true; txt.hidden = true; ld.hidden = false;

        setTimeout(() => {
            btn.disabled = false; txt.hidden = false; ld.hidden = true;
            form.reset();
            const success = document.getElementById('cfOk');
            success.hidden = false; success.classList.add('show');
            setTimeout(() => { success.hidden = true; success.classList.remove('show'); }, 6000);
        }, 2000);
    });
}

/* ── HERO REVEAL after loader ── */
setTimeout(() => {
    document.querySelectorAll('.hero .rv').forEach(el => el.classList.add('visible'));
}, 1900);
