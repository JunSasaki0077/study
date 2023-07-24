const { sum } = require("./sum");

test("adds 1+ 2 to equsl 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 3+ 4 to equsl 7", () => {
  expect(sum(3, 4)).toBe(8);
});
