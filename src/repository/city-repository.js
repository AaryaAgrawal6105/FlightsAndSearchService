const { Op } = require('sequelize')

const { City } = require('../models/index')


// console.log(City);
class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            // Just throw the error directly
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            // Just throw the error directly
            throw error;
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId,
                }

            }
            );
        }
        catch (error) {
            throw { error };
        }

    }
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch (error) {
            throw { error }
        }
    }
    async getAllCities(filter){
        if(filter.name){
            const cities = await City.findAll({
                where : {
                    name : {
                        [Op.startsWith] : filter.name,
                    }
                }
            })
            return cities;
        }
        try {
            const cities = await City.findAll();
            return cities;
        }
        catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository;
