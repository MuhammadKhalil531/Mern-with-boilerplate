const express =require('express');
const mongoose=require('mongoose');
const bodyparser= require('body-parser');
const {MongoURL, PORT}=require('./Configurations/config');
const {routeurls}=require('./Middleware/routesUrl')
const defaultGetRoute=require('./Routes/GetRoute')
const defaultPostRoute=require('./Routes/PostRoute');
const defaultDeleteRoute=require('./Routes/DeleteRoutes')
const app=express();

/******************************
 * Middleware
 */
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(routeurls);


/******************************
 * Middleware for Default routes paths
 */ 
app.use('/get', defaultGetRoute)
app.use('/post', defaultPostRoute)
app.use('/id', defaultDeleteRoute)


/*****************************
 * Mongodb database connection
 */
 mongoose.set("strictQuery", false)
 mongoose.connect(MongoURL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>app.listen(PORT, () => {
    console.log(`Example App Listening On Port ${PORT}`)
    console.log("Mongodb Is Conneted Successfully ...")
  }))
.catch((error)=> {
    console.log(error.message)
})

