const stringToArray = require("./stringToArray.js");

describe("stringToArray()", () => {
  test("String With No Emojis", () => {
    expect(stringToArray("abc")).toEqual([0x61, 0x62, 0x63]);
  });

  test("String With Emojis", () => {
    expect(stringToArray("abc💩")).toEqual([0x61, 0x62, 0x63, 0x1f4a9]);
  });
});
