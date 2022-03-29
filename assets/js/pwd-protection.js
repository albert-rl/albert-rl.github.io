"use strict"

var button = document.querySelectorAll('[data-id="submit"]')
var password = document.querySelectorAll('[data-id="pwd"]')

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

document.onkeydown = function(e) {
  e = e || window.event
  if (e.keyCode == 13) {
    event.preventDefault();
    login(password[0].value)
  }
}
