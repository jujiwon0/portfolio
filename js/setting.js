let container;
let stage;

import Animation from './Animation.js';
import Custom from './Custom.js';

window.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  Scrollbar.use(OverscrollPlugin);

  const overscrollOptions = {
    enable: true,
    effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
    damping: 0.11,
    maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
    glowColor: 'transparent',
  };

  const options = {
    damping: 0.1,
    continuousScrolling: true,
    alwaysShowTracks: false,
    renderByPixels: !('ontouchstart' in document),
    plugins: {
      overscroll: { ...overscrollOptions },
    },
  };

  stage = document.querySelector('#container');

  container = Scrollbar.init(stage, {
    ...options,
    delegateTo: stage,
  });

  ScrollTrigger.scrollerProxy('#container', {
    scrollTop(value) {
      if (arguments.length) {
        container.scrollTop = value;
      }

      return container.scrollTop;
    },
  });

  container.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: stage });

    // container.setPosition(0, 23269);
  container.setPosition(0, 0);
  container.track.xAxis.element.remove();
  // Scrollbar.detachStyle();

  $('.startPoint,#section10 .btn .circle').click(function () {
    container.scrollTo(0, 0, 600, {
      callback: () => console.log('done!'),
      easing: easing.easeInOutCirc,
    });
  });

  (function () {
    gsap.to('.front', 1, { width: 350, height: 200 });

    // Animation();
    Custom();


    
  $("#game_slider").slick({
    dots: false, //navigation
    arrows: true, //arrow
    prevArrow: $('.prev'), //prev
    nextArrow: $('.next'), //next
    autoplay:false, // autoplay mode
    autoplaySpeed: 2000, // auto speed
    pauseOnHover:false, // pause on mouse hover
    fade: false, //fade mode only one slider
    speed: 900, // speed
    infinite: true, // infinite mode
    // asNavFor: '', // another slider
    centerMode: false, // center move
    centerPadding: '0%', // center move padding
    slidesToShow: 1, // show slider number
    slidesToScroll: 1, // next slider number
    swipe: true, // swiper
    focusOnSelect: true, // click to slider
    draggable:true,
    vertical: false, // vertical slider
    verticalSwiping: false, // vertical swiper
    initialSlide:0,// slider number
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //sub01_css transition��
    variableWidth: false,

}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    
}).on('afterChange', function(event, slick, currentSlide, nextSlide){
    
});






    //     글자 항목들에게 마우스를 올리면 비디오가 보인다.
    // 첫 번째 글자에게 마우스를 올리면 첫 번재 비디오가 보인다.

    $('#section01 .txt_container > div').mouseenter(function () {
      let idx = $('#section01 .txt_container > div').index(this);

      $('#section01 .cover .video_main video').removeClass('on');

      $('#section01 .cover .video_main video').eq(idx).addClass('on');
    });

    /* scroll event section */
    container.addListener((e) => {
      let scrollTop = container.scrollTop;
      $('.posNum').html(scrollTop);
    });
  })();

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    container.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
      $('.posNum').html(offset.y);
    });
  }
});
