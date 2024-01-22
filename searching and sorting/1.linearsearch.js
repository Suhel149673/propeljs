function linearsearch(arr,target){
    for(i=0;i<=arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return console.log("target not found")
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const linearSearchResult = linearsearch(array, targetValue);
console.log(linearSearchResult); 