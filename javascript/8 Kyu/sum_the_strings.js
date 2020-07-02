// Sum The Strings

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"

// If either input is an empty string, consider it as zero.

function sumStr(a,b) {
  const nothing = 0
  if (a === '' && b === '') {
    return nothing.toString()
  } else if (a === '') {
    return b.toString()
  } else if (b === '') {
    return a.toString()
  } else {
    const add = parseInt(a) + parseInt(b)
    return add.toString()
  }
}