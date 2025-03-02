import { describe, test, expect } from "vitest";

describe("hoisting testing", () => {
  test("test var hosting", async () => {
    console.log({ a }); // will get undefined in this case
    var a = "abc";
    console.log({ a });
  });

  test.skip("test let hoisting", async () => {
    console.log({ a }); // will get ReferenceError: Cannot access 'a' before initialization
    let a = "abc";
    console.log({ a });
  });

  test.skip("test const hoisting", async () => {
    console.log({ a }); // will get ReferenceError: Cannot access 'a' before initialization
    const a = "abc";
    console.log({ a });
  });
});
