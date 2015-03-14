module.exports = function piglatinify(word) {
  var wordArray = word.split("");
  var letters = [];
  var changedWord;
  // is my first letter a vowel?
  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  } // end if

  // else it starts with a consonant
  while(!vowelHash.hasOwnProperty(wordArray[0])) {
    letters.push(wordArray.shift());
  } // end while
  changedWord = wordArray.join("") + "-" + letters.join("") + "ay";
  return changedWord;
}; // end piglatinify
