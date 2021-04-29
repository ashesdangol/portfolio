class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }
  events() {
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }
  openTheModal(e) {
    e.preventDefault()
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="modal generic-fonts">
      <div class="modal__inner">
        <h1>this is a modal section</h1>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">Contact contents here</p>
        </div>
        <div class="social-icons">
          <h2>here goes social icons</h2>
        </div>
      </div>
      <div class="modal__close">x</div>
    </div>
    `
    )
  }
}
export default Modal
