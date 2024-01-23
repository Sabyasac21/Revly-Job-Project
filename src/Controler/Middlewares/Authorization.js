const jwt = require('jsonwebtoken');


module.exports = function(req, res, next){
    try {
        // console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1]
    console.log(token);
    const decoded = jwt.verify(token, process.env.jwt_secret)
    req.userId = decoded.userId
    // console.log(req.userId);
    next()
        
    } catch (error) {
        res.status(401).send({success:false, message: error.message, message2: "from middleware", message3: req.headers.authorization.split(' ')[1]})
        
    }
    
    
}