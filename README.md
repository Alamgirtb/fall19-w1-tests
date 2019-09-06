# Three small functions

## Get started

Do this in the terminal:

1. `git clone git@github.com:saltsthlm/fall19-w1-tests.git` 
1. `cd fall19-w1-tests` 
1. `npm install` 
1. `code .` 
1. `npm t` to run the tests

## Instructions

Work in the file called `index.js` and, we recommend that you write tests in the `tests.js` -file. We have only supplied a few tests for you to get started with. You will need to add more test to ensure that your code works as expected.

You can run these tests with `npm test` . You might get linting errors when you run the tests. Fix those too.

When you are done, with all the tasks below; send **only** the `index.js` file to Mies (@mies) through Slack.

## The tasks

1. In the `index.js` -file

  + write a function called `isYoung` 
  + that takes one parameter `age` .
  + return `true` if the parameter is equal or below 30 and `false` otherwise

1. In the `index.js` -file

  + write a function called `isManInSweden` 
  + that takes a parameter `personnummer` .
  + Check that the `personnummer` parameter is 10-characters long and return `false` if not.
  + return `true` if the second to last number is odd, and `false` if it is even (this is how we check for your sex in a Swedish personnumer)

1. In the `index.js` -file

  + write a function called `firstTwoDigitInteger` 
  + that takes an array of integers and returns the first two-digit integer.
  + You can assume only integers in the array, and don't need to check for non-integer input
  + Loop over all the elements with a `for` -loop
  + return the first integer in the array that consists of two digits
  + If there is no such integer in the array, return the string `None` 

### Evaluation

1. We will run a suite of tests against your code and count the number of passing tests
2. We will check your code for formatting and syntax correctness - checked with linting
3. We will see how easy your code is to read

