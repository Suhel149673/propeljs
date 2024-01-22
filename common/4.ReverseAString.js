// 4. Write a JavaScript program to reverse a given string. 

function reverse(str){
    str=str.split("").reverse().join("")
    return str
}

var str1="suhel"
console.log(reverse(str1))