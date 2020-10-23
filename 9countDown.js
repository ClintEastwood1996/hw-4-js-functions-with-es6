// 9countDown.js

// Functions
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        setTimeout((() => console.log(num - i)), i*1000);
    }
}


// Testing
countDown(25)