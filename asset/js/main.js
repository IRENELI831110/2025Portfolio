window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;

  let navbar = document.querySelector(".navbar");

  if (scrollTop >= navbar.offsetHeight) {
    navbar.classList.add("fix");
  } else {
    navbar.classList.remove("fix");
  }
});

document.querySelector(".menu").addEventListener("click", function () {
  let meun = document.querySelector(".menu");

  meun.classList.toggle("open");
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    870: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
