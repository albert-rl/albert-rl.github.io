const form = document.getElementById('wedding-form')
const submitButton = document.getElementById('wedding-form-btn')
const scriptURL = 'https://script.google.com/macros/s/AKfycbycJyWAArwAXh-vUaQbe81ubQbYJltqZ5-Cfr2YU7qI7vqne1rJaZtfO4mywcgEvTXaoQ/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, {
      method: 'POST',
      body: requestBody
    })
    .then(response => {
      alert('Success!', response)
      submitButton.disabled = false
    })
    .catch(error => {
      alert('Error!', error.message)
      submitButton.disabled = false

    })
})
