import app from './server'
import http from 'http'
import {PORT} from './config.private'

const server = http.createServer(app)

let currentApp = app

server.listen(PORT, error => {
  if (error) {
    console.log(error)
  }

  console.log('🚀 started')
})

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!')

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...')
    server.removeListener('request', currentApp)
    const newApp = require('./server').default

    server.on('request', newApp)
    currentApp = newApp
  })
}
