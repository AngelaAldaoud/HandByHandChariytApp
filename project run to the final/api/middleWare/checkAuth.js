const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    try{
        const token = req.headers.authentication.split(" ")[1];
        const decode = jwt.verify(token,"HandByHand");
        res.userData = decoded;
        next();
    }
    catch{
        res.status(401).json({
            message : "Auth failed"
        })
    }
}