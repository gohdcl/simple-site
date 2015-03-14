$(document).ready(
  function() {
    $("#piglatin").on("submit", function(e) {
      e.preventDefault(); // keeps jQuery from refreshing the page after submission

      var firstname = $("input[name=firstname]").val();
      var lastname = $("input[name=lastname]").val();
      var name = { firstname: firstname, lastname: lastname };

      // POST request
      // first argument: route name, second argument: data being sent
      // third argument: callback function
      $.post("piglatin", name, function(response) {
        var piglatinified = response.firstname + " " + response.lastname;
        $("#piglatinified").text(piglatinified);
      }); // end .post
    }); // end .on

    $("#append-cat").on("submit", function(e){
      e.preventDefault();
      var userInput = $("input[name=catstring]").val();
      var jsonSentence = { userInput: userInput };

      $.post("append-cat", jsonSentence, function(response) {
        $("#catified").text(response);
      }); // end .post
    }); // end .on

    $("#joke, #quote").on("click", function() {
      var url = $(this).attr("id");
      $.get(url, function(response) {
        var responseText;
        if (typeof response === "object") {
          responseText = response.setup + " : " + response.punchline;
        } /* end if */ else {
          responseText = response;
        } // end else
        $("#ajax-text").text(responseText);
      }); // end .get
    }); // end .on

    $("#cat").on("click", function() {
      $.get("cat", function(response) {
        $("#ajax-text").text("Name: " + response.name + " Color: " + response.color);
      }); // end .get
    }); // end .on
  } // end wrapper function
); // end .ready
