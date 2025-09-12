describe("Math Operations", () => {
    it("addition works", () => {
      expect(2 + 2).toBe(4);
    });

    it("subtraction works", () => {
      expect(5 - 2).toBe(3);
    });

    it("this one fails", () => {
      expect(2 * 2).toBe(5);
    });

    it.skip("skipped test", () => {
      assert.ok(false);
    });
});
