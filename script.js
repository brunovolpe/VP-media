const hamburger = document.getElementById('hamb');
const navMenu = document.querySelector(".dropdown-menu");
const dropButton = document.querySelectorAll(".menu-button");
const arrowRotate = document.querySelectorAll(".arrow");


if (hamburger) {
    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
}
/*
document.querySelectorAll(".dropdown-menu").forEach(n => n.addEventListener ("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))*/

arrowRotate.forEach((rotate) => {
    rotate.addEventListener("click", () => {
        rotate.classList.toggle("active");
    })
    });

dropButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    })
    });