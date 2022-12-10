/*
 * name: flattening
 * author: https://github.com/IAmCalvinMas
 */

const arrOfArr = (arr) => arr.reduce((a, b) => a.concat(b));

console.log(
  arrOfArr([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
