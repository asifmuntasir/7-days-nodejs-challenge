const mongoose = require('mongoose');
require('dotenv').config();

module.exports = connect = async () => {
    try {
        const url = await mongoose.connect(process.env.URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useFindAndModify: false,
        });
        console.log('MongoDB Connection Created...!');
    } catch (error) {
        console.log(error);
    }
}