//lv1

const dev = {
    app:{
        port:process.env.PORT
    },
    db:{
        host:'127.0.0.1',
        port:27017,
        name:'list_database_academy'
    }

}
const pro = {
    app:{
        port:3000
    },
    db:{
        host:'localhost',
        port:27017,
        name:'list_database_academy'
    }

}
const business = {
    app:{
        port:3000
    },
    db:{
        host:'localhost',
        port:27017,
        name:'list_database_academy'
    }

}
const config = {dev,pro}
const env =  process.env.NODE_ENV || 'dev'
module.exports = config[env]