/*
 * name: asort & dsort algos
 * author: malesela
 * company: spacemilk
 * date: 2021-08-27 22:17
 */


const sort = (nums, order) => {
  
  if( !Array.isArray(nums) && ['a','d'].includes(order) ){

    return false;
  }

  while( nums.some((item, index, arr) => 
	
   (order == 'a') ? item > arr[index+1] : item < arr[index+1]

  ) ){

  nums.forEach( (item, index, array) => {

    if( index != array.length - 1 ){

      let nextItem = array[index + 1];

      if( (order == 'a') ? 
	  item > array[index+1] : item < array[index+1]
      ){

        nums[index] = nextItem;
	nums[index +1] = item;
      }
    }
  });

  }

  return nums;
};


console.log( sort([2,1,7,2,3,4], 'a') );
console.log( sort([2,1,7,2,3,4], 'd') );
