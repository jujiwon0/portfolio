export function Animation() {
  // console.log('hello');


  gsap.to('#section02 .fix-this-2', {
    // 누구를 ?

    scrollTrigger: {
      trigger: '.trigger-this-2', // 누구를 기준으로 ?
      start: 'top top', // 어디서부터 시작할건지?
      end: 'bottom bottom',
      pin: true,
      scrub: true,
    },
  });

  gsap.to('#section02 .fix-this-2-title', {
    // 누구를 ?

    scrollTrigger: {
      trigger: '.trigger-this-2-title', // 누구를 기준으로 ?
      start: 'top top', // 어디서부터 시작할건지?
      end: 'bottom bottom',
      pin: true,
      scrub: true,
    },
  });

  gsap.to('#section02 .circle', {
    // 누구를 ?
    clipPath: 'circle( 100vw at 50% 50%)',
    ease: 'none',
    scrollTrigger: {
      trigger: '#section02', // 누구를 기준으로 ?
      start: 'top top', // 어디서부터 시작할건지?
      // end: 'bottom bottom',
      end: () => `+=${1500}`,
      scrub: true,
    },
  });

  gsap.to('#section02 .top_text > div', {
    y: -75,
    scrollTrigger: {
      trigger: '#section02',
      start: '35% 0%',
      //   start: () => `+=${2000}`,
      end: 'bottom bottom',
      scrub: true,
    },
  });

  gsap.to('#section02 .circle .line', {
    opacity: 0,
    scrollTrigger: {
      trigger: '#section02',
      start: '35% 0%',
      //   start: () => `+=${2000}`,
      end: 'bottom bottom',
      scrub: true,
    },
  });



  gsap.to('#section02 .bottom_text > div', {
    y: -75,
    scrollTrigger: {
      trigger: '#section02',
      start: '55% 0%',
      //   start: () => `+=${2000}`,
      end: 'bottom bottom',
      scrub: true,
    },
  });




  let horizontal = gsap.to('#section03 .horizontal', {
    // 누구를 ?
    // rotation: 360,
    x: -(4749 - innerWidth), // 어떻게 움직일 건지?
    ease: 'none', // 가속도 없음
    scrollTrigger: {
      trigger: '#section03', // 누구를 기준으로 ?
      start: 'top top', // 어디서부터 시작할건지?
      end: () =>
        '+=' + document.querySelector('#section03 .horizontal').offsetWidth, // 어디까지
      // end: 'bottom bottom',
      pin: true,
      // pinSpace:false,
      // pinSpacing: false,
      scrub: true,

      // markers: true
    },
  });

  gsap.to('#section03 .horizontal .img', {
    x: 400,
    rotation: -360,
    scrollTrigger: {
      containerAnimation: horizontal,
      trigger: '#section03 .horizontal .img',
      start: () => '+=' + 1500,
      // start: 'left right',
      // horizontal:true,
      end: () => '+=' + 3000,  //속도
      scrub: true,
    },
  });

  gsap.to('#section04 .img01', {
    y: -400,
    rotation: -10,
    scrollTrigger: {
      trigger: '#section04',
      start: 'top top',
      // horizontal:true,
      end: () => '+=' + 1000,  //속도
      scrub: true,
    },
  });



  ScrollTrigger.create({
    trigger: '#section04 .line .line01',
    start: 'top center',
    onEnter: () => {
      gsap.to('.line01', { duration: 1, width: '100vw' });
    },
  });



  ScrollTrigger.create({
    trigger: '#section04 .line .line02',
    start: 'right center',
    onEnter: () => {
      gsap.to('.line02', { duration: 1, width: '50vw' });
    },
  });



  gsap.to('#section05 .horizontal', {
    // 누구를 ?
    // rotation: 360,
    x: -(5000 - innerWidth), // 어떻게 움직일 건지?
    ease: 'none', // 가속도 없음
    scrollTrigger: {
      trigger: '#section05', // 누구를 기준으로 ?
      start: 'top top', // 어디서부터 시작할건지?
      end: () =>
          '+=' + document.querySelector('#section05 .horizontal').offsetWidth, // 어디까지
      // end: 'bottom bottom',
      pin: true,
      // pinSpace:false,
      // pinSpacing: false,
      scrub: true,
      // markers: true
    },
  });

  gsap.to('#section05 .horizontal .img01', {
    x: 1000,
    scrollTrigger: {
      trigger: '#section05', // 누구를 기준으로 ?
      start: '-500 top', // 어디서부터 시작할건지?
      end: () => '+=' + 500,
      // end: 'bottom bottom',

      // pinSpace:false,
      // pinSpacing: false,
      scrub: true,
      // markers: true
    },
  });



  gsap.to('#section05 .horizontal .img02', {
    x: 400,
    rotation: -360,
    scrollTrigger: {
      containerAnimation: horizontal,
      trigger: '#section05 .horizontal .img02',
      start: () => '+=' + 1500,
      // start: 'left right',
      // horizontal:true,
      end: () => '+=' + 3000,  //속도
      scrub: true,
    },
  });




  ScrollTrigger.create({
    trigger: '#section07',
    start: '-500 top',
    onEnter: () => {
      $('#section07').addClass('on');
    },
  });




  gsap.to('#section07 .right .txt01', {
    x: 500,
    scrollTrigger: {
      trigger: '#section07',
      start: '-500 top',
      //   start: () => `+=${2000}`,
      end: () => '+=' + 1500,
      scrub: true,
    },
  });










  // gsap.to('#section04 .img .img01', {
  //   x: 400,
  //   rotation: -360,
  //   scrollTrigger: {
  //     containerAnimation: img,
  //     trigger: '#section04 .img .img01',
  //     start: () => '+=' + 1500,
  //     // start: 'left right',
  //     // horizontal:true,
  //     end: () => '+=' + 3000,  //속도
  //     scrub: true,
  //   },
  // });





  /*




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
}

export default Animation;
