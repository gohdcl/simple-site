$(document).ready(
  function() {
    var stringArray = [ "You get a cat!", "You get a dog!", "You get a bird!", "You get a penguin!" ];

    function randomString(array) {
      return array[Math.floor(Math.random() * (array.length))];
    } // end randomString

    $("#joke, #quote").on("click", function() {
        var url = $(this).attr("id");
        $.get(url, function(response) {
            var resText;

            if (typeof response === "object") {
              resText = response.setup + " : " + response.punchline;
            } /* end if */ else {
              resText = response;
            } // end else
             $("#ajax-text").text(resText);
            } // end function
          ); // end $.get
        // Display a random string in the array stringArray
        // $("#string").text(randomString(stringArray));
      } // end function
    ); // end .on

    $("#getCat").on("click", function() { // on clicking the getCat button
        $.get("cat", function(response) { // use jQuery $.get function with path cat
            resText = "Name: " + response.name + " color: " + response.color // set response text to a variable
            $("#ajax-text").text(resText); // change the ajax-text paragraph's text to resText
          } // end function
        ); // end .get
      } // end function
    ); // end .on
  } // end wrapper function
); // end .ready
