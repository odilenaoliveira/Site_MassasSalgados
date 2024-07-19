window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY> 0);
});

//Initialize Swiper
/*
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});*/

// SCROLLREVEAL
ScrollReveal({reset:true,distance:'60px',delay:400,duration:2500});
ScrollReveal().reveal('.destaque',{delay:500,origin:'bottom'});
ScrollReveal().reveal('.info-recheio',{delay:400,origin:'bottom'});