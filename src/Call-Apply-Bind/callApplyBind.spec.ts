import { describe } from "vitest";
import { test } from "vitest";
import { printFullName } from ".";

describe("callApplyBind.spec function", () => {
  test("callApplyBind.spec", async () => {
    console.log("i am in ");
  });
  test("call testing", async () => {
    let name = {
      firstName: "romeo",
      lastName: "yadav",
    };
    printFullName.call(name, "Gurgaon", "Haryana");
  });

  test("apply testing", async () => {
    let name = {
      firstName: "romeo",
      lastName: "yadav",
    };
    printFullName.apply(name, ["Gurgaon", "Haryana"]);
  });

  test("bind testing", async () => {
    let name = {
      firstName: "romeo",
      lastName: "yadav",
    };
    const bindFunction = printFullName.bind(name, "Gurgaon", "Haryana");
    bindFunction();
  });
});
