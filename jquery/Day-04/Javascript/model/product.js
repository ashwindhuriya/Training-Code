class Product {
  set productName(productName) {
    this._productName = productName;
  }

  set brandName(brandName) {
    this._brandName = brandName;
  }

  set price(price) {
    this._price = price;
  }

  set stock(stock) {
    this._stock = stock;
  }

  set productDesc(productDesc) {
    this._productDesc = productDesc;
  }

  set productImg(productImg) {
    this._productImg = productImg;
  }

  set id(id) {
    this._id = id;
  }

  get productName() {
    return this._productName;
  }

  get brandName() {
    return this._brandName;
  }

  get price() {
    return this._price;
  }

  get stock() {
    return this._stock;
  }

  get productDesc() {
    return this._productDesc;
  }

  get productImg() {
    return this._productImg
  }

  get id() {
    return this._id;
  }
}

export default Product;
