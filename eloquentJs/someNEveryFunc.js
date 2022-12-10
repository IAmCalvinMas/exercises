/*
 * name: Replica of the some and every built-in function
 * author: https://github.com/IAmCalvinMas
 */

const some = (arr) => {
  return arr.forEach((item) => item / item == 1);
};

some([1, 2, 3]);
