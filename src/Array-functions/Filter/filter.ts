export function isOdd(x: number) {
  return x % 2;
}

export function isEven(x: number) {
  return x % 2 === 0;
}

export function isGreaterThan4(x: number) {
  return x > 4;
}

export const users = [
  { firstName: "romesh", lastName: "yadav", age: 26 },
  { firstName: "lokesh", lastName: "lovely", age: 74 },
  { firstName: "rohil", lastName: "nain", age: 58 },
  { firstName: "anurag", lastName: "yadav", age: 26 },
];

export function lessThan30Users() {
  return users
    .filter((val) => val.age < 30)
    .map((curr) => {
      return curr.firstName;
    });
}
