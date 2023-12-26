import AppStrings from "../../constants/app_strings.js";

class CustomerService {
  //static url = "http://localhost:3000/customers";
  static async addCustomerDetails(customer) {
    //post
    return await axios.post(
      `${AppStrings.BASE_URL}/${AppStrings.CUSTOMER_ENDPOINT}`,
      customer
    );
  }

  static async getCustomerDetails() {
    // get
    const res = await axios.get(
      `${AppStrings.BASE_URL}/${AppStrings.CUSTOMER_ENDPOINT}`
    );
    return res?.data;
  }

  static async addProductDetails(product) {
    //post
    console.log(`${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}`);
    return await axios.post(
      `${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}`,
      product
    );
  }

  static async getProductDetails() {
    // get
    const res = await axios.get(
      `${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}`
    );

    console.log("RES DATA RETURN GET: ", res?.data);
    return res?.data;
  }

  static async deleteProductDetails(id) {
    return await axios.delete(
      `${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}/${id}`
    );
  }

  static async getSingleProductDetails(id) {
    const res = await axios.get(
      `${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}/${id}`
    );
    
    return res?.data;
  }

  static async updateProductDetails(id, productInfo) {
    return await axios.put(
      `${AppStrings.BASE_URL}/${AppStrings.PRODUCT_ENDPOINT}/${id}`, productInfo
    );
  }
}

export default CustomerService;
