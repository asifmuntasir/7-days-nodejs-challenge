// Import as common JS syle
// const {
//     errorHandler,
//     test,
//     siba
// } = require('./ImportExport.js');

// ------------------------------------------------

// Import as moduler style
import errorHandler from './ImportExport.js';

// test();

async function getData() {
    try {
        // undefined.find();

        const emailError = new Error('Email alredy exists');
        throw emailError;
    } catch (error) {
        errorHandler(error);
    }
    // undefined.find();
}

getData();

// function errorHandler(error) {
//     const {name, message, stack} = error;
//     console.log(name, ' : ', message);
//     console.log(message);
//     console.log(stack);


//     IF needed to store error in database then 
//     use the below code
//     logger.error({
//         name,
//         message,
//         stack
//     });
//     console.log('Internal Server Error!');
// }

console.log('Done');
// siba();