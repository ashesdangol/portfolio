import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealItems from "./modules/RevealItems"

if (module.hot) {
  module.hot.accept()
}

let mobileMenu = new MobileMenu()
new RevealItems(document.querySelectorAll(".about-me .card"), 75)
/*new RevealItems(document.querySelectorAll(".generic-fonts__header--center"), 0)*/
