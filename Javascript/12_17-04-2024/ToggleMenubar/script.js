function toggleMenu() {
    let newnav = document.querySelector(".nav");
    let icon = document.getElementById("icon")
    newnav.classList.toggle("togglenav")

    if (newnav.classList.contains("togglenav") == true) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }

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