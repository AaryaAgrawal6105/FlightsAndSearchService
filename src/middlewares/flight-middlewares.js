const {ClientErrorCodes}  = require('../utils/error-codes')

const validateCreateFlight = (req ,res, next) =>{
    if(
        !req.body.flightNumber || 
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId || 
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price

    ){
       return res.status(ClientErrorCodes.BAD_REQUEST).json({
        data  : {},
        message : "Invalid request body for creating a flight",
        error : "Missing mandatory properties for creating a flight",
        success : false
       }
    )
    }
    next();
}

module.exports = {validateCreateFlight};