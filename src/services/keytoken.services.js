const keytokenModels = require("../models/keytoken.models")
const express = require('express');
//token create machine;
class KeyTokenServices{

    static createKey  = async ({user,publicKey})=>{
        try {
            const publicKeyString =  publicKey.toString()
            const tokens = await keytokenModels.create({
                user:userId,
                publicKey:publicKeyString
            })
            return tokens ? publicKeyString  : null 
        } catch (error) {
            return error
        }
    }

}

module.exports = new KeyTokenServices