require('dotenv').config();
const express = require("express")
const app = express();
require("./db/conn")
const User = require("./models/userSchema")
const cors = require("cors");
const router = require("./routes/router")

const port= process.env.PORT || 8003;

app.use(cors());
app.use(express.json())

app.get("/", (req,res) => {
    res.json("we served backend on heroku second, third time time")
});

app.use(router)



app.listen(port,() => {
    console.log(`server is start and running at port number ${port}`)
});



// akkigajbhiye1
// ashkar
//  mongodb+srv://<username>:<password>@cluster0.5p2hecp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://akkigajbhiye1:<password>@cluster0.5p2hecp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0