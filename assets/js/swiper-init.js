document.addEventListener('DOMContentLoaded', () => {

  const partnersSwiper = new Swiper('.partners-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    // Cursor de mano para arrastrar
    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

});