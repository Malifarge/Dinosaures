const {DataTypes} = require("sequelize")

module.exports = sequelize =>{
    const Dynosaur = sequelize.define("Dynosaur",{
        name:{
            type: DataTypes.STRING
        },
        scientificName: {
            type: DataTypes.STRING
        },
        apparition_Year:{
            type: DataTypes.STRING
        },
        disparition_Year:{
            type: DataTypes.STRING
        },
        describe:{
            type: DataTypes.STRING
        },
        color:{
            type: DataTypes.STRING
        }


    })

    return Dynosaur
}