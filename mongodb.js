const mongodb=require("mongoose")

mongodb.connect("mongodb://localhost:27017/BharatIntern")

.then(()=>{

console.log("mongodb connected");

})

.catch(()=>{

console.log("failed to connect");

})

const LogInSchema=new mongodb.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongodb.model("LogInCollection",LogInSchema)

module.exports=collection