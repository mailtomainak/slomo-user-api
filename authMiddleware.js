const decodeToken = require('./tokenDecoder');

module.exports = async function(req,res,next){
  const token = req.headers['x-slomo-auth'];
  try{
    const {sub} = await decodeToken(token);
    req.userId = sub;
    next();
  }
  catch (e) {
    res.status(403).send('Auth Error')
  }
}