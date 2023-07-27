// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"



function reverseString(inputString) {
    const charArray = inputString.split('');
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
}


const inputReverse = "hello world";
const outputReverse = reverseString(inputReverse);
console.log(outputReverse); 




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19



function positiveSum(arr) {
    let sum = 0
    for(i= 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum
}

const arr = [2, -5, 10, -3, 7];

const sum = positiveSum(arr)
console.log(sum);



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3



function theMostFrequentElement(arr) {
  const elementCount = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  for (const element of arr) {
    elementCount[element] = (elementCount[element] || 0) + 1;
    console.log(elementCount);
    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}


const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = theMostFrequentElement(input);
console.log(output);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)




function twoSumSortedArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
console.log(end);
    for (start; start <= end;) {
        const sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
        console.log(start, end, sum);
    }

    return [];
}

const array = [1, 3, 6, 7, 11, 15];
const target = 9;
const resultArr = twoSumSortedArray(array, target);
console.log(resultArr);




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.



function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}


const num1 = 10;
const num2 = 5;
const operator = '-';
const result = calculator(num1, num2, operator);
console.log(result);




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.



function generateRandomPassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=<>?';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}



const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword); 



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.




function romanToInteger(romanNumeral) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentSymbol = romanNumeral[i];
    const currentValue = romanValues[currentSymbol];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}


const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";
console.log(romanToInteger(romanNumeral1)); 
console.log(romanToInteger(romanNumeral2));



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error('Array must contain at least two elements.');
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}



const numbers = [5, 2, 8, 1, 3, 7];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); 