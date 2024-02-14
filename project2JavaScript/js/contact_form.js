"use strict";
// marco ramos, 02/10/2024

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ol");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ol");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const name = $("#name")
    const email = $("#email_address");
    const phone = $("#phone"); 
    const textArea =$("#comments");
    const terms = $("#terms");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (name.value == "") {
        msgs[msgs.length] = "Please enter a name."
    }
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a phone number."; 
    }  
    if (textArea.value == "") {
        msgs[msgs.length] = "You must submit a comment.";
    }
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    

    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
        
    } else {
        displayErrorMsgs(msgs);
    }
    
};

const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("ol").remove();
    
    $("#name").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit_form").addEventListener("click", processEntries);
    
    $("#reset_form").addEventListener("click", resetForm);  
    $("#name").focus();   
});

// *****************************************************//
//*******************Newsletter Form********************//
//******************************************************//



document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        let isValid = true;
        if (email1.value == "") {
            email1.nextElementSibling.textContent = "First email is required.";
            isValid = false;
        }
        else {
            email1.nextElementSibling.textContent = "";
        }
        if (email2.value == "") {
            email2.nextElementSibling.textContent = "Second email is required.";
            isValid = false;
        }
        else {
            email2.nextElementSibling.textContent = "";
        }
        if (email1.value != email2.value) {
            email2.nextElementSibling.textContent = "Both emails must match.";
            isValid = false;
        }
        // else {
        //     email2.nextElementSibling.textContent = "";
        // }
        // if (!email2.length) {
        //     email2.nextElementSibling.textContent = "*"
        //     isValid = false;
        // }
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "Name is required.";
            isValid = false;
        }
        else {
            firstName.nextElementSibling.textContent = "";
        }
    
        // submit the form if error message is an empty string
        if (isValid == true) {
            $("#email_form").submit();
        } else {
            alert(errorMessage);            
        }

    });
    const clearForm = () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email1_error").textContent = "*";
        $("#email2_error").textContent = "*";
        $("#name_error").textContent = "*"; 
        $("#email_1").focus();
    }
    $("#clear_form").addEventListener("click", clearForm);

});