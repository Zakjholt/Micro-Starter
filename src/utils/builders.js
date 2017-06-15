const statusBuilder = () => {
  return {
    status: 'healthy'
  }
}

const echoBuilder = ({ message }) => {
  return {
    message,
    date: 'Today is ' + new Date().toDateString()
  }
}

module.exports = {
  statusBuilder,
  echoBuilder
}
