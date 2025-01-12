$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        // autoplayHoverPause: true,
        responsiveClass: true,
        navigation: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1400: {
                items: 3,
                nav: false
            }
        }
    });

});