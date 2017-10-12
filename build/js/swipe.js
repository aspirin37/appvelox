'use strict';

(function () {
  var SituationsSwiper = new Swiper ('.swiper-container--situations', {
    direction: 'horizontal',
    speed: 600,
    simulateTouch: false,
    scrollbarHide: true,
    slidesPerView: 'auto',
    breakPoints: {
      640: {
        simulateTouch: true,
      }
    }
  });

  var SpecialistsSwiper = new Swiper ('.swiper-container--specialists', {
    direction: 'horizontal',
    speed: 600,
    simulateTouch: false,
    pagination: '.swiper-pagination--specialists',
    nextButton: '.swiper-button-next--specialists',
    prevButton: '.swiper-button-prev--specialists',
    breakPoints: {
      640: {
        simulateTouch: true,
      }
    }
  });

  var FeaturesSwiper = new Swiper ('.swiper-container--features', {
    direction: 'horizontal',
    speed: 600,
    simulateTouch: false,
    pagination: '.swiper-pagination--features',
    nextButton: '.swiper-button-next--features',
    prevButton: '.swiper-button-prev--features',
    breakPoints: {
      640: {
        simulateTouch: true,
      }
    }
  });

  if (window.innerWidth >= 1380) {
    var ClientsSwiper = new Swiper ('.swiper-container--clients', {
      direction: 'horizontal',
      speed: 600,
      nextButton: '.swiper-button-next--clients',
      prevButton: '.swiper-button-prev--clients',
      scrollbarHide: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      breakPoints: {
        640: {
          simulateTouch: true,
        }
      }
    })
  } else {
    var ClientsSwiper = new Swiper ('.swiper-container--clients', {
      direction: 'vertical',
      speed: 600,
      nextButton: '.swiper-button-next--clients',
      prevButton: '.swiper-button-prev--clients',
      scrollbarHide: true,
      slidesPerView: 'auto',
      breakPoints: {
        640: {
          simulateTouch: true,
        }
      }
    })
  }

  window.onresize = function() {
    setTimeout(location.reload(), 80)
  };
})();
