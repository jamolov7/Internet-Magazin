var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
});
const menu = document.querySelector(".bars");
const navbar = document.querySelector(".nav-list");
const left = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    navbar.classList.add("nav-trans")
})
left.addEventListener("click", () => {
    navbar.classList.remove("nav-trans")
});
const navScroll = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
    let top = window.scrollY;
    if (top >= 40) {
        navScroll.style.position = "fixed"
    }
    if (top <= 40) {
        navScroll.style.position = "sticky"
    }
})