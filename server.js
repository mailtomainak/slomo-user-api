var express = require('express');
const config = require('./config');
const authMiddleWare =require('./authMiddleware');
const userRouter = require('./userRouter');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const enableCors = require('./corsMiddleWare');
const subscribe = require('./newRegistrationQueueSubscriber');
const logglyConfig = require('./loggly-config');
const expressWinston = require('express-winston');
const server = express();
const winston = require('winston');
const {Loggly} = require('winston-loggly-bulk');

server.use(bodyParser.json());
server.use(enableCors);
server.use(authMiddleWare);
server.use(expressWinston.logger({
        transports:[
                new winston.transports.Loggly(logglyConfig)
        ]
}));
server.use('/user',userRouter);

server.listen(config.PORT,()=>(   
        mongoose.connect(config.MONGO_URL)
        .then(()=>{subscribe()})
        .catch((e)=>{throw e})
))