import test from 'ava'
import { solution } from '.';

const inputs:number[] = [
  10,
  2000000
]

const outputs = [
  17,
  142913828922
]

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t => t.deepEqual(solution(input), outputs[index]))
})