const parser = require("./parser.js");

describe("parser()", () => {
  describe("headers", () => {
    test("Program", () => {
      expect(parser([{ type: "string", value: "😀" }])).toEqual({
        type: "Program",
        body: [],
      });
    });

    test("Invalid Emoji", () => {
      expect(() => {
        parser([{ type: "string", value: "😜" }]);
      }).toThrow("Not A Valid File Header: 😜");
    });

    test("Input Number", () => {
      expect(() => {
        parser([{ type: "number", value: 100 }]);
      }).toThrow("Not A Valid File Header: 100");
    });
  });

  test("One Call Expression", () => {
    expect(
      parser([
        { type: "string", value: "😀" },
        { type: "string", value: "😜" },
        { type: "string", value: "Hello" },
      ])
    ).toEqual({
      type: "Program",
      body: [
        {
          type: "CallExpression",
          name: "Log",
          arguments: [{ type: "StringLiteral", value: "Hello" }],
        },
      ],
    });
  });

  test("Two Call Expressions", () => {
    expect(
      parser([
        { type: "string", value: "😀" },
        { type: "string", value: "😜" },
        { type: "string", value: "Hello" },
        { type: "string", value: "😜" },
        { type: "string", value: "Hi" },
      ])
    ).toEqual({
      type: "Program",
      body: [
        {
          type: "CallExpression",
          name: "Log",
          arguments: [{ type: "StringLiteral", value: "Hello" }],
        },
        {
          type: "CallExpression",
          name: "Log",
          arguments: [{ type: "StringLiteral", value: "Hi" }],
        },
      ],
    });
  });

  describe("call expressions", () => {
    describe("log", () => {
      test("Logging Strings", () => {
        expect(
          parser([
            { type: "string", value: "😀" },
            { type: "string", value: "😜" },
            { type: "string", value: "Hello" },
          ])
        ).toEqual({
          type: "Program",
          body: [
            {
              type: "CallExpression",
              name: "Log",
              arguments: [{ type: "StringLiteral", value: "Hello" }],
            },
          ],
        });
      });

      test("Logging Ints", () => {
        expect(
          parser([
            { type: "string", value: "😀" },
            { type: "string", value: "😜" },
            { type: "number", value: 100 },
          ])
        ).toEqual({
          type: "Program",
          body: [
            {
              type: "CallExpression",
              name: "Log",
              arguments: [{ type: "NumberLiteral", value: 100 }],
            },
          ],
        });
      });
    });
  });
});
