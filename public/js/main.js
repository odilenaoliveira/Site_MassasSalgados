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
