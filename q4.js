// Write a JavaScript function that takes a string as input and returns the reverse of that string.
// Input: A string, e.g., "OpenAI".
// Output: The reverse of the string, e.g., "IAnepo".

function reverse(a1){
    let ans="";
    for(let i =a1.length-1;i>=0;i--)
    {
         ans += a1[i];

    }
    console.log("The reverse string is ",ans)

}

var a="OpenAI";
reverse(a);