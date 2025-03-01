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
        message : "failed to fetche the flights",
        error : error
    }
)
    }
}

module.exports = {
    create,
    getAll

}