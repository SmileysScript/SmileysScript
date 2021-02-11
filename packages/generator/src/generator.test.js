const generator = require("./generator.js");

describe("generator()", () => {
  describe("program", () => {
    test("empty", () => {
      expect(generator({ type: "Program", body: [] })).toEqual("");
    });

    describe("contains CallExpression", () => {
      test("One CallExpression", () => {
        expect(
          generator({
            type: "Program",
            body: [
              {
                type: "CallExpression",
                name: "Log",
                arguments: [{ type: "StringLiteral", value: "Hello" }],
              },
            ],
          })
        ).toEqual('console.log("Hello");');
      });

      test("Two CallExpressions", () => {
        expect(
          generator({
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
          })
        ).toEqual('console.log("Hello");console.log("Hi");');
      });

      describe("Log", () => {
        test("String", () => {
          expect(
            generator({
              type: "Program",
              body: [
                {
                  type: "CallExpression",
                  name: "Log",
                  arguments: [{ type: "StringLiteral", value: "Hello" }],
                },
              ],
            })
          ).toEqual('console.log("Hello");');
        });

        test("Number", () => {
          expect(
            generator({
              type: "Program",
              body: [
                {
                  type: "CallExpression",
                  name: "Log",
                  arguments: [{ type: "NumberLiteral", value: 100 }],
                },
              ],
            })
          ).toEqual("console.log(100);");
        });
      });
    });
  });
});
