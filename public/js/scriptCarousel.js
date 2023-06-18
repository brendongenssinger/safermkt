document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector(".carousel");
    var carouselInner = carousel.querySelector(".carousel-inner");
    var carouselWidth = carousel.offsetWidth;
    var slideCount = carouselInner.children.length;
    var currentIndex = 0;
    var interval = 3000; // Intervalo de tempo em milissegundos (3 segundos no exemplo)
    var timer;
  
    function startCarousel() {
      timer = setInterval(function() {
        currentIndex = (currentIndex + 1) % slideCount;
        carouselInner.style.transform = "translateX(-" + (currentIndex * carouselWidth) + "px)";
      }, interval);
    }
  
    function stopCarousel() {
      clearInterval(timer);
    }
  
    startCarousel();
  
    carousel.addEventListener("mouseenter", function() {
      stopCarousel();
    });
  
    carousel.addEventListener("mouseleave", function() {
      startCarousel();
    });
  });
  