import { describe, test, expect, vi } from "vitest";

describe("lexile", () => {
  test("lexile 1", async () => {
    function a() {
      console.log({ b });
    }
    var b = 10;
    a();
  });

  test("lexile 2", async () => {
    function a() {
      console.log({ b });
    }
    a();
    var b = 10;
  });
  test("shadowing ", async () => {
    // so, if one has same named variable outside the block, the variable inside the block shadows the outside variable.
    //  This happens only in var
    var a = 100;
    {
      var a = 10;
      let b = 20;
      const c = 30;
      console.log({ a, b, c });
    }

    console.log({ a });
  });
});
