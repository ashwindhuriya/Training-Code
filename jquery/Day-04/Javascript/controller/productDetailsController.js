import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  CustomerService.getProductDetails()
    .then((res) => {
      console.log(res);

      let products = [...res];

      $(".pro_info").html("");

      for (let product of products) {
        let row = `<div class='card'>
                    <div class='image'>
                    <img src='${product._productImg.replace(
                      "C:\\fakepath\\",
                      "../assets/"
                    )}' alt="Image">
                    </div>
                    <div class='info'>
                    <strong>Product Name:</strong>${` ${product._productName}`}<br>
                    <strong>Brand Name:</strong>${` ${product._brandName}`}<br>
                    <strong>Price:</strong>${` ${product._price}`}<br>
                    <strong>Product Description:</strong>${
                      ` ${product._productDesc}`
                    }<br>
                    </div>
                    <div>
                    <button class="edit_prod" productId=${
                      product.id
                    }>Edit</button>
                    <button class="delete_prod" productId=${
                      product.id
                    }>Delete</button>
                    </div>
                </div><br>
            `;

        $(".pro_info").append(row);
      }

      // for (let pro of products) {
      //   let row = `<div class="card">${pro.id}${pro._productName}${pro._brandName}${pro._price}${pro._stock}${pro._productDesc}</div>`;
      //   console.log("ROW DATA: ", row);
      //   $(".pro_info").append(row);
      // }
    })
    .catch((error) => console.log(error));
});
