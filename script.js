/*
Source: W3Schools Start Page Template
URL: https://www.w3schools.com/w3css/tryw3css_templates_start_page.htm
*/

/*To make navigation menu work on small screens*/
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
