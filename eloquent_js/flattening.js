/*
 * name: flattening
 * author: Malesela
 * company: Spacemilk
 * date: 2021-08-31 11:06
 */

const arrOfArr = arr => arr.reduce( (a,b) => a.concat(b) );

console.log( arrOfArr([ [1,2], [3,4], [5,6] ]) );
