let last_known_scroll_position = 0;
let navbar = document.getElementById("nav")

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

function navbarBgTransition() {
  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    console.log(last_known_scroll_position);
    if (last_known_scroll_position <= 360) {
      nav.classList.add("bg-opacity");
    } else if (last_known_scroll_position > 360) {
      nav.classList.remove("bg-opacity");
    };

    // if () {
    //   doSomething(last_known_scroll_position);
    // }
  });
};

export { navbarBgTransition };
