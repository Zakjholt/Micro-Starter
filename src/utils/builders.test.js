// By default, our test script selects all files ending in _test.js.
const test = require('ava')
const { omit } = require('lodash')
const { statusBuilder, echoBuilder } = require('./builders')

test('statusBuilder', t => {
  const payload = statusBuilder()

  t.snapshot(payload)
})

test('echoBuilder', t => {
  const payload = echoBuilder({ message: 'These ones go to eleven' })
  // Snapshot testing will fail with properties that change, like dates, so we omit them
  const safeSnapPayload = omit(payload, 'date')

  t.snapshot(safeSnapPayload)
})
