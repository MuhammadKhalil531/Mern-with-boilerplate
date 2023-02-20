const express = require('express')
const router= express.Router();
const {DeleteITems}=require('../Controller/deleteApisLogic')

/***************************
 * Get Request 
 * */
 router.delete('/:id',DeleteITems)




module.exports=router