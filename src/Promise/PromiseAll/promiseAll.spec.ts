import { describe, test, expect } from "vitest";
import { customPromiseAll } from "./promiseAll"; // Adjust path if necessary

describe("customPromiseAll", () => {
  test("resolves with an array of resolved values", async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve("hello");
    const p3 = Promise.resolve(true);

    const promises = [p1, p2, p3];
    const result = await customPromiseAll(promises);
    console.log({ result });

    expect(result).toEqual([1, "hello", true]);
  });

  test("handles empty input", async () => {
    const result = await customPromiseAll([]);
    console.log({ result });
    expect(result).toEqual([]);
  });

  test("rejects if any promise rejects", async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject("error");
    const p3 = Promise.resolve(true);

    const promises = [p1, p2, p3];

    await expect(customPromiseAll(promises)).rejects.toBe("error");
  });

  test("resolves promises with different resolved values", async () => {
    const p1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(1), 50)
    );
    const p2 = new Promise<string>((resolve) =>
      setTimeout(() => resolve("two"), 100)
    );
    const p3 = new Promise<boolean>((resolve) =>
      setTimeout(() => resolve(true), 25)
    );

    const promises = [p1, p2, p3];
    const result = await customPromiseAll(promises);
    console.log({ result });
    expect(result).toEqual([1, "two", true]);
  });

  test("resolves when all promises are already resolved", async () => {
    const resolvedValues = [1, "two", true];
    const promises = resolvedValues.map((value) => Promise.resolve(value));
    const result = await customPromiseAll(promises);
    console.log({ result });
    expect(result).toEqual(resolvedValues);
  });
});
