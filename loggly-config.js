// const winston = require('winston');
// const {Loggly} = require('winston-loggly-bulk');
// var expressWinston = require('express-winston');

const {LOGGLY_SUBDOMAIN,LOGGLY_TOKEN}  = require('./config');
const winstonConfig ={
    subdomain: LOGGLY_SUBDOMAIN,
    inputToken: LOGGLY_TOKEN,
    json: true,
    tags: ["slomo-user-api"]
}

module.exports =winstonConfig ;