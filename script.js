// Destaca no menu a seção que está na tela
(function () {
  var links = document.querySelectorAll('.nav a');
  var alvos = [];
  links.forEach(function (a) {
    var el = document.querySelector(a.getAttribute('href'));
    if (el) alvos.push({ a: a, el: el });
  });

  function atualizar() {
    var pos = window.scrollY + window.innerHeight * 0.3;
    var atual = alvos[0];
    alvos.forEach(function (x) {
      if (x.el.offsetTop <= pos) atual = x;
    });
    links.forEach(function (a) { a.classList.remove('ativo'); });
    if (atual) atual.a.classList.add('ativo');
  }

  window.addEventListener('scroll', atualizar, { passive: true });
  window.addEventListener('resize', atualizar);
  atualizar();
})();
