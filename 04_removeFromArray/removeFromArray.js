const removeFromArray = function(array, ...args) {
    /*
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                array.splice(i, 1);
            }
        }
    }
    */
    for (let each of args) {
        array = array.filter(i => i !== each);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
