const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
});

// ------------ OLD Process ------------
// console.log(myPromise);
// myPromise.then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });


// ------------ Latest Process -----------
async function getMSG() {
    const res = await myPromise;
    console.log(res);
}

getMSG();

// Data load from API using old process
fetch("www.userinfo.com")
    .then(res => res.json())
    .then(data => console.log(data));


// Now latest data load system using async-await
async function getUser() {
    const res = await fetch("www.userinfo.com");
    const data = res.json();

    console.log(data);
}