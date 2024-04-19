function toggleMenu() {
    let newnav = document.querySelector(".nav");
    newnav.classList.add("togglenav")
}
function CloseMenu() {
    let newnav = document.querySelector(".nav");
    newnav.classList.remove("togglenav")
}

let myheader = document.querySelector("header");
window.addEventListener("scroll", () => {
    let currentval = window.scrollY;
    if (currentval > 0) {
        myheader.classList.add("headerFixed")
    } else {
        myheader.classList.remove("headerFixed")
    }
})