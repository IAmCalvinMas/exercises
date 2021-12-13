/*
 *  descption: Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
 *  author: calvinmas@spacemilk
 */


const results = new Array();

for( let year = 2014; year <= 2050; year++ ){

  let date = new Date(year, 0, 01);

  if(date.getDay() == 0) results.push(year);
}

console.log(results.join());
