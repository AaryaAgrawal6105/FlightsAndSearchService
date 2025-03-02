const {AirportService} = require('../services/index') 

const airportService = new AirportService();

const create = async(req , res) =>{
    try{
        const response =  await airportService.create(req.body);
        return res.status(201).json({
            data : response ,
            success : true ,
            message : "successfully created an airport",
            err : {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data :  {},
            err : {error},
            message : "Failed to create an airport",
            success : false
        })
    }
}

module.exports = {
    create,
    
}