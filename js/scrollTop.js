function trackScroll() {
    if (window.pageYOffset > document.documentElement.clientHeight / 2) {
       goTopBtn.style.opacity = "1";
    } else {
        goTopBtn.style.opacity = "0";
    }
}

function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   window.scrollBy(0, -top);
}

var goTopBtn = document.getElementById("back_to_top");
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', goUp);