// Disemvowel Trolls - 7 Kyu

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  const strSplit = str.split('')
  return strSplit.map(character => {
    if (/[aeiouAEIOU]/.test(character)) {
      character = ''
    } else {
      return character 
    }
  }).join('')
  return str
}

disemvowel('This website is for losers LOL!')