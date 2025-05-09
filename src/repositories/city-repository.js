const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong at the repository level.");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at the repository level.");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong at the repository level.");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            if (!city) {
                throw new Error('City not found');
            }
        } catch (error) {
            console.log("Something went wrong at the repository level.");
            throw { error };
        }
    }
}

module.exports = CityRepository;