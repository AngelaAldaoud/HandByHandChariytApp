const mongoose =require('mongoose');

const donnerSchema = mongoose.Schema({
    _id  :mongoose.Schema.Types.ObjectId,
    donn_name : {type : String , required : true},
    donn_pass : {type : String , required : true},
    donn_email :  {type : String , required : true},
    donn_phone :  {type : String , required : true},
    donn_Permanence  : {type: Boolean , required : true}
});

module.exports= mongoose.model('Donner',donnerSchema);