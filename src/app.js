const api = require('./router.js')
const { handleErrors } = require('micro-boom') // Handles any boom created errors that are thrown
const visualize = require('micro-visualize') // Logs requests and responses
const cors = require('micro-cors')() // Enables CORS
const client = require('prom-client') // Prometheus client
const { compose } = require('lodash/fp')

client.collectDefaultMetrics(5000) // Sets the interval for Prometheus to collect metrics

const app = compose(visualize, handleErrors, cors)(api)

module.exports = app
