const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/HandByHand", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

const morgan = require('morgan');

const bodyParser = require('body-parser');

//register
const charityRouter = require('./api/routes/register/charityRegister');
const donnerRouter = require('./api/routes/register/donnerRegister');
const memberRouter = require('./api/routes/register/memberRegister');

//log in
const charityLogin = require('./api/routes/login/loginCharity');
const donnerLogin = require('./api/routes/login/loginDonner');
const memberLogin = require('./api/routes/login/loginMember');

//delete
const charityDelete = require('./api/routes/delete/charity');
const donnerDelete = require('./api/routes/delete/donner');
const memberDelete = require('./api/routes/delete/member');

//update
const charityUpdate = require('./api/routes/update/charity');

//get all profile information
const charityProfile = require('./api/routes/profile/charity');
const donnerProfile = require('./api/routes/profile/donner');
const memberProfile = require('./api/routes/profile/member');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('./uploads', express.static('./uploads'));

//signUp
app.use('/signup/charity', charityRouter);
app.use('/signup/donner', donnerRouter);
app.use('/signup/member', memberRouter);

//login
app.use('/login/charity', charityLogin);
app.use('/login/donner', donnerLogin);
app.use('/login/member', memberLogin);

//delete
app.use('/delete/charity', charityDelete);
app.use('/delete/donner', donnerDelete);
app.use('/delete/member', memberDelete);


//update
app.use('/update/charity', charityUpdate);


//get all  profile information
app.use('/profile/charity',charityProfile);
app.use('/profile/donner',donnerProfile);
app.use('/profile/member',memberProfile);


app.use((req, res, next) => {
    const error = new Error('Not found ');

    error.status = 404;
    next(error);
});

//handling all error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});
app.listen(3001);