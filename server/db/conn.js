const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/fullstack_demo_db"
);

module.exports = db;
