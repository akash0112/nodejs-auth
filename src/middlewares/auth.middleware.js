const jwt = require('jsonwebtoken')

const authMiddleware=async(req,res,next)=>{
  const token = req.header('Authorization').split(" ")[2]

   if(!token)
   {
    return res.status(401).json({ message: 'Authentication failed: No token provided' });
   }
   jwt.verify(token,'your-secret-key',(err,user)=>{
    if(err)
    {
      return res.status(403).json({ message: 'Authentication failed: Invalid token' });
    }
    req.user = user
    next()
   })
}



module.exports = authMiddleware