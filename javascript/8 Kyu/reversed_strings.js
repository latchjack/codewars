// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
  const strArr = str.split('').reverse().join('')
  return strArr
}