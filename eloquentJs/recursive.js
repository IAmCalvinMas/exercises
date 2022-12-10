/*
 * name: evenness tester
 * author: https://github.com/IAmCalvinMas
 */

const evenness = (N) => {
  N = Math.abs(N);

  while ((N > 0 && N != 0) || (N != 1 && N > 1)) N -= 2;

  return N == 0 ? true : false;
};

console.log(evenness(-33));
