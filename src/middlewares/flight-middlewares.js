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
       return res.status(400).json({
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