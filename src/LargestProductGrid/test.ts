import test from 'ava'
import { solution } from '.'

import { largeData, largeData2 } from './data'

const inputs: number[][][] = [
  [
    [5, 1, 1, 5],
    [1, 5, 1, 5],
    [1, 5, 1, 5],
    [1, 5, 1, 5],
  ],
  largeData,
  largeData2,
]

const outputs = [625, 70600674, 73812150]

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t => {
    t.deepEqual(solution(input), outputs[index])
  })
})
