const { User, Board, Cheese } = require('../models')

async function main() {

    const allUsers = await User.findAll()
    console.table(allUsers.map(u => u.toJSON()))


    const oneUser = await User.findByPk(1)
    console.log(oneUser.toJSON())
}


main()