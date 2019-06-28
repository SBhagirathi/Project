const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    status:{
        type:String,
        enum:['confirm','cancel'],
        default:'confirm'
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    orderTime:{
        type:TimeRanges,
        required:true,
        default:true
    },
    orderNumber:{
        type:Number,
        required:true,
        unique:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderItems:[{
        menu:{
            type:Schema.Types.ObjectId,
            ref:'Menu',
            required:true
        },
        quantity:{
            type:Number,
            min:1
        },
        price:{
            type:Number,
            min:1
        }
    }]
});

const Order = mongoose.model('Order',orderSchema);

module.exports = {
    Order
}