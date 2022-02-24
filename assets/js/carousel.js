var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    initialSlide: 2,    
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  pagination: {
    el: ".swiper-pagination",
  },
});