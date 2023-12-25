const jwt = require('jsonwebtoken');
require('dotenv').config()
function adminMiddleware(req, res, next) {
  
    let token = req.headers.authorization;
    try{
        jwt.verify(token, process.env.jwtPassword);
        next();
      } catch (err){
        res.status(404).json({
            message: "Invalid token"
        })
      }
}

module.exports = adminMiddleware;