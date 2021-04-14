class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-btn")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.menuToggle())
  }
  menuToggle() {
    this.menuContent.classList.toggle("site-header__menu-content--is-expanded")
    this.siteHeader.classList.toggle("site-header--bg-visibile")
    this.menuIcon.classList.toggle("site-header__menu-btn--close-x")
  }
}

export default MobileMenu
