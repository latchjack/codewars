function derive(coefficient,exponent) {
  const nums = coefficient * exponent
  return nums + 'x\^' + (exponent - 1)
}