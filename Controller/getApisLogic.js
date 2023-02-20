const Item=require('../Models/item')

const FetchItems=(req,res)=>{
    Item.find()
    .sort({date: -1 })
    .then(itmes=> res.json(itmes))
 }


 module.exports={
    FetchItems
 }