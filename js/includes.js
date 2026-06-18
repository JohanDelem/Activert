// Injection des fragments HTML partagés (header, hero, footer)

async function loadInclude(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;

  const response = await fetch(url);
  target.innerHTML = await response.text();
}

function highlightActiveLink(containerSelector, activeClass) {
  const currentPage = location.pathname.split('/').pop();

  document.querySelectorAll(`${containerSelector} a`).forEach((link) => {
    const isActive = link.getAttribute('href') === currentPage;
    link.classList.toggle(activeClass, isActive);
    const button = link.querySelector('button');
    if (button) button.classList.toggle(activeClass, isActive);
  });
}

async function initIncludes() {
  const includes = [
    loadInclude('#header-placeholder', 'header.html'),
    loadInclude('#hero-placeholder', 'hero.html'),
    loadInclude('#footer-placeholder', 'footer.html')
  ];

  if (document.querySelector('#sustainability-tabs-placeholder')) {
    includes.push(loadInclude('#sustainability-tabs-placeholder', 'sustainability-tabs.html'));
  }

  await Promise.all(includes);

  highlightActiveLink('nav', 'active');
  highlightActiveLink('.tabs', 'selected');
  document.dispatchEvent(new CustomEvent('includes:ready'));
}

document.addEventListener('DOMContentLoaded', initIncludes);
