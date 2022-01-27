import test from 'ava'
import { solution } from '.';


const inputs:[number, number, number][] = [
  [ 3, 5, 10],
  [ 3, 5, 1000]
]

const outputs = [
  23,
  233168
]

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t => t.deepEqual(solution(...input), outputs[index]))
})