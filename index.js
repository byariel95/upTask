const express = require('express');
const indexRoutes = require('./src/routes/index');
const app = express();


app.use('/',indexRoutes) ;

async function main(){
    await app.listen(4500);
    console.log('Server on port', 4500);   
 };

 main();