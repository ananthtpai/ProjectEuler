/**
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function sumOfNNumbers (input: number, range: number) {
  const n = Math.floor((range - 1)/input)
  const output =  input * (n * (n + 1))/2
  return output
}

export function solution (input1: number, input2: number, range: number) {
  const output1 = sumOfNNumbers(input1, range)
  const output2 = sumOfNNumbers(input2, range)
  const output3 = sumOfNNumbers(input1 * input2, range)

  const output = output1 + output2 - output3 
  return output
}