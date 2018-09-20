import app from './server'
import http from 'http'
import createLogger from '../utils/create-logger'
import {PORT} from './config.private'
import {LOG_LEVEL} from './config.public'

const logger = createLogger(LOG_LEVEL)
const server = http.createServer(app)

let currentApp = app

server.listen(PORT, error => {
  if (error) {
    logger.error(error)
  }

  logger.info(`🚀 started on ${PORT} port`)
})

if (module.hot) {
  logger.info('✅  Server-side HMR Enabled!')

  module.hot.accept('./server', () => {
    logger.log('🔁  HMR Reloading `./server`...')
    server.removeListener('request', currentApp)
    const newApp = require('./server').default

    server.on('request', newApp)
    currentApp = newApp
  })
}
