function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
function addToCart(btn) {
  console.log("clicked");
  btn.style.display='none';
  var addedToCart = document.getElementById('added-to-cart');
  addedToCart.innerHTML = 'Đã thêm vào giỏ hàng';
}