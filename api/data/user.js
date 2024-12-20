const bcrypt = require('bcryptjs');

const users = [
    {
        name : 'Admin',
        email : 'admin@node.com',
        password : '123456',
        isAdmin : true
    },
    {
        name : 'User',
        email : 'XXXXXXXXXXXXX',
        password : bcrypt.hashSync('123456',10),
    }
]

module.exports = users;