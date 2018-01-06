const b = 0

var a = new Promise(function (resolve, reject) {

    if (b) {
        resolve(1)
    } else {
        reject(0)
    }
})

a.then(res => {
    console.log(res);
})

