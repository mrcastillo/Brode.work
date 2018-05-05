"use strict";

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "acastillo",
    password: "Appsteam3$"
});

connection.connect(function (err) {
    if (err) {
        console.error("Database Connection Error: \n" + err.stack);
        return;
    }

    console.log("Connected to Database as id: " + connection.threadId);
});

exports.default = connection;