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
  let hashTable = new Map(); // Declare a hash table

  nums.map((num, index) => {
    let lookUp = target - num;
    if (nums.find((number, ind) => {
      if (number === lookUp) {
        hashTable.set(index, ind);
      }
    })) {
    };
  });

  let firstKey = hashTable.keys().next().value;
  let firstValue = hashTable.get(firstKey);


  return [firstKey, firstValue];
};
console.log(twoSum([1, 2, 3, 4, 5, 6], 9));
module.exports = twoSum;