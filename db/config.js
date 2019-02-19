const {
  NODE_ENV,
  DATABASE_URL: connection,
} = require('../env')
const log = require('../log')

const client = 'postgresql'
const pool = {
  min: 2,
  max: 10,
}
const migrations = {
  users: 'users',
  workouts: 'workouts',
  movements: 'movements',
  muscles: 'muscles',
  equipment: 'equipment',
}
const config = {
  pool,
  client,
  migrations,
  connection,
  // debug: true,
  asyncStackTraces: true,
  seeds: {
    directory: './seeds/',
  },
}

const configs = {
  env: NODE_ENV,
  staging: config,
  production: config,
  development: config,
  test: config,
}
configs.chosen = configs[NODE_ENV]
log.db(configs.chosen)
module.exports = configs
