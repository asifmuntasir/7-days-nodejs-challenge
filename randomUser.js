const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello ExpressJS');
});

// app.get('/users', (req, res) => {
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         else {
//             const userData = JSON.parse(data);
//             // console.log(userData.students)
//             // res.send(userData.students[0].name);
//             res.send(userData.users);
//             res.send(data);
//         }
//     })
// });


// clean code by using epxort module system

app.get('/users', (req, res) => {
    db.getUserList()
        .then(users => {
            res.send(users);
        })
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    db.getUserList()
        .then(users => {
            users.push(newUser);
            db.insertNewUser(users)
                .then(data => {
                    res.send(newUser);
                })
        });
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.getUserList()
        .then(users => {
            const user = users.find(u => u.id === id);
            if (!user) res.status(400).send('User not Found');
            else {
                res.send(user);
            }
        });
});

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateUser = req.body;
    db.getUserList()
        .then(users => {
            const user = users.find(u => u.id === id)
            if (!user) res.status(400).send('User not Found with this ID');
            else {
                const i = users.findIndex(u => u.id === id);
                users[i] = updateUser;
                db.insertNewUser(users)
                    .then(msg => res.send(users));
                console.log('User Updated!')
            }
        });
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.getUserList()
        .then(users => {
            const user = users.find(u => u.id === id)
            if (!user) res.status(400).send('User not Found with this ID');
            else {
                const updatedUserLists = users.filter(u => u.id !== id)
                db.insertNewUser(updatedUserLists)
                    .then(msg => res.send(user));
                console.log('User Updated!')
            }
        });
});

// for controll route we can use same route for both get & post
// app.post('/users', (req, res) => {
//     // console.log(req.body);
//     const newUser = req.body;
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         else {
//             const updatedData = JSON.parse(data);
//             updatedData.users.push(newUser);
//             // console.log(updatedData);
//             fs.writeFile('./db.json', JSON.stringify(updatedData), (err) => {
//                 res.send(newUser);
//             })
//         }
//     })
//     res.send('User successfullt enrolled!');
// });

// app.post('/insertUser', (req, res) => {
//     // console.log(req.body);
//     const newUser = req.body;
//     fs.readFile('./db.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         else {
//             const updatedData = JSON.parse(data);
//             updatedData.users.push(newUser);
//             // console.log(updatedData);
//             fs.writeFile('./db.json', JSON.stringify(updatedData), (err) => {
//                 res.send(newUser);
//             })
//         }
//     })
//     res.send('User successfullt enrolled!');
// });

app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});