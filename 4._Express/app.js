const express = require("express");
const app = express();
// const app = require("express")();

app.get("/", (req, res) => {
    return res.send({ message: "response is here" });
});

app.get("/aboutme", (req, res) => {
    return res.send({ name: "Anders" });
});

app.listen(8080);
