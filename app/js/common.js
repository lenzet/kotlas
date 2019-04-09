$(function() {
  $('.header-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 1000,
    nav: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.about-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: false,
    dotsData: true,
    dotsContainer: '.about-right .dotsCont'
  });
  $('.compl-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: false,
    margin: 50,
    dotsData: true,
    dotsContainer: '.s-compl .dotsCont',
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.others-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: false,
    margin: 50,
    dotsData: true,
    dotsContainer: '.s-others .dotsCont'
  });
  $('.projects-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    margin: 50,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.gallery-slider').owlCarousel({
    items: 3,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.reviews-slider').owlCarousel({
    items: 3,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoWidth: true,
    margin: 25
  });
  $('.smi-slider').owlCarousel({
    items: 3,
    loop: false,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 10
  });
  $('.consult').click(function(e){
    e.preventDefault();
    $('.popup-wrapper.form').fadeIn();
  });
  $('.popup-wrapper').click(function(e){
    e.preventDefault();
    $(this).fadeOut();
  });
  $('.popup-wrapper > div > div').click(function(e){
    e.stopPropagation();
  });
  $('.popup-wrapper .close').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
  });
  $('[name="Телефон"]').mask('+7 (999) 999 99 99');

  $('.more').click(function(e){
    e.preventDefault();
    $('.popup-wrapper.video').fadeIn();
    document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });
  $('.popup-wrapper.video .close').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
    document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  });
  $('.popup-wrapper.video').click(function(e){
    e.preventDefault();
    $(this).fadeOut();
    document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  });
  $('.smi-slider .item').click(function(e){
    var id = $(this).attr('data-video');
    $(this).find('img').fadeOut(0);
    $(this).find('.video').fadeIn(0);
    $(this).addClass('clicked');
    document.getElementById(id).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });

  $('.fancybox').fancybox({
    loop: true,
    buttons: ['fullScreen', 'thumbs', 'close'],
    clickContent: function(current, event) {
      return current.type === 'image' ? 'next' : false;
    },
    i18n : {
      'en' : {
        CLOSE       : 'Закрыть',
        NEXT        : 'Вперед',
        PREV        : 'Назад',
        ERROR       : 'Произошла ошибка! <br/> Попробуйте позднее.',
        PLAY_START  : 'Слайдшоу',
        PLAY_STOP   : 'Остановить',
        FULL_SCREEN : 'На весь экран',
        THUMBS      : 'Миниатюры'
      }
    }
  });
  
  $('form.mail').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
      $('.popup-wrapper').fadeOut();
      $('.popup-wrapper.thanks').fadeIn();
      setTimeout(function(){
        $('.popup-wrapper.thanks').fadeOut();
      }, 3000);
    });
    return false;
  });

  $('a[href^="#"]').mPageScroll2id({
    scrollEasing: 'swing',
    offset: $('.header-top').height()
  });

  var navPX = $('.header-top').offset().top;
  $(document).scroll(function(e){
    if ($(document).scrollTop() > navPX) {
      $('.header-top').addClass('nav-fixed');
      var height = $('.header-top').height();
      $('.header-center').css('padding-top', height + 'px');
    } else {
      $('.header-top').removeClass('nav-fixed');
      $('.header-center').css('padding-top', 0);
    }
  });

  hidePreloader();

  function hidePreloader() {
    setTimeout(function(){
      $('.preloader').fadeOut();
    }, 500);
  }
});
