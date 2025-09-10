
test("addition works", () => {
  expect(2 + 2).toBe(4);
});

test("subtraction works", () => {
  expect(5 - 2).toBe(3);
});

test("this one fails", () => {
  expect(2 * 2).toBe(5);
});

test.skip("skipped test", () => {
  assert.ok(false);
});
