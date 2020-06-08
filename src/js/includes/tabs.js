$(function(){

  let $el, leftPos, newWidth,
  $mainNav = $(".tabs .tabs__wrap");
  $mainNav.append('<div class="tabs__line"></div>');
  let $magicLine = $(".tabs__line");
  let $item = $('.tabs .tabs__wrap .tabs__item');

  $mainNav.on('click', '.tabs__item:not(.tabs__item--active)', function() {
    $(this)
    .addClass('tabs__item--active').siblings().removeClass('tabs__item--active')
  });

  $magicLine
  .width($(".tabs__item--active").width())
  .css("left", $(".tabs__item--active").position().left)
  .data("origLeft", $magicLine.position().left)
  .data("origWidth", $magicLine.width());

  $item.find("span").click(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();

    $magicLine.stop().animate({
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