window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });




    $("#category_slider").slick({
        slide: 'li',
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $(), //prev
        nextArrow: $(), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 1000, // auto speed
        pauseOnHover:true, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: false, // swiper
        focusOnSelect: false, // click to slider
        draggable:false,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //sub01_css transition��
        variableWidth: false,

    });


    // $('#main-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     centerMode: true,
    //     variableWidth: true
    // });
    //



    /*  slide,click event section */





})


