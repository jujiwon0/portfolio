

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


    const sc01tl = gsap.timeline();

    sc01tl.from('#section01 .top .title',{opacity:0,y:100})
          .from('#section01 .top .txt',{opacity:0,y:100})



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
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
                return '0' + current + '/' + '0' + (total - 1);
            }
        },

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








    /* slide, click event section */


})