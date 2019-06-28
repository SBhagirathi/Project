const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartItemSchema = new Schema({
    menu:{
        type:Schema.Types.ObjectId,
        ref:'Menu',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    }
});

const CartItem = mongoose.model('CartItem',cartItemSchema);
module.exports={
    CartItem,
    cartItemSchema
}