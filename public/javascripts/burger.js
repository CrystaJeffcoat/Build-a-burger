$(function() {
  $("#submitBtn").on("submit", function(event) {
    event.preventDefault();
    // check if value is empty
   if(!$("#new-burger").val().length) {
     return;
   } else {
      let burger = {
        burger_name: "'" + $("#new-burger").val() + "'",
        consumed: false
      }
      // api call to post new burger
      $.ajax("/api/burgers", {
        type: "POST",
        data: burger
      }).then(
        function() {
          console.log("created new burger!");
          location.reload();
        }
      );
    }
  });

  $(".eat-burger").click(function() {
    let id = $(this).attr("data-id");

    let burger = {
      consumed: true
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burger
    }).then(
      function() {
        console.log("updated burger!");
        location.reload();
      }
    );
  });
});