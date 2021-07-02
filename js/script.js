$(document).ready(function(){
    // Slick slider
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
});