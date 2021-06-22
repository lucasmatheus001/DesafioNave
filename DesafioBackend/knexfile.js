require('dotenv').config();


// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: __dirname+'/src/database/migrations'
    },
    seeds: {
      directory: __dirname+'/src/database/seeds/development'
    }
  },

};
