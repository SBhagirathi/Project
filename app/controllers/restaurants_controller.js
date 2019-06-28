const express = require('express');
const router = express.Router();
const {Restaurant} = require('../models/restaurant');

//to get all the restaurants
router.get('/',(req,res)=>{
    Restaurant.find().populate('categories').then((restaurants)=>{
        res.send(restaurants);
    }).catch((err)=>{
        res.send(err);
    });
});

//to get single restaurant
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    Restaurant.findById(id).then((restaurant)=>{
        res.send(restaurant);
    }).catch((err)=>{
        res.send(err);
    });
});

//to post new restaurants
router.post('/',(req,res)=>{
    let body = req.body;
    let restaurant = new Restaurant(body);
    restaurant.save().then((restaurant)=>{
        res.send({
            restaurant,
            notice:'successfully created restaurant'
        })
    }).catch((err)=>{
        res.send(err)
    });
});

//to put the same restaurants
router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    Restaurant.findByIdAndUpdate(id,{$set:body},{new:true,runValidators:true}).then((restaurant)=>{
        res.send(restaurant);
    }).catch((err)=>{
        res.send(err);
    });
});

//to delete an restaurants
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Restaurant.findByIdAndRemove(id).then((restaurant)=>{
        res.send({restaurant,msge:'Successfully deleted'});
        }).catch((err)=>{
            res.send(err);
    });
});

module.exports = {
    restaurantsController:router
} 