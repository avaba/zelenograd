$(function(){ 
// Слайдер Инфраструктура

$('.infrastructure-slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
		}
	},
	]
});

// Счетчик слайдов Особенности ЖК

let count    = $('.infrastructure-slider')
total        = count.slick("getSlick").slideCount -3;
currentSlide = count.slick('slickCurrentSlide');
slide        = currentSlide + 1;

// Счетчик слайдов общий

if ( total > 1 ) {
  count.prepend(
    `<div class="count__wrap">
    <span class="count__wrap-current">1</span> / <span class="count__wrap-total">2</span>
    </div>`
    )
  $(".infrastructure-slider .count__wrap-current").text(slide);
  $('.infrastructure-slider .count__wrap-total').text(total);
}
count.on('afterChange', function(event, slick, currentSlide, nextSlide){
  let currentSl = currentSlide + 1;
  $(".infrastructure-slider .count__wrap-current").animate({'opacity': 0}, 150, function () {
    $(this).text(currentSl);
  }).animate({'opacity': 1}, 150);
});
});