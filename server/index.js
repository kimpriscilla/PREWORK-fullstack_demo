const express = require("express");
const {
  syncAndSeed,
  models: { User },
} = require("./db");
const { static } = express;
const path = require("path");

const app = express();

app.use("/dist", static(path.join(__dirname, "../dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "../index.html"))
);

app.get("/api/users", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
