const Pool = require("pg").Pool;
const creds = require('./credentials.json')
const pool = new Pool(creds)
module.exports = pool