const dbSetup = require('./db-setup')
const express = require('express')
const User = require('./models/user')

dbSetup();
const app = express()
app.use(express.json())

//in prod, we'd use seperate files
app.get('/user/:id', async (req,res,next) =>{

    try{
    const {id} = req.params;
    const user=await User.query().findById(id);
    res.json(user)
    }catch (err){
        console.error(err);
        res.status(500).json(err)

    }
})

app.listen(8080,()=> console.log('server running on port 8080'));