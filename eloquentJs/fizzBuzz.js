/*
 * name: fizzBuzz
 * author: https://github.com/IAmCalvinMas
 */

function looper(multiplicant, word) {
  const vals = new Array();

  for (let x = 1; multiplicant * x <= 100; x++) {
    product = multiplicant * x;
    vals.push(product);
  }

  console.log(word.repeat(vals.length));
}

looper(3, "fizz ");
looper(5, "buzz ");
looper(15, "fizzBuzz ");
