// // 2. Write a JavaScript program to find the maximum number in an array. 
// function maxn(arr){
//     if (arr.length===0){
//         return undefined;
//     }
//     let maxNumber=arr[0]

//     for(i=0; i<arr.length;i++){
//         if (arr[i]>maxNumber){
//             maxNumber =arr[i]
//         }
//     }
//     return maxNumber
// }
// const numbers=[1,3,5,6,4,5,6,7,88];
// const max = maxn(numbers);
// console.log(max)


















function maxnumber(arr){
    if(arr.length===0){
        return undefined;
    }
    let bignumber=arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i]>bignumber){
            bignumber=arr[i]
        }
    }
    return bignumber
}
const numbers=[1,3,5,6,4,5,6,7,88];
const max = maxnumber(numbers);
console.log(max)
