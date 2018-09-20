const fs = require('fs')
const path = require('path')
const logger = require('../utils/create-logger')('info')
const defaultConfig = require('../configs/config')

const LOCAL_CONFIG_PATH = path.join(process.cwd(), 'configs', 'config.local.js')

const PRIVATE_CONFIG_PATH = path.join(process.cwd(), 'src', 'config.private.json')
const PUBLIC_CONFIG_PATH = path.join(process.cwd(), 'src', 'config.public.json')

let config

if (fs.existsSync(LOCAL_CONFIG_PATH)) {
  const localConfig = require(LOCAL_CONFIG_PATH)

  config = {
    private: {
      ...defaultConfig.private,
      ...localConfig.private,
    },
    public: {
      ...defaultConfig.public,
      ...localConfig.public,
    },
  }
}
else {
  config = {...defaultConfig}
}

fs.writeFileSync(PRIVATE_CONFIG_PATH, JSON.stringify(config.private))

logger.info('Private config file created.')

fs.writeFileSync(PUBLIC_CONFIG_PATH, JSON.stringify(config.public))

logger.info('Public config file created.')
