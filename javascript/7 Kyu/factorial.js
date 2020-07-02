function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError('n is below 0 or above 12')
  } else if (n == 0) {
    return 1
  } else {
    return (n * factorial(n - 1))
  }
}