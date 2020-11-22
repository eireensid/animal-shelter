const Datastore = require('nedb')

export const usersDb: Nedb = new Datastore({ filename: './databases/users.db', autoload: true })
