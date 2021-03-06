import http from "http";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import cors from "cors";

import AppRouter from "../lib/router";
import { connect } from "../lib/db";

//file storage config
const storageDir = path.join(__dirname, "..", "storage");

const storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, storageDir);
    },
    filename: function filename(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({ storage: storage });

const PORT = 8080;
const app = express();
app.server = http.createServer(app);

app.use(morgan("dev"));

app.use(cors({
    exposedHeaders: "*"
}));

app.use(bodyParser.json({
    limit: "50mb"
}));

app.set("root", __dirname);
app.set("storageDir", storageDir);

connect((connection) => {
    //Sets the database in our application, we initialize our router with (app) so that we can acccess this.
    //app.db = connection;
    app.set("db", connection);

    //init router
    new AppRouter(app);

    app.server.listen(process.env.PORT || PORT, function () {
        console.log("App is running on port " + app.server.address().port);
        console.log(`Database has started`);
    });
})