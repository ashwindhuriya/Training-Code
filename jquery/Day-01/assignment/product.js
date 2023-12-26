$(document).ready(function () {
  $(".add_product").click(function () {
    let product_name = $("#pro_name").val();
    let brand_name = $("#brand_name").val();
    let price = $("#price").val();

    let result = `<h3> Proiduct Name: ${product_name} </h3>
    <h3>Brand Name: ${brand_name}</h3>
    <h3>Price: ${price}</h3>
    `;

    $(".result").val("frtydfhfg");
    // console.log(result);
  });
});
