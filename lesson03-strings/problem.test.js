const stringMatching = require("./problem");

describe("stringMatching", () => {
  it("should return an array of indices where the pattern is found in the text", () => {
    expect(stringMatching("ababcababcabc", "abc")).toEqual([2, 7, 10]);
    expect(stringMatching("hello world", "xyz")).toEqual([]);
    expect(stringMatching("abababab", "aba")).toEqual([0, 4]);
    expect(stringMatching("aaaaa", "aa")).toEqual([0, 2]);
  });

  it("should return an empty array if the pattern is not found", () => {
    expect(stringMatching("ababcababcabc", "xyz")).toEqual([]);
    expect(stringMatching("hello world", "abc")).toEqual([]);
    expect(stringMatching("abababab", "xyz")).toEqual([]);
    expect(stringMatching("aaaaa", "xyz")).toEqual([]);
  });

  it("should be case-sensitive", () => {
    expect(stringMatching("AbcAbcAbc", "abc")).toEqual([]);
    expect(stringMatching("AbcAbcAbc", "Abc")).toEqual([0, 3, 6]);
    expect(stringMatching("AbcAbcAbc", "AbC")).toEqual([]);
  });

  it("should return an empty array if either text or pattern is an empty string", () => {
    expect(stringMatching("", "abc")).toEqual([]);
    expect(stringMatching("ababcababcabc", "")).toEqual([]);
    expect(stringMatching("", "")).toEqual([]);
  });
});
