const express = require('express');
const router = express.Router();

const CharitySC = require('../../models/charitySchema');

router.delete('/:charityId',(req,res,next) => {
    const id= req.params.charityId;
    CharitySC.remove({_id : id })
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