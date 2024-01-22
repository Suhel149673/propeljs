// function bubblesort(arr){
//     let swapped
//     do{
//     swapped=false
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

const numbers = [4, 2, 7, 1, 9, 5, 3, 8, 6];
bubblesort(numbers);
console.log(numbers);


function bubblesort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
}
