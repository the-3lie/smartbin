//connexion avec postgra

const {pool}= require('pg');
require('dotenv').config;

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl:{   
        rejectUnauthorized : false /// très importante
    }
})

module.exports = pool;