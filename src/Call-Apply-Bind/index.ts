let name = {
  firstName: "romeo",
  lastName: "yadav",
};

export let printFullName = function (hometown: string, state: string) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "Gurgaon", "Haryana");
printFullName.apply(name, ["Gurgaon", "Haryana"]);

const bindFunction = printFullName.bind(name, "Gurgaon", "Haryana");
bindFunction();
