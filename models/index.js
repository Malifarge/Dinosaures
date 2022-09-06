require("dotenv").config()

const {Sequelize} = require("sequelize")

const {DB_NAME,DB_USERNAME,MDP,DB_HOST } = process.env

const sequelize = new Sequelize (DB_NAME,DB_USERNAME,MDP, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false
})

const connectDb = async () =>{
    try{
        await sequelize.authenticate()
        console.log('Connect to db');
    } catch(e){
        console.log(e);
    }
}

connectDb()

const Dynosaur = require('./Dynosaur')(sequelize)

sequelize.sync({alter: true})

const db = {
    sequelize,
    Dynosaur
}

module.exports = db