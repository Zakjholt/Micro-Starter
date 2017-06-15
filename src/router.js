const { router, get, post } = require('microrouter')
const { status, metrics, echo } = require('./handlers/status')
const { validString } = require('./utils/validators')

module.exports = router(
  get('/status', status),
  get('/metrics', metrics),
  // Handlers can be wrapped in micro-joi validators to ensure that the requests are formatted correctly
  // Incorrect data structures will return a 400 to the client with the fields they formatted incorrectly
  post('/echo', validString(echo))
)
