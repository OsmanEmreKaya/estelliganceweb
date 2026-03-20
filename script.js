/* ================================================
   ESTELLIGANCE — Landing Interactions
   ================================================ */

(function () {
  'use strict';

  /* ----- Mobile nav toggle ----- */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  /* ----- Scroll-reveal (IntersectionObserver) ----- */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ----- Shrink nav on scroll ----- */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.style.padding = '.6rem 2.5rem';
      } else {
        nav.style.padding = '1rem 2.5rem';
      }
    }, { passive: true });
  }
})();
