import express from  'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/users.js'
import cookieParser from 'cookie-parser';
import videoRoute from './routes/videos.js'
import commentRoute from './routes/comments.js'
import authRoute from './routes/auth.js'



const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connect to Database")
    }).catch((err) => {
        throw err
    })
}

app.use(express.json())
app.use(cookieParser())
app.use("/api/users", userRoute)
app.use("/api/comments", commentRoute)
app.use("/api/videos", videoRoute)
app.use("/api/auth", authRoute)


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})




app.listen(8800, () => {
    connect()
    console.log("App listen to port 8800")
})