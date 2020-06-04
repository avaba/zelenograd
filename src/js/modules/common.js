$(function(){

// Слайдер акций

$('.stock-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Слайдер Особенности ЖК

$('.features-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Счетчик слайдов Особенности ЖК

let count    = $('.count')
total        = count.slick("getSlick").slideCount;
currentSlide = count.slick('slickCurrentSlide');
slide        = currentSlide + 1;
if ( total > 1 ) {
  $(".features-slider__top-current").text('0' + slide);
}
count.on('afterChange', function(event, slick, currentSlide, nextSlide){
  let currentSl = currentSlide + 1;
  $(".features-slider__top-current").animate({'opacity': 0}, 150, function () {
    $(this).text(String(currentSl).padStart(2,'0'));
  }).animate({'opacity': 1}, 150);
});

// Счетчик слайдов общий

if ( total > 1 ) {
  count.prepend(
    `<div class="count__wrap">
    <span class="count__wrap-current">1</span> / <span class="count__wrap-total">2</span>
    </div>`
    )
  $(".count__wrap-current").text(slide);
  $('.count__wrap-total').text(total);
}
count.on('afterChange', function(event, slick, currentSlide, nextSlide){
  let currentSl = currentSlide + 1;
  $(".count__wrap-current").animate({'opacity': 0}, 150, function () {
    $(this).text(currentSl);
  }).animate({'opacity': 1}, 150);
});

});