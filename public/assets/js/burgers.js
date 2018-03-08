// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // eat a burger
  $(".change-devour").on("click", function(event) {
    console.log("Eat a burger button clicked");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // add a burger
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Add a burger button clicked");

    var newBurger = {
      burger_name: $("#new_burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
