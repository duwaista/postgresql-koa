const config = {
  development: {
    client: 'postgresql',
    connection: {
      host : '',
      database: '',
      user: '',
      password: ''
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' },
  },

  testing: {
    client: 'postgresql',
    connection: {
      host : '',
      database: '',
      user: '',
      password: ''
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' },
  },

  production: {
    client: 'postgresql',
    connection: {
      host : '',
      database: '',
      user: '',
      password: ''
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' },
  },
};

export default { ...config }