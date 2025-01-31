var sidenav = document.querySelector(".side-navbar");
function showsidenav() {
  sidenav.style.right = "0%";
}

function closesidenav() {
  sidenav.style.right = "-100%";
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  const progress = document.querySelector('.progress-bar');
  const progress_fill = document.querySelector('.progress-bar-fill');
  const para1 = document.querySelector('#para1');
  const para2 = document.querySelector('#para2');

  const changeNavbarColor = () => {
    let scrollPosition = window.scrollY;
    let para1Offset = para1.offsetTop;
    let para2Offset = para2.offsetTop;
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let fill = st / (sh - h.clientHeight) * 100;

    if (scrollPosition >= para2Offset) {
      navbar.style.backgroundColor = "#7d7d7d";
      progress.style.backgroundColor = "#7d7d7d";
    } else if (scrollPosition >= para1Offset) {
      navbar.style.backgroundColor = "#5d5d5d";
      progress.style.backgroundColor = "#5d5d5d";
    } else if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#3d3d3d";
      progress.style.backgroundColor = "#3d3d3d";
    } else {
      navbar.style.backgroundColor = "#1d1d1d";
      progress.style.backgroundColor = "#1d1d1d";
    }

    progress_fill.style.width = fill + "%";
  };
  window.addEventListener('scroll', changeNavbarColor);
});


