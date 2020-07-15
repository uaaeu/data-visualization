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

//Get JSON with the JavaScript fetch method
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = () => {
    fetch("/json/cats.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerHTML = JSON.stringify(data);
      });
  };
});

//Convert JSON Data to HTML
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "/json/cats.json", true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach((val) => {
        // Adding each object keys
        var keys = Object.keys(val);
        // Generating new html
        html += "<div class = 'cat'>";
        // Adding the custom html to each key
        keys.map((key) => {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });

        html += "</div><br>";
      });

      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});

//Render Images from Data Sources
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "/json/cats.json", true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach(function (val) {
        html += "<div class = 'cat'>";
        html +=
          "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

        html += "</div><br>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
