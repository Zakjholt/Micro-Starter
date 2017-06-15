const test = require('ava')
const micro = require('micro')
const listen = require('test-listen')
const axios = require('axios')
const app = require('../../src/app')

test('status endpoint', async t => {
  const microInstance = micro(app) // Runs an instance of the microservice
  const url = await listen(microInstance) // Finds the url that the service is running on
  const { data } = await axios.get(`${url}/status`) // Sends a request to the running microservice

  t.snapshot(data) // Snapshots the response
})

test('echo endpoint success', async t => {
  const microInstance = micro(app)
  const url = await listen(microInstance)
  const { data: { message } } = await axios.post(`${url}/echo`, {
    message: 'Test'
  })

  t.snapshot(message)
})

test('echo endpoint 400 on validator schema error', async t => {
  const microInstance = micro(app)
  const url = await listen(microInstance)
  const { response: { status } } = await t.throws(
    // Use t.throws to let ava know you're expecting an error to be thrown. Otherwise the test will fail
    axios.post(`${url}/echo`, {
      property: 'Missing the correct property type'
    })
  )

  t.is(status, 400)
})
