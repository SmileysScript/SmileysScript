const smileysscript = require("./smileysscript.js");

// The tests here are kept to a minimum to not overwrite external tests which could effect true coverage
describe("smileysscript()", () => {
  test("Compile Simple Program", () => {
    expect(smileysscript.compile("😀 😜 Hello")).toEqual(
      'console.log("Hello");'
    );
  });
});
