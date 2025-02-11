const topKFrequent = require("/Users/paulgasbarra/Code/pursuit/dsa-coursework-l3-2025/lesson08-hash-tables/problem");

// Test case 1: nums contains positive and negative numbers
let nums = [1, -2, 2, 3, -3, 3, 3];
let k = 2;
console.log(topKFrequent(nums, k)); // Output: [3, -3]

// Test case 2: nums contains duplicate elements
nums = [1, 2, 2, 3, 3, 3];
k = 3;
console.log(topKFrequent(nums, k)); // Output: [3, 2, 1]

// Test case 3: nums contains only one element
nums = [7];
k = 1;
console.log(topKFrequent(nums, k)); // Output: [7]

// Test case 4: nums contains all the same elements
nums = [5, 5, 5, 5, 5];
k = 1;
console.log(topKFrequent(nums, k)); // Output: [5]

// Test case 5: nums contains both positive and negative numbers with the same frequency
nums = [-1, -1, 1, 1, 2, 2];
k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, -1]


const twoSum = require('./problem');

describe('twoSum function', () => {
  test('returns correct indices for a valid pair', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('returns correct indices when numbers appear later in the array', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('handles negative numbers correctly', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('works with duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('returns indices in any valid order', () => {
    const result = twoSum([1, 5, 3, 7], 8);
    expect(result.sort()).toEqual([1, 2]);
  });
});