import throttle from "lodash/throttle"
import debounce from "lodash/debounce"

class RevealItems {
  constructor(elements, thresholdPercent) {
    this.thresholdPercent = thresholdPercent
    this.itemsToReveal = elements
    this.browswerHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calCaller, 200).bind(this)
    this.events()
  }
  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browswerHeight = window.innerHeight
      }, 333)
    )
  }

  calCaller() {
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }
  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browswerHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().top / this.browswerHeight) * 100
      if (scrollPercent < this.thresholdPercent) {
        el.classList.add("reveal-item--is-visible")
        el.isRevealed = true
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item")
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }
}

export default RevealItems
