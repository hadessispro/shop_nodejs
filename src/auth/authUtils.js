const JWT = require('jsonwebtoken')



const createTokenPair = async (payload ,publickey ,privatekey)=>{
    try {
        const accessToken =  JWT.sign(payload,privatekey,{
            algorithm:'RS256',
            expiresin:'2 days',
        })

        const refreshToken =  JWT.sign(payload,privatekey,{
            algorithm:'RS256',
            expiresin:'7 days',
        })
        JWT.verify(accessToken,publickey ,(err,decode)=>{
            if(err){
                console.error('error verify:', err);
            }
            else{
                console.log('decode verify:',decode);
            }
        })
        return {accessToken,refreshToken}
    } catch (error) {   
        return error
    }

}


module.exports = {createTokenPair}