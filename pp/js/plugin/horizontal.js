


console.log("%c by.",'background:black; color:white;');
console.log(
    "     _\n" +
    " ___(_)_     _\n" +
    "/ __| | \\   / |\n" +
    "\\__ \\ |  \\_/  |\n" +
    "|___/_|_|\\_/|_|\n" +
    "\n" +
    "Version : 1.5.0\n" +
    "Author  : SeonBeom Sim\n" +
    "Website : https://github.com/simseonbeom");


console.log("%c - KindTiger - ",'background:black; color:white;');


gsap.registerPlugin(ScrollTrigger);



class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "horizontalScroll";

  transformDelta(delta, fromEvent) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta;

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y
    };
  }
}

Scrollbar.use(HorizontalScrollPlugin,OverscrollPlugin);


const overscrollOptions = {
  enable: true,
  effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
  damping: 0.11,
  maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
  glowColor: 'transparent',
};




const scrollbar = document.querySelector("#scrollbar");


const myHorizontalScrollbar = Scrollbar.init(scrollbar,{
  plugins: {
    overscroll: { ...overscrollOptions },
  },
});

myHorizontalScrollbar.setPosition(8800, 0);




$('.startPoint').click(function () {

  myHorizontalScrollbar.scrollTo(0, 0, 600, {
    callback: () => console.log('done!'),
    easing: easing.easeInOutCirc,
  });


});




ScrollTrigger.scrollerProxy(scrollbar, {
  scrollTop(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollTop = value;
    }
    return myHorizontalScrollbar.scrollTop;
  },
  scrollLeft(value) {
    if (arguments.length) {
      myHorizontalScrollbar.scrollLeft = value;
    }
    return myHorizontalScrollbar.scrollLeft;
  }
});



myHorizontalScrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scrollbar });


gsap.to("#section03", {
  scrollTrigger: {
    trigger: "#section03",
    start: "left left",
    horizontal: true,
    scroller: scrollbar,
    scrub: true,
    onUpdate: self => {
      // console.log("progress:", self.progress)

      v = Math.floor(self.progress *5);
      console.log(v)

      // list.find('.slide_img').stop().slideUp();
      // list.eq(v).find('.slide_img').one().stop().slideDown();

    }
    //markers: true
  }
});

/*


gsap.to('.fix_section', {
  rotation: 360,
  // x: -innerWidth*3,
  scrollTrigger: {
    trigger: "#section02",
    start: "left left",
    // end: () => "+=" + 300,
    end: 'right right',
    pin: true,
    horizontal: true,
    // pinSpace:false,
    pinSpacing: false,
    scrub: true,
    markers: true
  }
});

*/


const mailButton = document.querySelector('#section04 .mail_btn');



function mailAnimation(offsetX,div){
  let y = gsap.utils.random(-200,400);
  let x = gsap.utils.random(300,500);
  let rotation = gsap.utils.random(-360,360);
  let duration = gsap.utils.random(3,4);
  let ease = gsap.utils.random(
    ["none", "power2.out", "expo.out"]);

    gsap.set(div,{left:offsetX})
    gsap.to(div,{
      keyframes:{
        "0%":{opacity:0},
        "20%":{opacity:1},
        "50%":{y:y/2},
        "80%":{opacity:0},
        "100%":{y:y,x:x,rotation:rotation,opacity:0}
      },
      ease:ease,
      duration: duration,
      onComplete:()=>{
        div.remove();
      }
    
    })

}

function makeMail(offsetX){
  
  let div = document.createElement('div');
  div.classList.add('mail');
  div.innerHTML = `😊`;
  mailButton.appendChild(div);

  mailAnimation(offsetX,div)

}

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}

function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

function flyMail(e){
  let offsetX = e.offsetX;
  makeMail(offsetX)
}

mailButton.addEventListener("mousemove",throttle((e) => {flyMail(e)}, 100));



/*

gsap.to(".square", {
  rotate: "360deg",
  scrollTrigger: {
    trigger: "#section01",
    // start: "left left",
    horizontal: true,
    scroller: scrollbar,
    scrub: true
    //markers: true
  }
});



*/
