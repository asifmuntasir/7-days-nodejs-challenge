const express = require('express');
const app = express();
const userRoute = require('./routers/userRouter');
const authRoute = require('./routers/authRoute');
const connect = require('./config/db');

require('dotenv').config();
app.use(express.json());

// connect database
connect();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello MongoDB!');
});

app.use('/userList', userRoute);

app.use('/authUserList', authRoute);

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});