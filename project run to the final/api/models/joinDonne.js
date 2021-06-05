const mongoose = require('mongoose');


const joinDonner= mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    charity_id :{type : mongoose.Schema.Types.ObjectId ,ref :'CharitySC', require :true},
    donner_id :{type : mongoose.Schema.Types.ObjectId ,ref :'DonnerSC' , require :true},
    conform :{type : Boolean , default :false},
});
module.exports=mongoose.model('JoinDonner',joinDonner);