const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const { argv } = require('process')

const location = argv[2]
//console.log(argv[2])

if (!location){
    console.log('please enter a location')
  } else {
    geocode(location, (error, {latitude, longitude, location}) => {
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
            })
    })
  }




