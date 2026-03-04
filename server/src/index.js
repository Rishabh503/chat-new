import express from "express"
import authRouter from "./routes/authRoute.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDb } from "./lib/db.js"
import messageRouter from "./routes/messageRoute.js"
import cors from "cors";
import path from "path"

import { app,server } from "./lib/socket.js"

dotenv.config()

const __dirname = path.resolve()
const PORT = process.env.PORT || 5001;

app.use(express.json({limit:"2mb"}))
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/api/messages',messageRouter)

if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname,"../client/dist")))

    app.get(/.*/, (req,res)=>{
        res.sendFile(path.join(__dirname,"../client","dist","index.html"))
    })
}

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    connectDb()
})