import { describe } from "vitest";
import { test } from "vitest";

describe("Testing code snippet", () => {
  //   test("testing 1 ", async () => {
  //     function Example() {
  //       let y;
  //       console.log(x, y);
  //       if (true) {
  //         var x = 10;
  //         let y = 10;
  //         console.log(x, y);
  //       }
  //       console.log(x, y);
  //     }
  //     Example();
  //   });
  //   test("testing 2 ", async () => {
  //     const obj = {
  //       value: 42,
  //       showArrow: function () {
  //         setTimeout(() => {
  //           console.log(this.value);
  //         }, 1000);
  //       },
  //       showNormal: function () {
  //         // setTimeout(
  //         const value = 23;
  //         const abc = function () {
  //           console.log(this.value);
  //         };
  //         abc();
  //         // , 1000);
  //       },
  //     };
  //     obj.showArrow();
  //     obj.showNormal();
  //   });
  //   test("testing 2.1 ", async () => {
  //     // console.log(this);
  //     // const normal = function () {
  //     //   console.log(this);
  //     // };
  //     // normal();
  //     const arrow = () => {
  //       console.log(this);
  //     };
  //     arrow();
  //   });
  //   test("testing 3 ", async () => {
  //     var p = 1;
  //     function outerFn() {
  //       var p = 2;
  //       function innterFn() {
  //         p++;
  //         console.log(p);
  //         var p = 3;
  //         console.log(p);
  //       }
  //       innterFn();
  //       console.log(p);
  //     }
  //     outerFn();
  //   });
  //   test.only("testing 4 ", async () => {
  //     //Asked in Amazon
  //     var a = 10;
  //     x();
  //     y();
  //     z();
  //     function x() {
  //       var a = 20;
  //       console.log(this.a);
  //     }
  //     function y() {
  //       console.log(this.a);
  //     }
  //     const z = () => {
  //       console.log(this.a);
  //     };
  //   });

  //   test("testing 10 ", async () => {
  //     const myObject = {
  //       name: "Test",
  //       getFunctionName: function () {
  //         console.log(this.name);
  //       },
  //       getArrowFunctionName: () => {
  //         console.log(this.name);
  //       },
  //       updateArrowFunctionScope: function () {
  //         const innerArrowFunction = () => {
  //           console.log(this.name);
  //         };
  //         innerArrowFunction();
  //       },
  //     };

  //     myObject.getFunctionName();
  //     myObject.getArrowFunctionName();
  //     myObject.updateArrowFunctionScope();
  //   });

  //   test.only("testing 11 ", async () => {
  //     function outer() {
  //       console.log(a);
  //       var a = 10;
  //       function inner() {
  //         console.log(a);
  //         return 10;
  //         function a() {
  //           var a = 10;
  //         }
  //       }
  //       inner();
  //     }
  //     outer();
  //   });

  test.only("testing 20 ", async () => {
    console.log(7 > 6 > 5);
  });
});
