const db = require("./conn");
const { STRING } = db.Sequelize;

const User = db.define("user", {
  name: STRING,
});

module.exports = User;
