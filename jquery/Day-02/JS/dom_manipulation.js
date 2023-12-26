$(document).ready(function () {
  $(".image_div").hover(function () {
    // $(this).css({ height: "350px", width: "350px", opacity: "0.4" });
    // $(this).animate(
    //   { height: "350px", width: "350px", opacity: "0.4" },
    //   3000,
    //   "swing",
    //   () => {
    //     console.log("Animate Completed");
    //   }
    // );
    $(this).animate(
      { height: "350px", width: "350px", opacity: "1" },
      {
        duration: 3000,
        easing: "linear",
        complete: function () {
          if ($(".img_info").length === 0) {
            $("body").append(
              "<div class='img_info'><h3>Gojo Satoru</h3></div>"
            );
            // $("body").prepend(
            //   "<div class='img_info'><h3>Gojo Satoru</h3></div>"
            // );
            // SIMIALRLY WE CAN DO AFTER. THAT WILL AD THE ELEMENT AFTER THE BODY TAG(since we ae doing $("body").after())
            // $(".img_info").text("Infinite Void Domain Expansion");
            $(".img_info").html("<h1>Infinite Void Domain Expansion</h1>");
            $(".image_div").remove(); // Remove Selected Elements
            $(".img_info").empty(); // REMOVES ALL CHILD ELEMENTS
          }
        },
      }
    );
  });
  $(".user_name").val();
  //   SEETING VALUE INITIALLY ONLY
  //   $(".user_name").val("Chinmay Rele");
});
