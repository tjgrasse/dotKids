// Check if the two passwords are equal
function passwordsEqual(password1, password2){
    if (password1 == password2)
    {
       console.log("Passwords are equal");
       return true;
    }
    console.log("Passwords are not equal");
    return false;
 }

 //check if form fields are not empty
 function notEmpty(formdata) {
    if (formdata.value.length == 0){
        console.log("Required field(s) are empty!");
        return false;
    }
    console.log("Required fields are not empty.")
    return true;
 }

 //check to make sure checkbox is checked
 function isChecked(checkbox){
     if(checkbox.checked == false){
        console.log("Checkbox is not checked!");
        return false;
     }
     console.log("Checkbox is checked.");
     return true;
 }

 // Check the form contents to make sure they are ok, currently confirming that the
 // two passwords match, that fields are not empty and that checkbox is checked.
 function checkFormContents() {
    var password = document.getElementsByName("password1");
    var password1 = document.getElementsByName("password2");
    var username = document.getElementsByName("Username");
    var email = document.getElementsByName("email");
    var checkbox = document.getElementsByName("terms");

    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(password1.value);
 
    if (passwordsEqual(password.value, password1.value) == false) {
       alert("Passwords do not match.");
       return false;
    }
    if (notEmpty(password) == false || notEmpty(password1) == false  || notEmpty(username) == false  || notEmpty(email) == false)
    {
        alert("Required field(s) are empty!");
        return false;
    }
    if(isChecked(checkbox) == false)
    {
        alert("Checkbox is not checked!");
        return false;
    }
    return true;
 }

