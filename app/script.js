$(document).ready(
  function() {
    var stringArray = [ "A cat!", "A dog!", "A bird!", "A penguin!" ];

    function randomString(array) {
      return array[Math.floor(Math.random() * (array.length))];
    } // end randomString

  $("#generate").on("click", function() {
        $("#string").empty(); // clear the div

        // Display a random string in the array stringArray
        $("#string").append(randomString(stringArray));
      } // end function
    ); // end .on
  } // end wrapper function
); // end .ready
