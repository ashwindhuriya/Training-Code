import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  $(document).on("click", ".edit_prod", function () {
    let id = $(this).attr("productId");
    console.log("ID: ", id);

    window.location.href=`../HTML/editProduct.html?productId=${id}`;
    // CustomerService.editProductDetails(id)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // window.location.href="../../HTML/productDetails.html";
    //   });
  });
});
