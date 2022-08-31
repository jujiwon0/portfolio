window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)







        // section01



        if(scrollTop >= 10){


        }



        if(scrollTop >= 10){

            $('.gnb').addClass('on');
        }



        if(scrollTop >= 300){

            $('.title01').addClass('on');
        }



        if(scrollTop >= 300){

            $('.rotate01').addClass('on');
        }




        if(scrollTop >= 545){

            $('.sub01_1').addClass('on');
        }




        if(scrollTop >= 600){

            $('.sub01_2').addClass('on');
        }




        if(scrollTop >= 600){

            $('.sub01_3').addClass('on');
        }






       // section02



        if(scrollTop >= 1970){

            $('.bag02').addClass('on');
        }



        if(scrollTop >= 2150){

            $('.moc02_1').addClass('on');
        }



        if(scrollTop >= 3400){

            $('.headset').addClass('on');
        }



        if(scrollTop >= 3400){

            $('.title02').addClass('on');
        }



        if(scrollTop >= 4000){

            $('.moc02_2').addClass('on');
        }



        if(scrollTop >= 7450){

            $('.deco02').addClass('on');
        }








        // section03


        if(scrollTop >= 9088){

            $('.title03').addClass('on');
        }





        // section04


        if(scrollTop >= 10134){

            $('.title04_1').addClass('on');
        }



        if(scrollTop >= 10168){

            $('.title04_2').addClass('on');
        }



        if(scrollTop >= 11082){

            $('.sub04_1').addClass('on');
        }



        if(scrollTop >= 11172){

            $('.sub04_ps').addClass('on');
        }



        if(scrollTop >= 11300){

            $('.sub04_xbox').addClass('on');
        }



        if(scrollTop >= 11368){

            $('.sub04_n').addClass('on');
        }



        if(scrollTop >= 12592){

            $('.sub04_2_1').addClass('on');
        }



        if(scrollTop >= 12592){

            $('.sub04_2_2').addClass('on');
        }



        if(scrollTop >= 12592){

            $('.sub04_3').addClass('on');
        }






        // section05



        if(scrollTop >= 13906){

            $('.title05').addClass('on');
        }



        if(scrollTop >= 14310){

            $('.rotate05').addClass('on');
        }


        if(scrollTop >= 14314){

            $('.sub05_1').addClass('on');
        }


        if(scrollTop >= 15206){

            $('.sub05_2').addClass('on');
        }




        // section06



        if(scrollTop >= 16306){

            $('.moc06').addClass('on');
        }


        if(scrollTop >= 16900){

            $('.rotate06').addClass('on');
        }


        if(scrollTop >= 17300){

            $('.title06').addClass('on');
        }






        // section07




        if(scrollTop >= 18000){

            $('.moc07_1').addClass('on');
        }



        if(scrollTop >= 18000){

            $('.deco07').addClass('on');
        }



        if(scrollTop >= 18000){

            $('.moc07_2').addClass('on');
        }


        if(scrollTop >= 19400){

            $('.title07').addClass('on');
        }





        // section08



        if(scrollTop >= 20223){

            $('.moc08_1').addClass('on');
        }



        if(scrollTop >= 21600){

            $('.title08').addClass('on');
        }



        if(scrollTop >= 21800){

            $('.deco08').addClass('on');
        }



        if(scrollTop >= 21800){

            $('.moc08_2').addClass('on');
        }






        // section09



        if(scrollTop >= 23000){

            $('.title09').addClass('on');
        }



        if(scrollTop >= 23600){

            $('.moc09_1').addClass('on');
        }


        if(scrollTop >= 24800){

            $('.moc09_2').addClass('on');
        }


        if(scrollTop >= 25900){

            $('.moc09_3').addClass('on');
        }


        if(scrollTop >= 25980){

            $('.moc09_4').addClass('on');
        }


        if(scrollTop >= 25980){

            $('.moc09_5').addClass('on');
        }





        // section10



        if(scrollTop >= 27300){

            $('.title10').addClass('on');
        }


        if(scrollTop >= 27700){

            $('.moc10_1').addClass('on');
        }


        if(scrollTop >= 28200){

            $('.moc10_2').addClass('on');
        }





        // section11



        if(scrollTop >= 29400){

            $('.moc11').addClass('on');
        }


        if(scrollTop >= 29930){

            $('.title11').addClass('on');
        }





        // section12


        if(scrollTop >= 30000){

            $('.12').addClass('on');
        }





        // section13


        if(scrollTop >= 31950){

            $('.title13_1').addClass('on');
        }



        if(scrollTop >= 32000){

            $('.title13_2').addClass('on');
        }


        if(scrollTop >= 32600){

            $('.color01').addClass('on');
        }


        if(scrollTop >= 32600){

            $('.color02').addClass('on');
        }


        if(scrollTop >= 32600){

            $('.color03').addClass('on');
        }


        if(scrollTop >= 32670){

            $('.color04').addClass('on');
        }



        if(scrollTop >= 32300){

            $('.title13_3').addClass('on');
        }



        if(scrollTop >= 33900){

            $('.font01').addClass('on');
        }


        if(scrollTop >= 33900){

            $('.font02').addClass('on');
        }



        if(scrollTop >= 34500){

            $('.font03').addClass('on');
        }



        if(scrollTop >= 34500){

            $('.font04').addClass('on');
        }







        // section14


        if(scrollTop >= 35050){

            $('.title14_1').addClass('on');
        }



        if(scrollTop >= 35620){

            $('.moc14_1').addClass('on');
        }


        if(scrollTop >= 37000){

            $('.moc14_2').addClass('on');
        }


        if(scrollTop >= 38100){

            $('.moc14_3').addClass('on');
        }


        if(scrollTop >= 39650){

            $('.moc14_4').addClass('on');
        }


        if(scrollTop >= 40000){

            $('.moc14_5').addClass('on');
        }


        if(scrollTop >= 40100){

            $('.moc14_6').addClass('on');
        }


        if(scrollTop >= 40500){

            $('.moc14_7').addClass('on');
        }



        if(scrollTop >= 40500){

            $('.title14_2').addClass('on');
        }



        if(scrollTop >= 40500){

            $('.moc14_8').addClass('on');
        }







        // section15


        if(scrollTop >= 40650){

            $('.title15').addClass('on');
        }




        // section16


        if(scrollTop >= 40750){

            $('.sub16_1').addClass('on');
        }


        if(scrollTop >= 40750){

            $('.sub16_2').addClass('on');
        }


        if(scrollTop >= 40750){

            $('.sub16_3').addClass('on');
        }


        if(scrollTop >= 40750){

            $('.rotate16').addClass('on');
        }























































    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {
        $('.gnb_deco').addClass('on');


        setTimeout(()=>{
            $('#section01').addClass('on');
        },1000)

/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
