const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");
app.use(express.json());
app.get('/', (req, res) => {
    res.send("inside the home page");
})

const userRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to mongoDB database'); 
});



app.listen(3000, () => console.log('Listening the port 3000'));