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
