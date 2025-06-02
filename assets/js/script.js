$(document).ready(function(){
  // progress-bar
  var bar = new ProgressBar.Circle('.progress-outhers', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.30); 

  var bar = new ProgressBar.Circle('.progress-english', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.80); 

  var bar = new ProgressBar.Circle('.progress-bangla', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.60); 

  // Skill-bar
  // html
  var bar = new ProgressBar.Line('.html', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.90); 

  // css
  var bar = new ProgressBar.Line('.css', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.95); 

  // javascript
  var bar = new ProgressBar.Line('.javascript', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.50); 

  // jquery
  var bar = new ProgressBar.Line('.jquery', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.75); 

  // php
  var bar = new ProgressBar.Line('.php', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.60); 

  // wordpress
  var bar = new ProgressBar.Line('.wordpress', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.90); 

  // Mysql
  var bar = new ProgressBar.Line('.mysql', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.70); 

  // member swiper Carousel
  var swiper = new Swiper(".swiper-members", {
    loop:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 5,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".teamMember-pagination",
      clickable: true,
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
      }
    }
  });

  // My all-work
 

});

// mixitup gallery
mixitup("#mix-wrapper",{
  animation: {
    effectsIn: "fade translateY(-100%)",
    effects: "fade translateZ(-100px)",
    duration: 1000,
  }
});


// Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});


// Scroll-bar
window.addEventListener('load',(event) =>{
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.min-content'), {
    damping:0.05,
    thumbMinSize:0.05,
    renderByPixels:false,
    alwaysShowTracks:true,
    continuousScrolling:false,
  });
});
window.addEventListener('load',(event) =>{
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.skill-bar'), {
    damping:0.05,
    thumbMinSize:0.05,
    renderByPixels:false,
    alwaysShowTracks:true,
    continuousScrolling:false,
  });
});

// scrollbar animate
Scrollbar.use(OverscrollPlugin);
Scrollbar.init(document.querySelector('.skill-bar'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});
Scrollbar.init(document.querySelector('.content-banner'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});

// Typing js
var typed = new Typed('#typed', {
  strings: ['Custom Theme Development', 'Elementor Customize.','Woocommerce Store.','Seo Optimization.'],
  smartBackspace: true,
  loop:true,
  fadeOutDelay: 500,
  backDelay: 700,
  startDelay: 100,
  typeSpeed: 100,
  backSpeed: 100,
  fadeOutDelay: 500,
});

// Toggler- menu


const sideBar = document.querySelector('#side-bar');
const toggleBar = document.querySelector('#toggler-bar');
const navigatorIcon = document.querySelector('.toggle-bar');

toggleBar.onclick = function () {
  sideBar.classList.toggle("active");
  navigatorIcon.classList.toggle("active");

};

// document.onclick = function (e) {
//   if (e.target.id !== "#side-bar" && e.target.id !== "#toggler-bar") {
//     sideBar.classList.remove("active");
//   }
// };
