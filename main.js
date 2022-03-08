var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	speed: 500,
	effect: "fade",
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});
