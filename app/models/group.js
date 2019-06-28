const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const {cartItemSchema} = require('./cart_item');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
    participants:[{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }],
    tokens : [{
        access : {
            type :String,
            required : true
        },
        token : {
            type : String,
            required : true
        }
    }],
    restaurant:{
        type:Schema.Types.ObjectId,
        ref:'Restaurant',
        required:true
    },
    cartItems:[cartItemSchema]
});

const Group = mongoose.model('Group',groupSchema);
module.exports = {
    groupSchema
}