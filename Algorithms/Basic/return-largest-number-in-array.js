// Return the largest number(s) in array(s)
let _array = [
  [583, 999, 113, 55],
  [600, 187, 798, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555]
];

// First Approach
const findLargest1 = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumberInSubArray = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumberInSubArray) {
        largestNumberInSubArray = arr[i][j];
      }
    }
    result.push(largestNumberInSubArray);
  }

  return result;
};

// Second Approach
const findLargest2 = arr => {
  return arr.map(group => {
    return group.reduce((current, prev) => {
      return current > prev ? current : prev;
    });
  });
};
