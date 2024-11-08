/*
Problem 2:
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]
*/

type numberArray = number[];

const removeDuplicates = (arrayOfNumbers: numberArray): numberArray => {
  const sortedArray = arrayOfNumbers.sort((a, b) => a - b);
  return sortedArray.filter((value, index, arr) => {
    return index === 0 || arr[index] !== arr[index - 1];
  });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7]));
