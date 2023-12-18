const app = require('./src/app');
const port  = 3000;
const server =app.listen(port,()=>{
    console.log(`welcome to my server ${port}`);
})



process.on("SIGINT",()=>{
    server.close(()=>console.log("exit my server express"));
})



