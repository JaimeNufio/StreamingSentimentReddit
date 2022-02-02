// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {kneSnakeCaseMappers} = require('objection')

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'reddit',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory: './seeds'
    },
    ...kneSnakeCaseMappers,
  },
};
