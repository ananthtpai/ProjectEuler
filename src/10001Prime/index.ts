let primeNumbers = []

function isPrime(input) {
  let prime = true
  for (let i = 0; i < primeNumbers.length; i++) {
    const item = primeNumbers[i]
    if (input % item === 0) {
      prime = false
      break
    }
  }
  if (prime) {
    primeNumbers.push(input)
  }
  return prime
}

export function solution(input) {
  let i = 2
  primeNumbers = []
  while (primeNumbers.length < input) {
    isPrime(i)
    i++
  }
  return primeNumbers[primeNumbers.length - 1]
}

console.log(solution(10001))
