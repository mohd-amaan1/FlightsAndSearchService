const { CityService } = require("../services/index.js");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {},
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "City creation failed",
            err: error,
        });
    }
}

const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.cityId);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City deleted successfully",
            err: {},
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "City deletion failed",
            err: error,
        });
    }
}

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.cityId);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City fetched successfully",
            err: {},
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "City fetch failed",
            err: error,
        });
    }
}

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.cityId, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City updated successfully",
            err: {},
        });
    }
    catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "City update failed",
            err: error,
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}