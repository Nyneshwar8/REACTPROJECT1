const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 8080;
app.use(cors());
app.use(bodyparser.json());


app.get("/greet", (req, res) => {
  res.send("Hello Surekha!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);
  
  const email = req.body.email;
  const password = req.body.password;

  if (email === "rao@baapcompany.com" && password === "India") {
    res.json({
      success: true,
      message: "Login Successful",
    });
  } else {
    res.json({ success: false, message: "Login unsuccessful" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});