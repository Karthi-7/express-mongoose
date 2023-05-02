const express=require("express");
const mongoose=require("mongoose")
const port=3000;
const app=express();
const userRoutes=require("./routes/userRoutes");
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
userRoutes(app)
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/dummydb');
    console.log("mongoose connected")

}

app.listen(port,async()=>{
    await main()     
     console.log(`server listening to the port :${port}`)
})
