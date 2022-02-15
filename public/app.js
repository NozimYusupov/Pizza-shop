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

