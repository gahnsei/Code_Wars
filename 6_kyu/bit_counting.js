const bitCounting = (int) => {
  const bin = int.toString(2);
  const bit = bin.replace(/0/g, ``).length;
  return bit;
};

bitCounting(1234);
