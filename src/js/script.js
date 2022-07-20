$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: "<button type='button' class='slick-prev'><img src='../icons/left.svg' alt='arrow'></button>",
        nextArrow: "<button type='button' class='slick-next'><img src='../icons/right.svg' alt='arrow'></button>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});