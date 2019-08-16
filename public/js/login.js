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
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var checkbox1 = document.getElementById("checkLogged");
  var checkbox2 = document.getElementById("checkLoggedParent");

  console.log(username.value);
  console.log(password.value);
  console.log(checkLogged.value);
  console.log(checkLoggedParent.value);

  if (notEmpty(password) == false ||  notEmpty(username) == false)
  {
      alert("Required field(s) are empty!");
      return false;
  }
  if(isChecked(checkbox2) == false)
  {
    window.location.href = "/views/home.html";
  }
  else
  {
    window.location.href = "/views/parentSettings.html";
  }
}
