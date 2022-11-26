const express = require('express');
const router = express.Router();
const { authUser } = require('../models/authUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const authenticateUser = async (req, res) => {
    let user = await authUser.findOne({
        email: req.body.email
    });

    if (!user) return res.status(400).send('Invalid email OR password');

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send('Invalid email OR password');

    const token = await jwt.sign({
        _id: user._id,
        email: user.email
    }, 'secretKEY');

    res.send(token);
    console.log(token.decoded);
}


router.route('/')
    .post(authenticateUser);

module.exports = router;