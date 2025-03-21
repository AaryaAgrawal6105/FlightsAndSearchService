const { Flights } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId
        }
        let priceFilter=[];
        if(data.minPrice){
                priceFilter.push(
                    {price: { [Op.gte]: data.minPrice }
        })
    }
        if(data.maxPrice){
            priceFilter.push( { price: { [Op.lte]: data.maxPrice } })
        }
        Object.assign(filter,{[Op.and]  : priceFilter})
        
        // if (data.minPrice && data.maxPrice)
        //     Object.assign(filter, {
        //         [Op.and]:
        //             [
        //                 { price: { [Op.lte]: data.maxPrice } },
        //                 { price: { [Op.gte]: data.minPrice } },
        //             ]
        //     })
        //     if(data.minPrice){
        //     Object.assign(filter ,{price :  {[Op.gte] : data.minPrice}})
        // }
        // if(data.maxPrice){
        //     Object.assign(filter ,{price :  {[Op.lte] : data.maxPrice}})
        // }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error) {
            throw { error }
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch (error) {
            throw { error }
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter)
            const flight = await Flights.findAll({
                where: filterObject,
            });
            return flight;
        }
        catch (error) {
            throw { error }
        }
    }

    async updateFlight(flightId , data){
        try {
            await Flights.update(data , {
                where : {
                    id:flightId,
                }
            })
            return true;
        } catch (error) {
            throw {error}
        }
    }

}

module.exports = FlightRepository;