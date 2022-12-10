/*
 *  name: bean Counting
 * author: https://github.com/IAmCalvinMas
 */

function countBs(str) {
  let bs = 0;

  str.split("").forEach((item) => {
    if (item == "B") bs += 1;
  });
  return bs;
}

console.log(countBs("maleselBBBa"));

function countChar(str, chr) {
  let bs = 0;

  str.split("").forEach((item) => {
    if (item == chr) bs += 1;
  });
  return bs;
}

console.log(countChar("malesela", "a"));
