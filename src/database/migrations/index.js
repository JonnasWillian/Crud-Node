const Sequelie = require("sequelize");
const configDB = require("../config/database");

const connection = new Sequelie(configDB)

module.exports = connection