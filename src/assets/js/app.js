import $ from 'jquery';
import fullpage from 'fullpage.js';
import '../../../node_modules/fullpage.js/vendors/easings';
import '../../../node_modules/fullpage.js/vendors/scrolloverflow';
import Swiper from 'swiper';
import Menu from './_modules/_menu';
import Modal from './_modules/_modal';
import BgVideo from './_modules/_bgVideo';


$(document).ready(function () {
	new Menu();
	new Modal();
	new BgVideo();

	const mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	new fullpage('#js-scrollpage', {
		licenseKey: '89327912-7FA9459C-A27C6BA1-E204F372',
		scrollingSpeed: 500,
		navigation: true,
		css3: false,
		easingcss3: 'ease',
		// fitToSection: true,
		easing: 'easeOutExpo',
		responsiveWidth: 1024,
		navigationPosition: 'right', // インジケーターの位置
    showActiveTooltip: true,
    navigationTooltips: ["1番目", "２番目", "３番目", "４番目"],
    // lockAnchors: true, // URLのアンカーだと思う
		sectionSelector: ".fp-item",
		fitToSection: false,
		scrollOverflow: true
	});
});


