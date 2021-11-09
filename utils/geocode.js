const request = require('request')

const geoCode = (location, callback) => {
    
    const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1IjoiY29yeTI2IiwiYSI6ImNrczg4b211ZjBpa3EydW9janF6eGtyZGwifQ.HItytdROG_a3ogewrJ7Rmg'
    //debugger
    request({url: mapBoxUrl, json: true}, (error, {body}) => {
        if(error){
            callback(error, undefined)
        }else if (body.features.length === 0){
            callback('could not find coordinates', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode
