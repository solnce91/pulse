$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200, /* скорость переключения слайда */
      /* adaptiveHeight: true,  *//* адаптация слайдера по высоте картинки */
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        },
      ]
    });
});
  