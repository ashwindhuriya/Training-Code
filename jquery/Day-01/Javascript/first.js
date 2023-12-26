$(document).ready(function () {
  console.log("Hello World!");

  // JQuery Selectors --
  // Class Selectors
  // Id Selector

  $(".first_div").click(function () {
    console.log("Click of div");
    // $(this).hide();
    $(".first_div").hide();
  });

  $("#artist_meet_header").click(function () {
    $("#artist_meet_body").hide(5000, function () {
      $("#artist_meet_body").show(5000, function () {
        $(".container").css({
          border: "2px solid crimson",
          "background-color": "lightseagreen",
          padding: "10px",
        });
      });
    });
  });
});
