const numArray = [1, 2, 3, 4, 5, 6, 7, 8];
const op = numArray.map((val) => val % 2 === 0);
console.log({ op });

export function double(x: number) {
  return x * 2;
}

export function triple(x: number) {
  return x * 3;
}

export function binary(x: number) {
  return x.toString(2);
}
export const users = [
  { firstName: "romesh", lastName: "yadav", age: 26 },
  { firstName: "lokesh", lastName: "lovely", age: 24 },
  { firstName: "rohil", lastName: "nain", age: 28 },
];

export function fullName() {
  return users.map((val) => {
    return val.firstName + " " + val.lastName;
  });
}
