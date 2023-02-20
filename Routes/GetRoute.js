const express = require('express')
const router= express.Router();
const {FetchItems}=require('../Controller/getApisLogic')

/***************************
 * Get Request 
 * */
 router.get('/',FetchItems)




module.exports=router
