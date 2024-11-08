/*
Problem 3:
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
*/

// var str = "i love typescrip";
// console.log(str.split(' '));



const countWordOccurrences = (src:string,target:string):number =>{
    const stirngArray = src.split(' ');
    let count = 0;
    stirngArray.forEach(word=>{
        if(word===target) count+=1;
    })
    return count;

}

console.log(countWordOccurrences("I  love typescript", "typescript"));