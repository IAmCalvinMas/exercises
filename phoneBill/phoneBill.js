/**
 * task: write a function called totalPhoneBill that takes in a string calls made and sms's sent. 
 * Calculate the bill if it costs R2.75 per call and R0.65 per sms
 *
 */

function totalPhoneBill(string) {

  //initiallizing calls and sms counter from 0
  noOfCalls = 0;
  noOfSMS = 0;

  //changing the string to an array so that we can count the number of calls and smses
  arrayToString = string.split(",");

  //removing whitespaces and changing items to lowercase
  arrayToString.forEach((item, index) => {
    arrayToString[index] = item.trim().toLowerCase();
  });

  //Finally counting the number of calls and smses from the array
  arrayToString.forEach(item => {
    if (item == "call") {
      noOfCalls += 1;
    } else if (item == "sms") {
      noOfSMS += 1;
    }
  });

  //printing the bill and adding up the number of calls and smses with their costs
  console.log("Bill is: R",noOfCalls * 2.75 + noOfSMS * 0.65);
}

//calling the totalPhoneBill function with a string log of calls and smses
totalPhoneBill("call, sms, call, sms, sms");
