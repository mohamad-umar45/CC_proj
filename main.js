// navbar

let nav = document.querySelector(".navigation-wrap");

window.onscroll = function(){
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");

    }
}

// nav hide

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
    })
})

// // counter design




$(document).ready(function(){
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

})