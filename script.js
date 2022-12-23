document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var checkbox = document.querySelector( '#menu-btn' );
var icon = document.querySelector( '.menu-icon .navicon' );
        
var listener = function( e ) {
    if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
    }
};

checkbox.addEventListener( 'click', function(){
    if( this.checked ) {
    document.addEventListener( 'click', listener );
    } 
});

const wrapper = document.querySelector('.wrapper')

window.setTimeout(preloaderFunction, 5000)

function preloaderFunction() {
    wrapper.style.display = 'none';
}

var tl = new TimelineMax({
    repeat: -1
  });
  
  tl.add(
    TweenMax.from(".logo-svg", 2, {
      scale: 0.5,
      rotation: 360,
      ease: Elastic.easeInOut
    })
  );  
  tl.add(
    TweenMax.to(".logo-svg", 2, {
      scale: 0.5,
      rotation: 360,
      ease: Elastic.easeInOut
    })
  );
  
  window.addEventListener('scroll', reveal)

  function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    
    for(var i = 0; i < reveals.length; i++) {
      
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint)
        reveals[i].classList.add('active');
    }
  }
