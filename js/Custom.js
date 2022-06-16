
window.addEventListener('DOMContentLoaded',function(){




    const video = document.querySelector('#video');


    let clicked = true;



    $('.video_btn').click(function () {


        if(clicked){
            video.pause();
            $('.btn_stop img').attr('src','img02/section01/btn_play.png');
        }else{
            video.play();
            $('.btn_stop img').attr('src','img02/section01/btn_stop.png');
        }

        clicked = !clicked;

    });


    $('.point').click(function(){

        $('.point').removeClass('on');

        $(this).addClass('on');


    })

    gsap.to('#section01 .video', {
        // opacity: 0,
        // ease: 'none',
        scale:0.5,

        scrollTrigger: {
            trigger: '.video',
            start: '1000 top',
            //   end: 'bottom bottom',
            end: () => '+=' + 1000,
            scrub: true,
        },
    });

    gsap.to('.fix-this-1', {
        scrollTrigger: {
            trigger: '.trigger-this-1',
            start: 'top top',
            end: 'bottom bottom',
            // end: () => '+=' + 1000,
            scrub: true,
            pin: true,
            pinSpacing:false,

        },
    });



    $("#game_slider").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //sub01_css transition��
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

    });





// ScrollTrigger.create({
//     trigger: '#section13 .line .line01',
//     start: 'top center',
//     onEnter: () => {
//         gsap.to('.line01', { duration: 1, width: '100vw' });
//     },
// });


// ScrollTrigger.create({
//   trigger: '#section03 .line .line02',
//   start: 'top center',
//   onEnter: () => {
//     gsap.to('.line02', { duration: 1, width: '50vw' });
//   },
// });

})