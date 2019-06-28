const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { CartItem } = require('../models/cart_item');
const {Group} = require('../models/group');

router.get('/',(req,res)=>{
    let group = req.locals.group;//reference to the user object
    res.send(group.cartItems);
});

router.post('/',(req,res)=>{
    let group = req.locals.group;
    let body = _.pick(req.body,['quantity','menu']);
    let cartItem = new CartItem(body);
    group.save().then((group)=>{
        res.send({
            cartItem
        })
    }).catch((err)=>{
        res.send(err);
    });
});

// router.post('/', authenticateUser, (req, res) => {
//     let user = req.locals.user; 
//     let body = _.pick(req.body, ['product', 'quantity']);
//     let cartItem = new CartItem(body); 
//     let item = user.cartItems.find(function(item){
//         return item.product.equals(body.product)
//     });
//     if(item){
//         item.quantity += body.quantity
//     } else {
//         user.cartItems.push(cartItem);
//     }
//     user.save().then((user) => {
//         res.send(cartItem);
//     })
// });


router.put('/:id',(req, res) => {
    let id = req.params.id;
    let group = req.locals.group; 
    let body = _.pick(req.body, ['quantity']);
    let inCart = group.cartItems.id(id); 
    if(inCart) {
        Object.assign(inCart, body); 
    }
    group.save().then((group) => {
        res.send({
            cartItem: inCart, 
            notice: 'successfully updated the cart'
        });
    });
});

// router.delete('/:id', validateId, authenticateUser, (req,res) => {
//     let user = req.locals.user; 
//     let id = req.params.id; 
//     user.cartItems.id(id).remove();
//     user.save().then((user) => {
//         res.send({
//             cartItems: user.cartItems,
//             notice: 'successfully remove the product from cart'
//         });
//     });
// });

router.delete('/empty',(req,res)=>{
    let group = req.locals.group;
    // let id = req.params.id;
    Group.findByIdAndUpdate({_id:group._id},{$set:{cartItems:[]}},{new:true}).then((cartItems)=>{
        // console.log(user);
         res.send(cartItems);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = {
    cartItemsController: router
}
