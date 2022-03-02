const express = require("express");
const path = require('path');
const foodController = require(path.join(__dirname,'../controller/foodController'));
const app = express()

//reading all foods
app.get("/foods",foodController.findAll);

//create a new food
app.post("/food",foodController.create)

//find by ID
app.get('/food/:id',foodController.findOne)

//update existing food
app.patch("/food/:id",foodController.update)

//delete
app.delete("/food/:id",foodController.delete)

module.exports = app;