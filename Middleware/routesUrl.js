/*****
 * function for getting the urls of Routes
 */
const routeurls=(req,res,next)=>{
   console.log( 'this is url you hit', req.originalUrl);
   next();
}




module.exports={
    routeurls
}