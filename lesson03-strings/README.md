# Lesson: Advanced String Operations

## Warm-up Written Question (15 minutes)

Describe the concept of string interning and how it affects string comparison in JavaScript. What are the performance implications?

String interning helps save memory by ensuring that identical strings are stored only once in memory, allowing multiple parts of the code to reference the same string instead of creating separate copies. In string comparison its quicker to know if the string was grabbed from the same location instead of grabbing the same string from different locations then comparing the contents to confirm that they are the same. String interning saves time when comparing in Javascript. The performance becomes faster and the space and memory is being saved.

//////////////////////BETTER EXPLANATION/////////////////////////

String interning helps save memory by ensuring that identical strings are stored only once in memory. This allows multiple parts of the code to reference the same string instead of creating separate copies. In terms of string comparison, it's quicker to check if two strings are from the same memory location rather than comparing their contents. Without interning, each string might be stored in a different location, requiring a comparison of the string values to confirm they are the same.

String interning improves performance by speeding up string comparisons and reducing memory usage. By reusing string instances, both memory space is saved and comparison operations are faster.

## Lecture Content (20 minutes)

### Advanced String Concepts

1. Regular Expressions
   - Pattern matching
   - Common regex patterns
   - test() and exec() methods
   - replace() with regex

## Problem Solving (35 minutes)

Today's problem focuses on implementing a string matching algorithm to find all occurrences of a pattern in a text.

## Recap (15 minutes)

- Review of string matching algorithms & Performance comparison
Review of String Matching Algorithms
String matching algorithms help find patterns within text efficiently. Common ones include:

Brute Force → Checks every position (O(n * m)). Simple but slow.
Knuth-Morris-Pratt (KMP) → Uses a partial match table to avoid redundant checks (O(n + m)).
Boyer-Moore → Skips unnecessary comparisons using character jumps (O(n/m) best case).
Rabin-Karp → Uses hashing for multiple pattern searches (O(n + m) average).
Regular Expressions → Built-in pattern matching with optimized engines (varies in complexity).

- Best practices discussion

✅ Choose the right algorithm → Use Boyer-Moore or KMP for long texts, and regex for flexible patterns.
✅ Optimize regex patterns → Avoid greedy quantifiers (.*), unnecessary capture groups, and excessive backtracking.
✅ Use test() for quick checks → Returns true/false, avoids unnecessary computation.
✅ Use matchAll() or exec() for index tracking → If you need match positions, regex with exec() is best.
✅ For multiple patterns, use Rabin-Karp → Hash-based matching is useful when searching for many patterns at once.

## Additional Resources

#### MDN Definition

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

#### Practice Problems

- https://www.codewars.com/kata/sleigh-authentication
- https://www.codewars.com/kata/sort-and-star
- https://www.codewars.com/kata/reversed-words
- https://www.codewars.com/kata/thinkful-string-drills-quotable
