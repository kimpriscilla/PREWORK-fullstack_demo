const db = require("./conn");
const User = require("./User");

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Promise.all([
    User.create({ name: "moe" }),
    User.create({ name: "larry" }),
    User.create({ name: "lucy" }),
  ]);
};

module.exports = {
  models: { User },
  syncAndSeed,
};
