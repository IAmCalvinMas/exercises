/*
 * name: power
 * author: malesela
 * company: Spacemilk
 */

const power = (base, exponent) => {

  let product = 1;
  
  for(let x = 1; x <= exponent; x++){ product *= base; }

  return product;
}

console.log(power(2, 3));
