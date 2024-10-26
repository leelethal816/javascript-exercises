const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 
        || !Number.isInteger(num1) 
        || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let sum = 0;
    if (num1 < num2) {
        for (let num = num1; num <= num2; num++) {
            sum += num;
        }
    }
    else {
        for (let num = num2; num <= num1; num++) {
            sum += num;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
