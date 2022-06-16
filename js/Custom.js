export function Custom() {
  // console.log('hello');











}

export default Custom;






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


gsap.to('#section01 .video', {
    // opacity: 0,
    // ease: 'none',
    scale:0.5,

    scrollTrigger: {
        trigger: '.video',
        start: '2000 top',
        //   end: 'bottom bottom',
        end: () => '+=' + 1000,
        scrub: true,
    },
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
