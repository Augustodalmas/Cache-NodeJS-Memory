const express = require('express')
const routes = express.Router()

require('./productsRoutes')(routes)

module.exports = routes