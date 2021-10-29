// Mobile Navigation toggle


let mobilenav = document.getElementById("mobNav");
let logo = document.getElementById("logoImg");

mobilenav.style.left = "-100%";

let menu = document.getElementById("mobile").addEventListener("click", () => {
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "0";
        menu.src = "images/close.svg";
        logo.style.filter = "invert(1) brightness(30)";
    }
    else{
        mobilenav.style.left = "-100%";
        menu.src = "images/hamburger.svg";
        logo.style.filter = "invert(0)"
    }
});