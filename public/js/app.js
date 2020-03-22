console.log('Application is running on the client side!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg1')
const msgTwo = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error
            }
            console.log(data.location)
            console.log(data.forecast)
            msgTwo.textContent = 'It is ' + data.forecast.Summary + 'It is currently ' + data.forecast.Current_Weather + ' . The Rain Probabiliy is ' + data.forecast.Rain_Probability + ' .'
            msgOne.textContent = data.location
        })
    })
})