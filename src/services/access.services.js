"use strict"

const shopModel = require('../models/shop.models');
const bycrypt = require('bcrypt');
const crypto = require('crypto');
const KeyTokenServices = require('./keytoken.services')
const express = require('express');
const { createTokenPair } = require('../auth/authUtils');

cd
// định dạng mã hóa thông tin triển khai cho khách hàng cuối
const rolesShop = {
    SHOP:"0002",
    WRITER:"0003",
    EDITOR:"0005",
    ADMIN:"0007"
}


class AccessServices{
    
    static signUp = async ({name,email,password})=>{
        try {
                //check email address!
            const holdeShop = await shopModel.findOne({email}).lean();
            if(!holdeShop){
                return {
                    code:"xxxxx",
                    message:"Shop already resgistered !",
                }
            }
            if(newShop){
                const {privateKey,publicKey}  = crypto.generateKeyPairSync('rsa',{
                    modulusLentg:4096
                })
                console.log({privateKey,publicKey}) //save collection key store
                const publickeyString = new KeyTokenServices.createKey({
                    userId:newShop._id,
                    publickey
                })

                if(!publickeyString){
                    return {
                        code:'xxxxx',
                        message:"publicKeyString error !"
                    }
                }

                const tokens = await createTokenPair({userId:newShop._id,email,publicKey,privateKey})
                console.log("create success token:",tokens);
                return{
                    code:201,
                    metadata:{
                        shop:newShop,
                        tokens
                    }
                }
            }    

            return {
                code:200,
                metadata:null
            }

        } 
        catch (error) {
            return {
                code:'xxxx',
                message:error.message,
                status:'error'
            }
        }
    } 
}
module.exports = AccessServices;