const express = require('express');
const router = express.Router();
const { authUser } = require('../models/authUser');

// check user by email
const insertUser = async (req, res) => {
    let newUser = await authUser.findOne({ email: req.body.email });
    if (newUser) return res.status(400).send('User already exists');

    newUser = new authUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const result = await newUser.save();
        res.send({
            name: result.name,
            email: result.email
        });
    } catch (error) {
        const msg = [];
        for (field in error.errors) {
            msg.push(error.errors[field].message);
        }
        // console.log(error);
        return res.status(400).send(msg);
    }
}


router.route('/')
    .post(insertUser);

module.exports = router;