// Check the Content Values
function checkContentValues(c1, c2, c3) {
    if ((c1 == false) && (c2 == false) && (c3 == false)){
        return false;
    }
    return true;
}

// Check the form contents to make sure they are ok, currently confirming that at least
// one of the content values is currently selected
function checkFormContents() {
   var content1 = document.getElementById("content1").checked;
   var content2 = document.getElementById("content2").checked;
   var content3 = document.getElementById("content3").checked;

   console.log(content1);
   console.log(content2);
   console.log(content3);

   if (checkContentValues(content1, content2, content3) == false){
      alert("All content is turned off, please turn on at least one.");
      return false;
   }
   return true;
}

module.exports = { checkContentValues }