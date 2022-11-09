const { User, Board, Cheese } = require('../models')

async function main() {

    const allUsers = await User.findAll()
    console.table(allUsers.map(u => u.toJSON()))

    const allBoards = await Board.findAll()
    console.table(allBoards.map(b => b.toJSON()))

    const allCheeses = await Cheese.findAll()
    console.table(allCheeses.map(c => c.toJSON()))

    // const Alexandra = await User.findOne({where: { name: "Alexandra"}})
    // console.log(Alexandra.toJSON())
    // const Emily = await User.findOne({where: { name: "Emily"}})
    // console.log(Emily.toJSON())
    // const Zoe = await User.findOne({where: { name: "Zoe"}})
    // console.log(Zoe.toJSON())

 
}


main()