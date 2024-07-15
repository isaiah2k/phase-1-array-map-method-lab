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
// Creates a function to capatalize the first letter of every word in each string
const titleCased = () =>
 // Uses map to iterate over each tutorial in the array
tutorials.map(tutorial =>
  // Splits each tutorial string into an array of words
  tutorial.split(' ')
    // Uses map to iterate over each word in the array of words
    .map(word =>
      // Capitalizes the first letter of each word and combines it with the rest of the word
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    // Joins the array of title cased words back into a single string
    .join(' ')
)