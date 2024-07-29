const hamBTN = document.getElementById("hamBTN");
let nav = document.getElementById('nav');
let mobileNav = document.getElementById('mobileNav');
let close = document.getElementsByClassName('close');

close[0].addEventListener ( 'click' , ()=> {
    nav.style = "animation: 2s slideR ; left:-100"
    close[0].style = "display:none";
});

function openMenu() {
    nav.style = "animation: 1s slide ; left:0"
    close[0].style = "display:flex";
}



