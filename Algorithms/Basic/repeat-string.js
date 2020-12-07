// Return repeated string

// First Approach - Basic
const repeatString1 = (str, num) => {
    if (num <= 0) {
        return str;
    } else {
        return str.repeat(num);
    }
};

// Second Approach - Intermed
const repeatString3 = (str, num) => num > 0 ? str.repeat(num) : str;


// Third Approach - Advanced => Recursive
const repeatString2 = (str, num) => {
    if (num < 0) return '';
    if (num === 1) return str;
    else {
        return str + repeatString2(str, num - 1);
    }
};
