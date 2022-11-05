let numbers = [2, 35, -56, 72, 23, 42, -22, 83, 34, 67, 0, 99, 106, 17];

//Return true if the number is even, and false if it is odd.
function isEven(number){
    return (number / 2) == Math.round( number / 2);
}

//❓ LAB QUESTION 12:
//YOUR CODE HERE
let JustGiveMeTheEvens = numbers.filter(isEven);
console.log(JustGiveMeTheEvens)
//Passed in the isEven function as a parameter to array.filter function
//output will be [2, -56, 72, 42, -22, 34, 0, 106]