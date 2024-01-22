// function isPrime(number){
//     if(number<=1){
//         return false;
//     }
//     for(i=2;i<=number/2;i++){
//         if(number%i ===0){
//             return false
//         }
//     }
//     return true
// }

// const num1 = 7;
// const num2 = 14;

// console.log(`${num1} is prime: ${isPrime(num1)}`);
// console.log(`${num2} is prime: ${isPrime(num2)}`);

function isPrime(number){
    if(number<=1){
        return false
    }
    var count=0;
    for(i=2;i<number;i++){
        if(number%i===0){
            count++;
        }
    }
    if(count !=0){
        return false
    }else{
        return true
    }
   
}

var number = 3;
console.log(isPrime(number))

