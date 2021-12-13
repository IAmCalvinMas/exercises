/*
 * name: surface area calculator
 * author: calvinmas@spacemilk
 */

const surfaceArea = function (l, b, h) {

  return 2*b*h + 2*b*l + 2*h*l;
}

console.log(surfaceArea(2, 3, 4));
