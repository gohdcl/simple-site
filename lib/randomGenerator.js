module.exports = function() {
  var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish." },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." }
  ]; // end jokes

  var quotes = [ "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison.", "No matter where you go, there you are. ", "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D" ];

  function randomString(array) {
    return array[Math.floor(Math.random() * (array.length))];
  } // end randomString
};
