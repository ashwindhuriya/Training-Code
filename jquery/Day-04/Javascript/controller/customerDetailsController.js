import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  CustomerService.getCustomerDetails()
    .then((res) => {
      console.log(res);
      $(".cust_info").html("<table class='cust_table'></table>");
      $(".cust_table").html(
        "<tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th><th>Address</th><th>Date of Birth</th><th>Contact Number</th></tr>"
      );
      let customers = res;
      for (let cust of customers) {
        let row = `<tr><th>${cust.id}</th><th>${cust._customerName}</th><th>${cust._email}</th><th>${cust._gender}</th><th>${cust._address}</th><th>${cust._dob}</th><th>${cust._contact}</th></tr>`;

        $(".cust_table").append(row);
      }
    })
    .catch((error) => console.log(error));
});
