const express = require('express');
const router = express.Router();

const Donner  =require('../../models/donnerSchema');

router.get('/:donnerId',(req,res,next) => {
    const id= req.params.donnreId;
    Donner.find({_id : id})
    .exec()
    .then( result =>{
        if(result){
            return res.status(200).json({
                donner: result
            });
        }
        return res.status(404).json({
            messae :"Not valied entry of provide donner"
        });
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;