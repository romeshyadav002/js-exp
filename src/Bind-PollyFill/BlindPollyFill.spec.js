import { describe } from "vitest";
import { test } from "vitest";

describe("BlindPolyfill.spec function", () => {
  test("BlindPolyfill.spec", async () => {
    console.log("i am in ");
  });

  test("bind testing", async () => {
    let name = {
      firstName: "romeo",
      lastName: "yadav",
    };

    let printFullName = function (hometown, state, country) {
      console.log(
        this.firstName +
          " " +
          this.lastName +
          " from " +
          hometown +
          " , " +
          state +
          " , " +
          country
      );
    };

    const bindFunction = printFullName.bind(name, "Gurgaon", "Haryana");
    bindFunction("India");

    Function.prototype.myBind = function (...args) {
      let obj = this;
      let params = args.slice(1);
      return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
      };
    };

    let printMyName = printFullName.myBind(name, "Gurgaon", "Haryana");
    printMyName("India");
  });
});
