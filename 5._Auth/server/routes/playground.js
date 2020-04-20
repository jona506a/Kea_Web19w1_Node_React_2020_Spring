const router = require('express').Router(); 

// custom middleware that prints out a timestamp
router.use((req, res, next) => {
    console.log("Timestamp", new Date());
    next();
    //res.redirect("/secondpath");
    //return res.send({ response: "first path" });
});


router.get("/secondpath", (req, res) => {
    console.log("Hit the second path");
    return res.send({ response: "second path" });
});


module.exports = router;