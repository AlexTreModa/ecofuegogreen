(() => {
  // Mobile Burger Menu
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-active", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.classList.remove("is-active");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mercado Pago Links Injection
  const mpLinks = window.MP_LINKS || {};
  document.querySelectorAll("[data-mp]").forEach((btn) => {
    const url = mpLinks[btn.dataset.mp];
    if (url) {
      btn.href = url;
      btn.hidden = false;
    }
  });

  // Sticky Header Scroll Effect
  const header = document.getElementById("header");
  if (header) {
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      header.classList.toggle("is-scrolled", scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
