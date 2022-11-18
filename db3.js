const e = require('express');
const fs = require('fs');

const getUserLists = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./db3.json', 'utf-8', (err, data) => {
            if (err) throw err;
            else {
                const userData = JSON.parse(data);
                resolve(userData);
            }
        });
    })
}
module.exports.getUserLists = getUserLists;


const insertUser = (users) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./db3.json', JSON.stringify(users), (err) => {
            resolve('Successfully added user!')
        })
    });
}
module.exports.insertUser = insertUser;

const findUser = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./db3.json', 'utf-8', (err, data) => {
            if (err) throw err;
            else {
                const { user } = JSON.parse(data);
                if (user.id === id) {
                    resolve(user);
                } else {
                    resolve('Usre not found')
                }
            }
        });
    });
}
module.exports.findUser = findUser;