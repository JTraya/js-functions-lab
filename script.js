console.log("script.js initialized..");

// Excercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
     } else {
            return y;
        }
    }

console.log('Excercise 1 Result:', maxOfTwoNumbers(3, 9));

// Excercise 2: isAdult()

const isAdult = (age) => {
if (age >= 18) {
    return "Adult";
}
    else {
    return "Minor";
    }
}

console.log('Excercise 2 Result:', isAdult(21));

// Excercise 3: isCharAVowel()

const vowel = ['a', 'e' ,'i', 'o', 'u']

function isCharAVowel(letter) {
    for (let i=0;i < vowel.length; i++){
    if (letter === vowel[i]) {
        return true
    }}
    return true
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

// Excercise 4: generateEmail()

function generateEmail(name, domain) {
    return name + domain
}


console.log('Excercise 4 Result:', generateEmail("johnsmith", "example.com"))

// Excercise 5: greetUser()

function greetUser(name, time) {
    return 'Good ' + time + ', ' + name + "!"
}

console.log('Excercise 5 Result:', greetUser("Sam", "morning"));

// Excercise 6: reverseString()

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Excercise 6 Result:", reverseString("rockstar"));

// Excercise 7: checkPalindrome()

function checkPalindrome(str) {
    const reverseString = str.split('').reverse().join('');
    if(str === reverseString)
        return true;
    else
    return false;
}


console.log('Excercise 7 Result:', checkPalindrome("radar"))

// Excercise 8: maxOfThree()

function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3)
;}

 console.log('Excercise 8 Result:', maxOfThree(5, 10, 8));

 // Excercise 9: calculateTip()

 const calculateTip = (billAmount, tipPercentage) => {
    return billAmount * (tipPercentage/100) 
 }

 console.log('Excercise 9 Result:', calculateTip(50, 20));

 //  Excercise 10: convertTemperature()

 function convertTemperature(tempNum, tempLetter) {
    if (tempLetter === "C") {
        return (tempNum * 1.8) + 32 + " (Fahrenheit)";
    }
    else if (tempLetter === "F") {
        return (tempNum - 32) / 1.8 + " (Celsius)";
    }
 }


 console.log('Excercise 10 Result:', convertTemperature(32, "C"));

