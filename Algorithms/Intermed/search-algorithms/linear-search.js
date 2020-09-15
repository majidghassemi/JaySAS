// Basic Approach -- use for loop

const linearSearch = (arr, target) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) return true;
        return false;
    }
};

// Expert Approach -- use includes method 
const linearSearch = (arr, target) => arr.includes(target);

// O(n)