// pending

// resolved

// rejected

const myPromise = new Promise((resolve, reject) => {
    // const user = null;
    const user = { id: 1 };
    if (!user) {
        reject('Something went wrong');
    } else {
        setTimeout(() => {
            resolve('Successfully Get the data');
        }, 1500);
    }
});


myPromise.then(res => console.log('From in then: ', res)).catch(
    err => { console.log('From in catch: ', err); }
)