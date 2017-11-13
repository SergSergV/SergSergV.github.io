$(document).ready(function(){
  $('.page').fullpage({
      scrollOverflow: true
    });

  $('.price__btn').click(function(){
    $('.price-block').addClass('price-block--show');
  });
  $('.price-block').click(function(){
    $('.price-block').removeClass('price-block--show');
  });

  $(".menu__item--contacts").click(function(){
    $.fn.fullpage.moveTo(7, 0);
  });
  $(".menu__item--wedraw").click(function(){
    $.fn.fullpage.moveTo(4, 0);
  });
  $(".menu__item--smm").click(function(){
    $.fn.fullpage.moveTo(5, 0);
  });
  $(".menu__item--clothes").click(function(){
    $.fn.fullpage.moveTo(6, 0);
  });
});