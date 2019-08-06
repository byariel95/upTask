const app = require('./src/app');

async function main(){
    await app.listen(4500);
    console.log('Server on port', 4500);   
 };

 main();