$(document).ready(function(){

  $("input[name='phone-mobail']").inputmask("+38 (999) 999-99-99");

  //--------------  nav-toggle  --------------
  let navToggleMenu = $(".header__nav"); 
	let navToggle = $(".nav-toggle");
  let logo = $('.logo');
  let navItems = $('.nav__item');

  navToggle.click(function() {
    if($(window).width() <= '580'){
      navToggleMenu.slideToggle(200).toggleClass('header__nav--active');
      navToggleMenu.css({'display': 'flex'});
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
       hideToggleMenu();
		}
	});

  navItems.click(function(){
    if($(window).width() <= '768'){
      hideToggleMenu();
    }
  });

  function hideToggleMenu(){
    $('.nav-toggle').removeClass('nav-toggle--active');
    $('.header__nav').removeClass('header__nav--active');
    $('body').removeClass('body-scroll-off');
    navToggleMenu.css({'display': 'none'});
  }

  //-------------- calc  --------------

  // only numbers
  $('#profitability__input').keypress(function (e) {
    var txt = String.fromCharCode(e.which);
    if (!txt.match(/[A-Za-z0-9&. ]/)) {
        return false;
    }
  });
  // keyup
  $('#profitability__input').keyup(function () { 
      let inputValue =  $(this).val();
      inputValue = inputValue <= 0 || inputValue == '' ?  1000 : inputValue;
      calculate(inputValue);
  });


  function calculate(inputValue) {
    $('.js-acia-item').each(function(index){
      let acia = $(this);
      let proc = acia.data('proc');
      let resultHtmlDutElement = acia.find('.js-res');

      let res =  Math.trunc(parseInt(inputValue) + (inputValue * (proc / 100)));
      resultHtmlDutElement.html(`${numberWithCommas(res)}`);

      if(res > 999999){
          resultHtmlDutElement.css({'font-size':'26px', 'margin-top':'10px'});
      }
    });
  }

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
    ).removeClass('body-scroll-off');
    event.preventDefault()
  });

  // ------------   tabs ---------------

  $(".list__container .list__answer").hide().prev().click(function() {
    $(this).parents(".list__container").find(".list__answer").not(this).slideUp().prev().removeClass("list--active");
    $(this).next().not(":visible").slideDown().prev().addClass("list--active");
  });

  $(".list__container .list__ansver--start-active").show();
  $(".list__container .list__question--start-active").addClass('list--active');

  // -------------- input ------------

  
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

  calculate(1000);
});
