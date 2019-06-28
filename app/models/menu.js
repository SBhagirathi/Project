const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const menuSchema = new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    items:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingrediants:{
        type:String,
        required:true
    },
    restaurants:{
        type:Schema.Types.ObjectId,
        ref:'Restaurant',
        required:true
    }
});

const Menu = mongoose.model('Menu',menuSchema);

module.exports = {
    Menu
}