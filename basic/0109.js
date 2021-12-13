/*
 * desc: Write a JavaScript program to calculate days left until next Christmas.
 * author: calvinmas@spacemilk
 */

let today = new Date();
let nextChristmas = new Date(today.getFullYear(), 11, 25);

let daysLeft = nextChristmas.getTime() - today.getTime();

console.log(Math.round(daysLeft / (3600000*24), 0), 'days left until Christmas');
