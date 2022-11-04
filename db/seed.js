const { User, Board, Cheese } = require('../models')
const db = require('./db')

async function seed() {

    // Drop and Create all tables in the db
    await db.sync({force: true})

     await User.create({
        name: "Alexandra",
        email: "alexandra.vladu21@icloud.com"
    })
    await User.create({
        name: "Emily",
        email: "barbequesquirrel@gmail.com"
    })
    await User.create({
        name: "Zoe",
        email: "zoezozo@gmail.com"
    })
    await Cheese.create({
        title: "Feta",
        description: "Absolutely delicious"
    })

    await Cheese.create({
        title: "Mozzarella",
        description: "Soft and lightly salted"
    })
    await Cheese.create({
        title: "Cheddar",
        description: "Mild and nutty"
    })
    await Cheese.create({
        title: "Parmesan",
        description: "Hard, granular and salty"
    })
    await Cheese.create({
        title: "Brie",
        description: "Soft-ripened cow's milk cheese"
    })

    await Board.create({
        type: "Soft and creamy",
        description:"Star of the day", 
        rating: 5
    })
    await Board.create({
        type: "Crumbly",
        description:"Can't get enough of it",
        rating: 4
    })
    await Board.create({
        type: "Aged cheese",
        description:"Aged like fine wine",
        rating: 4
    })
}


seed()