function number_format(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function () {
  getProducts();
});

function getProducts() {
  var product_list = $("#product-list");
  var html = "";
  var myProducts = [];
  $.ajax({
    url: "products.json",
    success: function (result) {
      if (myProducts.length == 0) {
        myProducts = result["products"];
      }
      html += '<div class="row">';
      $.each(myProducts, function (k, v) {
        html += '<div class="col-md-4 mb-3">';
        html += '<div class="card">';
        html += '<img class="card-img-top" src="products/' + v["image"] + '" alt="Card image cap">';
        html += '<div class="card-body">';
        html += '<h5 class="card-text">' + v["code"] + "</h5>";
        html += '<p class="card-title">' + v["name"] + "</p>";
        html += '<p class="card-text float-start"><small><span class="badge bg-primary">Rp. ' + number_format(v["price"]) + "</span></small></p>";
        html += '<p class="float-end fw-bold"><small>' + number_format(v["stock"]) + " Pack</small></p>";

        html += '<div class="input-group">';
        html += '<input type="text" class="form-control" id="' + v["code"] + '">';
        html += '<button class="btn btn-outline-secondary" type="button" id="bt_' + v["code"] + '"><i class="fa-solid fa-cart-arrow-down"></i></button>';
        html += "</div>";

        html += "</div>";
        html += "</div>";
        html += "</div>";
      });
      html += "</div>";
      product_list.html(html);
    },
  });
}
