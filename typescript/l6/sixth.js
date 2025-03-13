function fetchData(callback) {
    setTimeout(function () {
        callback('Ali');
    }, 2000);
    callback('Anees');
}
function greet(name) {
    console.log("Hello ".concat(name));
}
fetchData(greet);
