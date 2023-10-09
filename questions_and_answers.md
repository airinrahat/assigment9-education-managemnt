<!-- ## 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer:
B: ReferenceError: greetign is not defined

# Explanation:

In the given code, there's a typo in the variable name. It declares a variable named greeting, but when trying to assign an empty object, it mistakenly uses greetign. Since greetign is not defined anywhere in the code, it results in a ReferenceError. 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:A: NaN

# Explanation:

In the provided code, the sum function attempts to add the values of its two parameters a and b. When sum(1, "2") is called, JavaScript tries to perform addition, but it encounters a string ("2") being added to a number (1). In such cases, JavaScript performs type coercion and converts the number to a string and then concatenates them, resulting in "12". However, since this is not valid for arithmetic addition, the final result is Not-a-Number (NaN).

3. Write the correct answer from the following options and give an explanation (2-5 lines).
   const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer:A: ['🍕', '🍫', '🥑', '🍔']

# Explanation:

In the code, an array food is defined with four emoji elements. Then, an object info is created with a property favoriteFood assigned to the first element of the food array, which is "🍕". Later, the code attempts to change the value of info.favoriteFood to "🍝", but it doesn't affect the original food array. Therefore, when you log food, it remains unchanged, and the output will be ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sayHi(name) {
   return `Hi there, ${name}`;
   }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B: Hi there, undefined.

# Explanation:

In the sayHi function, there's a parameter name, but when you call sayHi() without passing any arguments, it doesn't receive a value for name. In JavaScript, when a function parameter is not provided with a value, it defaults to undefined. Therefore, the function returns "Hi there, undefined" because it's concatenating the string "Hi there, " with the undefined value of name.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
   let count = 0;
   const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: C: 3.

# Explanation:

In the code, the forEach method iterates over the nums array and increments the count variable for each element that is considered truthy. In JavaScript, all values except 0, undefined, null, false, NaN, and an empty string (""), are considered truthy. In the nums array, there are three truthy values (1, 2, and 3), so the count variable is incremented three times, resulting in a final value of 3. Therefore, when you log count, it will output 3. -->
