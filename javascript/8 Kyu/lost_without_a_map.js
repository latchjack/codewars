// Beginner - Lost Without a Map - 8 Kyu

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x){
  const timesTwo = x.map(number => {
    return number * 2
  })
  return timesTwo
}