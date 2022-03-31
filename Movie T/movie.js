
//Swiper
var swiper = new Swiper(".popular-content", {
    slidesParView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesParView:1,
            spaceBetween: 10,

        },
        320:{
            slidesParView:2,
            spaceBetween: 10,

        },
        510:{
            slidesParView:2,
            spaceBetween: 10,

        },
        758:{
            slidesParView:3,
            spaceBetween: 15,

        },
        900:{
            slidesParView:4,
            spaceBetween: 20,

        },

    },
  });