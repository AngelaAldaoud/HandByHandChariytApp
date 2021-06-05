const express = require('express');
const router = express.Router();

const Member = require('../../models/memberSchema');

router.delete('/:memberId',(req,res,next) => {
    const id= req.params.memberId;
    Member.remove({_id : id })
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