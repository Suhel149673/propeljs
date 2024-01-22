// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filerEvenNumbers(numbers){
    return numbers.filter(i=>i%2===0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filerEvenNumbers(numbers);
console.log("Original array:", numbers);
console.log("Filtered array with even numbers:", evenNumbers);