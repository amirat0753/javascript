// String Manipulation Functions:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test
console.log(reverseString("hello")); 

function countCharacters(str) {
    return str.length;
}

// Test
console.log(countCharacters("hello"));

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Test
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Array Functions:
// Find Maximum and Minimum:
function findMax(arr) {
    return Math.max(...arr);
}


function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions:

// Factorial Function:

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
console.log(factorial(5));

// Prime Number Check Function:

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(11)); // Outputs: true
console.log(isPrime(15)); // Outputs: false

// Fibonacci Sequence Function:
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacci(10)); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

