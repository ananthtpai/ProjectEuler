import test from 'ava'
import { solution } from '.';


const inputs:number[][][] = [
  [
    [ 1, 1],
    [ 1, 5]
  ],
]

const outputs = [
  5,
]

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t => t.deepEqual(solution(input), outputs[index]))
})