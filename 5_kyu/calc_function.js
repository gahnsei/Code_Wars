const one = (params) => {
  const numb1 = 1;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const two = (params) => {
  const numb1 = 2;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const three = (params) => {
  const numb1 = 3;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const four = (params) => {
  const numb1 = 4;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const five = (params) => {
  const numb1 = 5;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const six = (params) => {
  const numb1 = 6;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const seven = (params) => {
  const numb1 = 7;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const eight = (params) => {
  const numb1 = 8;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const nine = (params) => {
  const numb1 = 9;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};
const ten = (params) => {
  const numb1 = 10;
  if (!params) {
    return numb1;
  } else {
    const operation = params[0];
    const numb2 = params[1];
    return operations(operation, numb1, numb2);
  }
};

const plus = (numb) => [`+`, numb];
const minus = (numb) => [`-`, numb];
const times = (numb) => [`*`, numb];
const divideBy = (numb) => [`/`, numb];

const operations = (operation, numb1, numb2) => {
  switch (operation) {
    case `+`:
      return numb1 + numb2;
      break;
    case `-`:
      return numb1 - numb2;
      break;
    case `*`:
      return numb1 * numb2;
      break;
    case `/`:
      return Math.floor(numb1 / numb2);
  }
};
