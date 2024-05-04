"use strict";

console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,

(function () {
  console.log("inside function ", this);
})();

function x() {
  console.log("inside x function ", this); // behaves different in strict and nonstrict mode
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}

x(); // undefined
window.x(); // window object

const student = {
  name: "romeo",
  printName: function () {
    console.log("inside student object ", this.name);
  },
};

student.printName();

const student2 = {
  name: "yadav",
};

student.printName.call(student2);

// this in arrow function
const obj = {
  a: 20,
  x: () => {
    console.log("inside object ", this); // value will take the window object => its lexical content
  },
};
obj.x();

const obj2 = {
  a: 20,
  x: function () {
    console.log("inside x function ", this);
    const y = () => {
      console.log("inside y function ", this); //enclosing lexical content
    };
    y();
  },
};
obj2.x();

// this inside DOM elements => reference to HTMLelement
