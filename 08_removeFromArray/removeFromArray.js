const removeFromArray = function(array, ...itemsToRemove) {
    return array.filter( val => !itemsToRemove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
