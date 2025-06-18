//sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }



  


let lastScrollTop =
window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll',
function handleScroll() {
  
  if(window.pageYOffset > 600){
    document.getElementById('toTop').style.display = "block";
    document.getElementById('toTop').style.animation = "fade-in 0.2s";
    }else if(window.pageYOffset <= 600){
      document.getElementById('toTop').style.animation = "fade-out 0.2s";
      document.getElementById('toTop').style.display = "none";
    }

  const scrollTopPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTopPosition > lastScrollTop) {
      document.querySelector('.header').style.top = "-100%";
  } else if (scrollTopPosition < lastScrollTop) {
      document.querySelector('.header').style.top = "0";
  }
  lastScrollTop =
    scrollTopPosition <= 0 ? 0 : scrollTopPosition;
},
false,
);




function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}








