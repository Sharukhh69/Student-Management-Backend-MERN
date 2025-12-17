const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        console.log('Attempting to connect to Atlas...')
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected to Atlas successfully")
    }catch(error){
        console.log("Atlas connection failed with error:", error.message)
        process.exit(1)
    }
}
module.exports=connectDB