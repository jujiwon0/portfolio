

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


    ScrollTrigger.create({
        trigger: "#section02",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            console.log('들어왔다!!')
            $('#section02').addClass('on')
        }
    });

    ScrollTrigger.create({
        trigger: "#section04",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onEnter: ()=>{
            $('#section04').addClass('on')
        }

    });



}



export default Animation;