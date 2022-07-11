

export function Animation (){

    console.log('hello');
/*


        gsap.to('.fix_section', {
            rotation: 360,
            // x: -innerWidth*3,
            scrollTrigger: {
                trigger: "#section02",
                start: "top top",
                // end: () => "+=" + 300,
                end: 'bottom bottom',
                pin: true,
                // pinSpace:false,
                pinSpacing: false,
                scrub: true,
                markers: true
            }
        });


        let sc02 = gsap.timeline();
        ScrollTrigger.create({
            animation: sc02,
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            pin:true,
            pinSpacing: false,
            scrub: 1,
        });

        sc02.to(".box",{x:100},0);
        sc02.to(".box2",{y:100},1);


*/
    $('#section01').addClass('on')


    ScrollTrigger.create({
        trigger: "#section01 .back",
        start: "-500 top",
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section01 .back').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section02",
        start: "-300 top",
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            console.log('들어왔다!!')
            $('#section02').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section03",
        start: "-300 top",
        end: "bottom bottom",
        scrub: 1,
        onEnter:()=>{
            $('#section03').addClass('on')
        }
    });



    ScrollTrigger.create({
        trigger: "#section04",
        start: "-300 top",
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section04').addClass('on')
            gsap.to('#section04 .imo > div',{
                duration: 0.8,
                delay: 1,
                y: 30,
                stagger: 0.5,
                opacity: 1,
            })
        }
    });



    ScrollTrigger.create({
        trigger: "#section05",
        start: '-300 top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section05').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section06",
        start: '-300 top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section06').addClass('on')
        }
    });

    ScrollTrigger.create({
        trigger: "#section07",
        start: '-300 top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section07').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section08",
        start: '-300 top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section08').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section09",
        start: 'top top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section09').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section10",
        start: 'top top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section10').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section11",
        start: 'top top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section11').addClass('on')
        }
    });


    ScrollTrigger.create({
        trigger: "#section12",
        start: 'top top',
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section12').addClass('on')
        }
    });










}



export default Animation;