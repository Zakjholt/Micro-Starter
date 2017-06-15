const { createError } = require('micro-boom')
const { send, json } = require('micro')
const { statusBuilder, echoBuilder } = require('../utils/builders')
const client = require('prom-client')

const status = async (req, res) => {
  const payload = statusBuilder()

  send(res, 200, payload)
}

const echo = async (req, res) => {
  try {
    const { message } = await json(req)

    const payload = echoBuilder({ message })

    send(res, 200, payload)
  } catch (error) {
    // When you throw a micro-boom error, it is be caught by the top level error handler in app.js and an error response is sent to the client
    throw createError(error.status)
  }
}

const metrics = async (req, res) => {
  const metrics = client.register.getMetricsAsJSON()

  send(res, 200, metrics)
}

// Functions from your handlers files will be imported by the router to handle routes
module.exports = {
  status,
  echo,
  metrics
}
