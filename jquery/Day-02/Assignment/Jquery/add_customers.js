$(document).ready(function () {
  $(".add_customer").click(() => {
    let name = $("#cust_name").val();
    let email = $("#cust_email").val();
    let password = $("#cust_password").val();
    let dob = $("#cust_dob").val();
    let address = $("#cust_address").val();
    let gender = "";
    let contactNo = $("#cust_contact").val();
    if ($("#male").is(":checked")) {
      gender = $("#male").val();
      //   console.log($("#male").is(":checked"));
    } else if ($("#female").is(":checked")) {
      gender = $("#male").val();
      //   console.log($("#female").val());
    }
    axios
      .post("http://localhost:3000/customers", {
        customer_name: name,
        password: password,
        gender: gender,
        email: email,
        address: address,
        date_of_birth: dob,
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
