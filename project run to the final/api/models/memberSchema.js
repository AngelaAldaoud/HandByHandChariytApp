const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    work_type: { type: String },
    work_salary: { type: String }
});

const subSchema = new mongoose.Schema({
    name: { type: String },
    work: {
        type : workSchema
    },
    healthy_status: { type: String }
})

const sub2Schema = new mongoose.Schema({
    name: { type: String },
    age:String,
    work: {
        type : workSchema
    },
    healthy_status: { type: String }
})
const memberSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_name: { type: String, required: true },
    mem_password: { type: String, required: true },
    mem_phone: { type: String, required: true, unique: true },
    mem_first_name: { type: String, required: true },
    mem_last_name: { type: String, required: true },
    mem_age: { type: Number, required: true },
    mem_healthy_status: { type: String, required: true },
    mem_work: {
        type: workSchema
    },
    mem_national_number: { type: String, required: true, unique: true },
    mem_married: [
        subSchema
    ],
    mem_father: {
        subSchema
    },
    mem_mother: {
        type:subSchema
    },
    mem_overage: {
        type:Map,
        of :{
            _id: mongoose.Schema.Types.ObjectId,
            name: { type: String },
            old: { type: String },
            age:String,
            work: {
                type : workSchema
            },
            healthy_status: { type: String }
        }
    },
    mem_child: {
        type:Map,
        of :{
            _id: mongoose.Schema.Types.ObjectId,
            name: { type: String },
            age:String,
            work: {
                type : workSchema
            },
            healthy_status: { type: String }
        }
    },

    mem_house_property: { type: Boolean, required: true },
    mem_house_ventilated: { type: Boolean, required: true },
    mem_house_sunn: { type: Boolean, required: true }
});


module.exports = mongoose.model('Member', memberSchema)