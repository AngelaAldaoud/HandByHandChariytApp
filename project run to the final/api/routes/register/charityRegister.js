const express = require('express');

const mongoose = require('mongoose');

const Charity = require('../../models/charitySchema');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, new Error('The extention is not available '))
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 8
    }
});


const route = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

route.post('/', upload.single('logo'), (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const hashing = this.ha
        const charityInfo = new Charity({
            _id: new mongoose.Types.ObjectId(),
            charity_name: req.body.name,
            charity_pass: hash,
            charity_email: req.body.email,
            charity_phone: req.body.phone,
            publication_number: req.body.publicationNumber,
            publication_date: req.body.publicationDate,
            established_date: req.body.establishmentDate,
            charity_location:req.body.charityInfo,
            bank_account: req.body.bankNumber,
            logo: req.file.path
        })
        charityInfo.charity_location={};
        charityInfo.charity_location.city=req.body.city;
        charityInfo.charity_location.street=req.body.street;
        charityInfo.charity_location.note=req.body.note;

        charityInfo
            .save()
            .then(result => {
                const token = jwt.sign({
                    email: result.charity_email,
                    phone: result.charity_phone
                }, 'angol', {
                    expiresIn: '1h'
                })
                res.status(201).json({
                    token: token,
                    id: result._id,
                    type: 'GET',
                    url: 'http://localhost:3000/charity' + result._id
                })
            })
            .catch((err) => {
                res.status(500).json({
                    error: err
                });
            });
    })
});


module.exports = route;