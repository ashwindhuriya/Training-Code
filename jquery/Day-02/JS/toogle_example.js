$(document).ready(function () {
  $(".heading").click(function () {
    $(".emp_details").toggle(2000, () => {
      console.log("THIS IS THE CALLBACK FUNCTION HERE!!!!!!!!");
    });
  });
});
