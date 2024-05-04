import { describe } from "vitest";
import { test } from "vitest";
import { binary, double, fullName, triple } from "./map";

describe("map function", () => {
  test("in map ", async () => {
    console.log("i am in ");
  });
  test("map ", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const callback = (value: number, index: number, array: number[]) => {
      if (value % 2 === 0) {
        return value;
      }
    };
    const callback2 = (val: number) => val % 2 === 0;
    const op = numArray.map(callback2);
    console.log({ op });
  });

  describe("map function transform the array", () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    test("double ", async () => {
      const doubleArray = numArray.map(double);
      console.log({ doubleArray });
    });
    test("triple ", async () => {
      const tripleArray = numArray.map(triple);
      console.log({ tripleArray });
    });
    test("binary ", async () => {
      const binaryArray = numArray.map(binary);
      console.log({ binaryArray });
    });
  });

  describe("map function on users array", () => {
    test.only("fullName ", async () => {
      const usersFullName = fullName();
      console.log({ usersFullName });
    });
  });
});
