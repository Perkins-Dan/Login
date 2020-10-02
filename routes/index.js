const router = require("express").Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/register", (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  var newUser = new User();
  newUser.username = username;
  newUser.email = email;
  newUser.password = password;
  newUser.save(function (err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    return res.status(200).send();
  });
});

module.exports = router;
