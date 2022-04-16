// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

let primeNumbers = []

function isPrime(input: number) {
  let prime = true
  for (let i = 0; i < primeNumbers.length; i++) {
    const item = primeNumbers[i]
    if (input % item === 0) {
      prime = false
      break;
    }    
  }
  if (prime) {
    primeNumbers.push(input)
  }
  return prime
}

export function solution (input) {
  let sum = 0
  primeNumbers = []
  for (let i = 2; i < input; i++) {
    if (isPrime(i)) {
      sum = sum + i
    }
  }
  return sum
}