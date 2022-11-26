const { Schema, model } = require('mongoose');

const authUserSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

const authUser = model('authUser', authUserSchema);

module.exports.authUser = authUser;