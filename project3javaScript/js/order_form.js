"use strict"
// marcoRamos, 01/27/2024
const $ = selector => document.querySelector(selector);

const processEntries = evt => {
    const nameOrder = $("#name_last").value;
    const phoneNumber = $("#phone_number").value;
    const email = $("#email_1").value;

    // check user entries
    let isValid = true;
    if (nameOrder == "") {
        $("#name_error").textContent = "Name is required.";
        isValid = false;
    }
    else {
        $("#name_error").textContent = "";
    }
    if (phoneNumber == "") {
        $("#phone_number_error").textContent = "Phone number is required.";
        isValid = false;
    }
    else {
        $("#phone_number_error").textContent = "";
    }
    if (email == "") {
        $("#email_error").textContent = "Email is required.";
        isValid = false;
    }
    else {
        $("#email_error").textContent = "";
    }
    if ( !isValid ) {
        evt.preventDefault(); 
    }
    if (isValid) {
        // $("form").submit();
        window.alert("Thank you!")
    }
    $("form").reset();

    $("#name_last").focus();
};

const clearForm = () => {
    // clear text boxes
    $("#name_last").value = "";
    $("#phone_number").value = "";
    $("#email_1").value = "";
    $("#address_1").value = "";
    $("#address_2").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#zip_code").value = "";
    $("#textarea_description").value = "";

    // clear span elements
    $("#name_error").textContent = "*";
    $("#phone_number_error").textContent = "*";
    $("#email_error").textContent = "*"; 

    // set focus on first text box after resetting the form
    $("#name_last").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#submit_order").addEventListener("click", processEntries);
   
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#name_last").focus();
});