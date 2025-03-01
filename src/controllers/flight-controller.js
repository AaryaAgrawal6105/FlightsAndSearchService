const {FlightService} = require('../services/index')

const flightService = new FlightService();

const create = async (req , res)=>{
    try{
        console.log(req.body);
        const flight = await flightService.createFlight(req.body);
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

module.exports = {
    create,

}