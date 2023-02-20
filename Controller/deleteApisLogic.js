const Item=require('../Models/item')

const DeleteITems=(req,res)=>{
    Item.findById(req.params.id)
     .then(item => item.remove().then(()=>res.json({success:true})))
    //  .catch(err =>res.status(404).json({success:false}))
 }


 module.exports={
    DeleteITems
 }