$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $("#loading").load("animation.html", function () {
        $("#loading").fadeOut(5000, function () {
            $("#mainpage").fadeIn(function () {
                alert("page is loaded")
            })
        })
    })
})