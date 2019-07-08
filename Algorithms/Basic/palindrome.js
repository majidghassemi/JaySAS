// Return True/False for given string if string is palindrome or not

// Approach
const palindrome = str => {
    let palindromeStr = str.split('').reverse().join('');
    if (str === palindromeStr) return true;
    return false;
};
