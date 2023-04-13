
#Problem:-

Write a Fizz Buzz function that will accept your phone number as the input then calculate the sum of your phone number and run a loop from 1 to the sum. For every iteration you have to Print Fizz if the number is divisible by 4, Buzz if the number is divisible by 5, and FizzBuzz if it’s divisible by both 4 and 5 else just print the number.
Example Input: 9000000099
Example Output: 1 2 3 Fizz Buzz 6 7 Fizz 9 Buzz 11 Fizz 13 14 Buzz Fizz 17 18 19 FizzBuzz 21 22 23 Fizz Buzz 26 27

#Logic:- 

function fizzBuzzPhone(phoneNumber, name, email) {
    let sum = 0;
    for (let i = 0; i < phoneNumber.length; i++) {
      sum += parseInt(phoneNumber[i]);
    }
    
    for (let i = 1; i <= sum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 4 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
    
    console.log("Name: " + name);
    console.log("Email: " + email);
  }


#output:-
fizzBuzzPhone("9000000099", "Muneendra Thallapaka", "Muneendra.edu@.com");

1
2
3
Fizz
Buzz
6
7
Fizz
9
Buzz
11
Fizz
13
14
Buzz
Fizz
17
18
19
FizzBuzz
21
22
23
Fizz
Buzz
26
27
Name: Muneendra Thallapaka
Email: Muneendra.edu@.com
