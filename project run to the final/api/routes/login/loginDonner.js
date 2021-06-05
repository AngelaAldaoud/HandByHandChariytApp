const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const Donner = require('../../models/donnerSchema');

router.post('/',(req,res,next) => {
    Donner.find({ donn_email : req.body.email})
    .exec()
    .then(donner => {
        console.log(donner);
        if(donner.length < 1){
            return res.status(401).json({
                message: "Auth failed"
            });
        }
            bcrypt.compare(req.body.password , donner[0].donn_pass, (err,result)=> {
                if(err){
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if(result){
                    const token = jwt.sign({
                        _id : result._id,
                        email : result.donn_email,
                        userName : result.donn_name
                    },'angol',{
                        expiresIn :'1h'
                    });
                    return res.status(200).json({
                        token:token,
                        id : result._id,
                        message : 'Auth successful'
                    });
                }
                return res.status(401).json({
                    message: "Auth falied"
                });
            })
    })
    .catch((err) => {
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;