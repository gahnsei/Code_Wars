const arrayDiff = (arr1, arr2) => arr1.filter((ele) => !arr2.includes(ele));

const test = arrayDiff([1, 2, 2, 2, 3], [2]);

console.log(test);
