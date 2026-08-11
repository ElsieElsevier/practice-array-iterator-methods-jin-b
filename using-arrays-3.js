
// Task 1
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log(fruits);
// ["grape", "banana", "cherry", "orange"]


// Task 2
let colors = ["red", "blue", "green", "blue", "yellow"];

let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");

let colorResults = [includesResult, firstIndex, lastIndex];

console.log(colorResults);
// [true, 1, 3]


// Task 3
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log(allTeams);
// ["Alice", "Bob", "Charlie", "Diana", "Eve"]


// Task 4
let numbers = [10, 20, 30, 40, 50];

let middleNumbers = numbers.slice(1, 3);

numbers.splice(3, 2, 60, 70);

console.log(middleNumbers);
// [20, 30]

console.log(numbers);
// [10, 20, 30, 60, 70]


// Task 5
let scores = [85, 70, 95, 60, 75];

scores.sort((a, b) => a - b);
scores.reverse();

console.log(scores);
// [95, 85, 75, 70, 60]