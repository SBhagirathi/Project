const express = require('express');
const morgan = require('morgan');
const port  = 3000;
const app = express();
const {mongoose} = require('./config/db');
const {router} = require('./config/routes');

app.use(morgan('short'));
app.use(express.json());
app.use('/',router);

app.get('/',(req,res)=>{
    res.send({
        notice:'Welcome to Shopping Buggy'
    });
});

app.listen(port,()=>{
    console.log('listening on port',port);
});