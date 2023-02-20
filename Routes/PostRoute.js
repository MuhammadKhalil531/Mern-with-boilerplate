const express = require('express')
const router= express.Router();
const {AddItems}=require('../Controller/postApisLogic')

/***************************
 * Post Request 
 * */
 router.post ('/', AddItems)





 
module.exports=router
