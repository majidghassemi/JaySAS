// We need only the remaining part of an array
// For example: slasherFlick([1, 2, 3], 2); must return [3].


// Basic Solutin -- Array.prototype.splice
const slasherFlick = (arr, index) => {
    arr.splice(0, index);
    return arr;
}

const slasherFlick = (arr, index) => arr.slice(index);