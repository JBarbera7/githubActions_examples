const sum = require("./sum");

test("Adds 1 + 4 to equal 3", () => {
  expect(sum(1, 4)).toBe(3);
});