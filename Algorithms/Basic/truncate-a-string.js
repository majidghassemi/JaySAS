// Truncate a string
// Return string followed by ...

const truncateString = (str, num) => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) return str;
  // Return str truncated with '...' concatenated to the end of str.
  return `${str.slice(0, num)} ...`;
};

// It's not only available approach
// If you have another ideas and approaches
// Please Share with me or fork this repo or submit issues
