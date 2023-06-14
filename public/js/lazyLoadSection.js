let n = 50;
let i = 0;
let cont = document.querySelector(".lazySection");

document.addEventListener('DOMContentLoaded', function() {
  var lazySections = document.querySelectorAll('.lazySection');

  function lazyLoadSection() {
    lazySections.forEach(function(section) {
      if (section.getBoundingClientRect().top <= window.innerHeight) {
        // A seção está prestes a ficar visível, carregue o conteúdo aqui
        section.classList.add('loaded'); // Opcional: Adicione uma classe para estilizar as seções carregadas
      }
    });
  }

  // Execute a função de carregamento preguiçoso quando o usuário rolar a página
  window.addEventListener('scroll', lazyLoadSection);
});
