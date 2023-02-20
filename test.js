var Promise = require('promise');


//     let data1=new Promise(function(res,rej){
//     if(myRecord.id==21){
//      console.log(myRecord);
//      res();
//     } 
//      else{
//        rej(console.log("not Working because of Error"));
//      }
//      })
   
   

//      data1.then(console.log("then is Working"))
// let myRecord={
//     name: "khalil",
//     id: 23
//   }

// let myPromise = new Promise(function(myResolve, myReject) {
//     if(myRecord.id==23){
//      console.log(myRecord);
//      myResolve(myRecord,null);
//     } 
//       else{
//         myReject(console.log("not Working because of Error"));
//       } 
//     });
    


//  main = async ()=>{
//    return  await myPromise
// }

// main().then((stringValue)=>{
//     console.log("PRomise resolved", stringValue)
// })




// const test=(val1,val2,callback)=>{
//   sum =val1+val2;
//   return sum
// }
// const call=setTimeout(()=>{
//         console.log("callback is working")
//       },5000)


// console.log(test(2,3,call))


let users = [
  { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
  { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
  { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
];

function work(){
  users.map((user)=>{
   data= user.firstName +"khalil";
console.log(data)
})
}




work();