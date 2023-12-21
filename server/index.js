const { sequelize } = require("./database/db");
const express = require("express");

//connect and sync db
sequelize
  .authenticate()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log("Connection failed", err));

sequelize.sync({ force: true }).then(() => console.log("db is ready"));

//start up express
const app = express();
app.use(express.json());
const port = 3000;

app.get("/bruh", (req, res) => {
  res.send("hi");
});
app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});
