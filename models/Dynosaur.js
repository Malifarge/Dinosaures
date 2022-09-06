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
            type: DataTypes.INTEGER
        },
        disparition_Year:{
            type: DataTypes.INTEGER
        },
        describe:{
            type: DataTypes.TEXT
        },
        color:{
            type: DataTypes.STRING
        }


    })

    return Dynosaur
}