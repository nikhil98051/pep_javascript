// Write a JavaScript function that takes a string as input and returns the length of that string.
// Input: A string, e.g., "Hello, world!".
// Output: The length of the string, e.g., 13.


function stringlength(a1){
    let length1=0;
    for(let i=0;i<a1.length;i++){
        length1++;
        
    }
    console.log("The length of the string is ",length1);

}
let a="hello, world!";
stringlength(a);