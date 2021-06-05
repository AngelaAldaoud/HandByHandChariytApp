const express = require('express');
const router = express.Router();

const Donner = require('../../models/donnerSchema');

router.delete('/:donnerId',(req,res,next) => {
    const id= req.params.donnerId;
    Donner.remove({_id : id })
    .exec()
    .then(result =>{
        res.status(200).json({
            message:'deleted'
        })
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;