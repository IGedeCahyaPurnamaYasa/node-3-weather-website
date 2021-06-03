const request = require('postman-request');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2FoeWExMzIiLCJhIjoiY2twNml3dDAyMGl2djJubndhaWx2d2R5eCJ9.fbw1cHbgCKkxhl1ccp4xPg&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.message || body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }
        else{
            // const features = body.features
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode