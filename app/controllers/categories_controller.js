const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Category} = require('../models/category');


router.get('/',(req,res)=>{
    Category.find().then((categories)=>{
        res.send(categories);
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/',(req,res)=>{
    let body = req.body;
    let category = new Category(body);
    category.save().then((category)=>{
        res.send(category);
    }).catch((err)=>{
        res.send(err);
    });
});

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let body = _.pick(req.body,['name']);
    Category.findByIdAndUpdate(id,{$set:body},{new:true,runValidators:true}).then((category)=>{
        res.send(category);
    }).catch((err)=>{
        res.send(err);
    });
});

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Category.findByIdAndRemove(id).then((category)=>{
        res.send(category);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = {
    categoriesController:router
}