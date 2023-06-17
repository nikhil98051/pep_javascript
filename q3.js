// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// Input: An array of numbers, e.g., [2, 4, 6, 8].
// Output: The average of the numbers, e.g., 5.


function average(a1){
    let res=0;
    for(let i=0;i<a1.length;i++){
        res+=a1[i];
        
    }
    let ans=res/a1.length;
    console.log("the average of the numbers is ",ans);

}

let a=[2,4,6,8,10]
average(a);