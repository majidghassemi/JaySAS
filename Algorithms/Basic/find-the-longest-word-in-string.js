// returns length of longest word (integer)
// Approach One
const findLongest1 = str => {
  let words = str.split(" "),
    max = 0; 
  for (let i = 0; i < words.length; i++) {
    if (max < words[i].length) {
      max = words[i].length;
    } else {
      continue;
    }
  }

  return max;
};

// Approach Two
const findLongest2 = str => str.split(' ').reduce((acc, index) => Math.max(acc, index.length), 0);