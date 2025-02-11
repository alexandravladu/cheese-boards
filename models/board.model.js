const { Model, DataTypes } = require('sequelize')
const db = require('../db/db')

class Board extends Model { }
    
Board.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    description: {
        type: DataTypes.TEXT
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull:false
    }
},
{sequelize: db})

module.exports = Board