const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/4f56846cf1bf2f64e9ec8d8b12456af4/' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined)
        } else if (body.error) {
            callback('Unable to find weather', undefined)
        } else {
            callback(undefined, {
                Summary: body.daily.data[0].summary,
                Current_Weather: body.currently.temperature,
                Rain_Probability: body.currently.precipProbability + ' %',
                Max_Temperature: body.daily.data[0].temperatureMax,
                Min_Temperature: body.daily.data[0].temperatureMin
            })
        }
    })
}

module.exports = forecast