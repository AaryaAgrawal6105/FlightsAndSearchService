const {FlightService} = require('../services/index')

const flightService = new FlightService();

const create = async (req , res)=>{
    try{
        let flightRequestData = {
           flightNumber : req.body.flightNumber,
            airplaneId :req.body.airplaneId ,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime :req.body.arrivalTime ,
            departureTime : req.body.departureTime ,
            price : req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data : flight,
            success :true,
            message : "successfully created a flight",
            error : {}
        })
    }
    catch(error){
        console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to create a flight",
        error : error
    })
    }
}
const getAll = async(req,res) =>{
    try{
        const response = await flightService.getAllFlightData(req.query);
        res.status(200).json({
            data : response,
            success :true,
            message : "successfully fetched the flights",
            error : {}
        })
    }
    catch(error){
        console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to fetch the flights",
        error : error
    }
)
    }
}
const get = async(req,res)=>{

    try{
        const response = await flightService.getFlight(req.params.id);
        res.status(200).json({
            data : response,
            success :true,
            message : "successfully fetched the flight",
            error : {}
        })
    }
    catch(error){
        console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to fetch the flights",
        error : error
    }
)
    }

}
const update = async(req,res)=>{
    try{
        const response = await flightService.updateFlight(req.params.id , req.body);
        res.status(200).json({
            data : response,
            success :true,
            message : "successfully updated the flight",
            error : {}
        })
    }
    catch(error){
        console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to update the flights",
        error : error
    }
)
    }
}

module.exports = {
    create,
    getAll,
    get,
    update

}