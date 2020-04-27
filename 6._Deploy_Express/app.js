const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/staticallyservedhtml.html");
});

/* const fs = require('fs');

const ssrPage = fs.readFileSync("public/ssrhtml.html", "utf8");

app.get("/ssr", (req, res) => {
    return res.send(ssrPage);
}); */


app.listen(80, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on port", 80);
});
