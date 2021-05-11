// uma forma de enviar dados para db 
const {Pool} = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "1",
    host: "localhost",
    port: 5432,
    database: "gugadb"
})