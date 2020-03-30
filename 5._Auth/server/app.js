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

/* Set up routes with our server instance */
const usersRoute = require("./routes/users.js");

app.use(usersRoute);


/* Start the server */

const port = process.env.PORT || 9090;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error running Express");
    }
    console.log("Server is running on port", server.address().port);    
});
