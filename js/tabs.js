'use strict';

(function () {
  var situations = document.querySelector('.situations');
  var situationsTabs = situations.querySelectorAll('.situations__tab');
  var situationsBlocks = situations.querySelectorAll('.situations__block');
  var activeBlock = situations.querySelector('.js-show-block');
  var activeTab = situations.querySelector('.situations__tab--active');

  window.onload = function() {
    hideSituationsBlocks();
  }

  function hideSituationsBlocks () {
    for (var i = 0; i < situationsBlocks.length; i++) {
      situationsBlocks[i].classList.remove('js-show-block');
      situationsBlocks[i].classList.add('js-hide-block');
      activeBlock.classList.add('js-show-block');

      situationsTabs[i].classList.remove('situations__tab--active');
      activeTab.classList.add('situations__tab--active');
    }
  }

  for (let i = 0; i < situationsTabs.length; i++) {
    situationsTabs[i].addEventListener('click', function (evt) {
      tabsClickHandler(evt, i)
    })
  }

  function tabsClickHandler (evt, i) {
    var target = evt.target;
    activeTab.classList.remove('situations__tab--active');
    target.classList.add('situations__tab--active');
    activeTab = target;

    activeBlock.classList.remove('js-show-block');
    situationsBlocks[i].classList.add('js-show-block');
    activeBlock = situationsBlocks[i];
  }
})();
