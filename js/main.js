'use-strict';
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.header__navigation-list');
const overlay = document.querySelector('.overlay');

const openNav = function () {
  navigation.setAttribute('data-visible', true);
  navToggle.setAttribute('aria-expanded', true);
  overlay.classList.remove('hidden');
};

const closeNav = function () {
  navigation.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  overlay.classList.add('hidden');
};

navToggle.addEventListener('click', function () {
  const visibility = navigation.getAttribute('data-visible');
  //console.log(visibility);

  if (visibility === 'false') {
    openNav();
  } else {
    closeNav();
  }
});

overlay.addEventListener('click', function () {
  closeNav();
});
