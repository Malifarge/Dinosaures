const {Dynosaur} = require('../models/index')

const ifExist = async (req,res,next)=>{
    const {id} = req.params
    try{
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
    }catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
}

const ifNotExist = async (req,res,next) =>{
    
    const {scientificName} = req.body
    try{
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
    }catch(e){
        console.log(e);
        res.status(500).json('Internal server error')
    }
}

module.exports = {
    ifExist,
    ifNotExist
}