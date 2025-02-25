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
}

module.exports = CityRepository;
