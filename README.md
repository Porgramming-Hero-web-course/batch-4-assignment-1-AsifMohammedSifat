<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17018376&assignment_repo_type=AssignmentRepo) -->

## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

"Guard" is a word we are all familiar with. For example: Security Guard, Body Guard, Night Guard, etc.

All types of guards share a common responsibility: "Take care of something." Similarly, a Type Guard in programming means ensuring the safety or correctness of data types.

Suppose we are a team tasked with building a bank system. Our task is to build a function called "add_money". Let's build it.

```javascript
function add_money(savingAmount) {
  currentBalance += savingAmount;
}
```

If we call the function add_money('1000') with the parameter, the current balance will be 10001000. (assume current balance is 1000) This can be a danger!!!

To solve this problem, we need to set a guard that can monitor these issues. That's why a type guard is necessary.

TypeScript is concerned with types. There are 3 types of guards:
1. typeof
2. in
3. instanceof

In TypeScript, type guards are used to narrow the types within conditional blocks, ensuring more accurate type handling. Let's take a closer look at these types:

# 1. typeof Type Guard:
This checks the type of a variable at runtime.

```javascript
Syntax: typeof variable === "type";
```

Example:
```javascript
function add_money(savingAmount: string | number) {
  if (typeof savingAmount !== "string") {
    currentBalance += savingAmount;
  } else {
    //will handle other operations
  }
}
```
Here, we are first checking if the input is a string or not. If the type of input is not a string, we are adding money to the main balance. Otherwise, we handle other operations.

# 2. in Type Guard:
This checks if a property exists in an object.

```javascript
Syntax: "property" in variable
```
Example:
```javascript
type rich = { car: boolean };
type poor = { taxi: boolean };

function move(people: rich | poor) {
  if ("car" in animal) {
    people.car = true;
  } else {
    people.taxi = true;
  }
}
```
Here, we are checking if the input object has a car property. If the input is of type rich, it will have the car property, so we set people.car = true. If the input is of type poor, it will have the taxi property, so we set people.taxi = true. This way, we ensure the correct property is accessed based on the type of the object.

# 3. instanceof Type Guard:
This checks if an object is an instance of a particular class.

```javascript
Syntax: variable instanceof Class
```
Example:
```javascript
class Dog {
  bark() {
    console.log("baaaark!");
  }
}
class Cat {
  meow() {
    console.log("Meoooow!");
  }
}

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```
Here, we are checking if the input pet is an instance of the Dog class. If it is, we call the bark method. If it's not (meaning it's an instance of the Cat class), we call the meow method. This way, we handle the behavior differently depending on whether the pet is a dog or a cat.

In summary, for more accurate type handling and to avoid errors related to mismatched types, type guards are the best choice.