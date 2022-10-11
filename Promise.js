// pending

// resolved

// rejected


// Basic Promises
const myPromise = new Promise((resolve, reject) => {
    // const user = null;
    const user = { id: 1 };
    if (!user) {
        reject('Something went wrong');
    } else {
        setTimeout(() => {
            resolve({ name: 'Deo' });
        }, 1500);
    }
});


// Little bit of advance promises
const userIds = [1, 2, 3, 4, 5];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
    const userID = userIds[i];
    // myPromise.then(user => {
    //     userData.push(user);
    // });
    userData.push(myPromise);
}

Promise.all(userData).then(res => {
    console.log(res);
})

// console.log(userData);

myPromise.then(res => console.log('From in then: ', res)).catch(
    err => { console.log('From in catch: ', err); }
)