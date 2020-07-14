//Handle Click Events with JavaScript using the onclick property
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    //Change Text with click Events
    document.getElementsByClassName("message")[0].textContent =
      "Here is the message";
  };
});

//Get JSON with the JavaScript XMLHttpRequest Method
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "/json/cats.json", true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(
        json
      );
    };
  };
});
