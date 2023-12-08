/*

Author: @China_Unisan
Title: FizzBuzz
Source: http://eloquentjavascript.net/code
Description: Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" ,
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
"Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed
out a significant percentage of programmer candidates. So if you solved
it, you’re now allowed to feel good about yourself.)


*** Solution ***

maxNumber = 101
currentNumber = 1

Exceptions

while currentNumber < maxNumber
    if currentNumber % 3 == 0 and currentNumber % 5 == 0
        print 'FizzBuzz'
    else if currentNumber % 3 == 0 or currentNumber % 5 == 0
        print 'Fizz' || 'Buzz'    
    currentNumber by 1

*/

x = 1        // currentNumber variable
y = 101     // maxNumber variable

for (var x = 1, y = 101; x < y; x++) {
  if (x % 3 == 0 && x % 5 == 0)
      console.log('FizzBuzz')
      
  else if (x % 3 == 0 || x % 5 == 0)
      console.log('Fizz' ||  'Buzz') //Awkward behaviour 'cause at some point it changes to 'Buzz'
}

