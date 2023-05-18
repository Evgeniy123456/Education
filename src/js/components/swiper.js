// hero swiper //
const swiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
