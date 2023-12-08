/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*

Author: @China_Unisan
Title: Chess Board
Source: http://eloquentjavascript.net/code
Description: Write a program that creates a string that represents an 8 × 8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #


 *** Solution  ***
 
 charsPerLine = max_loops = 8
 
 ** Pseudocode **
 
 loop 8 times
     print 8 characters per line
          if current character length is odd 
              print ' # # # #'
          else 
              print '# # # # '
*/


// y = charsPerLine
for( var y = 8 ; y > 0; y-- ){
    ( y % 2 !=0)? console.log('# # # #'): console.log(' # # # #')
}
