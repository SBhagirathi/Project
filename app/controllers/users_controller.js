const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {User} = require('../models/user');

router.get('/',(req,res)=>{
    User.find().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/',(req,res)=>{
    let body = _.pick(req.body,['name','email','password']);
    let user = new User(body);
    user.save().then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err);
    });
});

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    User.findByIdAndUpdate(id,{$set:body},{new:true,runValidators:true}).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err);
    });
});

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    User.findByIdAndRemove(id).then((user)=>{
        res.send(user);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = {
    usersController:router
}