/*
 *  description: Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
 * author: https://github.com/IAmCalvinMas
 */

let str = "w3resources".split("");
let newStr = new Array();

str.forEach((item, index, array) => {
  newStr.push(array[array.length - index - 1]);
});

console.log(newStr.join(""));
