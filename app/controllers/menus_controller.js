const express = require('express');
const router = express.Router();
const {Menu} = require('../models/menu');

router.get('/',(req,res)=>{
    Menu.find().then((menus)=>{
        res.send(menus);
    }).catch((err)=>{
        res.send(err);
    });
});

router.post('/',(req,res)=>{
    let body = req.body;
    let menu = new Menu(body);
    menu.save().then((menu)=>{
        res.send(menu);
    }).catch((err)=>{
        res.send(err);
    });
});

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    Menu.findByIdAndUpdate(id,{$set:body},{new:true,runValidators:true}).then((menu)=>{
        res.send(menu);
    }).catch((err)=>{
        res.send(err);
    });
});

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Menu.findByIdAndRemove(id).then((menu)=>{
        res.send(menu);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = {
    menusController:router
}