# simple-math-utils
A simple utility library for common mathematical operations, including checking if a number is an Armstrong number or a prime number.

## Installation
You can install this package via npm:

## Usage
Importing the Functions
First, require the package in your Node.js project
const { isArmstrongNumber, isPrime } = require('simple-math-utils');

## Functions
1. isArmstrongNumber
This function checks if a given number is an Armstrong number.

Parameters
num (number): The number to check.
Returns
boolean: Returns true if the number is an Armstrong number, false otherwise.


const { isArmstrongNumber } = require('simple-math-utils');

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(154)); // false
console.log(isArmstrongNumber(9));   // true
console.log(isArmstrongNumber(10));  // false

2. isPrime
This function checks if a given number is a prime number.

Parameters
num (number): The number to check.
Returns
boolean: Returns true if the number is a prime number, false otherwise.

const { isPrime } = require('simple-math-utils');

console.log(isPrime(1));  // false
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(5));  // true

## isArmstrongNumber
Checks if a number is an Armstrong number.

## Input
num: A non-negative integer to be checked.
## Output
boolean: true if the number is an Armstrong number, false otherwise.
How it Works
An Armstrong number (also known as a narcissistic number) for a given number of n digits is a number that is equal to the sum of its own digits each raised to the power of n.

## For example:
153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
154 is not an Armstrong number because 1^3 + 5^3 + 4^3 ≠ 154.


## isPrime
Checks if a number is a prime number.

## Input
num: A non-negative integer to be checked.
## Output
boolean: true if the number is a prime number, false otherwise.
How it Works
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

## For example:
5 is a prime number because it has no divisors other than 1 and 5.
4 is not a prime number because it is divisible by 1, 2, and 4.


```sh
npm install simple-math-utils
