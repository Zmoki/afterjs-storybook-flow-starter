const winston = require('winston')
const SignaleTransport = require('signale-transport')

const createLogger = (level) =>
  winston.createLogger({
    level,
    transports: [new SignaleTransport()],
  })

module.exports = createLogger
