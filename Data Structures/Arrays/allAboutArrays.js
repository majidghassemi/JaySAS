// epitome of array in js
// Arrays is simplest data structures 
// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects [mdn]
// Lookup for arrays Big O is O(1) 
// Insert and remove to/from array Worst case is O(n)

// Working with array in js
// Create array
let arr_1 = [1, 2, 3];

// Access to item(s) with index
arr_1[0], arr_1[1] ; // And so on

// Access to it with length method
arr_1.length(); // Return length of arr_1

// There are a lot of way to remove item in array -- We declare some of those -- Read more in [mdn]
arr_1.pop() // Removes the last element from an array and returns it and updates the length property
arr_1.shift() // Removes the first element from an array and returns it and updates the length property

// You can remove item(s) with twiddle with length method ~Its not recommend
arr_1.length(2); // Remove last item

// Splice method
// The splice method can be used to add or remove elements from an array. The first argument specifies the location at which to begin adding or removing elements.
// The second argument specifies the number of elements to remove.
// The third and subsequent arguments are optional; they specify elements to be added to the array

arr_1.splice(0, 1) // Start from index 0 and delete 1 item

// Find element's index

console.log(arr_1.indexOf(1)); // Return index of specified element
arr_1.findIndex(1); // Returns the index of the first element in the array where predicate is true, and -1 otherwise.
arr_1.lastIndexOf(1); // Returns the index of the last occurrence of a specified value in an array.


// Add element
arr_1.push(4); // Add element to end of the array
arr_1.unshift(0); // Add element to beginning of the array

// Read more about arrays in [mdn]