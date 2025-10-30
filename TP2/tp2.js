
//Exercice 1
let age = 25;
let name = "Alice";
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//Exercice 2 
let x=5;
let y=10;
let sum = x + y;
let product = x * y;
let difference = y - x;
let quotient = y / x;
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Difference:", difference);
console.log("Quotient:", quotient);

x<y ? console.log("x is less than y") : console.log("x is not less than y");
x===5 ? console.log("x is equal to 5") : console.log("x is not equal to 5");
x!==y ? console.log("x is not equal to y") : console.log("x is equal to y");

//Exercice 3
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}

for (let i=1; i<=10;i++){
    console.log(i);
}

let fruits = ["pomme", "banane", "orange"];
while (fruits.length > 0) {
    let fruit = fruits.pop();
    console.log(fruit);
}

//Exercice 4
function addition(a,b){
    return a+b;
}
console.log("Addition:", addition(3,7));

function multiply(a,b){
    return a*b;
}
console.log("Multiplication:", multiply(3,7));

//Exercice 5
