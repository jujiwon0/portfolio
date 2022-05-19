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
    y: -69,
    scrollTrigger: {
      trigger: '#section02',
      start: '80% 0%',
      //   start: () => `+=${2000}`,
      end: 'bottom bottom',
      scrub: true,
    },
  });

  const horizontal = gsap.to('#section03 .horizontal', {
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
    x: 500,
    rotation: -600,
    scrollTrigger: {
      containerAnimation: horizontal,
      trigger: '#section03 .horizontal .img',
      start: 'left center',
      end: () => '+=' + 500,
      scrub: true,
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

  ScrollTrigger.create({
    trigger: '#section04 .line .line01',
    start: 'top center',
    onEnter: () => {
      gsap.to('.line01', { duration: 1, width: '100vw' });
    },
  });

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
