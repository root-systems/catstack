import knex from 'knex'

import config from 'app/config'

export default knex(config.db)
