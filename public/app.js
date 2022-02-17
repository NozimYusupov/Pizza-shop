function something() {
  var x = window.localStorage.getItem('bbb');
  x = x * 1 + 1;
  window.localStorage.setItem('bbb', x);
  alert(x);
}

function addToCart(id) {
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
  updateOrdersInput();
}

function cartGetNumberOfItems() {
  var cnt = 0;
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    var value = window.localStorage.getItem(key);

    if (key.indexOf('product_') == 0) {
      cnt = cnt + value*1;
    }
  }
  return cnt;
}

function updateOrdersInput() {
  var orders = cartGetOrders();

  $('#orders_input').val(orders);
}

function cartGetOrders() {
  var orders = '';
  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    var value = window.localStorage.getItem(key);

    if (key.indexOf('product_') == 0) {
      orders = orders + key + '=' + value + ',';
    }
  }
  return orders;
}
