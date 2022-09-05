const {Dynosaur} = require('../models/index')

const ifExist = async (req,res,next)=>{
    const {id} = req.params
    const dynosaur =await Dynosaur.findOne({
        where:{
            id
        }
    })

    if (dynosaur){
        req.Dynosaur=dynosaur
        next()
    }else{
        res.status(404).json("Dynosaur not Found")
    }
}

const ifNotExist = async (req,res,next) =>{
    const {scientificName} = req.body
    const dynosaur = await Dynosaur.findOne({
        where:{
            scientificName
        }
    })

    if(!dynosaur){
        next()
    }else{
        res.status(409).json("Dynosaut elready exist")
    }
}

module.exports = {
    ifExist,
    ifNotExist
}