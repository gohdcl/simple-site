module.exports = function() {
  var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." }
  ]; // end jokes

  function randomString(array) {
    return array[Math.floor(Math.random() * (array.length))];
  } // end randomString

  return randomString(jokes);
};
