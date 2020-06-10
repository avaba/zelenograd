$(function(){

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
	});

	$('.hamburger').click(function(){
		$('.nav').toggleClass('visible');
		$('.nav-slideout').toggleClass('visible');
	});

	$('.nav-slideout, .nav a').click(function(){
		$('.nav').toggleClass('visible');
		$('.nav-slideout').toggleClass('visible');
		$('.hamburger').toggleClass('is-active');
	});

	var objToStick = $(".header");
	var topOfObjToStick = $(objToStick).offset().top; 

	$(window).scroll(function () {
		var windowScroll = $(window).scrollTop();

		if (windowScroll > topOfObjToStick) {
			$(objToStick).addClass("topWindow");
		} else {
			$(objToStick).removeClass("topWindow");}   
		});

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 95;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});