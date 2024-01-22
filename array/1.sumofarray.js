// 1. Find the sum of all elements in an array:

function sum1(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
const abc=[1,2,3,3,5,67,8]
console.log(sum1(abc))