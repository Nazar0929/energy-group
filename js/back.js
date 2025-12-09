(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"), // ← теперь тут все кнопки
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // вешаем событие на каждую кнопку "Замовити"
  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  // закрытие по клику на фон
  refs.modal.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
