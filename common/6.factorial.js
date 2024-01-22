// // 6. Write a JavaScript program to calculate the factorial of a given number. 

// function calculateFactorial(number){
//     if (number<0){
//         return 0
//     }else if(number===0||number===1){
//         return 1;
//     }else{
//         let factorial=1
//         for( let i=2; i<=number;i++){
//             factorial *=i;
//         }
//         return factorial
//     }
// }
// const num = 5;
// const result = calculateFactorial(num);
// console.log(`Factorial of ${num} is: ${result}`);

function calculateFactorial(number){
    if (number<0){
        return 0
    }else if(number===0||number===1){
        return 1;
    }else{
        let factorial=1;
        for(i=2;i<=number;i++){
            factorial *=i
        }
        return factorial
    }
}

const num = 5;
const result = calculateFactorial(num);
console.log(`Factorial of ${num} is: ${result}`);