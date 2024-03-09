"use strict";

/* *************CHECKBOX RADIO WIDGET******************* */
$( "input[type='radio']" ).checkboxradio();

$( document ).ready( () => {

    

    /* *******************CONTACT FORM************************ */
    $( "#submit" ).click( () => {
        $("span").text("*");   // clear any previous error messages
        
        // get values entered by user
        const name = $("#name").val().trim();
        const phone = $("#phone").val().trim();
        const email = $("#email").val().trim();
        const textarea = $("#textarea").val().trim();
        const techComm = $("#tech_comm").val().trim();
        const select1 = $("#select1").val().trim();

        // regular expressions for validity testing
        const namePattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        
        // check user entries for validity
        let isValid = true;
        if ( name === "" || !namePattern.test(name) ) {
            isValid = false;
            $("#name").next().text("Please enter a name.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please enter a valid phone number.");
        }
        if (techComm === select1) {
            isValid = false;
            $("#tech_comm").next().text("Please select one.");
        }
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }

        // validate check boxes
        let checkedOptions = [];
        checkedOptions = $(":radio:checked");
        if (checkedOptions.length == 0) {
            $("#radio-3").next().text("Select at least one");
            isValid = false
        }
        // else {
        //     $("#radio-3").next().text("");
        // }

        if ( textarea === "") {
            isValid = false;
            $("#textarea").next().text("Please enter a description.");
        } 
        let checkboxTerms = [];
        checkboxTerms = $(":checkbox:checked");
        if ( checkboxTerms.length == 0) {
            $("#terms").next().text("You must agree to the terms of service.");
            isValid = false;
            
        }

        // prevent the default action of submitting the form if any entries are invalid 
		if (!isValid) {
            $("#contact_form").preventDefault();
		}
        
        if ( isValid ) { 
            window.alert("Thank you!")
            $("span").text("*");
            $("#name").val("");
            $("#phone").val("");
            $("#tech_comm").val("select1");
            $("#email").val("");
            $("#textarea").val(""); 
            $("#terms").removeAttr('checked');
        }
        
        $("#name").focus(); 
    });
    
    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("span").text("*");
        $("#name").val("");
        $("#phone").val("");
        $("#tech_comm").val("select1");
        $("#email").val("");
        $("input[type='radio']").removeAttr('checked');
        $("#textarea").val("");
        $("#terms").removeAttr('checked');
        $("#name").focus();
    });
    


    /* *************SIGNUP FORM NEWS LETTER****************** */
    $("#join_list").click( () => {
        $("span").text("*");

        const email1 = $("#email1").val().trim();
        const email2 = $("#email2").val().trim();
        const name = $("#newsletter_name").val().trim();

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const namePattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

        let isValid = true;
        if ( email1 === "" || !emailPattern.test(email1) ) {
            isValid = false;
            $("#email1").next().text("Please enter a valid email.");
        }
        if ( email2 === "" || !emailPattern.test(email2) ) {
            isValid = false;
            $("#email2").next().text("Please enter a valid email.");
        }
        if ( name === "" || !namePattern.test(name) ) {
            isValid = false;
            $("#newsletter_name").next().text("Please enter a name.");
        }
        if (email1 != email2) {
            isValid = false;
            $("#email2").next().text("Both emails must match.");
        }

        if (!isValid) {
            $("#contact_form").preventDefault();
        }

        if (isValid) {
            window.alert("Thank you!")
            $("span").text("*");
            $("#newsletter_name").val("");
            $("#email1").val("");
            $("#email2").val("");
            $("#email1").focus();
        }
    });
    $("#clear_form").click( () => {
        $("span").text("*");
        $("#name").val("");
        $("#email1").val("");
        $("#email2").val("");
        $("#email1").focus();
    });
    $("#email1").focus();

    /* *********BUTTON AND DIALOG************* */
    $("#book").button();
    $("#book").click( () => 
        $("#dialog").dialog({ modal:true })
    );


    // set focus on initial load
    $("#name").focus();
}); //end of document ready
