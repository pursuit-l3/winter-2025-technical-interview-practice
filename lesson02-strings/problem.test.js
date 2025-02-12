const {
    getSecondChar,
    getLettersFromChar,
    getSecondThroughFifthLetter,
    getPartOfAWord,
    getFalsesOutOfArray,
    putTheInTheMiddle,
    getPriceAfterDiscount
} = require('./warmup');

const lengthOfLongestSubstring = require('./problem.js');

describe('getSecondChar', () => {
    // Simple cases
    test('returns the middle letter', () => {
        expect(getSecondChar('hit')).toBe('i');  // Then, ensure that the second character is alwasy returned
    });

    // Normal cases
    test('returns null for strings shorter than 3 characters', () => {
        let word = "hi";
        expect(word.length < 3).toBe(true); 
        expect(getSecondChar(word)).toBeNull();
    });

    test('returns null for strings longer than 3 characters', () => {
        let word = "hello";
        expect(word.length > 3).toBe(true);  
        expect(getSecondChar(word)).toBeNull();    
    });
    
    // Complex cases
    test('returns null if input data type is not a string', () => {
        [ ["hello"], 123, null, undefined ].forEach(input => {
            expect(getSecondChar(input)).toBeNull();
        });
    });
});


describe('getLettersFromChar', () => {
    // Simple cases
    test('returns second and third letter', () => {
        expect(getLettersFromChar('hit')).toBe('it');  // Then, ensure that the second character is alwasy returned
    });

    // Normal cases
    test('returns null for strings shorter than 3 characters', () => {
        let word = "hi";
        expect(word.length < 3).toBe(true); 
        expect(getLettersFromChar(word)).toBeNull();
    });

    
    // // Complex cases
    test('returns null if input data type is not a string', () => {
        [ ["hello"], 123, null, undefined ].forEach(input => {
            expect(getLettersFromChar(input)).toBeNull();
        });
    });
});

describe('getSecondThroughFifthLetter', () => {
    // Simple cases
    test('returns second through fifth letter', () => {
        expect(getSecondThroughFifthLetter('hello')).toBe('ello');  // Then, ensure that the second character is alwasy returned
    });

    // Normal cases
    test('returns null for strings shorter than 5 characters', () => {
        let word = "hi";
        expect(word.length < 5).toBe(true); 
        expect(getSecondThroughFifthLetter(word)).toBeNull();
    });

    test('returns null for strings greater than 5 characters', () => {
        let word = "goodmorning";
        expect(word.length > 5).toBe(true); 
        expect(getSecondThroughFifthLetter(word)).toBeNull();
    });
    
    // Complex cases
    test('returns null if input data type is not a string', () => {
        [ ["hello"], 123, null, undefined ].forEach(input => {
            expect(getLettersFromChar(input)).toBeNull();
        });
    });
});

describe('getPartOfAWord', () => {
    // Simple cases
    test('returns second through fifth letter', () => {
        expect(getSecondThroughFifthLetter('hello')).toBe('ello');  // Then, ensure that the second character is alwasy returned
    });

    // Normal cases
    // test('returns null for strings shorter than 3 characters', () => {
    //     let word = "hi";
    //     expect(word.length < 3).toBe(true); 
    //     expect(getLettersFromChar(word)).toBeNull();
    // });

    
    // Complex cases
    // test('returns null if input data type is not a string', () => {
    //     [ ["hello"], 123, null, undefined ].forEach(input => {
    //         expect(getLettersFromChar(input)).toBeNull();
    //     });
    // });

    // Edge cases
    // test('returns null if input data type is not a string', () => {
    //     [ ["hello"], 123, null, undefined ].forEach(input => {
    //         expect(getLettersFromChar(input)).toBeNull();
    //     });
    // });
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
