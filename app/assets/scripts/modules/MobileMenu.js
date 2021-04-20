import debounce from "lodash/debounce"

class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-btn")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.menuItems = document.querySelectorAll(".primary-nav__wrapper li")
    this.browserWidth = window.innerWidth
    this.afterResizedCaller = this.resizedCaller()
    this.events()
  }
  events() {
    this.menuIcon.addEventListener("click", () => this.menuToggle())
    window.addEventListener("resize", this.afterResizedCaller)
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserWidth = window.innerWidth
      }, 333)
    )
  }
  menuToggle() {
    this.menuContent.classList.toggle("site-header__menu-content--is-expanded")
    this.siteHeader.classList.toggle("site-header--bg-visibile")
    this.menuIcon.classList.toggle("site-header__menu-btn--close-x")
    this.checkBrowserWidth
  }

  resizedCaller() {
    if (this.browserWidth < 1020) {
      this.checkBrowserWidth()
    }

    console.log(this.browserWidth)
    console.log("cal ran")
  }

  checkBrowserWidth() {
    if (this.browserWidth < 1020) {
      this.menuItems.forEach(el => {
        this.menuItemsInSmallScreen(el)
      })
    }
  }

  menuItemsInSmallScreen(el) {
    el.addEventListener("click", () => this.menuToggle())
  }
}

export default MobileMenu
