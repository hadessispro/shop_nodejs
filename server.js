const app = require('./src/app');
const process = require('process')
const port  = process.env.PORT || 3055;
const server =app.listen(port,()=>{
    console.log(`welcome to my server ${port}`);
})



process.on("SIGINT",()=>{
    server.close(()=>console.log("exit my server express"));
})



