const mongoose= require('mongoose');

joinSc=mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    charity_id : {type : mongoose.Schema.ObjectId, ref :'CharitySC' , require : true},
    member_id : {type : mongoose.Schema.ObjectId , ref :'MemberSC', require : true},
    conform : {type : Boolean , default: false},
});
module.exports=mongoose.model('JoinMember',joinSc);
