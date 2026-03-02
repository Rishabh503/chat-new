import express from "express"
import authRouter from "./routes/authRoute.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDb } from "./lib/db.js"
import messageRouter from "./routes/messageRoute.js"
import cors from "cors";

import { app,server } from "./lib/socket.js"
dotenv.config()
// const app=express() 


app.use(express.json({limit:"2mb"}))
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/api/messages',messageRouter)

server.listen(5001,()=>{
    console.log("server is running on the port 5001")
    connectDb()
})