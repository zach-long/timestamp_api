'use strict'

console.log("Client side script loaded");

// DOM location to append XMLHttp result
var location = document.getElementById('live-sample');
// URL for the API call
var url = 'https://fierce-beyond-84088.herokuapp.com/whoami';
// error message
var errMsg = "Unable to retrieve data"

// the HTTP request
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log("request successful");
    //location.innerHTML = xhr.responseText;
    console.log(xhr.responseText);
  } else {
    console.log("request failed");
    //location.innerHTML = errMsg;
    console.log("");
  }
}
//xhr.open('GET', url, true);
//xhr.send(null);
