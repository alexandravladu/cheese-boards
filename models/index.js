const User = require('./user.model')
const Board = require('./board.model')
const Cheese = require('./cheese.model')


//Creating a One-to-Many relationship

User.hasMany(Board) // user.getBoards()
Board.belongsTo(User) // board.getUser()


// Creating a Many-to-Many relationship

Cheese.belongsToMany(Board, {through: 'Cheese_Board'})
Board.belongsToMany(Cheese, {through: 'Cheese_Board'})

module.exports = { User, Board, Cheese}