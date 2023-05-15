import Swiper, { Navigation, EffectFade, FreeMode} from "swiper";

var swiper1 = new Swiper('.mySwiper2', {
	slidesPerView: 1,
	modules: [Navigation, EffectFade],
	effect: "fade",
	fadeEffect: {
	  crossFade: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
  
  // Параметри для першого Swiper
  on: {
    slideChange: function() {
      swiper2.slideTo(this.activeIndex); // Перехід до поточного слайда у другому Swiper
    }
  }
});
var swiper2 = new Swiper('.mySwiper', {
	modules: [EffectFade, Navigation],
	slidesPerView: 3,
	spaceBetween: 20,
	grabCursor: true,
	centeredSlides: true,
  	slideToClickedSlide: true,
	  breakpoints: {
		320:{
		  slidesPerView: 1,
		  spaceBetween: 10,
		},
		480: {
		  slidesPerView:2,
		  spaceBetween: 10,
		},
		992: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		},
	},
  // Параметри для другого Swiper
  on: {
    slideChange: function() {
      swiper1.slideTo(this.activeIndex); // Перехід до поточного слайда у першому Swiper
    }
  }
});

