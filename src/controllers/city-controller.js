const { CityService } = require('../services/index')

const cityService = new CityService();

const create = async (req , res) => {
    try{
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data: city,
        success : true,
        message : "successfully created a city",
        err : {}
    }) 
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to create a city",
        error : error
    })
}
}
const destroy = async (req , res) => {
    try{
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data: response,
        success : true,
        message : "successfully deleted a city",
        err : {}
    }) 
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to delete a city",
        error : error
    })
}
}
const get = async (req , res) => {
    try{
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
        data: response,
        success : true,
        message : "successfully fetched a city",
        err : {}
    }) 
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to fetch a city",
        error : error
    })
}
}

   
const update = async (req , res) => {
    try{
    const response = await cityService.updateCity(req.params.id , req.body);
    return res.status(200).json({
        data: response ,     
        success : true,
        message : "successfully updated a city",
        err : {}
    }) 
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to update a city",
        error : error
    })
}
}
const getAll = async (req , res) => {
    try{
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
        data:cities,     
        success : true,
        message : "successfully fetched the cities",
        err : {}
    }) 
}
catch(error){
    console.log(error);
    return res.status(500).json({
        data : {}, 
        success : false,
        message : "failed to fetch the cities",
        error : error
    })
}
}




module.exports = {
    create , 
    destroy , 
    update ,
    get, 
    getAll

}