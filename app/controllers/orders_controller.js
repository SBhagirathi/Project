const express = require('express');
const router = express();
const _ = require('lodash');
const {Order} = require('../models/order');

router.get('/',(req,res)=>{
    Order.find().then((orders)=>{
        res.send(orders);
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/',(req,res)=>{
    let user = req.locals.user;
    let order = new Order();
    order.user = user._id;
    order.save().then((order)=>{
        res.send(order);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = {
    ordersController:router
}