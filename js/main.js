$(document).ready(function(){

  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-getcall").show();
    $(".popup").addClass("popup--show");
  });
  
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });


  $(".js-butter").click(function(){
    $(".js-menu").addClass("menu--show");
  });
  $(".js-close").click(function(){
    $(".js-menu").removeClass("menu--show");
  });
  $(".js-menu").click(function(){
    $(".js-menu").removeClass("menu--show");
  });

  $('.js-slider').slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

});