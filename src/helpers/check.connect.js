const mongoose = require("mongoose");
const os =  require('os');
const process =  require('process');
const _SECOND = 3000;
const countConnect = ()=>{
    const numConnection = mongoose.connections.length
    console.log(`Number connection ${numConnection}`)
}


// check toàn bộ hệ thống có bao nhiêu truy cập để kiểm soát lưu lượng 
const checkoverload = ()=>{
    setInterval(()=>{
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnections = numCores *5;


        console.log("Action connections:", numConnection);
        console.log(`Memory use:${memoryUsage / 1024 / 1024} Mb`);

        if(numCores  > maxConnections){
            console.log("Connection overload detected");
        }   
    },_SECOND)//xem số liệu chi cập vào hệ thống
}



module.exports = {countConnect,checkoverload};
