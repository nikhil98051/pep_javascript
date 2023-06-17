// Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.
// Input: An array of numbers, e.g., [4, 2, 9, 5].
// Output: The largest number in the array, e.g., 9.


function largest(arr){
    var greatest=0;
    let item;
    arr.forEach(item=> {
        if(item>greatest){
            greatest=item;
        }
    });
    console.log("the greatest number is ",greatest)
}
let a=[3,4,6,9];
largest(a);
