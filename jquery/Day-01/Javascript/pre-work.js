function abc() {
  console.log("ABC Function!!!");
}

function xyz(p) {
  p();
}

xyz(function abc() {
  console.log("ABC Function!!!");
});
