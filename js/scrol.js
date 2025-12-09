document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero'); // твоя первая секция
  const heroHeight = hero.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > heroHeight) {
      if (currentScroll > lastScrollTop) {
        // Скролл вниз — спрятать хедер
        header.classList.add('hide');
      } else {
        // Скролл вверх — показать хедер
        header.classList.remove('hide');
      }
    } else {
      // Пока на hero-секции — всегда показывать хедер
      header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});



(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-header-open]"),
      closeModalBtn: document.querySelector("[data-modal-header-close]"),
      modal: document.querySelector("[data-header-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


(() => {
  const headerMenu = document.querySelector(".menu");
  const menuCloseBtn = document.querySelector("[data-modal-header-close]");
  const anchorLinks = document.querySelectorAll('a[href^="#"], a[href*="index.html#"]');

  function closeMenuWithDelay() {
    // Добавим класс "closing" (временно)
    headerMenu.classList.add("closing");

    // Через 500 мс реально скрываем
    setTimeout(() => {
      headerMenu.classList.add("is-hidden");
      headerMenu.classList.remove("closing");
    }, 50);
  }

  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", closeMenuWithDelay);
  }

  anchorLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!headerMenu.classList.contains("is-hidden")) {
        closeMenuWithDelay();
      }
    });
  });
})();
