import CustomerService from "../service/customerService.js";

$(document).ready(function() {
    $(document).on('click', '.delete_prod', function() {
        let id = $(this).attr("productId");
        console.log("ID: ", id);

        CustomerService.deleteProductDetails(id).then(res => {
            window.location.href="../../HTML/productDetails.html";
        }).catch(error => {
            window.location.href="../../HTML/productDetails.html";
        })
    })
})

