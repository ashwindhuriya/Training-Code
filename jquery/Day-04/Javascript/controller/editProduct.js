import Product from "../model/product.js";
import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  const getQueryParam = (query) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(query);
  };

  const productId = getQueryParam("productId");

  console.log(productId);

  let prev_image = "";

  CustomerService.getSingleProductDetails(productId).then((res) => {
    // console.log(res);
    $("#pro_name").val(res._productName);
    $("#brand_name").val(res._brandName);
    $("#price").val(res._price);
    $("#prod_availability").val(res._stock);
    $("#prod_desc").val(res._productDesc);
    // $("#prod_image").val(
    //   res._productImg.replace("C:\\fakepath\\", "../assets/")
    // );
    prev_image = res._productImg;

    console.log(prev_image);

    $(document).on("click", ".edit_product", function () {
      let pname = $("#pro_name").val();
      let bname = $("#brand_name").val();
      let price = $("#price").val();
      let stock = $("#prod_availability").val();
      let description = $("#prod_desc").val();
      let image = $("#prod_image").val();

      // if(image)
      // {
      //     console.log("true");
      // }
      // else
      // {
      //     console.log("false");
      // }

      // create object of customer model(class)
      let product_obj = new Product();
      product_obj.productName = pname;
      product_obj.brandName = bname;
      product_obj.price = price;
      product_obj.stock = stock;
      product_obj.productDesc = description;
      // product_obj.productImg = image;
      if (image) {
        console.log(image);
        product_obj.productImg = image;
      } else {
        console.log("false");
        product_obj.productImg = prev_image;
      }

      CustomerService.updateProductDetails(productId, product_obj)
        .then((res) => {
          window.location.href = "../HTML/productDetails.html";
        })
        .catch((error) => console.log(error));
    });
  });
});
