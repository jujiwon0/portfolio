

$(function () {

    /* scroll event section*/
    myHorizontalScrollbar.addListener((status) => {

        let v = status.offset.x
        $('.posNum').html(v);
        console.log();

    });



    $('.back_to_top').click(function () {

        myHorizontalScrollbar.scrollTo(0, 0, 600, {
            callback: () => console.log('done'),
            easing: easing.easeInOutCirc,
        });



    });


    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');

    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;
        // let cursorFWidth = cursorFollow.width() / 2;

        gsap.to(cursor, {duration: 0.9, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });


    $('.cursor_effect').mouseenter(function () {

        gsap.to('.dot',.5,{scale:1,background:'transparent'})


    }).mouseleave(function () {
        gsap.to('.dot',.5,{scale:0.15,background:'#4274ff'})
    })



    const sc01tl = gsap.timeline();

    sc01tl.from('#section01 .top .title',{opacity:0,y:100})
          .from('#section01 .top .txt',{opacity:0,y:100})



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        speed:1000,
        loop: true,
        // autoplay:true,
        navigation: {
            nextEl: '#section01 .right',
            prevEl: '#section01 .left',
        },
        pagination: {
            el: '.prev_num',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                // return '0' + current + '/' + '0' + (total - 1);
                return '<span class="first">' + '0' + current + '</span> / <span class="second">'+ '0'+ (total - 1) + '</span>'
            }
        },

        //

        // // If we need pagination

        //
        // // Navigation arrows

        //
        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });






    gsap.to('.title_top', {
        y: -500,
        scrollTrigger: {
            trigger: "#section01",
            start: "left left",
            end: () => "+=" + 1500,
            // end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true,
        }
    });


    gsap.to('.title_bottom', {
        y: 500,
        scrollTrigger: {
            trigger: "#section01",
            start: "left left",
            end: () => "+=" + 1500,
            horizontal: true,
            scrub: true,
        }
    });




    gsap.to('#section02 .top .line', {
        width: 1491,
        scrollTrigger: {
            trigger: "#section02",
            start: "left left",
            end: () => "+=" + 1500,
            horizontal: true,
            scrub: true,
            onEnter: ()=>{
                gsap.to('#header .nav_btn',{autoAlpha:1})
            },
            onLeaveBack: ()=>{
                gsap.to('#header .nav_btn',{autoAlpha:0})
            }
        }
    });



    gsap.to('#section03 .center_sc03 .project_container', {
        x:-500,
        scrollTrigger: {
            trigger: "#section03",
            start: "left left",
            end: () => "+=" + 1500,
            horizontal: true,
            scrub: true,
        }
    });




    let clicked = true;

    $('.menu').click(function(){

        if(clicked){
            gsap.to('.bar:nth-child(1)',{rotation: 45,x:2,y:-2})
            gsap.to('#menu',{y:0,ease:'power3.inOut',duration:1})
        }else{
            gsap.to('.bar:nth-child(1)',{rotation: 0,x:0,y:0})
            gsap.to('#menu',{y:"-100%",ease:'power3.inOut',duration:1})
        }

        if(clicked){
            gsap.to('.bar:nth-child(2)',{rotation: -45,x:-3,y:-10})
            gsap.to('#menu',{y:0,ease:'power3.inOut',duration:1})
        }else{
            gsap.to('.bar:nth-child(2)',{rotation: 0,x:-0,y:0})
            gsap.to('#menu',{y:"-100%",ease:'power3.inOut',duration:1})
        }

        clicked = !clicked;
    });








    /* slide, click event section */


})