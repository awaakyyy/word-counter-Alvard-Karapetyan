const countSentences = (text) => {
  let myArray = text.split('')
  myArray = myArray.filter(text => text === '?' || text === '!' || text === '.')
  return myArray.length
}

const countWords = (text) => {
  let trimmed = text.replace(/\s+/g, ' ').trim();
  let textArray = trimmed.split(' ');
  let numOfWords = textArray.length;
  if (textArray[0] == '') {
    textArray = 0
  }
  return numOfWords;
}

const countLetters = (text) => {
  let myArray = text.split('')
  myArray = myArray.filter(text => text !== ' ' && text !== '?' && text !== '!' && text !== '.' && text !== "'")
  return myArray.length
}

function handleCounter(event) {
  event.preventDefault();
  let text = document.getElementById('textarea').value;

  let selectedCountOption = document.querySelector('input[name="countOption"]:checked').value;
  let count = 0;

  if (selectedCountOption === 'sentences') {
    count = countSentences(text);
  } else if (selectedCountOption === 'words') {
    count = countWords(text);
  } else if (selectedCountOption === 'letters') {
    count = countLetters(text);
  }

  document.getElementById('wordCount').textContent = `The result is ${count}`;
}





