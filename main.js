// Mobile Navigation toggle

const mobilenav = document.querySelector("#mobNav");
const logo = document.querySelector("#logoImg");

mobilenav.style.left = "-100%";

const openMobileNav = document.querySelector("#mobile");

openMobileNav.addEventListener("click", () => {
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "0";
        openMobileNav.src = "images/close.svg";
        logo.classList.add("active");
    }
    else{
        mobilenav.style.left = "-100%";
        openMobileNav.src = "images/hamburger.svg";
        logo.classList.remove("active");
    }
})