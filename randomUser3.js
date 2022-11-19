const express = require('express');
const app = express();
const db3 = require('./db3');

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello ICC as Indian Cricket Council');
});

const userLists = (req, res) => {
    db3.getUserLists()
        .then(data => {
            res.send(data);
            console.log(data);
        });
}

const insertUser = (req, res) => {
    const newUser = req.body;
    db3.getUserLists()
        .then(users => {
            users.push(newUser);
            db3.insertUser(users)
                .then(data => res.send(data))
        });
}

const userDetails = (req, res) => {
    const id = parseInt(req.params.id);
    // const id = req.params;
    // console.log(id);
    db3.getUserLists()
        .then(users => {
            const user = users.find(u => u.id === id);
            if (!user) res.status(400).send('User not Found');
            else res.send(user);
        });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const updateUser = req.body;
    db3.getUserLists()
        .then(users => {
            const user = users.find(u => u.id === id);
            if (!user) res.status(400).send('User not Found');
            else {
                const i = users.findIndex(s => s.id === id);
                users[i] = updateUser;
                db3.insertUser(users)
                    .then(msg => res.send(updateUser));
            }
        });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    db3.getUserLists()
        .then(users => {
            const user = users.find(u => u.id === id);
            if (!user) res.status(400).send('User not Found with this id');
            else {
                const i = users.findIndex(s => s.id === id);
                const updatedUserLists = users.filter(u => u.id !== id);
                db3.insertUser(updatedUserLists)
                    .then(msg => res.send(user));
            }
        });
}

// app.get('/userLists', userLists);

// app.post('/userLists', insertUser);

// app.get('/userLists/:id', userDetails);

// app.put('/userLists/:id', updateUser);

// app.delete('/userLists/:id', deleteUser);

app.route('/userLists')
    .get(userLists)
    .post(insertUser);

app.route('/userLists/:id')
    .get(userDetails)
    .put(updateUser)
    .delete(deleteUser);

app.listen(app.get('port'), () => {
    console.log('Server no 3 running on port', app.get('port'));
});