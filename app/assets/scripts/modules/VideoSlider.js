class VideoSlider {
  constructor() {
    this.iframeVideo = document.querySelector(".gamer-video__iframe")
    this.gameList = document.querySelectorAll(".gamer-video__navigation li")
    this.grabLinks()
  }

  grabLinks() {
    this.gameList.forEach(el => {
      el.addEventListener("click", tt => this.transferLink(el.getAttribute("data-src")))
    })
  }

  transferLink(tt) {
    this.iframeVideo.setAttribute("src", tt + "?rel=0&amp;autoplay=1;showinfo=0?ecver=2;")
  }
}

export default VideoSlider
