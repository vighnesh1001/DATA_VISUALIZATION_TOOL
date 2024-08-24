const express = require("express");
const app = express();
const path = require("path");
const multer = require('multer');
const csv = require('csv-parser')
const fs = require('fs');
const mongoose = require("mongoose")

const parser = require("./parser.js")

const hbs = require("hbs");
const { collection1 } = require("./mongodb");
const mongodb = require("mongodb")
const templatepath = path.join(__dirname, "../templates");


app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatepath);
app.use(express.urlencoded({ extended: true }));
app.use("/parser", parser)

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});
app.get("/", async (req, res) => {
    res.render("home");
})
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password

    };
    try {
        await collection1.insertMany([data]);
        res.render("home")

    }
    catch (error) {
        res.status(500).send("error during signup:" + error.message);
    }





});

app.post("/login", async (req, res) => {

    try {
        const check = await collection1.findOne({ name: req.body.name });
        if (check.password === req.body.password) {
            res.redirect("/");
        }
        else {
            res.send("wrong password");
        }


    }
    catch (error) {
        res.send("wrong details" + error.message);

    }
});









app.listen('3000' || process.env.PORT, err => {
    if (err)
        throw err
    console.log('Server started!')
});