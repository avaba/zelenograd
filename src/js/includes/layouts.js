$(function(){ 

// Слайдер Планировки

$('.layouts-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
  },
  ]
});
});