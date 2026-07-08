/* =========================================================================
   Mié Tanaka — interactions front (JS vanilla, sans dépendance)
   1. Menu mobile
   2. Header sticky : ombre au scroll
   3. Révélation des sections au scroll (IntersectionObserver)
   4. Parallaxe très léger sur les illustrations du hero
   Toutes les animations respectent prefers-reduced-motion.
   ========================================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Menu mobile ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Referme le menu après clic sur un lien (navigation mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 2. Header sticky : ombre + fond au scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. Révélation au scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      // Pas d'animation : on affiche tout immédiatement
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      const io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- 4. Parallaxe léger sur le hero (branche + oiseau) ---------- */
  // Optionnel et désactivé si l'utilisateur préfère moins de mouvement.
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  if (parallaxEls.length && !reduceMotion) {
    let ticking = false;
    const update = function () {
      const y = window.scrollY;
      parallaxEls.forEach(function (el) {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        el.style.transform = "translate3d(0," + (y * speed).toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- 5. Année courante dans le footer ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }
})();
