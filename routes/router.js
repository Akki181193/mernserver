const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")

// router.get("/", (req,res) => {
//     console.log("Router get connected")
// }) 

            // send Userdata

router.post("/register", async(req, res) => {

    const {name, email,phone, age, work, address, textarea} = req.body;

    if( !name ||  !email || !phone ||  !age ||  !work ||  !address ||  !textarea){
       return res.status(404).send({error: "Please fill the data"});
    //    alert("please fill the data")
    }

    try {

        const preUser = await User.findOne({email:email})
        console.log(preUser);

        if(preUser){
            return res.status(404).json({alert:"please fill the data"})
        }
        else{
            const addUser = new User({
                name, email,phone, age, work, address, textarea})
                
                            await addUser.save();
                            res.status(201).json(addUser)}
        }
        
     catch (error) {
        // res.status(404).json(error)
        res.status(404).send(error)
        alert("please fill the data")
    }
    
})

                        // get UserData

    router.get('/getdata', async(req,res)=>{
        try {
            const userdata= await User.find()
            res.status(201).send(userdata) 
            console.log(userdata)
        } catch (error) {
            // console.log(error)
            res.status(404).send("get data error")
        }
    })


    // get individual user


    router.get("/getuser/:id", async(req,res) => {
        try {
        // res.status(200).json(req.params)

        const {id} = req.params;
        // console.log(id)

        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).send(userindividual)
        
    } catch (error) {
            res.status(404).send(error)
            // console.log(error)
        }
    })

    router.patch('/updateuser/:id', async(req,res) => {
        try {
            const {id} = req.params;

            const updateuser = await User.findByIdAndUpdate(id,req.body,{
                new:true
            })
            console.log(updateuser)
            res.status(201).json(updateuser)
        } catch (error) {
            res.status(404).json(error)
        }

    })

router.delete("/deleteuser/:id", async(req,res) =>{

    try {
        const {id} = req.params;

        const deleteuser = await User.findByIdAndDelete({_id:id})
        console.log(deleteuser)
        res.status(201).json(deleteuser)
    } catch (error) {
        res.status(404).json(error)
    }

})

module.exports = router;