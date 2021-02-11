const lexer = require("./lexer.js");

describe("lexer()", () => {
  describe("one section", () => {
    test("Word", () => {
      expect(lexer("Hello")).toEqual([{ type: "string", value: "Hello" }]);
    });

    test("Emoji", () => {
      expect(lexer("😜")).toEqual([{ type: "string", value: "😜" }]);
    });

    test("Int", () => {
      expect(lexer("100")).toEqual([{ type: "number", value: 100 }]);
    });

    test("Floating Point", () => {
      expect(lexer("100.1")).toEqual([{ type: "number", value: 100.1 }]);
    });
  });

  describe("multiple sections", () => {
    test("Word and Word", () => {
      expect(lexer("Hello Hi!")).toEqual([
        { type: "string", value: "Hello" },
        { type: "string", value: "Hi!" },
      ]);
    });

    test("Word and Int", () => {
      expect(lexer("Hello 100")).toEqual([
        { type: "string", value: "Hello" },
        { type: "number", value: 100 },
      ]);
    });
  });
});
