import { sum } from "../bb";
import { sub } from "../index";
import { expect, jest, test } from "@jest/globals";

test(`Add 1+ 2 to equal 3`, () => {
  expect(sum(1, 2)).toBe(3);
});
test(`Add 1+ 2 to equal 3`, () => {
  expect(sub(1, 2)).toBe(3);
});
