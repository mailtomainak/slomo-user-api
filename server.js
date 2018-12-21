var express = require('express');
const config = require('./config');
const authMiddleWare =require('./authMiddleware');
const userRouter = require('./userRouter');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const enableCors = require('./corsMiddleWare');

const server = express();
server.use(bodyParser.json());
server.use(enableCors);
server.use(authMiddleWare);
server.use('/user',userRouter);

server.listen(config.PORT,()=>(   
        mongoose.connect(config.MONGO_URL)   
))