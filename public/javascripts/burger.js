$(function() {
  $("#submitBtn").on("submit", function(event) {
    event.preventDefault();

    let burger = $("#new-burger").val().trim();

    $.ajax("/api/burgers", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger!");
        location.reload();
      }
    );
  });

  //new button
});