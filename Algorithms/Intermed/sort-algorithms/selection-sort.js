// Selection Sort
// Time complexity: O(n^2)
// Test array: [100, 93, 1, 0, 5, 9, 34, 29, 25, 54, 49]

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        // if smaller find, make min to that
        min = j;
      }
    }
    // Swap them
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([100, 93, 1, 0, 5, 9, 34, 29, 25, 54, 49]));
