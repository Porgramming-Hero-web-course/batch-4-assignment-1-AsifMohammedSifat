/*
Problem 4:
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;

*/

type rectAngleProperty = {
  shape: "rectangle";
  width: number;
  height: number;
};
type circleProperty = {
  shape: "circle";
  radius: number;
};

const calculateShapeArea = (
  area: rectAngleProperty | circleProperty
): number => {
  if ("radius" in area) {
    return 3.1416 * area.radius * area.radius;
  } else {
    return area.height * area.width;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea);
console.log(rectangleArea);
