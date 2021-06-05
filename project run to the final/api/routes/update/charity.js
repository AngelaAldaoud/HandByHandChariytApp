const express =require('express');
const router = express.Router();

const CharitySC = require("../../models/charitySchema");

var jsonParser = bodyParser.json()

router.patch('/:charityId',jsonParser,(req,res,next) => {
    const id= req.params.charityId;
    const updateOps ={};
    console.log(req.body);
    const bod = req.body;
    bod.forEach(function (item){
        updateOps[ops.propName] = ops.value;
    });
    CharitySC.update({_id : id},{ $set : updateOps})
    .exec()
    .then(result => {
        res.status(200).json({
            message :"updated"
        })
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;