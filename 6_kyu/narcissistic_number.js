const narcissisticNumber = (numb) =>
  numb
    .toString()
    .split(``)
    .map((ele) => Math.pow(+ele, numb.toString().length))
    .reduce((prev, curr) => prev + curr) === numb;

const test = narcissisticNumber(154);

console.log(test);
