document.addEventListener("DOMContentLoaded", getProducts, false);

function getProducts() {
  var product_list = document.querySelector("#product-list");
  var html = "";
  html += "<h5> Load This After Ready </h5>";

  product_list.html(html);
}
