// function errorHandler(error) {
//     const { name, message, stack } = error;
//     console.log(name, ' : ', message);
//     // console.log(message);
//     // console.log(stack);
// }

// Below code will work when we user moduler import style
export default function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name, ' : ', message);
    // console.log(message);
    // console.log(stack);
}

function test() {
    console.log('Hello Test');
}

// module.exports.siba = function siba() {
//     console.log("I've found her after 10 years!");
// }

// module.exports = errorHandler;

// module.exports.errorHandler = errorHandler;
// module.exports.test = test;

// module.exports = {
//     errorHandler: errorHandler,
//     test: test,
// }