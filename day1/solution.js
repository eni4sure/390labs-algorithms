/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} passed_array_position
 */
var twoSum = function(nums, target) {
  var passed_array_position = new Array();
  for ( let index_of_array_1 = 0; index_of_array_1 < nums.length; index_of_array_1++ ) {
    for (let index_of_array_2 = 0; index_of_array_2 < nums.length; index_of_array_2++) {
      if ( index_of_array_1 == index_of_array_2 ){ continue; }
      if ( (nums[index_of_array_1] + nums[index_of_array_2]) == target ) { 
        passed_array_position.push( [ index_of_array_1, index_of_array_2 ] )
      }
      if( (nums[index_of_array_2] + nums[index_of_array_1]) == target ) {
        continue;
      }
    }
  }
  console.log(passed_array_position);
};

// Test Inputs
var nums = [2, 6, 5, 2, 8, 3, 0, 1, 8];
var target = 11;
twoSum( nums, target );

// Output : [[1, 2 ], [2, 1 ], [4, 5 ], [5, 4 ], [5, 8 ], [8, 5 ] ]