import { describe } from "vitest";
import { test } from "vitest";
import { isEven, isGreaterThan4, isOdd, lessThan30Users } from "./filter";

describe("filter function", () => {
  test("filter", async () => {
    console.log("i am in ");
  });
  test("filter", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const callback2 = (val: number) => val % 2 === 0;
    const op = numArray.filter(callback2);
    console.log({ op });
  });

  test("filter", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const op = numArray.filter((val) => {
      return val % 2 === 0;
    });
    console.log({ op });
  });

  describe("filter function transform the array", () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    test("odd ", async () => {
      const oddArray = numArray.filter(isOdd);
      console.log({ oddArray });
    });
    test("even ", async () => {
      const evenArray = numArray.filter(isEven);
      console.log({ evenArray });
    });
    test("isGreaterThan4 ", async () => {
      const isGreaterThan4Array = numArray.filter(isGreaterThan4);
      console.log({ isGreaterThan4Array });
    });
    test("lessThan30Users ", async () => {
      const lessThan30UsersArray = lessThan30Users();
      console.log({ lessThan30UsersArray });
    });
  });
});
