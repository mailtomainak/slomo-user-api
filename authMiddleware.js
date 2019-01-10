const decodeToken = require('./tokenDecoder');
const config = require('./config');
module.exports = async function(req,res,next){
  const token = req.headers[config.AUTH_TOKEN_NAME];
  try{
    const {sub} = await decodeToken(token);    
    req.userId = sub;
    next();
  }
  catch (e) {  
    res.status(403).send(e)
  }
}