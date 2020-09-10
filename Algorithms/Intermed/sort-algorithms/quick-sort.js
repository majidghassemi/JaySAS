const quickSort = (arr) => {
    if (arr.length < 2) return arr;
    let pivot = arr[0], leftSubArray = [], rightSubArray = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) {
            rightSubArray.push(arr[i]);
        } else {
            leftSubArray.push(arr[i]);
        }
    }

    return quickSort(leftSubArray).concat(pivot, quickSort(rightSubArray));
};

// O(n^2)