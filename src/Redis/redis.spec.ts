import { describe, test } from "vitest";
import dictionarySearch from "./redis";

describe("redis test", () => {
  test("redis first", async () => {
    const op = await dictionarySearch("en", "animal");
    console.log({ op });
  });
});
