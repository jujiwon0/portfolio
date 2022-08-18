let container;
let stage;


window.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    Scrollbar.use(OverscrollPlugin);

    const overscrollOptions = {
        enable: true,
        effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
        damping: 0.11,
        maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
        glowColor: 'transparent',
    };

    const options = {
        damping: 0.1,
        continuousScrolling: true,
        alwaysShowTracks: false,
        renderByPixels: !('ontouchstart' in document),
        plugins: {
            overscroll: {...overscrollOptions},
        },
    };

    stage = document.querySelector('#container');

    container = Scrollbar.init(stage, {
        ...options,
        delegateTo: stage,
    });

    ScrollTrigger.scrollerProxy('#container', {
        scrollTop(value) {
            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;
        },
    });

    container.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({scroller: stage});

    // container.setPosition(0, 4000);
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();

    $('.startPoint,#section10 .btn .circle').click(function () {
        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });
    });

    $('.logo').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


    (function () {


        $('#menu .container > div').click(function () {

            let idx = $('#menu .container > div').index(this);

            $('#menu').fadeOut();


            if (idx === 0) {
                container.scrollTo(0, 0, 600, {easing: easing.easeInOutCirc,});

            } else if (idx === 1) {
                container.scrollTo(0, 6500, 600, {easing: easing.easeInOutCirc,});

            } else if (idx === 2) {
                location.href = 'custom.html'
            } else if (idx === 3) {
                container.scrollTo(0, 32386, 600, {easing: easing.easeInOutCirc,});

            }
        });


        $('.hamburger').click(function () {

            $('#menu').fadeIn();
        })


        //     글자 항목들에게 마우스를 올리면 비디오가 보인다.
        // 첫 번째 글자에게 마우스를 올리면 첫 번재 비디오가 보인다.

        $('#section01 .txt_container > div').mouseenter(function () {
            let idx = $('#section01 .txt_container > div').index(this);

            $('#section01 .cover .video_main video').removeClass('on');

            $('#section01 .cover .video_main video').eq(idx).addClass('on');
        });

        /* scroll event section */
        container.addListener((e) => {
            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop);
        });
    })();

    // Only necessary to correct marker position - not needed in production
    if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        container.addListener(({offset}) => {
            gsap.set(markers, {marginTop: -offset.y});
            $('.posNum').html(offset.y);
        });
    }
});
