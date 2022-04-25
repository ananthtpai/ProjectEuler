const numberMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
}

export function solution(number) {
  if (number === 1000) {
    return 'onethousand'
  }
  let temp = number
  let count = 0
  let words = ''
  while (temp != 0) {
    const remainder = temp % 10
    const tensDigit = temp % 100
    if (numberMap[tensDigit] && count === 0) {
      // console.log('1')
      words = (numberMap[tensDigit] || '') + words
      temp = Math.floor(temp / 100)
      count = count + 2
    } else if (count === 0) {
      // console.log('2', remainder, numberMap[remainder])
      words = (numberMap[remainder] || '') + words
      temp = Math.floor(temp / 10)
      count = count + 1
    } else if (count === 1) {
      words = (numberMap[remainder * Math.pow(10, count)] || '') + words
      temp = Math.floor(temp / 10)
      count = count + 1
    } else if (count === 2) {
      words =
        (numberMap[remainder] || '') + 'hundred' + (words ? 'and' : '') + words
      temp = Math.floor(temp / 10)
      count = count + 1
    }
  }
  return words
}
