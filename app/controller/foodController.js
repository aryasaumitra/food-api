const path = require('path');
const FoodModel = require(path.join(__dirname,'../models/food'));

exports.findAll = (req,res)=>{

    FoodModel.find({}).then((foods)=>{
        res.status(200).send(foods)
    }).catch((err)=>{
        res.status(500).send(err)
    })

}

exports.findOne = (req,res)=>{

    FoodModel.findById(req.params.id)
    .then((food)=>{
        if(!food){
            res.status(404).send({'message':'Not Found'})
        }
        res.send(food)
    })
    .catch((err)=>{
        res.status(404).send(err)
    })
}

exports.create = (req,res)=>{

    const {name,calories} = req.body;

    const food = new FoodModel({name:name,calories:calories})

    food.save().then(
        (food)=>{
            res.status(201).send(food)
        }
    ).catch((err)=>{
        res.status(400).send(err)
    })
}

exports.update = (req,res)=>{
    FoodModel.findByIdAndUpdate(req.params.id,req.body)
    .then((food)=>{
        res.send(food);
    })
    .catch((err)=>{
        res.status(404).send('ID not Found')
    })
}

exports.delete = (req,res)=>{
    FoodModel.findByIdAndDelete(req.params.id)
    .then((food)=>{
        if(!food){
            res.status(404).send('Not Found')
        }
        res.send();
    })
    .catch((err)=>{
        res.status(404).send('ID not Found')
    })
}