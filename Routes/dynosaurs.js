const express = require("express")
const app = express()
const {Dynosaur} = require('../models/index')

app.get('/', async (req,res)=>{
    try{
        const dynosaurs = await Dynosaur.findAll()
        res.json(dynosaurs)
    } catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }

})

app.post('/', async (req,res)=>{
    try{
        const dynosaurs = await Dynosaur.create(req.body)
        res.json(dynosaurs)
    }catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
})

app.get('/:id',async(req,res)=>{

    const {id} = req.params

    try{
        const dynosaurs = await Dynosaur.findOne({
            where: {
                id
            }
        })
        res.json(dynosaurs)
    } catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
})

module.exports = app