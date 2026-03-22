const productsModels = require('../models/productsModels')

const productsController = {
    get: async function (req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;

        const skip = (page - 1) * limit;

        const result = await productsModels.findAll(skip, limit)

        res.status(200).json({
            page,
            limit,
            total: result.total,
            count: result.data.lenght,
            data: result.data
        })
    }
}

module.exports = productsController