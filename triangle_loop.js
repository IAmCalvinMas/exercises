/*

Author: @China_Unisan
Title: looping a triangle
source: http://eloquentjavascript.net/code, exercise 1 (Loop a triangle)
Description: write a program that makes seven calls to console.log to output the
following triange:

#
##
###
####
#####
######
#######


*** Solution ***

declare and assign variable x and y to '#' and 0 respectively
while y < 7
    print x
    add '#' to x

*/

for( var x = '#', y = 0; y < 7; y++ )
  console.log(x), x +='#'
