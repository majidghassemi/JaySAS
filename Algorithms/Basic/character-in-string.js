// Count the occurrence of a given character in a string?

const countCharacter = (str, substr) => {
    let counter = 0;
    for (let i=0; i < str.length; i++) {
        if (str[i] == substr) counter++;
    }
    return counter;
}

const countCharacter2 = (str, substr) => {
  let counter = 0;
  for (item of str) {
    if (item == substr) counter++;
  }

  return counter;
};

