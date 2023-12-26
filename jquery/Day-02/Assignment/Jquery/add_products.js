$(document).ready(function () {
  $(".add_product").click(() => {
    let pro_name = $("#pro_name").val();
    let brand_name = $("#brand_name").val();
    let price = $("#price").val();
    let prod_availability = $("#prod_availability").val();
    let prod_desc = $("#prod_desc").val();
    let prod_image = $("#prod_image").val();
    axios
      .post("http://localhost:3000/products", {
        pro_name,
        brand_name,
        price,
        prod_availability,
        prod_desc,
        prod_image,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  //
});
