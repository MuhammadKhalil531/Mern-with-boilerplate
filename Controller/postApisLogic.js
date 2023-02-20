const Item=require('../Models/item')

const AddItems=(req,res)=>{
    const newItem=new Item( {
       name:req.body.name
    });
    newItem.save().then(item=>res.json(item))
}


module.exports={
    AddItems
}