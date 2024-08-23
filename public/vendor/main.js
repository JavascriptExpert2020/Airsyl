import $ from 'jquery';
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
// function ValidateEmail(inputText)
// {

// }
var emailaddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phonenumber =  /^(?:\+880)?(?:\d{11})$/;
$(".click").keyup(function(e){
  if($(this).hasClass("email")){
  if(emailaddress.test(String($(this).val()).toLowerCase()) == false){
    $(this).addClass("invalid")
  }
  else{
    $(this).removeClass("invalid")
  }
  }
  if($(this).hasClass("phone")){
    if(phonenumber.test(String($(this).val()).toLowerCase()) == false){
      $(this).addClass("invalid")
  }
  else{
    $(this).removeClass("invalid")
  }
  }
})

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Pay";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
    x[currentTab].style.display = "none";
  
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {

  // if())
// {
// alert("Valid email address!");
// }
// else
// {
// alert("You have entered an invalid email address!");
// }
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  if(emailaddress.test(String($(".email").val()).toLowerCase()) == true && phonenumber.test(String($(".phone").val()).toLowerCase()) == true){
    console.log('sdfas')
    valid = true;
  }
  else{
    valid= false;
  }
  x = document.getElementsByClassName("tab");
  y = x[currentTab].querySelectorAll("input:not(.not-require),select:not(.not-require)");
 
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...\
    if (y[i].value == "")  {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      
      valid = false;
    }

  
  }
  
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }

  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}





$(function() {
  
  // Get the form fields and hidden div
  var checkbox = $("#show-intl");
  var hidden = $("#hide-intl");

  
  // Hide the fields.
  // Use JS to do this in case the user doesn't have JS 
  // enabled.
  hidden.hide();
  
  // Setup an event listener for when the state of the 
  // checkbox changes.
  checkbox.change(function() {
    // Check to see if the checkbox is checked.
    // If it is, show the fields and populate the input.
    // If not, hide the fields.
    if (checkbox.is(':checked')) {
      // Show the hidden fields.
      hidden.show();
     
    } else {
      
    
      hidden.hide();
 
    }
  });
});
