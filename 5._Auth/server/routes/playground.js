const router = require('express').Router(); 

// custom middleware that prints out a timestamp
router.use((req, res, next) => {
    console.log("Timestamp", new Date());
    next();
    //res.redirect("/secondpath");
    //return res.send({ response: "first path" });
});


router.get("/secondpath", (req, res, next) => {
    console.log("Hit the second path - for the first time");
    next();
});

router.get("/secondpath", (req, res) => {
    console.log("Hit the second path - for the second time");
    return res.send({ response: "second path" });
});


module.exports = router;