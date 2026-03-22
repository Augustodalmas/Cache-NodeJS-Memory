const productsController = require('../controller/productsController')
const cacheMiddleware = require('../middleware/cache')

module.exports = function (app) {
    app.get('/products', cacheMiddleware(60), productsController.get)
}