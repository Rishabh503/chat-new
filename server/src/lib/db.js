import mongoose from "mongoose"

export const connectDb=async()=>{
    try {
        // const dburi=process.env.MONGODB_URI
        // console.log(dburi)
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log("db has been connected ")
    } catch (error) {
        console.log("error",error)
    }
}