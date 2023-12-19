//lv1

const dev = {
    app:{
        port:process.env.DEV_PORT || 3000
    },
    db:{
        host:process.env.DEV_HOST || '127.0.0.1',
        port:process.env.DEV_PORT || 27017,
        name:process.env.DEV_NAME || 'shop_product',
    }

}
const pro = {
    app:{
        port:process.env.PRO_PORT || 3000
    },
    db:{
        host:process.env.PRO_HOST || '127.0.0.1',
        port:process.env.PRO_PORT || 27017,
        name:process.env.PRO_NAME || 'shop_product',
    }

}
const business = {
    app:{
        port:process.env.BUSINESS_PORT  || 3000
    },
    db:{
        host:process.env.BUSINESS_HOST || '127.0.0.1',
        port:process.env.BUSINESS_PORT || 27017,
        name:process.env.BUSINESS_NAME || 'shop_product',
    }
}
const config = {dev,pro}
const env =  process.env.NODE_ENV || 'dev'
module.exports = config[env]