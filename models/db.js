const Sequelize = require("sequelize");

//Connecting to MySQL DataBase
const sequelize = new Sequelize("postsapp", "root", "123456", {
  host: "localHost",
  dialect: "mysql",
  query: { raw: true },
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
