class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector(".site-header__menu-btn")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }
  events() {
    this.menuBtn.addEventListener("click", () => this.toggleTheMenu())
  }
  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header--is-expanded")
  }
}

export default MobileMenu
