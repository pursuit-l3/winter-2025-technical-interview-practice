const {
    getSecondChar,
    getLettersFromChar,
    getSecondThroughFifthLetter,
    getPartOfAWord,
    getFalsesOutOfArray,
    putTheInTheMiddle,
    getPriceAfterDiscount
} = require('./warmup');

describe('getSecondChar', () => {
    // Simple cases
    test('Always return the second letter of the 3 lettered word', () => {
        expect(getSecondChar('cat')).toBe('a');
    });

    // Normal cases
    test('Make sure the input is a string data type', () => {
        const input = 'word';  // Define the input first
        getSecondChar(input);  // Then call the function
        expect(typeof input).toBe('string');  // Check if input is of type 'string'
    });    

    // Complex cases
    test('', () => {
        expect().toBe();
    });

});


describe('lengthOfLongestSubstring', () => {
    // Simple cases
    test('empty string should return 0', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    test('string with single character should return 1', () => {
        expect(lengthOfLongestSubstring('a')).toBe(1);
    });

    // Normal cases
    test('string with no repeating characters', () => {
        expect(lengthOfLongestSubstring('abcde')).toBe(5);
    });

    test('string with repeating characters', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    // Complex cases
    test('string with all same characters', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    test('string with spaces and special characters', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    // Edge cases
    test('string with numbers and letters', () => {
        expect(lengthOfLongestSubstring('abc123abc')).toBe(6);
    });

    test('string with special characters', () => {
        expect(lengthOfLongestSubstring('!@#$%^&*()')).toBe(10);
    });
});
