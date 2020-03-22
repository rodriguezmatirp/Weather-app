console.log('Application is running on the client side!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg1')
const msgTwo = document.querySelector('#msg2')
const msgThree = document.querySelector('#msg3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''
    msgThree.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error
            }
            console.log(data.location)
            console.log(data.forecast)
            msgTwo.textContent = 'It is ' + data.forecast.Summary + '\nIt is currently ' + data.forecast.Current_Weather + ' . \nThe Rain Probabiliy is ' + data.forecast.Rain_Probability + ' .\n'
            msgThree.textContent = 'Maximum Temperature - ' + data.forecast.Max_Temperature + '  Minimum Temperature - ' + data.forecast.Min_Temperature
            msgOne.textContent = data.location

        })
    })
})