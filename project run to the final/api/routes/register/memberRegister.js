const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Member = require('../../models/memberSchema');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');


router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const member = new Member({
            _id: new mongoose.Types.ObjectId,
            user_name: req.body.userName,
            mem_password: hash,
            mem_phone: req.body.phon,
            mem_first_name: req.body.firstName,
            mem_last_name: req.body.firstName,
            mem_age: req.body.age,
            mem_healthy_status: req.body.healthyStatus,
            mem_national_number: req.body.nationalNumber,
            mem_house_property: req.body.ownership,
            mem_house_ventilated: req.body.ventilated,
            mem_house_sunn: req.body.sunny,
            mem_work:req.body.work,
            mem_married:req.body.husbands
            //mem_father:req.body.father,
            //mem_mother:req.body.mother,
            //mem_child:req.body.chidren,
            //mem_overage:req.body.overages

        });

        member.save()
            .then(result => {
                const token = jwt.sign({
                    email: result.user_name,
                    phone: result.mem_phone
                }, "angol", {
                    expiresIn: '1h'
                })
                res.status(201).json({
                    _id: result._id,
                    token: token,
                    ok: true,
                    type: 'GET',
                    url: 'http://localhost:3000/member' + result._id
                })
            })
            .catch((err) => {
                res.status(500).json({
                    error: err,
                    ok: false
                })
            });
    })
});

module.exports = router;