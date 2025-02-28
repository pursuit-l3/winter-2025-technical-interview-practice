const areAnagrams = require('./problem.js'); // Assuming function is in areAnagrams.js

describe('areAnagrams', () => {
  test('should return true for anagrams', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
    expect(areAnagrams('triangle', 'integral')).toBe(true);
    expect(areAnagrams('evil', 'vile')).toBe(true);
  });

  test('should return false for non-anagrams', () => {
    expect(areAnagrams('hello', 'world')).toBe(false);
    expect(areAnagrams('foo', 'bar')).toBe(false);
  });

  test('should return false for strings of different lengths', () => {
    expect(areAnagrams('abc', 'abcd')).toBe(false);
    expect(areAnagrams('test', 'ttees')).toBe(false);
  });

  test('should handle empty strings correctly', () => {
    expect(areAnagrams('', '')).toBe(true);
    expect(areAnagrams('a', '')).toBe(false);
  });

  test('should handle case-sensitive anagrams', () => {
    expect(areAnagrams('Listen', 'Silent')).toBe(false); // Case-sensitive check
  });
});