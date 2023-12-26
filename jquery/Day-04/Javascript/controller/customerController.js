import Customer from "../model/customer.js";
import CustomerService from "../service/customerService.js";

$(document).ready(function () {
  $(".add_customer").click(function () {
    let name = $("#cust_name").val();
    let email = $("#cust_email").val();
    let address = $("#cust_address").val();
    let contact_no = $("#cust_contact").val();
    let gender = "";
    let dob = $("#cust_dob").val();
    if ($("#male").is(":checked")) {
      gender = $("#male").val();
    } else if ($("#female").is(":checked")) {
      gender = $("#female").val();
    }

    // create object of customer model(class)
    let customer_obj = new Customer();
    customer_obj.customerName = name;
    customer_obj.customerEmail = email;
    customer_obj.customerAddress = address;
    customer_obj.customerContact = contact_no;
    customer_obj.customerGender = gender;
    customer_obj.customerDOB = dob;

    CustomerService.addCustomerDetails(customer_obj)
      .then((res) => {
        console.log(res);
        
      })
      .catch((error) => console.log(error));
  });
});
