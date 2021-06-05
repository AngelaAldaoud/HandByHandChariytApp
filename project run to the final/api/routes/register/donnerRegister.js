const express = require('express');
const mongoose = require('mongoose');
const Donner = require('../../models/donnerSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const donner = new Donner({
            _id: new mongoose.Types.ObjectId(),
            donn_name: req.body.name,
            donn_pass: hash,
            donn_email: req.body.email,
            donn_phone: req.body.phone,
            donn_Permanence: req.body.Permanence
        });
        donner
            .save()
            .then(result => {
                const token = jwt.sign({
                    id: result._id,
                    email: result.charity_email,
                    phone: result.charity_phone
                }, 'angol', {
                    expiresIn: "1h"
                })
                res.status(201).json({
                    token: token,
                    _id: result._id,
                    type: 'GET',
                    url: 'http://localhost:3000/donner' + result._id
                })

            })
            .catch((err) => {
                res.status(500).json({
                    error: err
                })
            })
    });
});

module.exports = router;