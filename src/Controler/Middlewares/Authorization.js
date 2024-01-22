const jwt = require('jsonwebtoken');


module.exports = function(req, res, next){
    try {
    const token = req.headers.authorization
    const decoded = jwt.verify(token, process.env.jwt_secret)
    console.log(token);
    req.body.userId = decoded.userId
    next()
        
    } catch (error) {
        res.status(401).send({success:false, message: error.message, message2: "from middleware", message3: req.headers.authorization.split(' ')[1]})
        
    }
    
    
}