const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

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

/* CRUD API */

let cars = [{ id: 1, type: "SUV" }, { id: 2, brand: "Volvo" }, { id: 3 }];
let currentId = 3;

app.get("/cars", (req, res) => {
    return res.send({ response: cars });
});

app.get("/cars/:id", (req, res) => {
    const foundCar = cars.find(car => car.id === Number(req.params.id));
    return res.send({ response: foundCar });
});

app.post("/cars/", (req, res) => {
    const newCar = req.body;
    newCar.id = ++currentId;
    cars.push(newCar);
    return res.send({ response: newCar });
});

app.put("/cars/:id", (req, res) => {
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    const newCar = { ...cars[foundIndex], ...req.body };
    cars[foundIndex] = newCar;

    return res.send({ response: newCar });
});

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({ response: cars });
});

app.listen(9090, (error) => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("The server is running on port", 9090);
});
