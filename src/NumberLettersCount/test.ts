import test from 'ava'
import { solution } from '.'

const inputs: number[] = [1, 2, 11, 19]

const outputs = ['one', 'two', 'eleven', 'nineteen']

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t =>
    t.deepEqual(solution(input), outputs[index]))
})
