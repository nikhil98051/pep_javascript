// Write a JavaScript function that takes a year as input and checks if it is a leap year. Return true if it is a leap year, and false otherwise. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)
// Input: A year, e.g., 2024.
// Output: true.

function checkLeapYear(y){
    let i=4;
    if(y%i==0){
        console.log("True")
    }
    else{
        console.log("false")
    }

}

let year = 2025;
checkLeapYear(year)