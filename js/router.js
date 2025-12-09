// js/router.js

function getCurrentRoute() {
  const hash = window.location.hash || '#home';
  return hash.split('?')[0]; // simples, mas suficiente aqui
}

function renderRoute() {
  const route = getCurrentRoute();
  const app = document.getElementById('app');

  const templateMap = {
    '#home': Templates.home,
    '#projetos': Templates.projetos,
    '#cadastro': Templates.cadastro
  };

  app.innerHTML = templateMap[route] || Templates.home;

  // Scripts específicos por página
  if (route === '#cadastro') {
    initCadastroFormValidation();
  }

  highlightActiveLink(route);
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', renderRoute);
