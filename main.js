$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        nav:true,
        pagination:false,
        dots:false,
        loop:true,
        autoplay:true,
        autoplayspeed:3000,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:7
            },
        }        
    });
  });

  const count = document.querySelector("#compteur");

  let data = count.getAttribute("data-count");

let deadline = new Date(data).getTime();
let x = setInterval(function(){
    alert(deadline)
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor(( t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;

    if ( t <0) {
        document.getElementById("stop").innerHTML = "Soirée déjà faite... tant pis pour vous";
        document.getElementById("day").innerHTML = "";
        document.getElementById("hour").innerHTML = "";
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
    }
}
) 


let typed = new Typed ('.element', {
    strings: ["Evenement Le","Samedi 7 octobre 2022", "En vrai.... ne venez pas"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 4000,
    startDealy: 1000,
    loop: true,
    showCursor: true,
});