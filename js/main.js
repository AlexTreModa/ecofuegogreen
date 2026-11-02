(() => {
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

  const mpLinks = window.MP_LINKS || {};
  document.querySelectorAll("[data-mp]").forEach((btn) => {
    const url = mpLinks[btn.dataset.mp];
    if (url) {
      btn.href = url;
      btn.hidden = false;
    }
  });

  const header = document.getElementById("header");
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 10
        ? "0 6px 24px rgba(26,26,26,0.1)"
        : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
