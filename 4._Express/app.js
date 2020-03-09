const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send({ status: "The API is up and running" });
});

app.get("/pathvariable/:customvalue/:multiple", (req, res) => {
    console.log(req.params);
    return res.send({ });
});

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday"];

app.get("/time", (req, res) => {
    const date = new Date();
    const localeTime = date.toLocaleTimeString();
    return res.send({ 
        time: date.getHours() + ":" + date.getMinutes(),
        timeVersionTwo: localeTime,
        weekday: weekdays[date.getDay()],
        weekdayVersionTwo: date.toLocaleDateString("en-us", { weekday: "long" })
    });
});

app.get("/search", (req, res) => {
    console.log(req.query);
    return res.send({ });
});

app.listen(9090, (error) => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("The server is running on port", 9090);
});
