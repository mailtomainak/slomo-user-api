const enableCors = (req,res,next)=>{

    //temporarily  allowed . TODO change Origin
    res.header("Access-Control-Allow-Origin", "http://sincere-name.surge.sh");
    res.header("Access-Control-Allow-Headers", "x-slomo-auth");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if(req.method==='OPTIONS'){
        res.sendStatus(200);
    }
    else{
        next();
    }
}

module.exports = enableCors;

