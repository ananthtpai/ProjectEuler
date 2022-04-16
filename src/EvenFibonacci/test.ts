import test from 'ava'
import { solution } from '.';


const inputs:number[] = [
  4000000,
]

const outputs = [
  4613732
]

inputs.forEach((input, index) => {
  test(`testing input ${index}`, t => t.deepEqual(solution(input), outputs[index]))
})