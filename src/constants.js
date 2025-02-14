require("dotenv").config();

const DB_CREDENTIALS = {
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    dbname: process.env.DABASE_NAME,
    password: process.env.PASSWORD_DB
}

module.exports = DB_CREDENTIALS;
