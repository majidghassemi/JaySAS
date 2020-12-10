// Binary search - the list should be already sorted - Time complexity O(log n)

// Test array: [0, 4, 5, 19, 34, 56, 71, 89, 99, 101, 234];

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
