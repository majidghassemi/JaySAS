// Problem Explanation

// Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays
// with the length provided by size (second argument)


const chunkyMonkey = (arr, size) => {
    let newArr = [];
    for (let i=0; i < arr.length; i+= size) {
        newArr.push(arr.slice(i, i+size))
    }

    return newArr;
}
// You can use While loop either