/*
 * name: max
 * author: malesela@spacemilk
 * date: 2021-08-27 18:12
 */

let feedback;


try {

feedback = (...nums) =>{

  if( nums.some(x => isNaN(x) || x.toString().length == 0) ){

    throw new Error('Some array values are not numbers');
  }
  else{
	
    return nums.sort().reverse()[0];
  }
}
}
catch(err){

  feedback = console.log(err);
}

export default feedback;
