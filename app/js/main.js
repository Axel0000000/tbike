$(function(){
 
   $(".variants__star").rateYo({
      starWidth: "14px",
      normalFill: "#d6d6d6",
      ratedFill: "#FBC400",
      readOnly: true,
      fullStar: true,
      spacing: "8px",
      starSvg:'<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L9.31235 3.81733L13.6574 4.83688L10.7415 8.21567L11.1145 12.6631L7 10.934L2.8855 12.6631L3.25854 8.21567L0.342604 4.83688L4.68765 3.81733L7 0Z"/></svg>',
   });

   $(window).scroll(function(){
      if($(this).scrollTop() > 0){
          $('.header').addClass('header--scroll');
      } 
      else{
          $('.header').removeClass('header--scroll');
      }
  });

   $('.menu a, .logo, .footer__logo').on('click', function(event){
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });

   $('.menu__list-link').on('click', function(){
      $('.menu__list-link').removeClass('menu__list-link--active')
      $(this).addClass('menu__list-link--active');
   });

   $('.logo, .footer__logo').on('click', function(){
      $('.menu__list-link').removeClass('menu__list-link--active')
      $('.menu__list-link--home').addClass('menu__list-link--active');
   });

   $('.header__burger, .menu a').on('click', function(){
      $('.header__burger').toggleClass('header__burger--active');
      $('.menu').toggleClass('menu--active');
      $('body').toggleClass('lock');
   });

});

