$(document).ready(function(){
    $('.profitability-slider').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 4,
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
});