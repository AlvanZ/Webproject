const { verify } = require("./google_auth");
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

app.get("/verify", async (req, res) => {
  let token = req.query.token;
  let payload = await verify(token);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(payload);
});

app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});
