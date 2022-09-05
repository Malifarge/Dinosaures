require("dotenv").config()

const {Sequelize} = require("sequelize")

const sequelize = new Sequelize ('dynosaurs',"root", process.env.MDP, {
    host: '127.0.0.1',
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