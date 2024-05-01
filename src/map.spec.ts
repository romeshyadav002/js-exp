import { describe } from "vitest";
import { test } from "vitest";

describe("uploadMultipleBlobVideos function", () => {
  test("should upload files and return publicIds and slidesWithDuration", async () => {
    console.log("i am in ");
  });
  test("should upload files and return publicIds and slidesWithDuration", async () => {
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
});
