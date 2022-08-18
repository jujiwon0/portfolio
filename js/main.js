window.addEventListener('DOMContentLoaded', function () {

  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 5;
  // var navbarHeight = $('header').outerHeight();
  //
  // $(window).scroll(function(event){
  //   didScroll = true;
  // });
  //
  // setInterval(function() {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 250);
  //
  // function hasScrolled() {
  //   var st = $(this).scrollTop();
  //
  //   // Make sure they scroll more than delta
  //   if(Math.abs(lastScrollTop - st) <= delta)
  //     return;
  //
  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight){
  //     // Scroll Down
  //     $('header').removeClass('nav-down').addClass('nav-up');
  //   } else {
  //     // Scroll Up
  //     if(st + $(window).height() < $(document).height()) {
  //       $('header').removeClass('nav-up').addClass('nav-down');
  //     }
  //   }
  //
  //   lastScrollTop = st;
  // }







  let clicked = true;

  $('.menu').click(function(){

    if(clicked){
      gsap.to('.bar:nth-child(1)',{rotation: 45,x:2,y:-2})
      gsap.to('#menu_pp',{y:0,ease:'power3.inOut',duration:1})
    }else{
      gsap.to('.bar:nth-child(1)',{rotation: 0,x:0,y:0})
      gsap.to('#menu_pp',{y:"-120%",ease:'power3.inOut',duration:1})
    }

    if(clicked){
      gsap.to('.bar:nth-child(2)',{rotation: -45,x:-3,y:-10})
      gsap.to('#menu_pp',{y:0,ease:'power3.inOut',duration:1})
    }else{
      gsap.to('.bar:nth-child(2)',{rotation: 0,x:-0,y:0})
      gsap.to('#menu_pp',{y:"-120%",ease:'power3.inOut',duration:1})
    }

    clicked = !clicked;
  });


  $('.menuList > li').mouseenter(function(){

    let idx = $(this).index();
    console.log()
    let imageTarget = $(this).find('.cover')[0];
    let bgTarget = $(this).find('.dark');

    gsap.to(imageTarget,{duration:0.15,scaleY:1,transformOrigin:'center top'})

    gsap.to(bgTarget,{duration:0.15,transformOrigin:'center top',y:0})
  })


      .mouseleave(function(){
        let imageTarget = $(this).find('.cover')[0];
        let bgTarget = $(this).find('.dark');

        gsap.to(imageTarget,{duration:0.15,scaleY:0,transformOrigin:'center bottom'})
        gsap.to(bgTarget,{duration:0.15,transformOrigin:'center bottom',y:"100%",onComplete:()=>{
            gsap.set(bgTarget,{y:"-100%"})
          }})


      })



  $('.hamburger').click(function () {
    $('#menu').fadeIn();
  });

  $('.close').click(function () {
    $('#menu').fadeOut();
  });






  
  /*  slide,click event section */
});













