const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let finalArray = []
  let oldArray = tutorials;
  for (let i = 0; i < tutorials.length; i++) {
    let splitWords = oldArray[i].split(' ');
    let splitCapitalWords = splitWords.map(letterGrabberCapper);
    let jointCapitalWords = splitCapitalWords.join(' ');
    finalArray.push(jointCapitalWords)
  }
  return finalArray

  function letterGrabberCapper (element) {
    return `${element.charAt(0).toUpperCase()}` + `${element.slice(1)}`
  }
}
