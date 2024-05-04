// reduce function

export const users = [
  { firstName: "romesh", lastName: "yadav", age: 26 },
  { firstName: "lokesh", lastName: "lovely", age: 74 },
  { firstName: "rohil", lastName: "nain", age: 58 },
  { firstName: "anurag", lastName: "yadav", age: 26 },
];

// we want this op
// acc={ 26 : 1, 24 : 1, 28 : 1}

export const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

export function lessThan30Users() {
  return users.reduce((acc, curr) => {
    if (curr.age < 30) {
      acc.push(curr.firstName);
    }
    return acc;
  }, []);
}
