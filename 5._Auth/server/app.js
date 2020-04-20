const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Setup the database */

const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require("./knexfile.js");

const knex = Knex(knexFile.development);

// Give the knex instance to objection.
Model.knex(knex);

// Limit the amount of requests on the auth routes
const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 4 // limit each IP to 4 requests per windowMs
});

app.use("/users/login", authLimiter);
app.use("/users/register", authLimiter);


/* Set up routes with our server instance */
const playgroundRoute = require("./routes/playground.js");
const usersRoute = require("./routes/users.js");

// only use the custom middleware for the secondpath route
// app.use(playgroundRoute);
app.use(usersRoute);


/* Start the server */

const port = process.env.PORT || 9090;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error running Express");
    }
    console.log("Server is running on port", server.address().port);    
});
