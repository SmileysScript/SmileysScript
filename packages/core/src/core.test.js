const core = require("./core.js");

// The tests here are kept to a minimum to not overwrite external tests which could effect true coverage
describe("core.compile()", () => {
  test("Compile Simple Program", () => {
    expect(core.compile("😀 😜 Hello")).toEqual('console.log("Hello");');
  });
});
