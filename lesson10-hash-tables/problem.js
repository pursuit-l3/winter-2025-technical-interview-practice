/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
const twoSum = (nums, target) => {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; 

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(nums[i], i);
  }

  return []; 
};
console.log(twoSum([1, 2, 3, 4, 5, 6], 9));
module.exports = twoSum;