const express = require('express');
const router = express.Router();

const CharitySC  =require('../../models/charitySchema');

router.get('/:charityId',(req,res,next) => {
    const id= req.params.charityId;
    CharitySC.find({_id : id})
    .exec()
    .then( result =>{
        if(result){
            return res.status(200).json({
                charity: result
            });
        }
        return res.status(404).json({
            messae :"Not valied entry of provide charity"
        });
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;