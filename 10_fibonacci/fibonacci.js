const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }
    position = Number(position);
    let arr = [0, 1];
    for (let i = 2; i <= position; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[position];
};

// Do not edit below this line
module.exports = fibonacci;
