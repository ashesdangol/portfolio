import "../styles/styles.css"
import "lazysizes"
import MobileMenu from "./modules/MobileMenu"
import RevealItems from "./modules/RevealItems"
import StickyHeader from "./modules/StickyHeader"
import VideoSlider from "./modules/VideoSlider"
import Splide from "@splidejs/splide"
import Modal from "./modules/Modal"

if (module.hot) {
  module.hot.accept()
}

new Modal()
let mobileMenu = new MobileMenu()
new RevealItems(document.querySelectorAll(".about-me .card"), 75)
new RevealItems(document.querySelectorAll(".features"), 75)
/*new RevealItems(document.querySelectorAll(".generic-fonts__header--center"), 0)*/
new VideoSlider()

new Splide("#thumbnail__slider", {
  gap: 10,
  cover: true,
  perPage: 3,
  height: 400,
  pagination: false,
  isNavigation: true,
  lazyLoad: "nearby",
  focus: "center",
  pagination: true,
  breakpoints: {
    600: {
      perPage: 2,
      pagination: false,
      height: 250
    }
  }
}).mount()

var featureGalleryThumbnail = new Splide("#features__gallery", {
  gap: 10,
  cover: true,
  width: 400,
  height: 150,
  perPage: 3,
  pagination: false,
  isNavigation: true,
  lazyLoad: "nearby",
  focus: "center",
  pagination: false,
  breakpoints: {
    600: {
      perPage: 2
    }
  }
}).mount()

var view = new Splide("#features__gallery__view", {
  type: "fade",
  width: 1024,
  heightRatio: 0.7,
  pagination: false,
  arrows: false,
  perPage: 1,
  lazyLoad: "nearby",
  cover: true,
  breakpoints: {
    600: {
      heightRatio: 1
    }
  }
})

view.sync(featureGalleryThumbnail).mount()
let stickyHeader = new StickyHeader()
