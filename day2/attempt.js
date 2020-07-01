/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var newNums1 = nums1;
  nums1 = new Array();
  for (let i = 0; i < m; i++) {
    if ( -10^9 <= newNums1[i] ){
      nums1.push( newNums1[i] );
    }
  }
  for (let i = 0; i < n; i++) {
    if ( nums2[i] <= 10^9 ) {
      nums1.push( nums2[i] );
    }
  }
  nums1.sort();
  console.log( nums1 );
};

// Test Inputs
var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;

merge( nums1, m, nums2, n );