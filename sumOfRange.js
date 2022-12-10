/*
 * name: sum of range
 * author: https://github.com/IAmCalvinMas
 * date: 2021-08-27 22:09
 */

const range = (a, b) => {
  try {
    a * b;
  } catch (err) {
    console.error(err);
  }

  const nums = [a, b].sort();

  for (let x = nums[0]; x < nums[1] - 1; x++) nums.push(x + 1);

  return nums.sort();
};

const sum = (nums) => nums.reduce((a, b) => a + b);

console.log(sum(range(1, 4)));
