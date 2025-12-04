const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URI;

async function connectDB() {
    try {
        await mongoose.connect(mongoURL);
        console.log("Database Connected Successfully");
    } catch (err) {
        console.error('Connection error:', err.message);
        process.exit(1);
    }
}


module.exports = connectDB;