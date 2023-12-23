const AccessServices = require('../services/access.services')

class AccessController{
    signUp = async (req,res,next) => {
        try {
            console.log("P!!!!::signup::",req.body);
            return res.status(200).json(await  AccessServices.signUp(req.body));
        } catch (error) {
            next(error);
        }
    }
}




module.exports= new AccessController 