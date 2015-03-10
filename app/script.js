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
      $.post("piglatin", name, function (response) {
        var piglatinified = response.firstname + " " + response.lastname;
        $("#piglatinified").text(piglatinified);
        console.log(name);
      });
    });


  } // end wrapper function
); // end .ready
