import { describe, test, expect, vi } from "vitest";
import { flattenArray } from "./flattenArray";

describe("flatten Nested  array function", () => {
  test("flatten array test", async () => {
    console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
  });
});
