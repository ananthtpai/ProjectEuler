function isPalindromeNumber(input: number) {
  let temp = input
  let reverseNumber = 0
  while (temp > 0) {
    reverseNumber = reverseNumber * 10 + (temp % 10)
    temp = Math.floor(temp / 10)
  }
  return input === reverseNumber
}

/**
 *
 * @param input number of digits
 * @return largest palindrome product
 */
export function solution(input: number) {
  const range = Math.pow(10, input)
  let largestPalindromeProduct = -1
  let numbers = []
  for (let i = 0; i < range; i++) {
    for (let j = 0; j < range; j++) {
      const product = i * j
      if (isPalindromeNumber(product) && product > largestPalindromeProduct) {
        largestPalindromeProduct = product
        numbers = [i, j]
      }
    }
  }
  console.log(numbers)
  return largestPalindromeProduct
}

console.log(solution(3))
