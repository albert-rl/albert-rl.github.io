"use strict"

var button = document.getElementById('btn-submit')
var password = document.getElementById('pwd-input')
var form = document.getElementById('pwd-form')

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
      password.setAttribute('placeholder', 'Contraseña incorrecta, prueba otra vez')
      password.value = ''
    }
  }
  request.onerror = function() {
    parent.location.hash = hash
    password.setAttribute('placeholder', 'Contraseña incorrecta, prueba otra vez')
    password.value = ''
  }
  request.send()
}

button.addEventListener("click", function() {
  login(password.value)
})

form.addEventListener('submit', function(event) {
  password.addEventListener("keypress", function(event) {

   if (event.key === "Enter") {
     event.preventDefault() // Cancel the default action, if needed
     login(password.value)  // Trigger the button element with a click 
     // button.click();         // Trigger the button element with a click
   }
   
 })
})
