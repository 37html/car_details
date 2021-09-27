$(function () {

  $('.header-top__menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });



  $('.top-slider__inner').slick({
     arrows: false,
     fade: true,
     autoplay: 300,
     dots: true
 });


  $('.about__reviews-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
        autoplay: false,
        fade: true
    });
  
  
  $('.our-works__slider-inner').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,

    //  responsive: [
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    // ]
     
 });
  
  
  

});