$(document).ready(function(){
  //--------------  nav-toggle  --------------
  let navToggleMenu = $(".header__nav"); 
	let navToggle = $(".nav-toggle");
  let logo = $('.logo');

  navToggle.click(function() {
    if($(window).width() <= '580'){
      navToggleMenu.slideToggle(200).toggleClass('header__nav--active');
      navToggle.toggleClass('nav-toggle--active');
      $('body').toggleClass('body-scroll-off');
    } else {
      navToggle.toggleClass('nav-toggle--active');
      navToggleMenu.toggleClass('header__nav--active');
    }
  });

    // close nav-togle on click outside
  $(document).click(function (e) { 
    if ( ! navToggle.is(e.target) && navToggle.has(e.target).length === 0 &&
         ! navToggleMenu.is(e.target) && navToggleMenu.has(e.target).length === 0 &&
         ! logo.is(e.target) && logo.has(e.target).length === 0 
		    ) {
        $('.nav-toggle').removeClass('nav-toggle--active');
        $('.header__nav').removeClass('header__nav--active');
		}
	});

  //-------------- calc  --------------

  let prfInput = $('#profitability__input');
  let cryptoPercent = $('#data-crypto').attr('data-crypto');
  let teslaPercent = $('#data-tesla').attr('data-tesla');
  let goldPercent = $('#data-gold').attr('data-gold');
  let spPercent = $('#data-sp').attr('data-sp');
  let inputStandart = '1000'

  // on strart doc load
        let cryptoRes =  Math.trunc(parseInt(inputStandart) + (inputStandart * (cryptoPercent / 100)));
        let teslaRes =   Math.trunc(parseInt(inputStandart) + (inputStandart * (teslaPercent / 100)));
        let goldRes =   Math.trunc(parseInt(inputStandart) + (inputStandart * (goldPercent / 100)));
        let spRes =   Math.trunc(parseInt(inputStandart) + (inputStandart * (spPercent / 100)));

        $('#crypto-res').empty().append(`$${numberWithCommas(cryptoRes)}`);
        $('#tesla-res').empty().append(`$${numberWithCommas(teslaRes)}`);
        $('#gold-res').empty().append(`$${numberWithCommas(goldRes)}`);
        $('#sp-res').empty().append(`$${numberWithCommas(spRes)}`);

  // after pres enter
  prfInput.keydown(function (e) { 
    
    if(e.which == 13) {

      let inputValue =  prfInput.val();

      if(inputValue == ''){
        return;
      } else if(inputValue >= 0){
        
        let cryptoRes =  Math.trunc(parseInt(inputValue) + (inputValue * (cryptoPercent / 100)));
        let teslaRes =   Math.trunc(parseInt(inputValue) + (inputValue * (teslaPercent / 100)));
        let goldRes =   Math.trunc(parseInt(inputValue) + (inputValue * (goldPercent / 100)));
        let spRes =   Math.trunc(parseInt(inputValue) + (inputValue * (spPercent / 100)));

        $('#crypto-res').empty().append(`$${numberWithCommas(cryptoRes)}`);
        $('#tesla-res').empty().append(`$${numberWithCommas(teslaRes)}`);
        $('#gold-res').empty().append(`$${numberWithCommas(goldRes)}`);
        $('#sp-res').empty().append(`$${numberWithCommas(spRes)}`);

        if(cryptoRes > 999999){
          $('#crypto-res').css({'font-size':'26px', 'margin-top':'10px'});
        } else {
          $('#crypto-res').css({'font-size':'36px', 'margin-top':'0'});
        } 
        if(teslaRes > 999999){
          $('#tesla-res').css({'font-size':'26px','margin-top':'10px'});
        } else{
          $('#tesla-res').css({'font-size':'36px', 'margin-top':'0'});
        }
        if(goldRes > 999999){
          $('#gold-res').css({'font-size':'26px','margin-top':'10px'});
        } else{
          $('#gold-res').css({'font-size':'36px', 'margin-top':'0'});
        }
        if(spRes > 999999){
          $('#sp-res').css({'font-size':'26px','margin-top':'10px'});
        } else{
          $('#sp-res').css({'font-size':'36px', 'margin-top':'0'});
        }
      }
    }
  });

  // numbers with comas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // ------------  number counter  -------------
  function start_count(){
    $('.count').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter:$(this).text()
      },{
        duration: 3000,
        easing: 'swing',
        step: function(now){
          $(this).text(Math.ceil(now));
        }
      });
    });
  }; 

  // animate to scrool counter
  let element = $('.count');
  $counter = 0;
  $(window).scroll(function(){
    let scroll = $(window).scrollTop() + $(window).height();
    let offset = element.offset().top;

    if (scroll > offset && $counter == 0) {
        start_count();
        $('.line-bar__line').css({ 'animation': 'line-grow 1.5s linear 0s 1 alternate'});
        $counter = 1;
    }
  });

  // ------------  smooth scroll  -------------

  $('a.yakor').on('click', function (event) {
    let $anchor  = $(this)
    $('html, body')
    .stop()
    .animate(
      {
       scrollTop: $($anchor.attr('href')).offset().top, 
      },
      {
        duration: 1000,
        specialEasing: {
          width: 'linear',
          height: 'easyInOutCubic',
        },
      }
    )
    event.preventDefault()
  });

  // ------------   tabs ---------------

  $(".list__container .list__answer").hide().prev().click(function() {
    $(this).parents(".list__container").find(".list__answer").not(this).slideUp().prev().removeClass("list--active");
    $(this).next().not(":visible").slideDown().prev().addClass("list--active");
  });

  // ------------  slick lider  --------------
    $('.profitability-slider').slick({
        centerMode: false,
        slidesToShow: 4,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 3,
                dots:true
            }
            },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 2,
              dots:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1,
              dots:true
            }
          }
        ]
      });
      // working-slider
      $('.working-slider').slick({
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2,
                dots:true
            }
            },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              dots:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '30px',
              slidesToShow: 1,
              dots:true
            }
          }
        ]
      });
      
      // --------- aos ---------
      
  AOS.init({
    offset: 100,
    mirror: false,
    disable: false,
    once: true
  });
});
