const express = require('express');
const app = express();
const indexRoute = require('./routes/index');
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 8080

// connect to DataBase
// const connectDB = require('./model/index');
// connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Base Api Route
// app.use('/api', indexRoute)


// Testing Route
app.get('/', (req, res) => {
    res.send("<h1>This is Testing Route</h1>");
})

app.listen(PORT, () => {
  console.log(`Server Running http://localhost:${PORT}/`);
});
