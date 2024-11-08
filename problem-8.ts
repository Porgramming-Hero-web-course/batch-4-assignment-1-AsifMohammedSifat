/*
Problem 8:
Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
*/

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
  // console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (!(keys[i] in obj)) {
      return false;
    }
  }
  return true;
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
