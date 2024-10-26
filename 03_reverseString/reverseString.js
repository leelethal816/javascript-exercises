const reverseString = function(message) {
    const forward = message.split("");
    const reverse = [];
    for (let i = forward.length - 1; i >= 0; i--) {
        reverse.push(forward[i]);
    }

    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
