"use strict";
// marco ramos
// 03/04/2024

$(document).ready( () => {

    // ******************SEARCH BOX******************//
    var menu = $(".menu");
    var searchBar =$(".search_bar");
    var bar = $("#bar");
    var searchIcon = $(".icon_search");

    searchBar.focusin(function () {
        searchBar.css('width', '20%');
        menu.css('width', '80%');
        searchBar.css('color', '#000');
        bar.css('color', '#000')
    });
    searchBar.focusout(function () {
        searchBar.css('width', '15%');
        menu.css('width', '85%');
        searchBar.css('color', '#ff');
        bar.css('color', '#fff')
    });

    /* ************ANIMATION FOR H1 TAGS************* */
    $("h1").click( evt => {
        $(evt.currentTarget)
            .animate({ fontSize: "650%", opacity: 1, left: "+=275" }, 2000)  
            .animate({ fontSize: "250%", left: "-=275" }, 1000);
    });

    $(".welcome_index").animate( { fontSize: "350%", opacity: 1, left: "+=375" }, 1000 ).animate( { fontSize: "175%", left: "-=200" }, 1000 );

});
