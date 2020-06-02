// import {$,jQuery} from 'jquery';
// import "~/slick-carousel/slick/slick";

jQuery(document).ready(function($){
	$('.stock-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});