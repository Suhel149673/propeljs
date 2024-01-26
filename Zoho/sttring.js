// var str = "Hello";
// console.log(str.charAt(0)); // Output: H

// var str = "Hello";
// console.log(str.charCodeAt(0)); // Output: 72

// var str1 = "Suhel";
// var str2 = " Shaik";
// console.log(str1.concat(str2));

// var str = "Hello World";
// console.log(str.indexOf("World")); 

// var str = "Hello World";
// console.log(str.lastIndexOf("o"));

// var str = "Hello World";
// console.log(str.slice(0, 5));

// var str = "Hello World";
//  var substring1 = console.log(str.substring(6, 11));
// return substring1

// var str = "Hello World";
// console.log(str.startsWith("H"));

// var str = "Hello World";
// console.log(str.replace(/o/g, "z"));

// var str = "Hello ";
// console.log(str.repeat(3)); // Output: Hello Hello Hello
// var str1 = "apple";
// var str2 = "banana";
// console.log(str1.localeCompare(str2)); // Output: -1 (str1 comes before str2)

//  1.counting the occurances

// function occurances(str,char){
//     var count=0
//     for(var i =0;i<str.length;i++){
//         if(str.charAt(i)===char){
//             count++
//         }
//     }
//     return count;
// }
// var chars=occurances("suhelsuhel" ,"u")
// console.log(chars)


// Reversing a string
// function revr(str){
//     return str.split("").reverse().join("")
// }
// var rev=revr("Suhel")
// console.log(rev)



// Palindrome
// function palindrome(str){
//     var rever=str.split("").reverse().join("")
//     if(rever===str){
//         return true
//     }
//     else{
//         return false
//     }
// }

// var pali=palindrome("A man, a plan, a canal, Panama")
// console.log(pali)

// function isPalindrome(str) {
//     var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     console.log(cleanStr)
//     var reversedStr = cleanStr.split("").reverse().join("");
//     return cleanStr === reversedStr;
//   }
  
//   var palindromeString = "A man, a plan, a canal, Panama!";
//   var isPalindromic = isPalindrome(palindromeString);
//   console.log("Is Palindromic: " + isPalindromic);
//   // Output: Is Palindromic: true
  
// function ispalindrome(str){
//     var  cleanstr=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
//     console.log(cleanstr)
//     var reverstr=cleanstr.split("").reverse().join("")
//     if(cleanstr===reverstr){
//         return true
//     }else{
//         return false
//     }
// }
// var suhel=ispalindrome("suhel!@13----------------------------")
// console.log(suhel)

// function capitalize(str){
//     return str.replace(/\b\w/g, function(match){
//         return match.toUpperCase();
//     })
// }

// var sentence = "hello world";
// var capitalizedSentence = capitalize(sentence);
// console.log("Capitalized Sentence: " + capitalizedSentence);





// turcunating a string

// function turcunating(str,maxLength){
//     if(str.length>maxLength){
//         return str.slice(0, maxLength)+"....."
//     }else{
//         return  str
//     }
// }

// var ire=turcunating("this the isthwjoajbjhdsbnlwdnjkd   djkjasnjkdskan ksednjf",12)

// console.log(ire)

// extracting the domain name'

// function extractDomainFromEmail(email){
//     var atIndex=email.indexOf('@');
//     if(atIndex !== -1){
//         var domain= email.slice(atIndex+1);
//         return domain
//     }else{
//         return "Invalid email address"
//     }
// }
// var emailAddress = "user@example.com";
// var domain = extractDomainFromEmail(emailAddress);
// console.log("Domain: " + domain);




// remove duplicates
// function removeDuplicates(str){
//     var uniquechars=[...new Set(str)];
//     return uniquechars.join("");
// }

// var stringWithDuplicates = "abcaabbcc";
// var stringWithoutDuplicates = removeDuplicates(stringWithDuplicates);
// console.log("Without Duplicates: " + stringWithoutDuplicates);



// anagrams

// function isAnagrams(str1,str2){
//     var cleanstr1=str1.toLowerCase().replace(/[^a-z/A-Z/0-9]/g,"").split("").sort().join("")
//     var cleanstr2=str2.toLowerCase().replace(/[^a-z/A-Z/0-9]/g,"").split("").sort().join("")
//     if(cleanstr1===cleanstr2){
//         return "anagrams"
//     }else{
//         return "not anagrams"
//     }
// }

// var word1 = "listen3"
// var word2 = "3silent";
// var areTheyAnagrams = isAnagrams(word1, word2);
// console.log("Are they anagrams? " + areTheyAnagrams);


// function vowels(str){
//     str=str.toLowerCase(str)
//     let count=0;
//     for(let char of str){
//         if('aeiou'.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// let inputString = "Hello, World!";
// let result = vowels(inputString);
// console.log(result); 


// function rearrangeElements(input) {
//     // Split the input string into an array of numbers
//     const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
  
//     // Separate even and odd indexes
//     const evenIndexes = numbers.filter((_, index) => index % 2 === 0);
//     const oddIndexes = numbers.filter((_, index) => index % 2 !== 0);
  
//     // Reverse the order of oddIndexes
//     oddIndexes.reverse();
  
//     // Concatenate even and reversed odd indexes
//     const output = evenIndexes.concat(oddIndexes);
  
//     // Convert the array back to a string
//     return output.join(',');
//   }
  
//   // Examples
//   console.log(rearrangeElements('13,2,4,15,12,10,5')); // Output: 13,2,12,10,5,15,4
//   console.log(rearrangeElements('1,2,3,4,5,6,7,8,9')); // Output: 1,2,3,4,5,6,7,8,9
  

// function givenArray(...arr){
//     var array1=[]
//     var array2=[]
//     var finaloutput=[]
//     for( var i=0;i<arr.length;i++){
//         if(i%2!==0){
//             array1.push(arr[i])
//         }
//         else{
//             array2.push(arr[i])
//         }
//     }
//     array1=array1.sort(function(a,b){
//         return a-b
//     })
//     array2=array2.sort(function(a,b){
//         return b-a
//     })
//     var minLength = Math.min(array1.length,array2.length)
//     console.log(minLength)
//     for(i=0;i<minLength;i++){
//         finaloutput.push(array2[i],array1[i])
//     }
//     finaloutput=finaloutput.concat(array1.slice(minLength),array2.slice(minLength))
//     return finaloutput
// }

// var example=givenArray(1,2,3,4,5,6,7,8,9)   //Output: 9,2,7,4,5,6,3,8,1 
// console.log(example)




// function printPattern(input) {
//     const n = input.length;
//     const output = [];

//     for (let i = 0; i < n; i++) {
//         let row = '';

//         for (let j = 0; j < n; j++) {
//             if (j === i || j === n - 1 - i) {
//                 row += input[j];
//             } else {
//                 row += ' ';
//             }
//         }

//         output.push(row);
//     }

//     console.log(output.join('\n'));
// }

// // Example usage:
// printPattern('12345');
// console.log('\n');
// printPattern('geeksforgeeks');


// function printPattern(input){
//     const n=input.length;
//     const output=[]
//     for(i=0;i<n;i++){
//         let row=""
//         for(j=0;j<n;j++){
//             if(j===i || j===n-1-i){
//                 row += input[j]
//             }else{
//                 row += " "
//             }
//         }
//         output.push(row);
//     }
//     console.log(output.join('\n'))
    
// }

// printPattern("geeksforgeeks")


// function mergedArray(array1,array2){
//     var setArray1=[...new Set(array1)]
//     var setArray2=[...new Set(array2)]
//     var finaloutput=setArray1.concat(setArray2)
//     return finaloutput
// }
// var seta = [2,4,5,6,7,9,10,13]
// var setb =[2,3,4,5,6,7,8,9,11,15]
// var final=[...new Set(mergedArray(seta,setb).sort(function(a,b){
//     return a-b
// }))]
// console.log(final)//2,3,4,5,6,7,8,9,10,11,13,15 


// function issubstring(input,input2){
//     var index=input.indexOf(input2)
//     return index
// }

// var output=issubstring("suhel","l")
// console.log(output)

// function reverse(input){
//     if(input.length <=1){
//         return input
//     }else{
//         return reverse(input.slice(1))+" "+input[0]
//     }
// }

// const inputStr1 = "one two three";
// const outputStr1 = reverse(inputStr1);
// console.log(`Eg 1: Input: ${inputStr1}\n      Output: ${outputStr1}`);


// function reverseStringRecursive(inputStr) {
//     // Base case: if the string is empty or has only one character, return the string as is
//     if (inputStr.length <= 1) {
//         return inputStr;
//     }

//     // Recursive case: reverse the substring excluding the first word,
//     // and append the first word at the end
//     const words = inputStr.split(" ");
//     console.log(words)
//     const reversedSubstring = reverseStringRecursive(words.slice(1).join(" "));
//     return reversedSubstring + " " + words[0];
// }

// // Example 1
// const inputStr1 = "one two three forever";
// const outputStr1 = reverseStringRecursive(inputStr1);
// console.log(`Eg 1: Input: ${inputStr1}\n      Output: ${outputStr1}`);

// // Example 2
// const inputStr2 = "I love india";
// const outputStr2 = reverseStringRecursive(inputStr2);
// console.log(`Eg 2: Input: ${inputStr2}\n      Output: ${outputStr2}`);



