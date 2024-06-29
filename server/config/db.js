const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database ${mongoose.connection.host}`.bgMagenta.white);
        //${mongoose.connection.host} --- defines the atlas address
    } catch (error) {
        console.log(`MONGO Connection Error ${error}`.bgRed.white);
    }
}

module.exports = connectDB;