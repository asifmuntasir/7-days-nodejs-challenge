const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

const userList = async (req, res) => {
    const users = await User.find();
    res.send(users);
}


const insertUser = async (req, res) => {
    // const newUser = req.body;
    const user = new User(req.body);
    try {
        const result = await user.save();
        res.send(result);
    } catch (error) {
        const msg = [];
        for (field in error.errors) {
            msg.push(error.errors[field].message);
        }
        // console.log(error);
        return res.status(400).send(msg);
    }
}

const userDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) { return res.status(400).send('User not found'); }
        res.send(user);
    } catch (error) {

    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true, useFindAndModify: false }
        );
        if (!user) { return res.status(400).send('User not found'); }
        res.send(user);
    } catch (error) {
        return res.status(400).send('User not found');
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) { return res.status(400).send('User not found'); }
        res.send(user);
    } catch (error) {
        return res.status(400).send('User not found');
    }
}

router.route('/')
    .get(userList)
    .post(insertUser);

router.route('/:id')
    .get(userDetails)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;