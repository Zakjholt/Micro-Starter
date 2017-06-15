const Joi = require('joi')
const mj = require('micro-joi')

const validString = mj(
  Joi.object({
    message: Joi.string()
  })
)

module.exports = {
  validString
}
