import { describe } from "vitest";
import { test } from "vitest";
import { ageCount, lessThan30Users } from "./Reduce";

describe("reduce function", () => {
  test("reduce", async () => {
    console.log("i am in ");
  });
  test("reduce", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const op = numArray.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);
    console.log({ op });
  });

  test("reduce to find MAx", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const op = numArray.reduce((acc, curr) => {
      acc = acc > curr ? acc : curr;
      return acc;
    }, 0);
    console.log({ op });
  });

  test("reduce to each age count", async () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const op = ageCount;
    console.log({ op });
  });

  test("lessThan30Users ", async () => {
    const lessThan30UsersArray = lessThan30Users();
    console.log({ lessThan30UsersArray });
  });
});
