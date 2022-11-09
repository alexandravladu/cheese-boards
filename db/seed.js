const { User, Board, Cheese } = require('../models')
const db = require('./db')

async function seed() {

    // Drop and Create all tables in the db
    await db.sync({force: true})
    // Users
     const users = await User.bulkCreate([
        { name: "Alexandra", email: "alexandra.vladu21@icloud.com"},
        { name: "Emily", email: "barbequesquirrel@gmail.com"},
        { name: "Zoe", email: "zoezozo@gmail.com" }
    ])

    // Cheeses
    const cheeses = await Cheese.bulkCreate([
        { title: "Feta", description: "Absolutely delicious"},
        { title: "Mozzarella", description: "Soft and lightly salted"},
        { title: "Cheddar", description: "Mild and nutty"},
        { title: "Parmesan", description: "Hard, granular and salty"},
        { title: "Brie", description: "Soft-ripened cow's milk cheese"}
    ])
 
        // Boards
    const boards= await Board.bulkCreate( [
       { type: "Soft and creamy",description:"Star of the day", rating: 5 },
       { type: "Crumbly",description:"Can't get enough of it", rating: 4 },
       { type: "Aged cheese ",description:"Aged like fine wine", rating: 4 }
])


    // User Alexandra has 2 boards
    await Alexandra.addBoard(soft)
    // await Alexandra.addBoard(crumbly)

    // User Emily has 1 board
    await Emily.addBoard(aged)

    // User Zoe has 2 boards
    await Zoe.addBoard(crumbly)
    // await Zoe.addBoard(aged)


}


seed()