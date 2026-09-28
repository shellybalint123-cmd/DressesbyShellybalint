/* ==========================================================
   Shelly Balint Atelier — main.js
   ========================================================== */
(function () {
  'use strict';

  // ---- הגדרות כלליות ----
  var CONFIG = {
    whatsapp: '972506657822',
    instagram: 'https://www.instagram.com/shelly_balint/',
    defaultMessage: 'היי שלי, הגעתי מהאתר ואשמח לפרטים נוספים',
    dressMessage: function (title) {
      return 'היי, ראיתי באתר את שמלת ' + title + ' ואשמח לפרטים נוספים';
    }
  };

  var CATEGORY_LABELS = {
    bridal: 'קולקציית כלות',
    evening: 'שמלות ערב'
  };

  var dresses = Array.isArray(window.DRESSES) ? window.DRESSES : [];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function waLink(message) {
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(message || CONFIG.defaultMessage);
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function imagesOf(dress) {
    if (Array.isArray(dress.images) && dress.images.length) return dress.images;
    return dress.image ? [dress.image] : [];
  }

  // תמונה עם רקע חלופי עדין כשהקובץ עדיין לא קיים
  function mediaHtml(dress, extraClass, src, hoverSrc) {
    if (src === undefined) src = imagesOf(dress)[0] || '';
    var alt = dress.alt || ('שמלת ' + dress.title + ' — ' + (CATEGORY_LABELS[dress.category] || ''));
    return (
      '<div class="media ' + (extraClass || '') + '">' +
        '<div class="media__placeholder" aria-hidden="true">' +
          '<span class="media__mono">SB</span>' +
          '<span class="media__name">' + escapeHtml(dress.title) + '</span>' +
        '</div>' +
        (src
          ? '<img src="' + escapeHtml(src) + '" alt="' + escapeHtml(alt) + '" loading="lazy" decoding="async" ' +
            'onload="this.parentElement.classList.add(\'is-loaded\')" onerror="this.remove()">'
          : '') +
        (hoverSrc
          ? '<img class="media__hover" src="' + escapeHtml(hoverSrc) + '" alt="" aria-hidden="true" loading="lazy" decoding="async" onerror="this.remove()">'
          : '') +
      '</div>'
    );
  }

  // ---- כל הקישורים הכלליים לוואטסאפ ----
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.href = waLink(el.getAttribute('data-wa-msg'));
  });

  // ---- שנה בפוטר ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- ניווט: אפקט גלילה + תפריט מובייל ----
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobile-menu');

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
    nav.classList.toggle('is-open', open);
    mobileMenu.hidden = !open;
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // ---- אנימציות כניסה בגלילה ----
  var revealObserver = 'IntersectionObserver' in window && !reduceMotion
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

  function observeReveal(root) {
    (root || document).querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add('is-visible');
    });
  }

  // ---- גריד הקולקציות ----
  var grid = document.getElementById('dress-grid');
  var tabs = document.querySelectorAll('.tab');
  var currentFilter = 'all';
  var visibleDresses = dresses.slice();

  function renderGrid() {
    visibleDresses = dresses.filter(function (d) {
      return currentFilter === 'all' || d.category === currentFilter;
    });

    grid.innerHTML = visibleDresses.map(function (d, i) {
      return (
        '<article class="card reveal" style="--i:' + (i % 3) + '">' +
          '<button class="card__open" data-index="' + i + '" aria-label="הגדלת שמלת ' + escapeHtml(d.title) + '">' +
            mediaHtml(d, 'card__media', imagesOf(d)[0] || '', imagesOf(d)[1]) +
            '<span class="card__zoom" aria-hidden="true">לצפייה' +
              (imagesOf(d).length > 1 ? ' · ' + imagesOf(d).length + ' תמונות' : '') + '</span>' +
          '</button>' +
          '<div class="card__body">' +
            '<p class="card__cat">' + escapeHtml(CATEGORY_LABELS[d.category] || '') + '</p>' +
            '<h3 class="card__title">' + escapeHtml(d.title) + '</h3>' +
            '<a class="card__cta" href="' + waLink(CONFIG.dressMessage(d.title)) + '" target="_blank" rel="noopener">' +
              '<svg aria-hidden="true"><use href="#i-whatsapp"/></svg>' +
              '<span>לתיאום מדידה</span>' +
            '</a>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    if (!visibleDresses.length) {
      grid.innerHTML = '<p class="grid__empty">בקרוב — שמלות חדשות בקטגוריה זו.</p>';
    }
    observeReveal(grid);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (tab.dataset.filter === currentFilter) return;
      currentFilter = tab.dataset.filter;
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      if (reduceMotion) { renderGrid(); return; }
      grid.classList.add('is-fading');
      setTimeout(function () {
        renderGrid();
        grid.classList.remove('is-fading');
      }, 280);
    });
  });

  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('.card__open');
    if (btn) openLightbox(Number(btn.dataset.index), btn);
  });

  // ---- Lightbox ----
  var lb = document.getElementById('lightbox');
  var lbMedia = document.getElementById('lb-media');
  var lbCat = document.getElementById('lb-cat');
  var lbTitle = document.getElementById('lb-title');
  var lbWa = document.getElementById('lb-wa');
  var lbThumbs = document.getElementById('lb-thumbs');
  var lbPrev = document.getElementById('lb-prev');
  var lbNext = document.getElementById('lb-next');
  var lbIndex = 0;
  var lastFocus = null;

  function fillLightbox(index) {
    var d = visibleDresses[index];
    if (!d) return;
    lbIndex = index;
    var imgs = imagesOf(d);
    showLightboxImage(d, imgs[0] || '');
    lbThumbs.hidden = imgs.length < 2;
    lbThumbs.innerHTML = imgs.length < 2 ? '' : imgs.map(function (src, n) {
      return '<button class="lightbox__thumb' + (n === 0 ? ' is-active' : '') + '" data-src="' + escapeHtml(src) + '" aria-label="תמונה ' + (n + 1) + ' מתוך ' + imgs.length + '">' +
        '<img src="' + escapeHtml(src) + '" alt="" loading="lazy">' +
      '</button>';
    }).join('');
    lbCat.textContent = CATEGORY_LABELS[d.category] || '';
    lbTitle.textContent = d.title;
    lbWa.href = waLink(CONFIG.dressMessage(d.title));
    var multi = visibleDresses.length > 1;
    lbPrev.hidden = !multi;
    lbNext.hidden = !multi;
  }

  function showLightboxImage(d, src) {
    lbMedia.innerHTML = mediaHtml(d, 'lightbox__img', src);
  }

  lbThumbs.addEventListener('click', function (e) {
    var t = e.target.closest('.lightbox__thumb');
    if (!t || t.classList.contains('is-active')) return;
    lbThumbs.querySelectorAll('.lightbox__thumb').forEach(function (b) { b.classList.toggle('is-active', b === t); });
    showLightboxImage(visibleDresses[lbIndex], t.dataset.src);
  });

  function openLightbox(index, trigger) {
    lastFocus = trigger || document.activeElement;
    fillLightbox(index);
    lb.hidden = false;
    document.documentElement.classList.add('no-scroll');
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    lb.querySelector('.lightbox__close').focus();
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    document.documentElement.classList.remove('no-scroll');
    setTimeout(function () { lb.hidden = true; }, reduceMotion ? 0 : 350);
    if (lastFocus) lastFocus.focus();
  }

  function step(dir) {
    var n = visibleDresses.length;
    fillLightbox((lbIndex + dir + n) % n);
  }

  lb.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeLightbox();
  });
  // ב-RTL: "הקודם" מימין, "הבא" משמאל
  lbPrev.addEventListener('click', function () { step(-1); });
  lbNext.addEventListener('click', function () { step(1); });

  document.addEventListener('keydown', function (e) {
    if (lb.hidden) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false);
      return;
    }
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') step(1);
    else if (e.key === 'ArrowRight') step(-1);
    else if (e.key === 'Tab') {
      // מלכודת פוקוס בתוך החלון
      var focusables = Array.prototype.filter.call(
        lb.querySelectorAll('button, a[href]'),
        function (el) { return !el.hidden && el.offsetParent !== null; }
      );
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // החלקה במובייל
  var touchX = null;
  lb.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx > 0 ? 1 : -1);
    touchX = null;
  });

  // ---- גריד אינסטגרם (INSTAGRAM_IMAGES ב-dresses.js, ואם ריק — תמונות מהקולקציה) ----
  var instaGrid = document.getElementById('insta-grid');
  if (instaGrid) {
    var instaImages = (window.INSTAGRAM_IMAGES || []).slice(0, 6);
    if (!instaImages.length) {
      // תמונה אחת מכל שמלה קודם, ואז השאר
      var rounds = dresses.map(imagesOf);
      for (var r = 0; instaImages.length < 6 && r < 4; r++) {
        rounds.forEach(function (list) {
          if (list[r] && instaImages.length < 6) instaImages.push(list[r]);
        });
      }
    }
    instaGrid.innerHTML = instaImages.map(function (src, i) {
      return (
        '<a class="insta-tile reveal" style="--i:' + i + '" href="' + CONFIG.instagram + '" target="_blank" rel="noopener" aria-label="לאינסטגרם של Shelly Balint">' +
          mediaHtml({ title: '', alt: 'רגע מהסטודיו באינסטגרם' }, 'insta-tile__media', src) +
          '<span class="insta-tile__overlay"><svg aria-hidden="true"><use href="#i-instagram"/></svg></span>' +
        '</a>'
      );
    }).join('');
  }

  renderGrid();
  observeReveal(document);
})();
