const squareEveryNumb = (numb) =>
  +numb
    .toString()
    .split(``)
    .map((ele) => +ele * +ele)
    .join(``);

console.log(squareEveryNumb(9119));
