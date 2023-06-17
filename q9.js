// Write a JavaScript function that takes a string as input and checks if it is
//  a palindrome. Return true if it is a palindrome, and false otherwise. 
//  (A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.)
// // Input: A string, e.g., "radar".
// Output: true.



function palindrome(){


let flag=0;
for(let i=0;i<string.length/2;i++)
{
    
        if(string[i]===string[string.length-1-i])
        {
           flag++;
        }
        
    
}
if(flag)
{
    console.log("true");
}
else{
    console.log("false");
}

}
let string ="racecar2";
palindrome(string);