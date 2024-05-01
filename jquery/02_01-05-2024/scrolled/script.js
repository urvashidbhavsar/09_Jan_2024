$(document).ready(function () {
    $("#tbtn").click(function () {
        $(".nav").addClass("togglenav")
    })

    $("#closebtn").click(function () {
        $(".nav").removeClass("togglenav")
    })
})

// scrolling
$(function () {
    $(window).scroll(function () {
        let current = $(this).scrollTop();
        if (current > 0) {
            $("header").addClass("headerFixed")
        } else {
            $("header").removeClass("headerFixed")
        }
    })
})