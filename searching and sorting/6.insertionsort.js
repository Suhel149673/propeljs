function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let numbertoinsert=arr[i]
        let j=i-1
        while(j>=0 &&arr[j]>numbertoinsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numbertoinsert
    }
}


const insertionSortArray = [4, 2, 7, 1, 9, 5, 3, 8, 6];
insertionSort(insertionSortArray);
console.log("Insertion Sort:", insertionSortArray);