// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: __dirname+'/src/database/migrations'
    },
    seeds: {
      directory: __dirname+'/src/database/seeds/development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
