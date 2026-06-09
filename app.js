/* ============================================
   GreenSpace — Landing Page Logic
   ============================================ */
'use strict';

/* -------------------------------------------------
 * 0. DATA
 * ------------------------------------------------- */
const SHOPEE_SHOP = 'https://shopee.vn/greenspace'; // 🔁 Đổi thành link shop Shopee thật của bạn

const PRODUCTS = [
  {
    title: 'Terrarium',
    img: 'assets/images/products/Terrarium.jpg',
    demo: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=70',
    alt: 'Terrarium hệ sinh thái thu nhỏ',
    points: ['Hệ sinh thái thu nhỏ', 'Kính nghệ thuật', 'Nhiều kích thước'],
    cta: 'Xem chi tiết',
    link: 'https://shopee.vn/greenspace#terrarium',
  },
  {
    title: 'Bể cá thủy sinh',
    img: 'assets/images/products/Bể cá thủy sinh.jpg',
    demo: 'https://images.unsplash.com/photo-1584677626646-7c8f83690304?auto=format&fit=crop&w=800&q=70',
    alt: 'Bể cá thủy sinh thiết kế theo yêu cầu',
    points: ['Thiết kế theo yêu cầu', 'Setup trọn gói', 'Bảo trì định kỳ'],
    cta: 'Xem chi tiết',
    link: 'https://shopee.vn/greenspace#thuy-sinh',
  },
  {
    title: 'Cây xanh để bàn',
    img: 'assets/images/products/Cây xanh để bàn.jpg',
    demo: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=70',
    alt: 'Cây xanh để bàn trang trí',
    points: ['Cây phong thủy', 'Cây văn phòng', 'Chậu decor'],
    cta: 'Xem chi tiết',
    link: 'https://shopee.vn/greenspace#cay-de-ban',
  },
  {
    title: 'Sen đá - Xương rồng',
    img: 'assets/images/products/Sen đá - Xương rồng.jpg',
    demo: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=70',
    alt: 'Sen đá và xương rồng nhiều giống',
    points: ['Dễ chăm sóc', 'Nhiều giống đẹp', 'Phù hợp trang trí'],
    cta: 'Xem chi tiết',
    link: 'https://shopee.vn/greenspace#sen-da',
  },
  {
    title: 'Phụ kiện',
    img: 'assets/images/products/Phụ kiện.jpg',
    demo: 'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?auto=format&fit=crop&w=800&q=70',
    alt: 'Phụ kiện chậu cây và dụng cụ chăm sóc',
    points: ['Chậu cây', 'Đá trang trí', 'Dụng cụ chăm sóc'],
    cta: 'Xem chi tiết',
    link: 'https://shopee.vn/greenspace#phu-kien',
  },
  {
    title: 'Workshop',
    img: 'assets/images/products/Workshop.jpg',
    demo: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=70',
    alt: 'Workshop trải nghiệm làm terrarium',
    points: ['Trải nghiệm thực hành', 'Học làm Terrarium', 'Nhóm và cá nhân'],
    cta: 'Đăng ký ngay',
    link: '#contact', // Workshop vẫn dẫn tới phần liên hệ
  },
];

const TEAM = [
  {
    name: 'Minh Anh',
    role: 'Founder & Designer',
    desc: 'Người truyền cảm hứng và định hình phong cách xanh của GreenSpace.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=70',
  },
  {
    name: 'Quốc Bảo',
    role: 'Chuyên gia thủy sinh',
    desc: 'Setup và bảo trì hàng trăm bể thủy sinh lớn nhỏ.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=70',
  },
  {
    name: 'Thu Hà',
    role: 'Nghệ nhân Terrarium',
    desc: 'Bàn tay khéo léo tạo nên những tiểu cảnh độc bản.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=70',
  },
  {
    name: 'Hoàng Long',
    role: 'Workshop Lead',
    desc: 'Người đồng hành trong mọi buổi workshop trải nghiệm.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70',
  },
];

/* -------------------------------------------------
 * 1. THEME (Dark / Light)
 * ------------------------------------------------- */
(function initTheme() {
  const root = document.documentElement;
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');

  function apply(theme) {
    const dark = theme === 'dark';
    root.classList.toggle('dark', dark);
    sun.classList.toggle('hidden', !dark);   // hiện mặt trời khi đang dark (để chuyển về sáng)
    moon.classList.toggle('hidden', dark);
  }

  const stored = localStorage.getItem('gs-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored || (prefersDark ? 'dark' : 'light'));

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('gs-theme', next);
    apply(next);
  });

  // Theo dõi thay đổi theme hệ điều hành nếu user chưa chọn thủ công
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('gs-theme')) apply(e.matches ? 'dark' : 'light');
  });
})();

/* -------------------------------------------------
 * 2. STICKY HEADER + BACK TO TOP
 * ------------------------------------------------- */
(function initScrollUI() {
  const header = document.getElementById('header');
  const backTop = document.getElementById('back-to-top');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    const show = y > 500;
    backTop.classList.toggle('opacity-0', !show);
    backTop.classList.toggle('pointer-events-none', !show);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* -------------------------------------------------
 * 3. MOBILE MENU
 * ------------------------------------------------- */
(function initMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const openBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');

  function open() {
    menu.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    menu.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
})();

/* -------------------------------------------------
 * 4. HERO SLIDER
 * ------------------------------------------------- */
(function initSlider() {
  const slides = Array.from(document.querySelectorAll('#slider .slide'));
  const dotsWrap = document.getElementById('slider-dots');
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const DELAY = 5000;

  // dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Chuyển tới slide ${i + 1}`);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function go(index) {
    slides[current].dataset.active = 'false';
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].dataset.active = 'true';
    dots[current].classList.add('active');
    restart();
  }
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, DELAY);
  }

  document.getElementById('next-slide').addEventListener('click', next);
  document.getElementById('prev-slide').addEventListener('click', prev);

  // Pause khi hover
  const hero = document.getElementById('home');
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', restart);

  // Touch swipe
  let startX = 0;
  hero.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  hero.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
  }, { passive: true });

  restart();
})();

/* -------------------------------------------------
 * 5. RENDER PRODUCTS
 * ------------------------------------------------- */
(function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => {
    const isExternal = p.link.startsWith('http');
    const attrs = isExternal ? 'target="_blank" rel="noopener"' : '';
    const imgSrc = encodeURI(p.img);
    return `
    <article class="card reveal flex flex-col">
      <a href="${p.link}" ${attrs} class="card-img-wrap aspect-[4/3] block" aria-label="${p.title}">
        <img src="${imgSrc}" alt="${p.alt}" loading="lazy"
             onerror="this.onerror=null;this.src='${p.demo}'"
             class="card-img w-full h-full object-cover" />
      </a>
      <div class="p-3 sm:p-6 flex flex-col flex-1">
        <h3 class="font-heading font-bold text-base sm:text-xl text-textdark dark:text-white mb-2 sm:mb-3">${p.title}</h3>
        <ul class="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 flex-1">
          ${p.points.map((pt) => `
            <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <span class="text-secondary">✓</span> ${pt}
            </li>`).join('')}
        </ul>
        <a href="${p.link}" ${attrs} class="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-primary dark:text-accent hover:gap-3 transition-all">
          ${p.cta}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </div>
    </article>`;
  }).join('');
})();

/* -------------------------------------------------
 * 6. RENDER TEAM
 * ------------------------------------------------- */
(function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;

  grid.innerHTML = TEAM.map((m) => `
    <article class="card reveal text-center p-4 sm:p-6">
      <div class="card-img-wrap w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full mb-3 sm:mb-4 ring-4 ring-accent/30">
        <img src="${m.img}" alt="Ảnh ${m.name}" loading="lazy"
             class="card-img w-full h-full object-cover rounded-full" />
      </div>
      <h3 class="font-heading font-bold text-base sm:text-lg text-textdark dark:text-white">${m.name}</h3>
      <p class="text-secondary font-medium text-xs sm:text-sm mb-2">${m.role}</p>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 sm:mb-4">${m.desc}</p>
      <div class="flex justify-center gap-2 sm:gap-3 text-sm">
        <a href="#" aria-label="Facebook của ${m.name}" class="social-mini">f</a>
        <a href="#" aria-label="Instagram của ${m.name}" class="social-mini">ig</a>
        <a href="#" aria-label="Zalo của ${m.name}" class="social-mini">Z</a>
      </div>
    </article>
  `).join('');

  // style cho social-mini (inject 1 lần)
  if (!document.getElementById('social-mini-style')) {
    const s = document.createElement('style');
    s.id = 'social-mini-style';
    s.textContent = `
      .social-mini{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:9999px;background:rgba(76,175,80,.12);color:#2E7D32;font-weight:700;transition:all .25s ease;}
      .dark .social-mini{background:rgba(139,195,74,.15);color:#8BC34A;}
      .social-mini:hover{background:#2E7D32;color:#fff;transform:translateY(-2px);}
    `;
    document.head.appendChild(s);
  }
})();

/* -------------------------------------------------
 * 7. SCROLL REVEAL (IntersectionObserver)
 * ------------------------------------------------- */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('show'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
})();

/* -------------------------------------------------
 * 8. COUNTER ANIMATION
 * ------------------------------------------------- */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  function animate(el) {
    const target = +el.dataset.target;
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = Math.floor(eased * target).toLocaleString('vi-VN') + (progress === 1 ? '+' : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => io.observe(c));
})();

/* -------------------------------------------------
 * 9. ACTIVE NAV ON SCROLL (bonus)
 * ------------------------------------------------- */
(function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((l) => {
          const active = l.getAttribute('href') === `#${id}`;
          l.style.color = active ? 'var(--secondary)' : '';
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((s) => io.observe(s));
})();
