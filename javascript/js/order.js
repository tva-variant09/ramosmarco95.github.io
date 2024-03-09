"use strict";



$( document ).ready( () => {
    /* *************DATEPICKER WIDGET***************** */
    $( function() {
        $( "#datepicker" ).datepicker();
    });


    /* *******************ORDER FORM************************ */
    $( "#submit" ).click( () => {
        $("span").text("*");   // clear any previous error messages
        
        // get values entered by user
        const name = $("#name").val();
        const address = $("#address").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const date = $("#datepicker").val();
        const time = $("#time").val();
        const textarea = $("textarea").val();
        

        // regular expressions for validity testing
        const namePattern = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        const addressPattern = /^(?![ -.&,_'":?!/])(?!.*[- &_'":]$)(?!.*[-.#@&,:?!/]{2})[a-zA-Z0-9- .#@&,_'":.?!/]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const datePattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}/;
        const timePattern = /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/;
        
        // check user entries for validity
        let isValid = true;
        if ( name === "" || !namePattern.test(name) ) {
            isValid = false;
            $("#name").next().text("Please enter a name.");
        }
        if ( address === "" || !addressPattern.test(address) ) {
            isValid = false;
            $("#address").next().text("Please enter a valid address.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a valid phone number.");
        }
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( date === "" || !datePattern.test(date) ) {
            isValid = false;
            $("#datepicker").next().text("Please enter a date.");
        }
        if ( time === ""  /* !timePattern.test(time) */ ) {
            isValid = false;
            $("#time").next().text("Please enter a time.");
        }
        if ( textarea === "") {
            isValid = false;
            $("#textarea").next().text("Please enter a description.");
        }
        
        if ( isValid ) { 
            window.alert("Thank you!")
            $("span").text("*");
            $("#name").val("");
            $("#address").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#datepicker").val("");
            $("#time").val("");
            $("#textarea").val("");
        }
        
        $("#name").focus(); 
    });
    // set focus on initial load
    $("#name").focus(); 

    let nextSlide = $("#slides img:first-child");
     
    /* *******************MENU SLIDE SHOW************************ */
    // start slide show
    setInterval( () => {   
        $("#caption").hide(1000);
        $("#slide").slideUp(3000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
        });    // end fadeOut()
    },
    5000);

}); //END DOCUMENT READY





 
