const express = require('express');
const router = express.Router();


const CharitySC = require('../../models/charitySchema');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

router.post('/', (req, res, next) => {
    CharitySC.find({ charity_email: req.body.email })
        .exec()
        
        .then(charity => {
            if (charity.length < 1) {
                return res.status(401).json({
                    message: "Auth Failed"
                });
            }
            bcrypt.compare(req.body.password, charity[0].charity_pass, (err, result) => {
                console.log(result);
                if (err) {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    });
                }
                if(result){
                    const token = jwt.sign({
                        _id:result._id,
                        email: result.charity_email,
                        userName: result.charity_name
                    }, 'angol', {
                        expiresIn: '1h'
                    })
                    return res.status(200).json({
                        token: token,
                        id: result._id,
                        message: 'Auth Successful'
                    })
                }

                return res.status(401).json({
                    message: 'Auth failed'
                });
            });

        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;