const countSentences = (text) => {
  let myArray = text.split('')
  myArray = myArray.filter(text => text === '?' || text === '!' || text === '.')
  return myArray.length
}

const countWords = (text) => {
  let myArray = text.split(' ')
  return myArray.length
}

const countLetters = (text) => {
  let myArray = text.split('')
  myArray = myArray.filter(text => text !== ' ' && text !== '?' && text !== '!' && text !== '.' && text !== "'")
  return myArray.length
}