const { getSum } = require("./calc");

test("adds 2 + 4 equal 6", () => {
  expect(getSum(2, 4)).toBe(6);
});

test("adds -111111 + 111111 equal 0", () => {
  expect(getSum(-111111, 111111)).toBe(0);
});
