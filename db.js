const fs = require('fs');

const getUserList = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            else {
                const userData = JSON.parse(data);
                resolve(userData)
            }
        });
    })
}
module.exports.getUserList = getUserList;

const insertNewUser = (users) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db.json', JSON.stringify(users), (err) => {
            resolve('Successfully added user!')
        })
    })
}
module.exports.insertNewUser = insertNewUser;