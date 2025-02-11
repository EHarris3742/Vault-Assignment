/* console.log and alert functions are used to display the message in the console and in an alert from the string */
const string = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:'
console.log(string)
alert(string)

/* The following code is used to display the sum of two numbers in the console and in an alert */

// The following code shows the mathematical equation that will add up to the first digit of the lock which is 10.

const x = 9
const y = 1
console.log(x + y)
/* alert(x + y) */
const result1 = x + y

// The following code shows the mathematical equation that will add up to the second digit of the lock which is 40.

const b = 45
const c = 5
console.log(b - c)
// alert(b-c)
const result2 = b - c

// The following code shows the mathematical equation that will add up to the third digit of the lock which is 39.

const d = 13
const e = 3
console.log(d * e)
// alert(d * e)   
const result3 = d * e

// The following code uses tempLit to reference results 1,2, and 3 and displays them in a confirm alert, showing the combination to the vault

const tempLit = `The first digit is ${result1}, the second digit will be ${result2}, and the third digit will be ${result3}.`
confirm(tempLit)