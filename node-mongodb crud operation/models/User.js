const { Schema, model } = require('mongoose');

// const userSchema = Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         min: 0
//     },
//     hobbies: {
//         type: Array,
//         of: String,
//         validate: {
//             validator: (value) => value.length > 0,
//             message: 'There must be at least 1 hobby!'
//         }
//     }
// });

const User = model('User', Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: 'There must be at least 1 hobby!'
        }
    }
}));

exports.User = User;