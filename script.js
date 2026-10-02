// ============================================
// iROBOT 小队介绍主页 · 简单交互
// ============================================

// 1. 导航栏滚动后添加阴影效果
const navbar = document.getElementById('navbar');

function onScroll() {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // 返回顶部按钮：滚动超过一屏后显示
  const backTop = document.getElementById('backTop');
  if (window.scrollY > window.innerHeight) {
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
}

window.addEventListener('scroll', onScroll);
onScroll();

// 2. 移动端菜单开关
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// 点击导航链接后自动收起移动端菜单
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// 3. 返回顶部按钮点击
const backTop = document.getElementById('backTop');
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. 滚动到视口时淡入显现（IntersectionObserver）
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));
