function palindrome(str){
    var str1=str.split("").reverse().join("");
    if (str=str1){
        return console.log(str +" " +" palindrome");
    }else{
        return console.log(str+ " " +" not a palindrome")
    }
}

var suhel="sosos"
console.log(palindrome(suhel))
