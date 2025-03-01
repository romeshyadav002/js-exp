import { describe } from "vitest";
import { test } from "vitest";
import { deepClone1, deepClone2, deepClone3, deepClone4 } from "./deepClone";

describe("deepclone function", () => {
  const testCases = [
    "abc",
    1,
    { a: 1 },
    new Date(),
    ["abc"],
    undefined,
    null,
    new RegExp("d+", "g"),
    new Map([
      ["name", "John"],
      ["age", 30],
      ["city", "New York"],
    ]),
    new Set([1, 2, 3, 3, 4, 5]),
  ];

  test.skip("deepclone1 with JSON parsing", async () => {
    const testResults = testCases.map((val) => deepClone1(val));
    console.log({ testResults });
  });

  test.skip("deepclone2 with structured clone", async () => {
    const testResults = testCases.map((val) => deepClone2(val));
    console.log({ testResults });
  });

  test.skip("deepclone3 with loadash cloneDeep", async () => {
    const testResults = testCases.map((val) => deepClone3(val));
    console.log({ testResults });
  });

  test("deepclone4 ", async () => {
    const testResults = testCases.map((val) => deepClone4(val));
    console.log({ testResults });
  });
});
