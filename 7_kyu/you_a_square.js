const youreASquare = (numb) =>
  numb < 0 ? false : numb === 0 ? true : Math.sqrt(numb) % 1 === 0;

const test = youreASquare(25);

console.log(test);
