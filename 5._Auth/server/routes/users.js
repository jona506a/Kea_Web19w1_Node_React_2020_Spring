const router = require("express").Router();

const User = require("../models/User");

router.post("/users/login", (req, res) => {
    if (req.body.username && req.body.password) {
        return res.send({ message: "username and password has been defined" });        
    }
    return res.send({ message: "Missing username or password" });
});


// users/register


module.exports = router;
