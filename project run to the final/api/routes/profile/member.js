const express = require('express');
const router = express.Router();

const Memebr  =require('../../models/memberSchema');

router.get('/:memberId',(req,res,next) => {
    const id= req.params.memberId;
    Memebr.find({_id : id})
    .exec()
    .then( result =>{
        if(result){
            return res.status(200).json({
                member: result
            });
        }
        return res.status(404).json({
            messae :"Not valied entry of provide memeber"
        });
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;