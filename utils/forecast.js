const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=942d47503e9203f4ad1791f6a0f298a2&query='+latitude+','+longitude+'&units=f'
    request({url, json:true}, (error, {body}) => {
        if (error){
            callback(error, undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + '. It feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast 
