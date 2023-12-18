const mongoose = require("mongoose");
const os =  require('os');
const process =  require('process');
const _SECOND = 3000;
const countConnect = ()=>{
    const numConnection = mongoose.connections.length
    console.log(`Number connection ${numConnection}`)
}

const checkoverload = ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnections = numCores *5;

        if(maxConnections >  40){
            console.log("Connection overload detected");
        }
    },_SECOND)//xem số liệu chi cập vào hệ thống
}



module.exports = {countConnect};
