const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/db.js");
const User = require("./model/user.model.js");

const app = express();

app.use(express.json());
app.use(cors());
dbConnect();

app.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log("Data not inserted try again", error);
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  });

  if (user) {
    res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});

app.get("/register", (req, res) => {
  res.send("Your data is safe with us");
});
app.listen(1337, () => console.log("Server is running 1337"));
