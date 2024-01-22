function selectionSort(arr){
    let n= arr.length
    for(i=0;i<n-1;i++){
        let minIndex=i
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[minIndex]
        arr[minIndex]=temp;
    }
}
const selectionSortArray = [4, 2, 7, 1, 9, 5, 3, 8, 6];
selectionSort(selectionSortArray);
console.log("Selection Sort:", selectionSortArray);