const express = require('express');
const shopModel = require('../models/shop.models');
const bycrypt = require('bcrypt');



// định dạng mã hóa thông tin triển khai cho khách hàng cuối
const rolesShop = {
    SHOP:"0002",
    WRITER:"0003",
    EDITOR:"0005",
    ADMIN:"0007"
}


class AccessServices{
    
    constructor(){

    }



    static signup =  async ()=>{
        try {
                //check email address!
            const holdeShop = await shopModel.findOne({email}).lean();
            if(!holdeShop){
                return {
                    code:"xxxxx",
                    message:"Shop already resgistered !",
                }
            }

            const passwordHash = await bycrypt.hash(password, 10);
            const newShop = await shopModel.create({
                name,email,password:passwordHash,roles:[rolesShop.SHOP]
            })
        } catch (error) {
            return {
                code:'xxxx',
                message:error.message,
                status:'error'
            }
        }
    } 
}


module.exports = new AccessServices;