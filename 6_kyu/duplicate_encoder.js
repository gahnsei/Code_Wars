const dublicateEncoder = (string) => {
  string = string.toLowerCase();
  let newString = ``;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isRepeated =
      string.split(``).filter((ele) => ele === letter).length > 1;

    if (isRepeated) {
      newString += `)`;
    } else {
      newString += `(`;
    }
  }

  return newString;
};

const test = dublicateEncoder("recede");

console.log(test);
