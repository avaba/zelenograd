$(function(){

  let $el, leftPos, newWidth,
  $mainNav = $(".tabs .tabs__wrap");
  $(".tabs").each(function() {
    $(this).find('.tabs__wrap').append('<div class="tabs__line"></div>');
  });
  let $magicLine = $(".tabs__line");
  let $item = $('.tabs .tabs__wrap .tabs__item');

  $mainNav.on('click', '.tabs__item:not(.tabs__item--active)', function() {
    $(this).addClass('tabs__item--active').siblings().removeClass('tabs__item--active')
  });

  $(".tabs .tabs__wrap").each(function() {
    $(this).find('.tabs__line')
    .width($(".tabs__item--active", this).width())
    .css("left", $(".tabs__item--active", this).position().left)
    .data("origLeft", $(".tabs__line", this).position().left)
    .data("origWidth", $(".tabs__line", this).width());
  });

  $item.find("span").click(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();

    $el.closest('.tabs__wrap').find('.tabs__line').stop().animate({
      left: leftPos,
      width: newWidth
    }, 0);
  });

  $item.on('click', function(){
    let target = $(this).data('target');
    $('.layouts-slide').slick('reinit');
    $('.tabs-content__item[data-id=' + target + ']').addClass('tabs-content__item--active').siblings().removeClass('tabs-content__item--active');
  }); 

});