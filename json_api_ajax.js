//Handle Click Events with JavaScript using the onclick property
document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("getMessage").onclick = function () {
    
    //Change Text with click Events
    document.getElementsByClassName("message")[0].textContent="Here is the message";
  };
});
