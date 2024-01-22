// 8. Write a JavaScript program to find the largest element in a nested array. 

// function findLargestElement(nestedArray) {
//     let largestElement = Number.NEGATIVE_INFINITY;

//     function traverseArray(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 console.log(`Entering nested array at index ${i}`);
//                 traverseArray(arr[i]);
//                 console.log(`Exiting nested array at index ${i}`);
//             } else {
//                 console.log(`Checking element at index ${i}: ${arr[i]}`);
//                 if (arr[i] > largestElement) {
//                     largestElement = arr[i];
//                     console.log(`Updating largestElement to ${largestElement}`);
//                 }
//             }
//         }
//     }

//     traverseArray(nestedArray);

//     return largestElement;
// }

function findLargestElement(nestedArray){
    let largestElement=Number.NEGATIVE_INFINITY;

    function traverseArray(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                console.log(`Entering nested array at index ${i}`);
                traverseArray(arr[i]);
                console.log(`Exiting nested array at index ${i}`);
            }else{
                console.log(`Checking element at index ${i}: ${arr[i]}`);
                if(arr[i]>largestElement){
                    largestElement=arr[i];
                    console.log(`Updating largestElement to ${largestElement}`);
                } 
            }
        }
    }
    traverseArray(nestedArray);

    return largestElement;
}

const nestedArray = [1, [2, 3, [4, 5], 6], 7, [8, 9]];
const largestElement = findLargestElement(nestedArray);

console.log("Nested Array:", nestedArray);
console.log("Largest Element:", largestElement);