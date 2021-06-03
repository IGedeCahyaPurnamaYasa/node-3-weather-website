const request = require('postman-request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7f30613474d6cef67560a8c63b7a8901&query='+ lat +','+ long +'&units=f'

    request({ url, json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast