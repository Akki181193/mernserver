const mongoose = require("mongoose")

const db = process.env.DATABASE
mongoose.connect(db).then(() => {
    console.log("connected to mongodb server")
}).catch((err)=> {
    console.log(err,"error connecting mongodb server")
})


// 6cSYw9vBb1jLvCPT