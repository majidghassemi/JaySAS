// Return factorial of given number

// First Approach
const factorial1 = num => {
    let temp = 1;

    for (num; num >= 1; num--) {
        temp *= num;
    }

    return temp;
};

// Second Approach
const factorial2 = num => {
  if (num === 1) return 1;
  return factorial(num - 1) * num;
};
