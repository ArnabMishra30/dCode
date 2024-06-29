const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//env config
dotenv.config()

//router import
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoute')

//MongoDB connection
connectDB()

//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
// app.use(morgan('dev'))

//routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);

//port
const PORT = process.env.PORT || 3001

//listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode Port ${PORT}`.bgCyan.white);
})