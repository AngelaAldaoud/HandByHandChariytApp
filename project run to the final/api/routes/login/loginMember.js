const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Member = require('../../models/memberSchema');

router.post('/', (req, res, next) => {
    Member.find({ user_name: req.body.name })
        .exec()
        .then(member => {
            if (member.length < 1) {
                return res.status(401).json({
                    message: "Auth Failed"
                });
            }
            bcrypt.compare(req.body.password, member[0].mem_password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth Failed"
                    });

                }
                if (result) {
                    const token = jwt.sign({
                        userName: result.user_name,
                        id: result._id,
                        phon: result.mem_phone
                    }, 'angol', {
                        expiresIn: '1h'
                    });
                    return res.status(200).json({
                        token: token,
                        id: result._id,
                        message: "Auth Successful"
                    });
                }
                return res.status(401).json({
                    message: "Auth Failed"
                });

            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        })
});

module.exports = router;