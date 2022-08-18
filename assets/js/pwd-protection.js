"use strict"

var button = document.getElementById('btn-submit')
var password = document.getElementById('pwd-input')

function login(secret) {
  var hash = sha1(secret)
  var url = hash + "/index.html"

  var request = new XMLHttpRequest()
  request.open('GET', url, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      window.location = url
    } else {
      parent.location.hash = hash
      password[0].setAttribute('placeholder', 'Contraseña incorrecta, prueba otra vez')
      password[0].value = ''
    }
  }
  request.onerror = function() {
    parent.location.hash = hash
    password[0].setAttribute('placeholder', 'Contraseña incorrecta, prueba otra vez')
    password[0].value = ''
  }
  request.send()
}

button[0].addEventListener("click", function() {
  login(password[0].value)
})

//function form_submit() {
//  // Execute a function when the user presses a key on the keyboard
//  password.addEventListener("keypress", function(event) {
//
//    // If the user presses the "Enter" key on the keyboard
//    if (event.key === "Enter") {
//      event.preventDefault(); // Cancel the default action, if needed
//      button.click();         // Trigger the button element with a click
//    }
//    
//  })
// }


function form_submit() {
  button.click()
}

