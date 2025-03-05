const maxSubArraySum = require("./problem");

test("Returns correct max for [2,3,1,2,4,3] of length 2", () => {
  expect(maxSubArraySum([2, 3, 1, 2, 4, 3], 2)).toEqual(7);
});

test("Returns correct max for [2, 1, 6, 5, 4] of length 2", () => {
  expect(maxSubArraySum([2, 1, 6, 5, 4], 2)).toEqual(11);
});

test("Returns correct max for [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19] of length 1", () => {
  expect(maxSubArraySum([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 1)).toEqual(62);
});

test("Returns correct max for [1, 2, 3, 4, 5] of length 3", () => {
  expect(maxSubArraySum([1, 4, 16, 22, 5, 7, 8, 9, 10], 3)).toEqual(43);
});
