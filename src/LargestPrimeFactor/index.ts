/**
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 *
 */
function maxPrimeFactor(n: number) {
  let maxPrime = -1
  while (n % 2 == 0) {
    n = n / 2
    maxPrime = 2
  }

  while (n % 3 == 0) {
    n = n / 3
    maxPrime = 3
  }
  for (let i = 5; i <= Math.sqrt(n); i += 1) {
    while (n % i == 0) {
      maxPrime = i
      n = n / i
    }
  }
  maxPrime = n

  return maxPrime
}

export function solution(input: number) {
  return maxPrimeFactor(input)
}

console.log(solution(600851475143))
