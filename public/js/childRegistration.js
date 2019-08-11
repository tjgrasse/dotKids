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

// Check the form contents to make sure they are ok, currently confirming that the
// two passwords match
function checkFormContents() {
   var password = document.getElementById("password1");
   var password1 = document.getElementById("password2");

   console.log(password.value);
   console.log(password1.value);

   if (passwordsEqual(password.value, password1.value) == false) {
      alert("Passwords do not match.");
      return false;
   }
   return true;
}

module.exports = { passwordsEqual }