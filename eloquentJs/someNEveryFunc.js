/*
 * name: Replica of the some and every built-in function
 * author: malesela
 * company: spacemilk
 * date: 2021-08-31 12:55
 */

const some = arr => {

  return arr.forEach( item => item/item == 1 );

};

some([1,2,3]);
