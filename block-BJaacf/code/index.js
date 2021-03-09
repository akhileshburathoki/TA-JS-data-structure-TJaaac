// 1. Create an array named numbers and store 5 number values in it
let numbers = [10, 9, 11, 7, 19];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let number of numbers) {
  sum = sum + number;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(numbers.length / 2);
// 4. Find the highest number in the array and print it to the console using console.log()
let maxNum = 0;
for (const number of numbers) {
  if (number > maxNum) {
    maxNum = number;
  }
}
console.log(maxNum);
// 5. Find the lowest number in the array and print it to the console using console.log()
let minNum = numbers[0];
for (const number of numbers) {
  if (number < minNum) {
    minNum = number;
  }
}
console.log(minNum);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for (let number of numbers) {
  if (number % 2 == 0) {
    even.push(number);
  }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let number of numbers) {
  if (number % 2 != 0) {
    odd.push(number);
  }
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let num = [];
for (const number of numbers) {
  if (number % 5 == 0) {
    num.push(number);
  }
}
console.log(num);

// 9. Log all the element of the array one by one
for (const number of numbers) {
  console.log(number);
}
// 10. Find all the number in the array that is divisible by 3
let three = [];
for (const number of numbers) {
  if (number % 3 == 0) {
    three.push(number);
  }
}
console.log(three);
