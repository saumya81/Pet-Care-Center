var index = 0;
function scrollAnimation() {
  $('.carousel').carousel({
    interval: 2000
  })
  var timer = null;
  let n = 3;
  window.addEventListener(
    "wheel",
    function() {
      if (timer !== null) {
        clearTimeout(timer);
      }
      let event = this.event;
      timer = setTimeout(function() {
        // let index = (((counter%n)+n)%n)
        // console.log('counter ', counter, 'index', index, event.deltaY)
        let slides = document.querySelectorAll(".main-slide");
        let innerSlides = document.querySelectorAll(".innerbox-slide");
        slides[index].classList.replace("show", "prev");
        innerSlides[index].classList.replace("showInnerBox", "prevInnerBox");
        if (event.deltaY > 0) {
          index = index === n ? n : index + 1;
        } else if (event.deltaY < 0) {
          index = index === 0 ? 0 : index - 1;
        }

        if (index !== 0) {
          document.querySelector("video").pause();
        } else {
          document.querySelector("video").play();
        }

        if (slides[index] && !slides[index].classList.replace("prev", "show")) {
          slides[index].classList.add("show");
        }
        if (
          !innerSlides[index].classList.replace("prevInnerBox", "showInnerBox")
        ) {
          innerSlides[index].classList.add("showInnerBox");
        }
      }, 150);
    },
    false
  );
}

document.onload = scrollAnimation();

window.onload = () => {
  document.querySelector("video").play();
};
