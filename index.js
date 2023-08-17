const express=require("express")
const app =express()
const {connection} = require("./db")
const {TripRouter} = require("./routes/triproute")
app.use(express.json());




app.use("/trip",TripRouter)



app.listen(process.env.PORT, async(req,res)=>{
    try {
   await connection
   console.log("Data-Base is Connected");
        
    } catch (error) {
     console.log(error);
    }
    console.log(`server is running on the ${process.env.PORT} `) 
})