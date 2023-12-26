import Product from "../model/product.js";
import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  $(".add_product").click(function () {
    let pname = $("#pro_name").val();
    let bname = $("#brand_name").val();
    let price = $("#price").val();
    let stock = $("#prod_availability").val();
    let description = $("#prod_desc").val();
    let image = $('#prod_image').val();

    // create object of customer model(class)
    let product_obj = new Product();
    product_obj.productName = pname;
    product_obj.brandName = bname;
    product_obj.price = price;
    product_obj.stock = stock;
    product_obj.productDesc = description;
    product_obj.productImg = image;

    // console.log(product_obj);

    CustomerService.addProductDetails(product_obj)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  });
});
