const shopModel = require('../models/shop.models');


class AccessController{
    signup = async (req,res,next) => {
        try {
            const holderShop  = awati.FindOne({email}).lean();
            if(!holderShop){
                return {
                    code:"xxxx",
                    message:"shop already registered !"
                }
            }

            const newShop = await shopModel.create({
                name,email,password,roles
            })


        } catch (errors) {
            return {
                code:'xxx',
                message:errors.message,
                status:'error'
            }
        }
    }
}




module.exports= new AccessController;