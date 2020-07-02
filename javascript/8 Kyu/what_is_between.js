// What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  const firstInt = a
  const secondInt = b
  const thisArray = []
  if (a < b) {
    for (let i = firstInt; i <= secondInt; i++) {
      thisArray.push(a)
      a++
    }
  }
  return thisArray
}