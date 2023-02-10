/*
 * task: write a function called "countAllPaarl" that takes a parameter string
 * with registration numbers separated by commas and returns the number of
 * registration numbers in the string for Paarl.
 *
 * N.B: Paarl registration numbers start with CJ
 */

const assert = require("assert");


function countAllPaarl(string) {

  assert.equal(typeof string, "string")

  let paarlReg = 0;

  let allRegs = string.split(",");

  for(let x = 0; x < allRegs.length; x++ ){

		if (allRegs[x].trim().startsWith("CJ")){

			paarlReg += 1;
		}
	}

	return paarlReg;
}

console.log("Paarl registrations: ", countAllPaarl("CJ 345 123, CJ 2345, CL 123-546"));

