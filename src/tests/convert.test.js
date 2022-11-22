import { expect, jest, test } from "@jest/globals";
/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

import { sum } from "../bb";
import { sub } from "../index";

test(`Add 1+ 2 to equal 3`, () => {
  expect(sum(1, 2)).toBe(3);
});
test(`Add 1+ 2 to equal 3`, () => {
  expect(sub(1, 2)).toBe(3);
});
