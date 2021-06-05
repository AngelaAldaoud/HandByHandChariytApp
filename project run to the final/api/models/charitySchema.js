const mongoose = require('mongoose');


const subSchema = new mongoose.Schema({
    // some schema definition here
    city:{type:String},
    street:{type:String},
    note:{type:String}
  });


const charitySchema = mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    charity_name :{ type : String , required: true},
    charity_pass :{ type : String , required: true},
    charity_email :{ type : String , required: true, unique: true},
    charity_phone :  { type : String , required: true, unique: true},
    charity_location :{
        type: subSchema,
    },
    publication_number:{ type : String , required: true},
    publication_date :{type:String , required:true},
    established_date:{type:String , required:true},
    bank_account:{ type : String , required: true, unique: true},
    logo:{ type : String , required: true, unique: true}
});
module.exports=mongoose.model('CharitySC',charitySchema);