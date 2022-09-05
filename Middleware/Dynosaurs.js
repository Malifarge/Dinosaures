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

module.exports = {
    ifExist
}