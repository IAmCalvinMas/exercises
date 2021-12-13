/*
 * name: time displayer
 * author: calvinmas@spacemilk
 */

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',
    'saturday', 'sunday'];
  let now = new Date();
  let today = now.getDay();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let meridian = now.getHours() >= 12 ? 'pm': 'am';

  console.log(hour, ': ', meridian, ': ',  minutes, ': ', seconds);
  console.log('Today is: ', days[today - 1].toLowerCase()); 
