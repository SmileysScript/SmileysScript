const arrayToString = require("./arrayToString.js");

describe("arrayToString()", () => {
  test("String With No Emojis", () => {
    expect(arrayToString([0x61, 0x62, 0x63])).toEqual("abc");
  });

  test("String With Emojis", () => {
    expect(arrayToString([0x61, 0x62, 0x63, 0x1f4a9])).toEqual("abc💩");
  });
});
