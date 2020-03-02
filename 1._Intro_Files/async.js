
// line 1 .. takes 10 seconds
// line 2 independent from line 1


function ringingCustomerUp(name) {
    console.log("We are ready to help you,", name);
}

function itHelpDesk(name, callback) {
    // things happen....
    callback(name);
}

// itHelpDesk("Nick", ringingCustomerUp);

itHelpDesk("Nick", () => {
    console.log("help desk calling");
});

const ringingCustomerUpRude = (name) => {
    console.log("What do you want,", name);
}

// itHelpDesk("Nick", ringingCustomerUpRude);

new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 4000);
    } catch(error) {
        reject("Something went wrong");
    }
}).then(message => {
    // console.log(message);   
}).catch(error => console.log(error));
    
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("My promise inside of the function is done");
        }, 5000);
    });
}

// async await
async function callMyPromise() {
    const message = await myPromise();
    console.log("this is the line ", message);
}

callMyPromise();

const asyncAwaitArrowFunction = async () => {
    const message = await myPromise();
    console.log("this is the line ", message);
};
