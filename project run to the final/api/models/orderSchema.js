const mongoose = require('mongoose');

const JoinToCharity = require('./joinMemberSchema'),

const orderSchema=mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    order_type : { type : String , required: true},
    amount : { type : String , required: true},
    join_member : {type : mongoose.Schema.Types.ObjectId , required :true , ref : 'JoinMember'},
    join_donner : {type : mongoose.Schema.Types.ObjectId , required :true , ref : 'JoinDonner'}
});
module.exports=mongoose.model('OrderSC',orderSchema);