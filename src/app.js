const express = require('express');
const app = express();
require('./db/conn')

app.use(express.json())

const MensRanking = require('./models/mens');
const { get } = require('mongoose');

const port = process.env.PORT || 3000 ;

app.post("/mens", async(req,res)=>{
    try{
        const addingMensRecord = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecord.save();
        res.send(insertMens);
    }catch(e){
        res.send(e);

    }
})

app.get("/mens", async(req,res)=>{
    try{
        const getMens = await MensRanking.find({});
        res.status(201).send(getMens)
        
    }catch(e){
        res.status(400).send(e);

    }
})

app.get("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id ;
        const getMen = await MensRanking.findById({_id})
        res.status(201).send(getMen)
        
    }catch(e){
        res.status(400).send(e);

    }
})

app.patch("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id ;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.send(getMen)
        
    }catch(e){
        res.status(400).send(e);

    }
})

app.get('/', async(req,res)=> {
   res.send('Hi from Rohit')
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})