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


// ScrollTrigger.create({
//     trigger: '#section13 .line .line01',
//     start: 'top center',
//     onEnter: () => {
//         gsap.to('.line01', { duration: 1, width: '100vw' });
//     },
// });
