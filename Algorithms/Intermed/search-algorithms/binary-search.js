// Binary search - the list should be already sorted - Time complexity in both iterative and recursive is O(log n)

// Test array: [0, 4, 5, 19, 34, 56, 71, 89, 99, 101, 234];

// Iterative method
const binarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else if (target === arr[mid]) {
      return `TRUE. found in ${mid} index`;
    }
  }
};

// Recursive method

const recursiveBinarySearch = (arr, low, high, target) => {
  if (low === high) {
    if (low === arr[target]) {
      return low;
    } else {
      return false;
    }
  } else {
    let mid = Math.floor((low + high) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      return recursiveBinarySearch(arr, low, mid - 1, target);
    }
    if (target > arr[mid]) {
      return recursiveBinarySearch(arr, mid + 1, high, target);
    }
  }
};

