// for a sorted array
function binarysearching(arr,target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}

console.log(binarysearching([9,4,2,4,79,1], 9))
// for unsorted array

function binarysearching(arr,target){
    arr.sort((a,b)=>a-b)
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}