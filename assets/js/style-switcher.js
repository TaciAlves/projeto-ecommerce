// Modo Light e Dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("bx-sun");
    dayNight.querySelector("i").classList.toggle("bx-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("bx-sun");
    } else {
        dayNight.querySelector("i").classList.add("bx-moon");
    }
})

//const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
//styleSwitcherToggler.addEventListener("click", () => {
//    document.querySelector(".style-switcher").classList.toggle("active");
//});

//window.addEventListener("scroll", () => {
//    if(document.querySelector(".style-switcher").classList.contains("active")){
//        document.querySelector(".style-switcher").classList.remove("active");
//    }
//});