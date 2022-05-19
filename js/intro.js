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
            overscroll: { ...overscrollOptions },
        },
    };


    stage = document.querySelector('#container');


    container = Scrollbar.init(stage, {
        ...options,
        delegateTo: stage,
    });


    ScrollTrigger.scrollerProxy("#container", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });


    container.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: stage });

    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();





    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


    (function () {


        //  here

        let tl = gsap.timeline();

        tl.to('.logo01',{delay:0.8,duration:0.5,opacity:1,marginTop:0});
        tl.to('.front',{duration:0.9,width:328,height:173,scale:0.8});
        tl.to('.arrow_container',{duration:0.5,opacity:1,marginTop:0});













        // let tl = gsap.timeline();
        //
        // tl.to('.logo01',{delay:1,duration:0.5,opacity:1,marginTop:0});
        // tl.to('.front',{duration:1,width:328,height:173,scale:0.8});
        //
        // // gsap.to('.logo01',{delay:1,duration:0.5,opacity:1,marginTop:0});
        // // gsap.to('.front',{duration:1,width:328,height:173,scale:0.8});
        //
        //
        // // translate = x , y
        // // scale = scale
        // // margin-top = marginTop
        // // border-radius = borderRadius
        // // rotate = rotation
        //
        //
        //
        // // tl.to('.front',{delay:0,duration:0.5,});
        // // 로고 크기 커졌다가 작아지게하고 싶었음
        //
        // // gsap.to('.arrow',{delay:0.5,duration:0.5,width:69,height:89,y:50});










    })();


    // Only necessary to correct marker position - not needed in production
    if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        container.addListener(({ offset }) => {
            gsap.set(markers, { marginTop: -offset.y })
            $('.posNum').html(offset.y);
        });
    }



})


