// Swap without third variable

const swap = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    return `After swapping: First number is ${a} and second is ${b}`
};