"use strict";
// marco ramos

$(document).ready( () => {
    let firstSlide = $("#slides1 img:first-child");

    setInterval( () => {
        $("#slide1").fadeOut(2000, () => {
            if (firstSlide.next().length == 0) {
                firstSlide = $("#slides1 img:first-child");
            }
            else {
                firstSlide = firstSlide.next();
            }
            const nextSlideSource = firstSlide.attr("src");
            
            $("#slide1").attr("src", nextSlideSource).fadeIn(3000);
        });
    }, 3000);

    // ****************Second Slide-Show*********************
    let secondSlide = $("#slides2 img:first-child");

    setInterval( () => {
        $("#slide2").fadeOut(2000, () => {
            if (secondSlide.next().length == 0) {
                secondSlide = $("#slides2 img:first-child");
            }
            else {
                secondSlide = secondSlide.next();
            }
            const nextSlideSource = secondSlide.attr("src");
            
            $("#slide2").attr("src", nextSlideSource).fadeIn(3000);
        });
    }, 3000);
});