function isAnagram(test, original) {
  const testleng = test.split('')
  const origleng = original.split('')
  console.log(testleng, origleng)
  if (testleng.length !== origleng.length) {
    return false
  } else {
    const firstWord = test.toLowerCase()
    const secWord = original.toLowerCase()
    // console.log(firstWord, secWord)
    const charMapA = getCharMap(firstWord)
    const charMapB = getCharMap(secWord)

    for (const char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
        return false
      }
    }
    return true
  }
}
function getCharMap(string) {
  const charMap = {}
  for (const char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
