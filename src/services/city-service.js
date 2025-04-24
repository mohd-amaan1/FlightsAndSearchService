const { CityRepository } = require('../repositories/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service level.");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const res = await this.cityRepository.deleteCity(cityId);
            return res;
        } catch (error) {
            console.log("Something went wrong at the service level.");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service level.");
            throw { error };
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at the service level.");
            throw { error };
        }
    }
}

module.exports = {
    CityService
}