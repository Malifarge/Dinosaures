const express = require("express")
const app = express()
const {Dynosaur} = require('../models/index')
const {ifExist,ifNotExist} = require('../Middleware/Dynosaurs')


app.post('/',ifNotExist,async (req,res)=>{
    try{
        const dynosaurs = await Dynosaur.create(req.body)
        res.json(dynosaurs)
    }catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
})

app.get('/', async (req,res)=>{

    const {order}=req.query

    try{
        const dynosaurs = await Dynosaur.findAll(order && {
            order:[["apparition_Year", order]]
        })
        res.json(dynosaurs)
    } catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }

})

app.get('/:id',ifExist,async(req,res)=>{
        res.json(req.Dynosaur)
})

app.put('/:id',ifExist,async (req,res)=>{
    const {id} = req.params
    try{
        await Dynosaur.update(req.body,{
            where: {id}
        })

        const dynosaurs = await Dynosaur.findOne({
            where: {
                id
            }
        })

        res.json(dynosaurs)

        
    }catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
})

app.delete('/:id',ifExist, async(req,res)=>{
    const {id} = req.params

try{
     await Dynosaur.destroy({
        where: {
            id
        }
    })
    res.status(204).json('ok')
}catch(e){
    console.log(e);
    res.status(500).json('Internal server error')
}
})

module.exports = app