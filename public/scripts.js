//'use strict'

console.log("Client side script loaded");

// DOM location to append XMLHttp result
var dataAnchor = document.getElementById('live-sample');
// URL for the API call
var url = 'https://fierce-beyond-84088.herokuapp.com/whoami';
// error message
var errMsg = "Unable to retrieve data";

// the HTTP request
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log("request successful");
    dataAnchor.innerHTML = xhr.responseText;
  } else {
    console.log("request failed");
    dataAnchor.innerHTML = errMsg;
  }
};
xhr.open('GET', url, true);
xhr.send(null);
