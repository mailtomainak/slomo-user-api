const jwt = require('jsonwebtoken');
const config = require('./config');

function  decodeToken(token){
let decoderPromise = new Promise((resolve,reject)=>{
    jwt.verify(token,config.TOKEN_SECRET,function(err,decoded){
        if(err){
            reject(err);
        }
        else{
            resolve(decoded);
        }
    })
})

return decoderPromise;
}


module.exports = decodeToken;